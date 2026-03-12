/* empty css                          */
import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$WebsitePackageMarkdown } from './08_CSclgwKh.mjs';

const html = "<p><a href=\"https://www.dropbox.com/scl/fi/dzvujuzdimj3xnip7fyte/justin-morgan-ZjX-z2Q5zrk-unsplash.jpg?rlkey=a3n068f8ptyje57kto3onxza6&#x26;st=xkn6xln5&#x26;dl=0\">https://www.dropbox.com/scl/fi/dzvujuzdimj3xnip7fyte/justin-morgan-ZjX-z2Q5zrk-unsplash.jpg?rlkey=a3n068f8ptyje57kto3onxza6&#x26;st=xkn6xln5&#x26;dl=0</a></p>\n<ul>\n<li>WTBH- “an illustrative blog about cooking and nutrition for neurodivergents TIE IN HORROR STORY? HORROR STORY IDEA: TIES IN NUTRITION WITH EVER INCREASING WEEKLY DEATHS, AND ATTENTION DEFICITS”</li>\n</ul>\n <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://10web.io/wp-content/uploads/2024/06/WordPress-dashboard.jpg\" alt=\"PHP &#x26; wordpress theme projects\" class=\"mb-5 rounded border border-gray-400 my-5\">\n</a>\n<h2 class=\"text-xl\">Jungle- a horror-themed botany journal horrow storytelling</h2>\n<p>\"OK.... WHAT IF I DO A STORY ABOUT HAUNTED DOLLS, AND RESEARCHING HAUNTED DOLLS BACKSTORIES, AND HOSTING A DOLL 'ZOO' OF SOME SORT? AND MAINTAINING A LIFESTYLE, plants and fish BLOG TO KEEP UP SANITY AND EASES DEPRESSION??</p> \n - Lorem r dolor repellendus libero aperiam quibusdam in, aliquam iusto quidem quo minima rerum fugit a odit quia. \n   <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg\" alt=\"The Indoor Jungle Project\" class=\"border border-black rounded py-4\">\n  </a> \n - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga culpa ducimus nulla tenetur";

				const frontmatter = {"id":1,"layout":"../../layouts/WebsitePackageMarkdown.astro","no":"09","title":"reasons I use wordpress and its extenstions","pubDate":"2022-07-01T00:00:00.000Z","testItem1":"","image":{"url":" https://dl.dropboxusercontent.com/scl/fi/dzvujuzdimj3xnip7fyte/justin-morgan-ZjX-z2Q5zrk-unsplash.jpg?rlkey=a3n068f8ptyje57kto3onxza6&st=xkn6xln5&dl=0-","alt":"PHP & wordpress theme projects"},"secondImage":{"url":"https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29yZHByZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500","alt":"PHP & wordpress theme projects"},"websiteUrl":"https://therunningquail.com","githubUrl":"https://github.com/elsahv/-the-running-quail","tags":["astro","blogging","learning in public"],"language":"react","backend":"full-stack"};
				const file = "/home/elsahv/Desktop/official-LC/src/pages/techApplications/09.md";
				const url = "/techApplications/09";
				function rawContent() {
					return "\nhttps://www.dropbox.com/scl/fi/dzvujuzdimj3xnip7fyte/justin-morgan-ZjX-z2Q5zrk-unsplash.jpg?rlkey=a3n068f8ptyje57kto3onxza6&st=xkn6xln5&dl=0\n\n- WTBH- \"an illustrative blog about cooking and nutrition for neurodivergents TIE IN HORROR STORY? HORROR STORY IDEA: TIES IN NUTRITION WITH EVER INCREASING WEEKLY DEATHS, AND ATTENTION DEFICITS\"\n\n <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://10web.io/wp-content/uploads/2024/06/WordPress-dashboard.jpg\" alt=\"PHP & wordpress theme projects\" class=\"mb-5 rounded border border-gray-400 my-5\" />\n</a>\n\n<h2 class=\"text-xl\">Jungle- a horror-themed botany journal horrow storytelling</h2>\n<p>\"OK.... WHAT IF I DO A STORY ABOUT HAUNTED DOLLS, AND RESEARCHING HAUNTED DOLLS BACKSTORIES, AND HOSTING A DOLL 'ZOO' OF SOME SORT? AND MAINTAINING A LIFESTYLE, plants and fish BLOG TO KEEP UP SANITY AND EASES DEPRESSION??</p> \n - Lorem r dolor repellendus libero aperiam quibusdam in, aliquam iusto quidem quo minima rerum fugit a odit quia. \n   <a href=\"https://writingtobetterhealth.com\" target=\"_blank\">\n  <img src=\"https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg\" alt=\"The Indoor Jungle Project\" class=\"border border-black rounded py-4 \"/>\n  </a> \n - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga culpa ducimus nulla tenetur\n";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$WebsitePackageMarkdown, {
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
