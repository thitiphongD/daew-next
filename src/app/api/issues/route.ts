import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  des: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, des: body.des },
  });

  return NextResponse.json(newIssue, { status: 201 });
}