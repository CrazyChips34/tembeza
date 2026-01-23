import type { APIRoute } from "astro";
import { z } from "zod";

const ALLOWED_EMAIL_DOMAIN = (import.meta as any).env?.CONTACT_ALLOWED_EMAIL_DOMAIN ?? "inkblot.co.za";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().max(20).optional().or(z.literal("")),
  subject: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1).max(1000),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid form data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const email = parsed.data.email.toLowerCase();
    if (!email.endsWith(`@${String(ALLOWED_EMAIL_DOMAIN).toLowerCase()}`)) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: `Only @${ALLOWED_EMAIL_DOMAIN} email addresses are allowed.`,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact API error:", err);

    return new Response(
      JSON.stringify({ ok: false, error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
