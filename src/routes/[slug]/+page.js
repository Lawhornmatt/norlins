import markdownit from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';
let metadata;
const mdfm = markdownit().use(markdownItFrontMatter, (fm) => { metadata = JSON.parse(fm) });

export async function load({ params }) { 
    const storycard = await import(`../../../content/${params.slug}.md?raw`);

    const content = mdfm.render(storycard.default);
    const { title, buttons, drink } = metadata;

    return {
        content,
        title,
        buttons,
        drink,
        id: params.slug
    };
};