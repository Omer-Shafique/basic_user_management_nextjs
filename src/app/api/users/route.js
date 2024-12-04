import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const users = await prisma.user.findMany();
      return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  


export async function POST(req) {
  try {
    const { name, email } = await req.json();
    const user = await prisma.user.create({ data: { name, email } });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
