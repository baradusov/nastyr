import { getContentPages } from '../../lib/api';

export default async (req, res) => {
  const pages = await getContentPages();
  const disabledPages = pages.filter((page) => page.enabled === false);
  let disallowedPages = '';

  for (let disabledPage of disabledPages) {
    disallowedPages += `Disallow: /${disabledPage.slug}\n`;
  }

  const txt = `
User-agent: *
${disallowedPages}
`;

  res.setHeader('Content-Type', 'text/plain');
  res.send(txt);
};
