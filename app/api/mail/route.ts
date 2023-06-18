import sendgrid from "@sendgrid/mail";
import { type NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();
    await sendgrid.send({
      from: "wojciech.szpila.dev@gmail.com",
      to: "wojciech.szpila.dev@gmail.com",
      subject: "Wiadomość przesłana przez formularz kontaktowy od: " + res.name,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>Wiadomość od użytkownika: ${res.name}</h3>
            <h3>Email do odpowiadania: ${res.email}</h3>
            <div style="font-size: 16px;">
                <p>Treść:</p>
                <p>${res.message}</p>
            </div>
        </div>
      </body>
      </html>`,
    });

    return NextResponse.json(
      { message: "success", status: "ok" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "error",
        status: "fail",
      },
      { status: 400 }
    );
  }
}
