import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, company, phone, projectType, message } = await req.json();

  try {
    const response = await resend.emails.send({
      from: "no-reply@qldecor.com",
      to: "damianjankowski111@gmail.com",
      subject: `📩 Nowa wiadomość od ${firstName} ${lastName}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${firstName}</p>
        <p><strong>Nazwisko:</strong> ${lastName}</p>
        <p><strong>Email nadawcy:</strong> ${email}</p>
        <p><strong>Firma:</strong> ${company || "-"}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Typ projektu:</strong> ${projectType || "-"}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
