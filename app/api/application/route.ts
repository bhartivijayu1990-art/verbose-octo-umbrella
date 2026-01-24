import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      email,
      city,
      experience,
      services,
      message,
    } = data;

    const text = `
🌿 *New Therapist Application*

👤 Name: ${name}
📞 Phone: +91 ${phone}
📧 Email: ${email}
🏙️ City: ${city}
🧠 Experience: ${experience} years

💆 Services:
${services}

⭐ Why should we hire them?
${message}

🕒 ${new Date().toLocaleString()}
    `;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram API error:", err);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application Telegram Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
