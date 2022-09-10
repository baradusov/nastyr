import S from '@sanity/desk-tool/structure-builder';

export const About = S.listItem()
  .id('about')
  .title('Обо мне/Контакты')
  .child(
    S.editor().documentId('about').title('Обо мне/Контакты').schemaType('about')
  );
