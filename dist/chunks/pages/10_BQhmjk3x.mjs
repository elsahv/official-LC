/* empty css                          */
import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$WebsitePackageMarkdown } from './08_CSclgwKh.mjs';

const html = "<ul>\n<li>RUNNING QUAIL: DESERT STORYTELLING- both truth and fiction, What if I created a experimental, storytelling- both fiction and truth board? Based in Morongo Basin? I personally weave DESERT STORIES stories with POLYMER CLAY PROJECTS? combine love of high desert community with the goal of keeping small businesses in touch.</li>\n<li></li>\n<li></li>\n<li></li>\n</ul>\n<img src=\"https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&#x26;st=46k5gk9p&#x26;dl=0\" alt=\"The Running Quail\" class=\"border border-black mb-5\">\n<img src=\"https://images.pexels.com/photos/32911575/pexels-photo-32911575/free-photo-of-tropical-pool-with-floating-plumeria-flowers.jpeg?auto=compress&#x26;cs=tinysrgb&#x26;w=1260&#x26;h=750&#x26;dpr=1\" alt=\"MISC PROJECTS\">\n<ul>\n<li>this PORTFOLIO</li>\n<li>OTHER SMALL PROJECTS: MISC</li>\n</ul>";

				const frontmatter = {"id":4,"layout":"../../layouts/WebsitePackageMarkdown.astro","no":"✓10","title":"How does Sanity.Ios elevate Laughing Coyote Dev? How would it elevate your site?","pubDate":"2022-07-01T00:00:00.000Z","testItem1":"about what I can do with react and javascript ","image":{"url":"https://dl.dropboxusercontent.com/scl/fi/1fymcmou8ubj4fewvgfxp/sanity.png?rlkey=ilp3p7xe5hcpma4d29gjkjsfy&st=omgdqvdc&dl=0","alt":"PHP & wordpress theme projects"},"secondImage":{"url":"https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg?_gl=1*1ds56fj*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTA0MzIkajMwJGwwJGgw","alt":"PHP & wordpress theme projects"},"websiteUrl":"https://theindoorjungleproject.com","githubUrl":"https://github.com/elsahv/-the-running-quail","tags":["astro","blogging","learning in public"],"language":"php","backend":"wp"};
				const file = "/home/elsahv/Desktop/official-LC/src/pages/techApplications/10.md";
				const url = "/techApplications/10";
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
