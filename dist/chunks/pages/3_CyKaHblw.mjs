/* empty css                          */
import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from '../astro_DjjsqpOI.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$WebsitePackageMarkdown } from './08_CSclgwKh.mjs';

const html = "<!-- One small improvement to strongly consider:\nYou could add one exclusive feature to Alpha that the other packages never get, like:\nCustom CMS dashboards\nAdvanced animations\nConversion-focused strategy session\nOngoing support for 30 days\nThat makes Alpha feel elite, not just “more pages.” -->";

				const frontmatter = {"no":"03","layout":"../../layouts/WebsitePackageMarkdown.astro","testItem1":"This is the The Growing Pup kit. Here's what we have to offer:","image":{"url":"https://dl.dropboxusercontent.com/scl/fi/ofaszetg60epvok8kpdh0/rq-1-11-23.png?rlkey=8t41ceft4umwmot1nzdt3mnj7&st=mmux5w3p&dl=0","alt":"PHP & wordpress theme projec``ts"},"secondImage":{"url":"https://dl.dropboxusercontent.com/scl/fi/ofaszetg60epvok8kpdh0/rq-1-11-23.png?rlkey=8t41ceft4umwmot1nzdt3mnj7&st=mmux5w3p&dl=0","alt":"PHP & wordpress theme projects"},"title":"The Alpha","paragraph":"For businesses ready to dominante their social presence","aboutTemplate":"About this template kit-ttttt","offers":"offers:a single pg template, 5 sections: not a experiment. It’s a trust machine. no frills.","problemSolve":"This is was what Laughing Coyote Dev was created for, to save you some headaches that come with learning about:","solveListItem1":"how to design a website","solveListItem2":"how to pick a domain and use hosting","aboutImage":{"url":"https://images.pexels.com/photos/35572940/pexels-photo-35572940.jpeg?_gl=1*1jg1wwm*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM1NDAyJGoxNSRsMCRoMA..","alt":"PHP & wordpress theme projects"},"includedTitle":"8–12 pages","includedPageItem1":"Strategy session","includedPageItem2":"Custom layouts","includedPageItem3":"full custom CMS site with more power","includedPageItem4":"Newsletter / email integration","includedPageItem5":"Analytics setup","includedPageItem6":"Advanced interactions or animations","includedPageItem7":"3 revision rounds","includedPageItem8":"Priority support","bonusPageItem1":"1 test","bonusPageItem2":"2 test","bonusPageItem3":"3 test","bonusPageItem4":"4 test","imgForPagesOffered":"https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?_gl=1*1t1jfmh*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzI3NTQ2ODkkbzM2JGcxJHQxNzcyNzU0NzAzJGo0NiRsMCRoMA..","newCtaTitle":"THE RUNNING QUAIL","newCtaListItem1":" Increased potential customers, easier to find on Google","newCtaListItem2":" The ablity to tell your story and brand","newCtaListItem3":"Peace of mind... for business owners who do not have time to build with software","newCtaListItem4":"A custom website that fits your business, personality, goals...and you alone.","clientSiteLink":"https://hoveyroofing.com","newCTAImg":"https://images.pexels.com/photos/32907278/pexels-photo-32907278.jpeg?_gl=1*63lshe*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM1NDAyJGoxNSRsMCRoMA..","otherPgTitle1":"The Growing Pup","otherPgTitle2":"The Rising Carnivore","otherPgLink1":"/websitePackages/1.the-growing-pup","otherPgLink2":"/websitePackages/2.the-rising-carnivore","EndGalleryImg1":"https://dl.dropboxusercontent.com/scl/fi/jtfnbqyqk5ly03x5kspuz/wtbh-3-26-24.png?rlkey=0igc90thtm07w1i9cardfeu3h&st=7m58a2i4&dl=0","EndGalleryImg2":"https://dl.dropboxusercontent.com/scl/fi/https://www.dropbox.com/scl/fi/r2memu9vr71tw03oe57kz/IMG_0300.jpg?rlkey=k9upvwvx4vudmyv88f8srhxlu&st=9jqc6rlj&dl=0","EndGalleryImg3":"https://dl.dropboxusercontent.com/scl/fi/oraxtrdwq2apy6x4f87xj/fish-screenshot.jpg?rlkey=8woeczr9d8n7gqpqfbbnayb9e&st=bv1bc7kp&dl=0","EndGalleryImg4":"https://dl.dropboxusercontent.com/scl/fi/7a3l8ubz95eom7np54z39/2-23-25.png?rlkey=l0v1smbmzd7vqdpyt7mh708xh&st=vzxtp941&dl=0"};
				const file = "/home/elsahv/Desktop/official-LC/src/pages/websitePackages/3.the-alpha.md";
				const url = "/websitePackages/3.the-alpha";
				function rawContent() {
					return "\n<!-- One small improvement to strongly consider:\nYou could add one exclusive feature to Alpha that the other packages never get, like:\nCustom CMS dashboards\nAdvanced animations\nConversion-focused strategy session\nOngoing support for 30 days\nThat makes Alpha feel elite, not just “more pages.” -->\n";
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
