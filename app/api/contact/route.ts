import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const response = await resend.emails.send({
      // from: "no-reply@qldecor.com", // najlepiej własna domena z DKIM/SPF
      from: "onboarding@resend.dev",// najlepiej własna domena z DKIM/SPF
      to: "seyco.eu@gmail.com", // na razie testuj na mail przypisany do Resend
      subject: `Nowa wiadomość z formularza od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend response:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
