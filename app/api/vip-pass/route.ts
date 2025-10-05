import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const vipPassSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters zijn"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(10, "Ongeldig telefoonnummer"),
  location: z.string().min(1, "Kies een locatie"),
  goal: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Je moet akkoord gaan"),
  newsletter: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = vipPassSchema.parse(body);

    // TODO: Implement your CRM integration here
    // Examples:
    // - Send to email (SendGrid, Resend)
    // - Store in database (Prisma, Supabase)
    // - Send to CRM (HubSpot, Salesforce)
    // - Webhook to Zapier/Make

    console.log("VIP Pass Submission:", data);

    // Simulated delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example: Send email notification
    // await sendEmail({
    //   to: "info@nrgpremium.nl",
    //   subject: "Nieuwe VIP Dagpas Aanvraag",
    //   html: `
    //     <h2>Nieuwe aanvraag</h2>
    //     <p><strong>Naam:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Telefoon:</strong> ${data.phone}</p>
    //     <p><strong>Locatie:</strong> ${data.location}</p>
    //     <p><strong>Doel:</strong> ${data.goal || "Niet opgegeven"}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Aanvraag succesvol ontvangen" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("VIP Pass submission error:", error);
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden" },
      { status: 500 }
    );
  }
}
