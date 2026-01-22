import type { APIRoute } from "astro";
import { z } from "zod";

// The server validates the request body to avoid accepting broken / malicious inputs.
// This schema is the "contract" between the form (frontend) and this API route (backend).
const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().max(20).optional().or(z.literal("")),
  subject: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1).max(1000),
});

// POST /api/contact
// Rules required by the brief:
// - only accept POST
// - if email ends with "@inkblot.co.za" => return HTTP 200
// - otherwise => return HTTP 500
// Always return JSON so the frontend can show a clear message.
export const POST: APIRoute = async ({ request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    // Body was not valid JSON
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    // JSON exists, but fields are missing/invalid.
    return new Response(JSON.stringify({ ok: false, error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const email = parsed.data.email.toLowerCase();

  if (email.endsWith("@inkblot.co.za")) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Required by the brief: any other email domain must return 500.
  return new Response(JSON.stringify({ ok: false, error: "Internal server error" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
};
