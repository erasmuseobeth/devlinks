// pages/api/v1/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({
      user: { id: newUser.id, email: newUser.email },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request', details: error.message });
  }
}
