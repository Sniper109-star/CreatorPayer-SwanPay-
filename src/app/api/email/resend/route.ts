import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, html } = body;

    if (!to || !subject || !html) {
      return NextResponse.json({ error: "Missing required fields: to, subject, html" }, { status: 400 });
    }

    const result = await sendEmail({ to, subject, html });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
