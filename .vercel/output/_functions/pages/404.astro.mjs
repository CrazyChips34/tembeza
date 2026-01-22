/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dmxw166X.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_cLOPfVTZ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen items-center justify-center bg-muted"> <div class="text-center px-6"> <h1 class="mb-4 text-4xl font-bold">404</h1> <p class="mb-6 text-xl text-muted-foreground">Oops! Page not found</p> <a href="/" class="text-primary underline hover:text-primary/90">Return to Home</a> </div> </div> ` })}`;
}, "C:/Users/tiffy/Documents/tembeza/src/pages/404.astro", void 0);

const $$file = "C:/Users/tiffy/Documents/tembeza/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
