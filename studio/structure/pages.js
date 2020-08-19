import S from '@sanity/desk-tool/structure-builder';

export const PagesMenu = S.listItem()
  .title('Страницы')
  .id('pagesMenu')
  .child(
    S.documentTypeList('page')
      .title('Страницы')
      .id('pagesList')
      .menuItems(S.documentTypeList('page').getMenuItems())
      .filter('_type == $type')
      .params({ type: 'page' })
  );