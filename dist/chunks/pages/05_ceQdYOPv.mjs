/* empty css                          */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                       */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="ml-5 mt-5 pt-5 bg-"> <p class="text-sm pt-5 mt-5">&copy; ${today.getFullYear()}</p> </footer>`;
}, "/home/elsahv/Desktop/official-LC/src/components/Footer.astro", void 0);

const $$Astro$d = createAstro();
const $$Overview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Overview;
  return renderTemplate`${maybeRenderHead()}<div class="bg-parchment border border-black border-t-2 border-r-2 font-medium rounded-lg py-5 bg-[#] ml-2 mr-5"> <div id="about-tech-stacks-CONTAINER" class="bg- p-5 ml-2"> <p class="font-bold text-3xl">CTA to email:</p> <div class="grayscale"> <img src="https://logo.svgcdn.com/logos/php.png" alt="" width="125" class="bg-"> <img src="https://logo.svgcdn.com/devicon/astro-original-wordmark.png" alt="" width="125" class="bg-"> <img src="https://logo.svgcdn.com/logos/sanity.png" alt="" width="125" class="bg-"> <img src="https://logo.svgcdn.com/devicon-plain/wordpress-plain-wordmark.png" alt="" width="126"> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/Overview.astro", void 0);

const $$Astro$c = createAstro();
const $$DynamicAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$DynamicAbout;
  const { title, paragraph1, paragraph2, mainImg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="about-me-wrapper" class="px-3"> <div id="about-me-container" class=""> <!-- <div id="img-container" class="bg-"> --> <img${addAttribute(mainImg, "src")} id="img-icon" alt="" width="" class="opacity-85"> <!-- </div> --> <div id="content-wrapper" class="bg-"> <h2 id="dynamic-title" class="bg- pb-1 font-semibold"> ${title} </h2> <div class="px-1"> <p id="about-paragraph2" class="bg-">${paragraph1}</p> <p id="" class="">${paragraph2}</p> </div> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/DynamicAbout.astro", void 0);

const $$Astro$b = createAstro();
const $$WhatsLC = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$WhatsLC;
  return renderTemplate`<!-- ADDRESS KEY PROBLEM- what problem LC solves-IP --><!-- AIDA CONTENT --><!-- - NOTE: how to create prices that scale? How to raise prices with older clients?   --><!-- A: decide what to offer now, and what to offer in the near and far future. Show increased and obvious value to customers. -->${maybeRenderHead()}<section id="whats-lc" class="bg- xl:mr-2 pr-1 mt-[150px] pt-5 bg-"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://dl.dropboxusercontent.com/scl/fi/xzfhk2jletg2hqwc9ecks/coyote.png?rlkey=xtfjf7plvgb8y3fjxdij0vdt5&st=run4yzui&dl=0", "title": "Whats LC", "paragraph1": "Artistic web design for creative businesses. ", "paragraph2": " house analogy..../ start with basic, scale up as your business grows.    Why should you prefer a custom-made website, when you can simply use wix or wordpress? Because a custom website fits your business, personality, goals... and you alone." })} </section>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/WhatsLC.astro", void 0);

const $$Astro$a = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="About" class=""> <h2>About</h2> <!-- TODO: COMBINE 4 case studies INTO ABOUT --> <section id="4 case studies" class="bg- xl:mr-2 pr-1 mt-[150px] pt-5 bg-"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://dl.dropboxusercontent.com/scl/fi/xzfhk2jletg2hqwc9ecks/coyote.png?rlkey=xtfjf7plvgb8y3fjxdij0vdt5&st=run4yzui&dl=0", "title": "Four Case Studies", "paragraph1": "what do all these have in common? ", "paragraph2": "for why?" })} </section> <!-- TODO: COMBINE self about INTO ABOUT --> <section id="about-self" class="bg- xl:mr-2 pr-1 mt-[150px] pt-5 bg-"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "", "title": "Different types of styles", "paragraph1": " I'm not just a coder who designs \u2014 I'm a designer who builds.", "paragraph2": " -I want to use this idea towards my portfolio to show off diverse styles." })} </section> </section>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/About.astro", void 0);

const $$Astro$9 = createAstro();
const $$Lists = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Lists;
  const { title, paragraph } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="sq" class="bg- px-2"> <h3 class="text-lg font-bold pt-5">${title}</h3> <p>${paragraph}</p> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sandbox/Lists.astro", void 0);

const $$Astro$8 = createAstro();
const $$HowItWorks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HowItWorks;
  return renderTemplate`3/11/26- include packages HERE!
<!-- People don't buy products or services, they buy better versions of themselves! -->The
Growing Pup → beginner stage The Rising Carnivore → established and growing The
Alpha → leader / dominant business
${maybeRenderHead()}<section id="how-it-works" class="bg- xl:mr-2 pl-3 pr-1 bg-"> ${renderComponent($$result, "Lists", $$Lists, { "title": "interview", "paragraph": " I host it for them. Clients do not know what to do with the files or how to even edit them. I set it up on my one account for them and charge them monthly. They prefer that. Get some recurring revenue" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "design", "paragraph": " I have two packages: 1) I have lump sum $3500 minimum for 5 pages and $25 a month hosting and general maintenance, 2) $0 down $150 a month, unlimited edits, 24/7 support, hosting, etc." })} ${renderComponent($$result, "Lists", $$Lists, { "title": "develop", "paragraph": " I host it for them. Clients do not know what to do with the files or how to even edit them. I set it up on my one account for them and charge them monthly. They prefer that. Get some recurring revenue" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "launch", "paragraph": " I have two packages: 1) I have lump sum $3500 minimum for 5 pages and $25 a month hosting and general maintenance, 2) $0 down $150 a month, unlimited edits, 24/7 support, hosting, etc." })} </section>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/HowItWorks.astro", void 0);

const $$Astro$7 = createAstro();
const $$AIDA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AIDA;
  const { attention, interest, desire, action } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="about-me-wrapper" class="px-3 bg-"> <div id="about-me-container" class=""> <div id="content-wrapper" class="bg-"> <h2 id="dynamic-attention" class="bg- pb-1 font-semibold"> ${attention} </h2> <div class="px-1"> <p id="about-interest" class="bg-">${interest}</p> <p id="" class="">${desire}</p> <p id="" class="">${action}</p> </div> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sandbox/AIDA.astro", void 0);

const $$Astro$6 = createAstro();
const $$WhatsIncluded = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WhatsIncluded;
  return renderTemplate`${maybeRenderHead()}<section id="whats-included" class="bg-"> <section id="problem-solving" class="bg- xl:mr-2 pr-1 pt-5 bg-"> <!-- TODO: REPLACE W AIDA COMP V--> ${renderComponent($$result, "AIDA", $$AIDA, { "attention": "This is where the relatable problem goes.", "interest": "What happens if you (potential client) doesn't take action to solve their problem. ex: what happens to client business if they decide not to try LC.", "desire": "Gives client a game plan.", "action": "positive outcome of working w LC. ex: what happens to client business if they DO try LC." })} <!-- TODO: REPLACE W AIDA COMP ^--> </section> <section id="services" class="bg- xl:mr-2 pr-1 pt-5 bg-"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "", "title": "Services Included", "paragraph1": " I build a recognizable style systems, not just templates:", "paragraph2": "color palette systems, layout patterns, typography pairings, component libraries, Astro + React theme starter kits (your stack), brand kits + site templates together (Designers pay more for coherent systems than single templates.)" })} </section> <section id="styles" class="bg- xl:mr-2 pr-1 mt-[150px] pt-5 bg-"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "", "title": "Different types of styles", "paragraph1": "What are the benefits of these styles?", "paragraph2": "templates that don't look like templates" })} </section> <section class="sq-styles grid 2xl:grid-cols-3 grid-cols-1 gap-5 p-5 mr-5"> ${renderComponent($$result, "Lists", $$Lists, { "title": "title", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "neubrutalism", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "minimal layouts", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "bold color palettes (coral, turquoise, sand, sun tones)", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "glassmorphism", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "geometric shapes", "paragraph": "vacation\u201D emotional vibe" })} ${renderComponent($$result, "Lists", $$Lists, { "title": "airy luxury feel", "paragraph": "vacation\u201D emotional vibe" })} </section> </section>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/WhatsIncluded.astro", void 0);

const $$Astro$5 = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="accordion" data-astro-cid-zsia4ftw> <summary class="accordion-summary" data-astro-cid-zsia4ftw> ${title} </summary> <div class="accordion-content" data-astro-cid-zsia4ftw> ${renderSlot($$result, $$slots["default"])} </div> </details> `;
}, "/home/elsahv/Desktop/official-LC/src/components/testComponents/Accordion.astro", void 0);

const $$Astro$4 = createAstro();
const $$AccordianSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AccordianSection;
  return renderTemplate`${maybeRenderHead()}<div id="accordion-container" class="p-5"> ${renderComponent($$result, "Accordion", $$Accordion, { "title": "whats included" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WhatsIncluded", $$WhatsIncluded, {})} ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "How it works " }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$About, {})} ` })} </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/testComponents/AccordianSection.astro", void 0);

const Test1 = () => {
  return /* @__PURE__ */ jsx("div", { children: "test1" });
};

const Test2 = () => {
  return /* @__PURE__ */ jsx("div", { children: "test2" });
};

const Test3 = () => {
  return /* @__PURE__ */ jsx("div", { children: "test3" });
};

const Test4 = () => {
  return /* @__PURE__ */ jsx("div", { children: "test4" });
};

const Test5 = () => {
  return /* @__PURE__ */ jsx("div", { children: "test5" });
};

function SidebarPanel() {
  const [active, setActive] = useState("start");
  const sections = [
    { id: "start", label: "start here", content: /* @__PURE__ */ jsx(Test1, {}) },
    { id: "how", label: "how it works", content: /* @__PURE__ */ jsx(Test2, {}) },
    { id: "included", label: "whats included", content: /* @__PURE__ */ jsx(Test3, {}) },
    { id: "about", label: "about", content: /* @__PURE__ */ jsx(Test4, {}) },
    { id: "contact", label: "contact", content: /* @__PURE__ */ jsx(Test5, {}) }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-test1", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "logo",
        class: "text- 2xl:text-9xl lg:text-7xl text-6xl pb-1 opacity-90",
        children: /* @__PURE__ */ jsxs("a", { href: "/", children: [
          " Laughing ",
          /* @__PURE__ */ jsx("br", {}),
          " Coyote"
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-left ", children: /* @__PURE__ */ jsx("div", { id: "nav-items", className: "px-3 py-1 mt-3 bg- flex flex-col  border-t border-b border-black space-y-1 text-xl", children: sections.map((section) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `text-left hover:opacity-70 ${active === section.id ? "font-bold" : ""}`,
        onClick: () => setActive(section.id),
        children: section.label
      },
      section.id
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg- min-h-[120px]", children: sections.find((section) => section.id === active)?.content })
  ] });
}

const $$Astro$3 = createAstro();
const $$LeftPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LeftPanel;
  return renderTemplate`${maybeRenderHead()}<div id="LEFT-PANEL-wrapper" class="bg-mutedTeal h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"> <div id="LEFT-PANEL-container" class="bg- py-5 2xl:pl-5 2xl:pr-[30px] pl-1 pr-5 bg- border-r-2 border-black"> <!-- TODO: 3/11/26- COMPLETE NEW CONDITIONAL HEADER V--> ${renderComponent($$result, "Conditional", SidebarPanel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/elsahv/Desktop/official-LC/src/components/tests/Conditional.jsx", "client:component-export": "default" })} <!-- <Header /> --> <div id="" class=""> ${renderComponent($$result, "WhatsLC", $$WhatsLC, {})} ${renderComponent($$result, "AccordianSection", $$AccordianSection, {})} <!-- PRICING- _3/11/26-_ --> <!-- FAQ- _3/11/26-_ --> <!-- CONTACT- --> ${renderComponent($$result, "Overview", $$Overview, {})} <!-- ? ^--> <!-- EVENTUALLY CONTACT FORM OR CTA --> </div> </div> <div id="left-panel-footer" class="flex justify-end items-end bg-aliceBlue border-r border-black"></div> <div class="text-right text-parchment pr-5"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/layouts/LeftPanel.astro", void 0);

const $$Astro$2 = createAstro();
const $$BackBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BackBtn;
  return renderTemplate`${maybeRenderHead()}<div id="back-btn-wrapper" class="mt-5 pt-5"> <button id="back-btn" class="text-onyx hover:text-black text-6xl m-5 p-1"> <a href="/">${renderComponent($$result, "IoArrowBack", IoArrowBack, {})}</a> </button> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/BackBtn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class=""> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><script src="https://kit.fontawesome.com/f75d956e91.js" crossorigin="anonymous"><\/script><title>Laughing Coyote Dev</title><link rel="icon" type="image/svg+xml" href="/icons/open-book.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">', '</head> <body class="text-"> <div id="slot-container" class="bg- flex md:flex-row flex-col"> ', " </div> </body></html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/elsahv/Desktop/official-LC/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$TestCaseStudyMarkdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestCaseStudyMarkdown;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<!-- !NOTE: THIS WAS ORIGINALLY WEBSITE PACKAGE MD, WE ARE NOW USING IT FOR CASE STUDY MD -->${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-test1"> ${renderComponent($$result2, "LeftPanel", $$LeftPanel, {})} </div> <div id="markdown-post" class="text-lg"> <div id="right-side-markdown-container" class="bg-papaya text-[#5d2a42] h-screen md:absolute relative right-0 md:w-3/5 w-full overflow-y-scroll overflow-x-hidden 2xl:p-5 md:p-3"> <section class="md:mx-5 mx-5 p-5"> <div class="p-5 mr -5"> <div id="" class="bg-"> <div class="mt-5 pt-5"> <div id="title-banner" class=""> <h1 class="2xl:text-5xl md:text-4xl text-3xl pb-2 pt-2 font-semibold"> ${frontmatter.title} </h1> </div> </div> <p>${frontmatter.testItem1}</p> <div id="images-wrapper" class="bg-"> <a${addAttribute(frontmatter.websiteUrl, "href")} target="_blank" rel="noreferrer"> <img id="PRIMARY-image"${addAttribute(frontmatter.image.url, "src")} alt="" class="opacity-80 border border-rosyBrown drop-shadow-3xl rounded mt-[50px] col-span-2"> </a> </div> </div> </div> <div id="website-content" class="pl-3 pr-5 mr-5 dropshadow-3xl mt-3"> <div id="elaborate-theme"> <h1 class="font-bold">
Elaborate on Theme:${frontmatter.elaborateTheme} </h1> <section id="brand-concept"> <h2 class="font-bold pt-5">1.Brand Concept</h2> <p class="pb-5 mb-5">${frontmatter.brandConcept}</p> <p class="pb-5 mb-5">${frontmatter.targetAudience}</p> <p class="pb-5 mb-5">${frontmatter.layoutDecisions}</p> <p>${frontmatter.typographyReasoning}</p> <p>${frontmatter.mood}</p> </section> <section id="design-system" class="my-5"> <h2 class="font-bold pt-5">2.Design System</h2> <p class="pb-5 mb-5">${frontmatter.designSystem}</p> </section> </div> <section id="finished-website"> <h2 class="font-bold pt-5">3.Finished Website Case Study</h2> <img src="https://dl.dropboxusercontent.com/scl/fi/erd9kmg0sibit24225dhm/roof.png?rlkey=61gvo5esptj7x9sephthvvqvz&st=hwpcpofo&dl=0" alt=""> <p class="pb-5 mb-5">${frontmatter.finishedWebsite}</p> <p class="font-bold">client: ${frontmatter.client}</p> <p class="font-bold">problem:${frontmatter.problem}</p> <p class="font-bold">my approach:${frontmatter.myApproach}</p> <!-- *DONE: WORK ON PALETTE COLORS V--> <div id="palette-colors"> <h2 class="font-bold">${frontmatter.paletteName}</h2> <img${addAttribute(frontmatter.paletteScreenshot, "src")} alt=""> <p class="p-2"> ${frontmatter.paletteExplanation} </p> </div> <!-- *DONE: WORK ON PALETTE COLORS ^--> <p class="font-bold">
Strategies Employed:${frontmatter.strategiesEmployed} </p> <p class="font-bold">Results:${frontmatter.results}</p> <p class="font-bold">Next Steps:${frontmatter.nextSteps}</p> <p class="font-bold">Conclusion:${frontmatter.conclusion}</p> </section> <div class="mt-5 my-5 py-[55px] pt-2 opacity-80 text-lg"> <div class="bg-"> ${renderSlot($$result2, $$slots["default"])} </div> <!-- <Contact /> --> ${renderComponent($$result2, "BackBtn", $$BackBtn, {})} </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> </div> ` })}`;
}, "/home/elsahv/Desktop/official-LC/src/layouts/TestCaseStudyMarkdown.astro", void 0);

const html = "<ul>\n<li>RUNNING QUAIL: DESERT STORYTELLING- both truth and fiction, What if I created a experimental, storytelling- both fiction and truth board? Based in Morongo Basin? I personally weave DESERT STORIES stories with POLYMER CLAY PROJECTS? combine love of high desert community with the goal of keeping small businesses in touch.</li>\n<li></li>\n<li></li>\n<li></li>\n</ul>\n<img src=\"https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&#x26;st=46k5gk9p&#x26;dl=0\" alt=\"The Running Quail\" class=\"border border-black mb-5\">\n<img src=\"https://images.pexels.com/photos/32911575/pexels-photo-32911575/free-photo-of-tropical-pool-with-floating-plumeria-flowers.jpeg?auto=compress&#x26;cs=tinysrgb&#x26;w=1260&#x26;h=750&#x26;dpr=1\" alt=\"MISC PROJECTS\">\n<ul>\n<li>this PORTFOLIO</li>\n<li>OTHER SMALL PROJECTS: MISC</li>\n</ul>";

				const frontmatter = {"id":4,"layout":"../../layouts/TestCaseStudyMarkdown.astro","no":"✓05","title":"eh-UI/UX beautiful design for neurodivergent users ❤️","pubDate":"2022-07-01T00:00:00.000Z","testItem1":"about what I can do with react and javascript ","image":{"url":"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?_gl=1*1rywvor*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NjIyNzM4NTEkbzUkZzEkdDE3NjIyNzM5MDUkajYkbDAkaDA.","alt":"UI/UX design for neurodivergent users"},"secondImage":{"url":"https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg?_gl=1*1ds56fj*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTA0MzIkajMwJGwwJGgw","alt":"PHP & wordpress theme projects"},"websiteUrl":"https://theindoorjungleproject.com","githubUrl":"https://github.com/elsahv/-the-running-quail","tags":["astro","blogging","learning in public"],"language":"php","backend":"wp"};
				const file = "/home/elsahv/Desktop/official-LC/src/pages/techApplications/05.md";
				const url = "/techApplications/05";
				function rawContent() {
					return "\n- RUNNING QUAIL: DESERT STORYTELLING- both truth and fiction, What if I created a experimental, storytelling- both fiction and truth board? Based in Morongo Basin? I personally weave DESERT STORIES stories with POLYMER CLAY PROJECTS? combine love of high desert community with the goal of keeping small businesses in touch.\n-\n-\n-\n\n<img src=\"https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&st=46k5gk9p&dl=0\" alt=\"The Running Quail\" class=\"border border-black mb-5\"/>\n\n<img src=\"https://images.pexels.com/photos/32911575/pexels-photo-32911575/free-photo-of-tropical-pool-with-floating-plumeria-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\" alt=\"MISC PROJECTS\" />\n\n- this PORTFOLIO\n- OTHER SMALL PROJECTS: MISC\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$TestCaseStudyMarkdown, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _05 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TestCaseStudyMarkdown as $, _05 as _, $$LeftPanel as a, $$BackBtn as b, $$Footer as c, $$MainLayout as d };
