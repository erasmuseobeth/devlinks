// pages/api/profile/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@lib/prisma';  // Import your PrismaClient instance

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId as string; // Adjust as per authentication
  try {
    const profile = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId as string; // Adjust as per authentication
  const { profilePicture, firstName, lastName, email } = req.body;
  try {
    const updatedProfile = await prisma.user.update({
      where: { id: Number(userId) },
      data: { profilePicture, firstName, lastName, email },
    });
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
}
