/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from '../chunks/astro/server_Dmxw166X.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_cLOPfVTZ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CPp2GZuh.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/Tembeza_logo.YwaGpZm9.png","width":142,"height":31,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tiffy/Documents/tembeza/src/assets/Tembeza_logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQs", href: "#faqs" }
  ];
  return renderTemplate`${maybeRenderHead()}<header data-header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" data-astro-cid-3ef6ksr2> <div class="container mx-auto px-4 lg:px-8" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 lg:h-20" data-astro-cid-3ef6ksr2> <a href="#home" class="flex items-center gap-2" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Tembeza logo", "class": "w-30 h-30 object-contain", "loading": "eager", "decoding": "async", "data-astro-cid-3ef6ksr2": true })} </a> <nav class="hidden lg:flex items-center gap-8" aria-label="Primary" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium" data-astro-cid-3ef6ksr2> ${link.label} </a>`)} </nav> <a href="#contact" class="hidden lg:inline-flex btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-effect" data-astro-cid-3ef6ksr2>
Contact Us
</a> <button type="button" data-menu-button class="lg:hidden p-2 text-foreground" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <span class="icon-when-closed" aria-hidden="true" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3ef6ksr2> <path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </span> <span class="icon-when-open" aria-hidden="true" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3ef6ksr2> <path d="M6 6l12 12M18 6L6 18" data-astro-cid-3ef6ksr2></path> </svg> </span> </button> </div> </div> <div data-mobile-menu class="lg:hidden bg-background border-b border-border hidden" data-astro-cid-3ef6ksr2> <nav class="container mx-auto px-4 py-4 flex flex-col gap-4" aria-label="Mobile" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2" data-astro-cid-3ef6ksr2> ${link.label} </a>`)} <a href="#contact" class="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground text-center mt-2" data-astro-cid-3ef6ksr2>
Contact Us
</a> </nav> </div> </header> `;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Header.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/Tembeza_hero.DiKe0CoW.png","width":3178,"height":1356,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tiffy/Documents/tembeza/src/assets/Tembeza_hero.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "100% Experience",
      subtitle: "5 Years of Service",
      icon: "monitor"
    },
    {
      title: "Digital Solutions",
      subtitle: "Technological Development",
      icon: "shield"
    },
    {
      title: "Maintenance",
      subtitle: "Specialized Support",
      icon: "settings"
    },
    {
      title: "Confidentiality",
      subtitle: "Secure Data",
      icon: "lock"
    }
  ];
  const iconPath = (name) => {
    switch (name) {
      case "monitor":
        return "M4 5h16v11H4z M8 19h8";
      case "shield":
        return "M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z";
      case "settings":
        return "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2-1.5-2-3.5-2.3 1a7.6 7.6 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7.6 7.6 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5a7.9 7.9 0 0 0-.1 1 7.9 7.9 0 0 0 .1 1l-2 1.5 2 3.5 2.3-1a7.6 7.6 0 0 0 1.7 1l.3 2.5h4l.3-2.5a7.6 7.6 0 0 0 1.7-1l2.3 1 2-3.5-2-1.5z";
      case "lock":
        return "M7 11V8a5 5 0 0 1 10 0v3 M6 11h12v10H6z";
      default:
        return "";
    }
  };
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"> <!-- Hero Background Image --> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "", "class": "absolute inset-0 w-full h-full object-cover", "loading": "eager", "decoding": "async", "fetchpriority": "high" })} <!-- Blur Overlay --> <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div> <!-- Optional Gradient Top & Bottom --> <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div> <!-- Hero Content --> <div class="container mx-auto px-4 lg:px-8 relative z-10 text-center"> <div class="max-w-4xl mx-auto mb-16 lg:mb-24"> <h1 class="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
Tembeza: Revolutionize your
<br>
Technology, exceed your <span class="text-gradient">goals.</span> </h1> <p class="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
Innovation, Development and Support for an Efficient Future
</p> <a href="#services" class="inline-flex btn-gradient px-8 py-4 rounded-full text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 glow-effect">
Discover More
</a> </div> </div> </section> <section aria-label="Highlights" class="relative z-20 -mt-20"> <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8 py-12"> ${features.map((feature, index) => renderTemplate`<div class="card-gradient border border-border/50 rounded-xl shadow-lg shadow-black/30 flex flex-col items-center p-6 text-center"> <div class="btn-gradient w-16 h-16 rounded-lg flex items-center justify-center mb-4"> <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path${addAttribute(iconPath(feature.icon), "d")}></path> </svg> </div> <h3 class="font-display font-semibold text-white mb-1">${feature.title}</h3> <p class="text-white/80 text-sm">${feature.subtitle}</p> </div>`)} </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Hero.astro", void 0);

const chipImage = new Proxy({"src":"/_astro/Tembeza_comouterchip.BncL12g0.png","width":1440,"height":493,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tiffy/Documents/tembeza/src/assets/Tembeza_comouterchip.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Technological Consulting",
      description: "We optimize systems, data and cybersecurity, streamline management, implement large-scale effective and secure digital solutions.",
      features: ["System audit/repair", "Data management", "Cybersecurity"],
      highlighted: false,
      icon: "server"
    },
    {
      title: "Technical and Digital Development",
      description: "Propels businesses by creating tailor-made products that improve processes, integrate technologies, and optimize operations' efficiency.",
      features: ["Custom software development", "Systems integration", "Process automation"],
      highlighted: true,
      icon: "code"
    },
    {
      title: "Technical Maintenance",
      description: "Ensures the maximum operation of systems by updating, monitoring and troubleshooting with proactive solutions.",
      features: ["Preventive Maintenance", "24/7 Technical Support", "Software updates"],
      highlighted: false,
      icon: "wrench"
    }
  ];
  const iconPath = (name) => {
    switch (name) {
      case "server":
        return "M4 6h16v4H4z M4 14h16v4H4z M7 8h.01 M7 16h.01";
      case "code":
        return "M16 18l6-6-6-6 M8 6l-6 6 6 6";
      case "wrench":
        return "M22 2l-6 6 2 2 6-6V2h-2z M14 8l-8 8a4 4 0 0 0 6 6l8-8";
      default:
        return "";
    }
  };
  return renderTemplate`${maybeRenderHead()}<section id="services" class="relative overflow-hidden py-20 lg:py-32"> <!-- Background image --> ${renderComponent($$result, "Image", $$Image, { "src": chipImage, "alt": "", "class": "absolute inset-0 w-full h-full object-cover", "loading": "lazy", "decoding": "async" })} <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background"></div> <!-- Content --> <div class="container mx-auto px-4 lg:px-8 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- LEFT --> <h2 data-animate="fade-left" class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
What can we
<br>
offer <span class="text-gradient">you?</span> </h2> <!-- RIGHT --> <p data-animate="fade-right" data-delay="150" class="text-muted-foreground text-lg max-w-2xl text-right justify-self-end">
At Tembeza we offer you expert advice, bespoke technical development and ongoing maintenance to optimize your
        technology, improve efficiency and ensure outstanding performance.
</p> </div> <div class="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${services.map((service, index) => renderTemplate`<div data-animate="fade-up"${addAttribute(String(200 + index * 150), "data-delay")}${addAttribute([
    "relative p-8 rounded-2xl border transition-all duration-300",
    "hover:-translate-y-2",
    service.highlighted ? "bg-primary border-primary shadow-lg shadow-primary/20" : "bg-card/50 border-border/50 hover:border-primary/30"
  ], "class:list")}> <div${addAttribute([
    "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
    service.highlighted ? "bg-primary-foreground/10" : "bg-primary/10"
  ], "class:list")}> <svg viewBox="0 0 24 24"${addAttribute(["w-7 h-7", service.highlighted ? "text-primary-foreground" : "text-primary"], "class:list")} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path${addAttribute(iconPath(service.icon), "d")}></path> </svg> </div> <h3${addAttribute([
    "font-display text-xl font-semibold mb-3",
    service.highlighted ? "text-primary-foreground" : "text-foreground"
  ], "class:list")}> ${service.title} </h3> <p${addAttribute([
    "text-sm mb-6 leading-relaxed",
    service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
  ], "class:list")}> ${service.description} </p> <ul class="space-y-3"> ${service.features.map((feature) => renderTemplate`<li${addAttribute([
    "flex items-center gap-3 text-sm",
    service.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
  ], "class:list")}> <svg viewBox="0 0 24 24"${addAttribute(["w-4 h-4 flex-shrink-0", service.highlighted ? "text-primary-foreground" : "text-primary"], "class:list")} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M20 6L9 17l-5-5"></path> </svg> ${feature} </li>`)} </ul> </div>`)} </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Services.astro", void 0);

const ellipseImage = new Proxy({"src":"/_astro/Tembeza_behind_why_choose_ellipse.gILUpnkP.png","width":603,"height":628,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tiffy/Documents/tembeza/src/assets/Tembeza_behind_why_choose_ellipse.png";
							}
							
							return target[name];
						}
					});

const whyChooseImage = new Proxy({"src":"/_astro/Tembeza_why_choose_us.BtMmmmQK.png","width":604,"height":506,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tiffy/Documents/tembeza/src/assets/Tembeza_why_choose_us.png";
							}
							
							return target[name];
						}
					});

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const tags = ["Technological Consulting", "Technical Development", "Technical Maintenance"];
  return renderTemplate`${maybeRenderHead()}<section id="why-us" class="py-20 lg:py-32 relative"> <div class="container mx-auto px-4 lg:px-8"> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"> <div data-animate="fade-left" class="relative"> <div class="relative overflow-hidden"> <div class="aspect-4-3 flex items-center justify-center"> <div class="relative w-full h-full"> ${renderComponent($$result, "Image", $$Image, { "src": ellipseImage, "alt": "", "class": "absolute inset-0 w-full h-full object-cover opacity-40", "loading": "lazy", "decoding": "async" })} ${renderComponent($$result, "Image", $$Image, { "src": whyChooseImage, "alt": "Why choose Tembeza", "class": "absolute rounded-2xl inset-0 w-full h-full object-contain p-6 md:p-10", "loading": "lazy", "decoding": "async" })} </div> </div> </div> <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div> </div> <div data-animate="fade-right" data-delay="150"> <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
Why choose <span class="text-gradient">us?</span> </h2> <div class="flex flex-wrap gap-2 mb-6"> ${tags.map((tag) => renderTemplate`<span class="px-4 py-1.5 bg-secondary/50 border border-border/50 rounded-full text-sm text-muted-foreground"> ${tag} </span>`)} </div> <p class="text-muted-foreground text-lg leading-relaxed mb-8">
We offer expert advice to optimize your systems, tailored technical and digital development, and reliable
          maintenance to ensure operational continuity. Trust us to drive innovation and keep your technologies in
          perfect condition.
</p> <a href="#contact" class="inline-flex btn-gradient px-8 py-3.5 rounded-full text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300">
Read More
</a> </div> </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/WhyChooseUs.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      number: "01",
      title: "Comprehensive Consulting",
      description: "We offer expert technology innovation, addressing digital systems and strategies.",
      icon: "bulb"
    },
    {
      number: "02",
      title: "Custom development",
      description: "We create tailored technical and digital solutions with efficiency and innovation.",
      icon: "code"
    },
    {
      number: "03",
      title: "Reliable Maintenance",
      description: "We guarantee continuous support, updating and repair to ensure the optimal performance of your systems.",
      icon: "settings"
    }
  ];
  const iconPath = (name) => {
    switch (name) {
      case "bulb":
        return "M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12c.6.5 1 1.2 1 2v1h6v-1c0-.8.4-1.5 1-2a7 7 0 0 0-4-12z";
      case "code":
        return "M16 18l6-6-6-6 M8 6l-6 6 6 6";
      case "settings":
        return "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2-1.5-2-3.5-2.3 1a7.6 7.6 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7.6 7.6 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5a7.9 7.9 0 0 0-.1 1 7.9 7.9 0 0 0 .1 1l-2 1.5 2 3.5 2.3-1a7.6 7.6 0 0 0 1.7 1l.3 2.5h4l.3-2.5a7.6 7.6 0 0 0 1.7-1l2.3 1 2-3.5-2-1.5z";
      default:
        return "";
    }
  };
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 lg:py-32 relative"> <div class="container mx-auto px-4 lg:px-8"> <div data-animate="fade-up" class="text-center mb-16"> <span class="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
Passion • Dedication • Professionalism
</span> <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
Tembeza: Innovation, Development
<br>
and Support tailored to <span class="text-gradient">you.</span> </h2> </div> <div class="max-w-4xl mx-auto space-y-6"> ${features.map((feature, index) => renderTemplate`<div data-animate="fade-left"${addAttribute(String(150 + index * 150), "data-delay")} class="relative flex items-start gap-6 p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group hover:translate-x-2"> <span class="font-display text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors"> ${feature.number} </span> <div class="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"> <svg viewBox="0 0 24 24" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path${addAttribute(iconPath(feature.icon), "d")}></path> </svg> </div> <div class="flex-1"> <h3 class="font-display text-xl font-semibold text-foreground mb-2">${feature.title}</h3> <p class="text-muted-foreground leading-relaxed">${feature.description}</p> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Features.astro", void 0);

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: 5, prefix: "+", suffix: "", label: "Years of Experience" },
    { value: 76, prefix: "", suffix: "%", label: "Downtime" },
    { value: 3e3, prefix: "", suffix: "", label: "Projects carried out" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 lg:py-32 relative"> <div class="container mx-auto px-4 lg:px-8"> <div data-animate="fade-up" class="text-center mb-16"> <span class="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
Tembeza's Achievements and Successes
</span> <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
We promote your technology,
<br>
we achieve <span class="text-gradient">results.</span> </h2> <p class="text-muted-foreground text-lg max-w-3xl mx-auto">
We stand out for our high customer satisfaction, significant reduction in downtime and improvements in
        operational efficiency. Trust us to transform and optimize your technology with effective results.
</p> </div> <div data-animate="fade-up" data-delay="150" class="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto text-center"> ${stats.map((stat, index) => renderTemplate`<div data-animate="scale-in"${addAttribute(String(250 + index * 120), "data-delay")} class="relative"> <span${addAttribute(String(stat.value), "data-counter")}${addAttribute(stat.prefix, "data-prefix")}${addAttribute(stat.suffix, "data-suffix")} class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary"> ${stat.prefix}0${stat.suffix} </span> <p class="text-muted-foreground mt-3">${stat.label}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Stats.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      q: "How quickly can you start?",
      a: "We can typically start with an assessment within a few days, then propose a roadmap based on your priorities."
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes. We provide proactive monitoring, updates, and support to keep your systems stable and secure."
    },
    {
      q: "Can you work with our existing tools?",
      a: "Absolutely. We specialize in integrating with existing systems and improving what you already have."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faqs" class="py-20 lg:py-32 relative bg-secondary/10"> <div class="container mx-auto px-4 lg:px-8"> <div data-animate="fade-up" class="text-center mb-12"> <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
Frequently asked <span class="text-gradient">questions</span> </h2> <p class="text-muted-foreground mt-4 max-w-2xl mx-auto">
Quick answers to help you understand how we work and what you can expect.
</p> </div> <div class="max-w-3xl mx-auto space-y-4"> ${items.map((item, index) => renderTemplate`<details data-animate="fade-up"${addAttribute(String(100 + index * 120), "data-delay")} class="group rounded-2xl border border-border/40 bg-card/30 px-6 py-4 open:bg-card/50 transition-colors"> <summary class="cursor-pointer list-none flex items-center justify-between gap-4"> <span class="font-display font-semibold text-foreground">${item.q}</span> <span class="text-muted-foreground group-open:rotate-45 transition-transform">+</span> </summary> <div class="mt-3 text-muted-foreground leading-relaxed">${item.a}</div> </details>`)} </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/FAQ.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="relative py-32 overflow-hidden bg-surface"> <!-- Full Background Image --> ${renderComponent($$result, "Image", $$Image, { "src": chipImage, "alt": "Computer chip background", "class": "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none", "loading": "lazy", "decoding": "async" })} <!-- Gradient overlay --> <div class="absolute inset-0 contact-surface-overlay"></div> <div class="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start"> <!-- Left: Heading & Description --> <div data-animate="fade-left" class="flex flex-col gap-6 w-full lg:max-w-lg"> <h2 class="text-white font-bold text-4xl lg:text-5xl leading-tight text-center lg:text-left">
Get in Touch
</h2> <p class="text-white/80 text-base leading-relaxed text-left">
We guarantee continuous support, updating and repair to ensure the optimal performance of your systems.
</p> </div> <!-- Right: Contact Form --> <div data-animate="fade-right" class="flex-1"> <form data-contact-form class="flex flex-col gap-6"> <!-- Name & Email --> <div class="flex flex-col md:flex-row gap-10"> <div class="flex-1 border-b border-white/25 relative"> <input type="text" name="name" placeholder="Your Name" required class="w-full bg-transparent text-white placeholder-white/50 py-3 focus:outline-none focus:border-primary transition-all"> </div> <div class="flex-1 border-b border-white/25 relative"> <input type="email" name="email" placeholder="Your Email" required class="w-full bg-transparent text-white placeholder-white/50 py-3 focus:outline-none focus:border-primary transition-all"> </div> </div> <!-- Phone & Subject --> <div class="flex flex-col md:flex-row gap-10"> <div class="flex-1 border-b border-white/25 relative"> <input type="tel" name="phone" placeholder="Your Phone" class="w-full bg-transparent text-white placeholder-white/50 py-3 focus:outline-none focus:border-primary transition-all"> </div> <div class="flex-1 border-b border-white/25 relative"> <input type="text" name="subject" placeholder="Subject" class="w-full bg-transparent text-white placeholder-white/50 py-3 focus:outline-none focus:border-primary transition-all"> </div> </div> <!-- Message --> <div class="border-b border-white/25 relative"> <textarea name="message" rows="5" placeholder="Tell us about your project" required class="w-full bg-transparent text-white placeholder-white/50 py-3 resize-none focus:outline-none focus:border-primary transition-all"></textarea> </div> <!-- Submit Button --> <button type="submit" class="mt-6 inline-flex items-center justify-center px-8 py-3 btn-accent-solid text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300">
Send Message
</button> <div data-contact-error class="hidden rounded-lg border border-white/15 bg-white/5 p-4"> <p class="text-white/80 text-sm" data-contact-error-text>Something went wrong. Please try again.</p> </div> </form> <div data-contact-success class="hidden rounded-xl border border-white/15 bg-white/5 p-6"> <h3 class="text-white font-semibold text-xl">Message sent</h3> <p class="text-white/80 mt-2">Thanks for reaching out. We will get back to you shortly.</p> <button type="button" data-contact-reset class="mt-6 inline-flex items-center justify-center px-8 py-3 btn-gradient text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300">
Send another message
</button> </div> </div> </div> </section>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/ContactForm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];
  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ];
  const email = "tiffanypietersen234@gmail.com";
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 lg:py-16 bg-background border-t border-border/50"> <div class="container mx-auto px-4 lg:px-8"> <div class="flex flex-col items-center mb-10"> <a href="#home" data-animate="fade-up" class="flex items-center gap-2 mb-8"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Tembeza logo", "class": "w-10 h-10 object-contain", "loading": "lazy", "decoding": "async" })} </a> <nav data-animate="fade-up" data-delay="100" class="flex flex-wrap justify-center gap-6 md:gap-8 mb-8" aria-label="Footer"> ${footerLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-muted-foreground hover:text-foreground transition-colors text-sm"> ${link.label} </a>`)} </nav> <a data-animate="fade-up" data-delay="200"${addAttribute(`mailto:${email}`, "href")} class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"> <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M4 4h16v16H4z"></path> <path d="M22 6l-10 7L2 6"></path> </svg> <span class="text-sm">${email}</span> </a> </div> <div class="border-t border-border/50 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-sm text-muted-foreground text-center md:text-left">© Copyright Tembeza International. All Rights Reserved.</p> <div class="flex gap-6"> ${legalLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-xs text-muted-foreground hover:text-foreground transition-colors"> ${link.label} </a>`)} </div> </div> </div> </div> </footer>`;
}, "C:/Users/tiffy/Documents/tembeza/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/tiffy/Documents/tembeza/src/pages/index.astro", void 0);

const $$file = "C:/Users/tiffy/Documents/tembeza/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
