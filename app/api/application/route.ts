import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      age,
      phone,
      email,
      city,
      experience,
      services,
      reason,
    } = data;

    const message = `
🌿 *New Therapist Application*

👤 Name: ${fullName}
🎂 Age: ${age}
📞 Phone: +91 ${phone}
📧 Email: ${email}
🏙️ City: ${city}
🧠 Experience: ${experience} years

💆 Services:
${services}

⭐ Why should we hire them?
${reason}

🕒 ${new Date().toLocaleString()}
    `;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application Telegram Error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
