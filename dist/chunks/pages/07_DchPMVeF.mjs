/* empty css                          */
import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$TestCaseStudyMarkdown } from './05_ceQdYOPv.mjs';

const html = "<ul>\n<li>WTBH- “an illustrative blog about cooking and nutrition for neurodivergents TIE IN HORROR STORY? HORROR STORY IDEA: TIES IN NUTRITION WITH EVER INCREASING WEEKLY DEATHS, AND ATTENTION DEFICITS”\n<a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n</a></li><a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n</a></ul><a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n<img src=\"https://10web.io/wp-content/uploads/2024/06/WordPress-dashboard.jpg\" alt=\"PHP &#x26; wordpress theme projects\" class=\"mb-5 rounded border border-gray-400 my-5\">\n</a>\n<h2 class=\"text-xl\">Jungle- a horror-themed botany journal horrow storytelling</h2>\n<p>\"OK.... WHAT IF I DO A STORY ABOUT HAUNTED DOLLS, AND RESEARCHING HAUNTED DOLLS BACKSTORIES, AND HOSTING A DOLL 'ZOO' OF SOME SORT? AND MAINTAINING A LIFESTYLE, plants and fish BLOG TO KEEP UP SANITY AND EASES DEPRESSION??</p> - Lorem r dolor repellendus libero aperiam quibusdam in, aliquam iusto quidem quo minima rerum fugit a odit quia.\n <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg\" alt=\"The Indoor Jungle Project\" class=\"border border-black rounded py-4\">\n  </a> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga culpa ducimus nulla tenetur";

				const frontmatter = {"id":1,"layout":"../../layouts/TestCaseStudyMarkdown.astro","no":"✓07","title":"rq-community driven- tie into full stack","pubDate":"2022-07-01T00:00:00.000Z","testItem1":"","image":{"url":"https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?_gl=1*jwvmul*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NjIyODU2NjAkbzYkZzEkdDE3NjIyODcyMDMkajYkbDAkaDA.","alt":"rq-community driven"},"secondImage":{"url":"https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg?_gl=1*1ds56fj*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTA0MzIkajMwJGwwJGgw","alt":"PHP & wordpress theme projects"},"websiteUrl":"https://therunningquail.com","githubUrl":"https://github.com/elsahv/-the-running-quail","tags":["astro","blogging","learning in public"],"language":"react","backend":"full-stack"};
				const file = "/home/elsahv/Desktop/official-LC/src/pages/techApplications/07.md";
				const url = "/techApplications/07";
				function rawContent() {
					return "\n- WTBH- \"an illustrative blog about cooking and nutrition for neurodivergents TIE IN HORROR STORY? HORROR STORY IDEA: TIES IN NUTRITION WITH EVER INCREASING WEEKLY DEATHS, AND ATTENTION DEFICITS\"\n<a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n<img src=\"https://10web.io/wp-content/uploads/2024/06/WordPress-dashboard.jpg\" alt=\"PHP & wordpress theme projects\" class=\"mb-5 rounded border border-gray-400 my-5\" />\n</a>\n<h2 class=\"text-xl\">Jungle- a horror-themed botany journal horrow storytelling</h2>\n<p>\"OK.... WHAT IF I DO A STORY ABOUT HAUNTED DOLLS, AND RESEARCHING HAUNTED DOLLS BACKSTORIES, AND HOSTING A DOLL 'ZOO' OF SOME SORT? AND MAINTAINING A LIFESTYLE, plants and fish BLOG TO KEEP UP SANITY AND EASES DEPRESSION??</p> - Lorem r dolor repellendus libero aperiam quibusdam in, aliquam iusto quidem quo minima rerum fugit a odit quia.\n <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg\" alt=\"The Indoor Jungle Project\" class=\"border border-black rounded py-4 \"/>\n  </a> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga culpa ducimus nulla tenetur\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
