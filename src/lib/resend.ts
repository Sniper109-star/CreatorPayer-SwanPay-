import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  return resend.emails.send({
    from: params.from || process.env.RESEND_FROM || "CreatorPay <onboarding@resend.dev>",
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}
