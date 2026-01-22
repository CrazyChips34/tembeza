import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().max(20).optional().or(z.literal("")),
  subject: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1).max(1e3)
});
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const email = parsed.data.email.toLowerCase();
  if (email.endsWith("@inkblot.co.za")) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ ok: false, error: "Internal server error" }), {
    status: 500,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
