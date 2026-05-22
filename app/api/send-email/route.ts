import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email, position } = await req.json();

    const subject = `Application for ${position}`;

    const htmlBody = `
      <p>Dear Sir/Madam,</p>

      <p>
        I am writing to express my interest in the <b>${position}</b> position.
        As a Full Stack Engineer with hands-on experience in full-stack development
        and cloud technologies, I am confident that my skills align well with the requirements of the role.
      </p>

      <p>
        My professional background includes developing cloud-integrated web applications
        using AWS services and deploying secure, scalable systems with Angular, React,
        Node.js, ASP.NET, and Docker.
      </p>

      <p>
        I have attached my updated resume for your review. I would welcome the opportunity
        to contribute to your team and further discuss how I can support the organization.
      </p>

      <p>
        Thank you for considering my application. I look forward to the possibility of an interview.
      </p>

      <br/>

      <p>
        Best regards,<br/>
        Your Name<br/>
        email<br/>
        contact no
      </p>
    `;

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
