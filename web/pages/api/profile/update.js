import { PrismaClient } from '@prisma/client';

export default async function (req, res) {
  const prisma = new PrismaClient();

  try {
    const data = req.body;
    const userData = JSON.parse(data);
    const user = await prisma.user.update({
      where: { id: userData.user.id },
      data: {
        name: userData.user.name,
        email: userData.user.email,
        image: userData.user.image,
      },
    });
    console.log(userData.user.name);
    res.status(201);
    res.json({ data: user });
  } catch (e) {
    res.status(500);
    console.error(e);
    res.json({ error: 'Sorry went wrong' });
  } finally {
    await prisma.$disconnect();
  }
}
