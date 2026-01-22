import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const body = await req.json();
    console.log("BODY:", body);

    const BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const CHAT_ID = process.env.TG_CHAT_ID;

    console.log("TOKEN:", BOT_TOKEN);
    console.log("CHAT ID:", CHAT_ID);

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "ENV missing" },
        { status: 500 }
      );
    }

    const text = `
NEW APPLICATION
Name: ${body.name}
Phone: +91${body.phone}
Email: ${body.email}
City: ${body.city}
Experience: ${body.experience}
Services: ${body.services}
Message: ${body.message}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    const data = await res.json();
    console.log("TELEGRAM RESPONSE:", data);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json(
      { error: "Server crash" },
      { status: 500 }
    );
  }
}
