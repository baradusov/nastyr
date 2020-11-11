import S from '@sanity/desk-tool/structure-builder';

export const Mixes = S.listItem()
  .id('mixes')  
  .title('Миксы')
  .child(
    S.editor()
    .documentId('mixes')
    .title('Миксы')
    .schemaType('mixes')
  );
