import { c as createComponent, a as renderTemplate, b as addAttribute, l as renderSlot, n as renderHead, i as createAstro } from './astro/server_Dmxw166X.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const siteScript = "/_astro/site.BnnsjWqR.ts";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Tembeza - Revolutionize Your Technology, Exceed Your Goals",
    description = "Tembeza offers expert technology consulting, digital development, and reliable maintenance. Transform your technology with innovation and efficiency."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="author" content="Tembeza International"><meta name="keywords" content="technology consulting, digital development, IT maintenance, software solutions, system optimization"><meta property="og:title" content="Tembeza - Innovation, Development and Support"><meta property="og:description" content="Expert technology consulting, digital development, and reliable maintenance tailored to you."><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@tembeza">', "</head> <body> <!-- Page content gets injected here --> ", ' <!--\n      Site-wide client-side behavior (small + performance-friendly):\n      - scroll animations\n      - counters\n      - mobile nav toggle\n      - contact form submit handler\n    --> <script type="module"', "><\/script> </body> </html>"])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), addAttribute(siteScript, "src"));
}, "C:/Users/tiffy/Documents/tembeza/src/layout/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
