import { prisma } from "../config/db.js";

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, createdAt: true }
    });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve profile" });
  }
};