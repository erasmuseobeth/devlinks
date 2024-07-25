// pages/api/links/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@lib/prisma';  // Import your PrismaClient instance

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const links = await prisma.link.findMany();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch links' });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { url, description } = req.body;
  try {
    const newLink = await prisma.link.create({
      data: { url, description },
    });
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create link' });
  }
}
