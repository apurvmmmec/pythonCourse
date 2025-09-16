import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 400 });

  // TODO: Integrate email (e.g., SendGrid, Postmark) or store in DB
  console.log('New enquiry:', { name, email, message });

  return NextResponse.json({ ok: true });
}
