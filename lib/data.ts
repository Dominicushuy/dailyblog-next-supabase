import { IBlogDetail } from './types'

export const blogDeafultValue = `
## Serendipity Chronicles: Tales from a Random Blog

As we wrap up our adventures, let's reflect on the serendipitous moments that defined this journey. The JavaScript snippet below captures a moment of serendipity in code:

\`\`\`js @app/lib/serendipityMoments.js
const serendipityMoments = [
  "Unexpectedly meeting a fellow adventurer",
  "Discovering a hidden gem in a random location",
  "Finding the perfect solution when least expected"
];

const randomSerendipity = serendipityMoments[Math.floor(Math.random() * serendipityMoments.length)];
console.log(\`Serendipity at its finest: \${randomSerendipity}\`);
\`\`\`
`

export const defaultCreateBlog: IBlogDetail = {
  id: '',
  title: '',
  image_url: '',
  created_at: '',
  is_premium: false,
  is_published: true,
  blog_content: {
    created_at: '',
    content: '',
    blog_id: '',
  },
}
