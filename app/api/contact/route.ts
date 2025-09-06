import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, company, phone, projectType, message } = await req.json();

  // 🔎 Walidacja wymaganych pól
  if (!firstName || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Brak wymaganych pól" },
      { status: 400 }
    );
  }

  try {
    const response = await resend.emails.send({
      from: "QLdecor <contact@qldecor.com>", // 👈 lepiej z nazwą
      to: "damianjankowski111@gmail.com",
      subject: `📩 Nowa wiadomość z formularza QLdecor od ${firstName} ${lastName || ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #444;">Nowa wiadomość z formularza kontaktowego QLdecor</h2>
          <p><strong>Imię:</strong> ${firstName}</p>
          <p><strong>Nazwisko:</strong> ${lastName || "-"}</p>
          <p><strong>Email nadawcy:</strong> ${email}</p>
          <p><strong>Firma:</strong> ${company || "-"}</p>
          <p><strong>Telefon:</strong> ${phone || "-"}</p>
          <p><strong>Typ projektu:</strong> ${projectType || "-"}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>Wiadomość:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #888;">
            Ta wiadomość została wysłana automatycznie z formularza na stronie 
            <a href="https://qldecor.com" style="color:#555; text-decoration:none;">qldecor.com</a>.
          </p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}