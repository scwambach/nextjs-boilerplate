import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });
  const prisma = new PrismaClient();

  if (session) {
    try {
      res.send({
        content: 'Welcome to the secret page',
      });
    } catch (e) {
      res.status(500);
      console.error(e);
      res.json({ error: 'Sorry went wrong' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.send({
      error: 'You need to login',
    });
  }
};
