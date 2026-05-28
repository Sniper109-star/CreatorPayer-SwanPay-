import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}

export async function POST(request: NextRequest) {
  const { fid, walletAddress, username, displayName, email } = await request.json();
  
  try {
    const result = await db.insert(users).values({
      fid,
      walletAddress,
      username,
      displayName,
      email
    }).returning();
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, fid, walletAddress, username, displayName, email } = await request.json();
  
  if (!id) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 });
  }
  
  try {
    const result = await db.update(users).set({
      fid,
      walletAddress,
      username,
      displayName,
      email
    }).where(eq(users.id, id)).returning();
    return NextResponse.json(result[0] || {});
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  
  if (!id) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 });
  }
  
  try {
    await db.delete(users).where(eq(users.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}