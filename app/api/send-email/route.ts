import nodemailer from "nodemailer";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  try {
    const { email, position } = await req.json();

    const subject = `Application for ${position}`;

        const templatePath = path.join(
      process.cwd(),
      "app",
      "templates",
      "email-template.txt"
    );

    let emailTemplate = await fs.readFile(templatePath, "utf-8");

    emailTemplate = emailTemplate.replace(/{{position}}/g, position);

    const htmlBody = emailTemplate
      .replace(/\n/g, "<br/>");

    const cvPath = path.join(process.cwd(), "public", "YOUR CV.pdf");
    const coverPath = path.join(
      process.cwd(),
      "public",
      "YOUR COVER LETTER.pdf",
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html: htmlBody,
      attachments: [
        {
          filename: "YOUR CV.pdf",
          path: cvPath,
        },
        {
          filename: "YOUR COVER LETTER.pdf",
          path: coverPath,
        },
      ],
    });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
