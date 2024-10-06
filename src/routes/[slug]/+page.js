import markdownit from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';
let metadata;
// Point mdfm to the markdownit parser, 
// which includes a call-back function on the frontmatter,
// that sets metadata to that frontmatter data via side-effect
// NOTE: I really dont like this roundabout method here, but as far as I can tell reading the docs & its examples, this is the way the markdownit is set up?
const mdfm = markdownit().use(markdownItFrontMatter, (fm) => { metadata = JSON.parse(fm) });

export async function load({ params }) { 
    // Pull in the raw markdown here
    const storycard = await import(`../../../content/${params.slug}.md?raw`);

    // Set content to the main markdown info
    // and via the previous call-back function, set metadata to the frontmatter data
    const content = mdfm.render(storycard.default);
    const { title, buttons, drink } = metadata;

    // This is the data object brought in via 'export let data' 
    return {
        content,
        title,
        buttons,
        drink,
        id: params.slug
    };
};