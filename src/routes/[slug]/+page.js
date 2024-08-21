// import { titles } from '/content/0_titles.js';
// import storytext from '/content/storytext/B1.md?raw';

export async function load({ params }) { 
    const storycard = await import(`../../../content/${params.slug}.md?raw`);
    // const { title, date } = storycard.metadata;
    const content = storycard.default;

    return {
        content,
        // title,
        // date,
        id: params.slug,
        // title: titles[`${params.slug}`],
    };
};