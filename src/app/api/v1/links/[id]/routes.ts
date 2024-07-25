// pages/api/links/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@lib/prisma';  // Import your PrismaClient instance

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const link = await prisma.link.findUnique({
      where: { id: Number(id) },
    });
    if (link) {
      res.status(200).json(link);
    } else {
      res.status(404).json({ error: 'Link not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch link' });
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { url, description } = req.body;
  try {
    const updatedLink = await prisma.link.update({
      where: { id: Number(id) },
      data: { url, description },
    });
    res.status(200).json(updatedLink);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update link' });
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    await prisma.link.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete link' });
  }
}
