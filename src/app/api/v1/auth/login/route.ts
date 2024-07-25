// pages/api/v1/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request', details: error.message });
  }
}
