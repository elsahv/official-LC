/* empty css                          */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$LeftPanel, c as $$Footer, d as $$MainLayout } from './05_ceQdYOPv.mjs';

const $$Astro$4 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<div id="contact" class="bg-[#f9f9f9] border border-onyx ml-[80px] mt-4 mr-[50px] mb-3 p-3 flex items-center rounded"> <div id="contact-container" class="ml-5"> <div id="contact-grid" class="rounded flex flex-col"> <div id="sq1" class="bg- pt-5"> <!-- <h2 class="pt-1 text-4xl text-onyx font-">Contact</h2> --> <p class="text- pl-2">
You can reach me by emailing:<span class=""> <a class="font-semibold text-xl py-1 opacity-80 hover:bg-munsell hover:text-white" href="mailto:elsahovey@gmail.com">elsahvy@gmail.com</a> </span> </p> <p class="bg- md:pl-3 pt-2 opacity-85 pr-5">
I am always looking for opportunities to further my skills... and to
          work with other like-minded people in tech. Email is the best way to
          get in touch, you can also find me at <span class="underline"> <a href="https://www.instagram.com/elsahoveydevdesign/">instagram</a> </span> and <span class="underline"> <a href="https://www.linkedin.com/in/elsa-hovey.com">
linkedIn.
</a></span> </p> </div> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/Contact.astro", void 0);

const $$Astro$3 = createAstro();
const $$TableContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TableContents;
  const websites = [
    {
      number: "01.",
      title: "The Growing Pup \u2192 beginner stage",
      p: "This is the The Growing Pup kit. Brochure hands off site w/ monthly updates.",
      link: "/websitePackages/1.the-growing-pup"
    },
    {
      number: "02.",
      title: "The Rising Carnivore \u2192 established and growing",
      p: "For small businesses with a desire to reach new customers online and grow their business ...web designing for artists and creative. A web design subscription service for small business owners and creatives- focuses on landing pages and user stories. ",
      link: "/websitePackages/2.the-rising-carnivore"
    },
    {
      number: "03.",
      title: "The Alpha \u2192 leader / dominant business",
      p: "illustrative mindmaps (with photos) about cooking for neurodivergents, incorporate nutrition",
      link: "/websitePackages/3.the-alpha"
    }
  ];
  const screenshots = [
    {
      number: "\u271305.",
      title: "Brand concept, targetBrand",
      p: "Each site is designed to reduce cognitive overload, maintain focus, and make navigation intuitive for users with attention differences.",
      link: "/techApplications/05"
    },
    {
      number: "\u271306.",
      title: "Roof",
      p: "reasons why I use astro ",
      link: "/techApplications/06"
    },
    {
      number: "\u271307.",
      title: "The Running Quail",
      p: "full stack community project",
      link: "/techApplications/07"
    },
    {
      number: "\u2713  08.",
      title: "Jungle",
      p: "SEO thru wp and others",
      link: "/techApplications/08"
    },
    {
      number: "\u271309.",
      title: "wtbh.",
      p: "reasons I use wordpress and its extenstions",
      link: "/techApplications/09"
    },
    {
      number: "\u271310.",
      title: "Morongo Basin weirdness",
      p: "Morongo Basin weirdness",
      link: "/techApplications/10"
    },
    {
      number: "\u271311.",
      title: "Desert Life",
      p: "SANITY IMP",
      link: "/techApplications/11"
    },
    {
      number: "\u271312.",
      title: "Palm Springs Modernism Styles ",
      p: "php- custom themes",
      link: "/techApplications/12"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="list-container" class="bg- 2xl:p-5 2xl:mx-5"> <h2 class="font-semibold 2xl:text-4xl text-3xl pb-2">Case Studies</h2> <!-- <ul>
    <li>The Growing Pup → beginner stage</li>
    <li>The Rising Carnivore → established and growing</li>
    <li>The Alpha → leader / dominant business</li>
  </ul> --> <div id="list-wrapper" class="bg- ml-1 mt-2 pt-2 pl-1 mb-10"> <div id="list-container" class="pl-1"> <div id="websites-grid" class="bg- grid lg:grid-cols-2 grid-cols-1 gap-5"> ${websites.map((item) => renderTemplate`<div id="sq" class="opacity-60 hover:opacity-100 duration-500"> <a${addAttribute(item.link, "href")}> <span class="text-sm">${item.number}</span> <h2 class="text-lg font-">${item.title}</h2> <p class="text-sm ">${item.p}</p> </a> </div>`)} </div> </div> </div> </div> <div id="list-container" class="bg- 2xl:px-5 pt-4 2xl:p- 2xl:mt-[150px] 2xl:mx-5"> <h2 class="font-semibold 2xl:text-4xl text-3xl pb-2">
Tech Applications-about select templates
</h2> <div id="list-wrapper" class="bg- ml-1 pl-1 mb-10"> <div id="list-container" class=""> <div id="screenshots-grid" class="bg- p-1 grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 bg-"> ${screenshots.map((item) => renderTemplate`<div id="sq" class="opacity-60 hover:opacity-100  duration-500"> <a${addAttribute(item.link, "href")}> <span class="text-sm">${item.number}</span> <h2 class="text-xl font-">${item.title}</h2> <p class="text-sm ">${item.p}</p> </a> </div>`)} </div> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/sections/TableContents.astro", void 0);

const $$Astro$2 = createAstro();
const $$TechApplicationCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TechApplicationCard;
  const frontmatter = Astro2.props;
  const { image, alt, url, no } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<div id="CARD" class="bg-"> <div class="bg- pt-1 pb-1 pl- pr-1 saturate-50"> <h3 class="text-lg text-gray-500">${no}.</h3> </div> <div class="bg-"> <div id="sq" class="bg- 2xl:col-span-4"> <a${addAttribute(url, "href")}> <img${addAttribute(image, "src")} class="mt-1 mr-5 rounded opacity-60 hover:opacity-100 duration-500 drop-shadow-xl hover:drop-shadow-3xl border border-cerulean hover:border-gray-600"${addAttribute(alt, "alt")}> </a> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/TechApplicationCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$WebsitePackageCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WebsitePackageCard;
  const frontmatter = Astro2.props;
  const { no, image, alt, url } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<div id="CARD" class="bg- py-5 opacity-80"> <div class="bg- pt-1 pr-l"> <h3 class="text-xl">${no}.</h3> </div> <div class=""> <div id="sq1" class="2xl:col-span-4"> <a${addAttribute(url, "href")}> <img${addAttribute(image, "src")} class="opacity-90 hover:opacity-100 duration-500 mt-1 mr-5 p-1 rounded border bg-[#f9f9f9] border-rosyBrown hover:border-cerulean drop-shadow-xl hover:drop-shadow-3xl"${addAttribute(alt, "alt")}> </a> </div> </div> </div>`;
}, "/home/elsahv/Desktop/official-LC/src/components/WebsitePackageCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const techApplications = await Astro2.glob(/* #__PURE__ */ Object.assign({"./techApplications/05.md": () => import('./05_ceQdYOPv.mjs').then(n => n._),"./techApplications/06.md": () => import('./06_DZ05fOrP.mjs'),"./techApplications/07.md": () => import('./07_DchPMVeF.mjs'),"./techApplications/08.md": () => import('./08_CSclgwKh.mjs').then(n => n._),"./techApplications/09.md": () => import('./09_hFJEaUwC.mjs'),"./techApplications/10.md": () => import('./10_BQhmjk3x.mjs'),"./techApplications/11.md": () => import('./11_BSrQNTZx.mjs')}), () => "./techApplications/*.md");
  const websitePackages = await Astro2.glob(/* #__PURE__ */ Object.assign({"./websitePackages/1.the-growing-pup.md": () => import('./1_CnX_FGph.mjs'),"./websitePackages/2.the-rising-carnivore.md": () => import('./2_BkTXrypL.mjs'),"./websitePackages/3.the-alpha.md": () => import('./3_CyKaHblw.mjs')}), () => "./websitePackages/*.md");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="homepage-wrapper" class=""> ${renderComponent($$result2, "LeftPanel", $$LeftPanel, {})} <div id="RIGHT-PANEL" class="bg-parchment text-carribean medium 2xl:h-screen h-full md:absolute relative right-0 md:w-3/5 w-full md:overflow-y-scroll overflow-x-hidden"> <div id="right-panel-wrapper" class="border-l-2 border border-gray-500"> <div id="right-panel-container" class="bg rounded-bl mr-2 md:p-5"> <div id="" class="p-5"> <!-- <Hero /> --> <div id="BUILD-AUTHORITY-case-studies-grid" class="bg- ml-5 mr-[50px] px-5 grid 2xl:grid-cols-2 gap-5 my- bg-"> <!-- PORTFIOLIO/ PACKAGES --> <!-- SMOOTH TRANSITION BETWEEN KITS, PUP TO CARNIVORE, TO ALPHA  --> ${websitePackages.map((caseStudy) => renderTemplate`${renderComponent($$result2, "WebsitePackageCard", $$WebsitePackageCard, { "no": caseStudy.frontmatter.no, "title": caseStudy.frontmatter.title, "image": caseStudy.frontmatter.image.url, "alt": caseStudy.frontmatter.image.alt, "url": caseStudy.url, "testItem1": caseStudy.frontmatter.testItem1, "language": caseStudy.frontmatter.language, "backend": caseStudy.frontmatter.backend })}`)} </div> <!-- WHAT ALL BUILDS ALSO CAN OFFER, ELABORATE ON THINGS vvvv --> ${renderComponent($$result2, "TableContents", $$TableContents, {})} </div> <div id="expand-on-my-websites-wrapper" class="bg- pb-5 px-5 mx-5"> <div id="expand-on-my-websites-card" class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-1 pl-2 pb-5"> ${techApplications.map((help) => renderTemplate`${renderComponent($$result2, "TechApplicationCard", $$TechApplicationCard, { "no": help.frontmatter.no, "image": help.frontmatter.image.url, "alt": help.frontmatter.image.alt, "url": help.url, "testItem1": help.frontmatter.testItem1, "language": help.frontmatter.language, "backend": help.frontmatter.backend })}`)} </div> </div> </div> ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> </div> </div> ` })}`;
}, "/home/elsahv/Desktop/official-LC/src/pages/index.astro", void 0);

const $$file = "/home/elsahv/Desktop/official-LC/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
