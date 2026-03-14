import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "placeholder");

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    // Verify reCAPTCHA
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json({ error: "Vérification anti-spam échouée" }, { status: 403 });
    }

    const subjectLabels: Record<string, string> = {
      dev: "Développement Web & Apps",
      ia: "Intelligence Artificielle",
      data: "Data & Analytics",
      autre: "Autre",
    };

    const subjectLabel = subjectLabels[subject] || subject || "Non spécifié";

    await resend.emails.send({
      from: "SOLDEV Contact <onboarding@resend.dev>",
      to: "clechevallier@soldev.fr",
      replyTo: email,
      subject: `[SOLDEV.fr] ${subjectLabel} - ${name}`,
      html: `
        <h2>Nouveau message depuis soldev.fr</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subjectLabel}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
