import S from '@sanity/desk-tool/structure-builder';

export const SettingsMenu = S.listItem()
  .title('Настройки')
  .id('settingsMenu')
  .child(
    S.list()
      .title('Настройки')
      .id('settingsList')
      .items([
        S.documentListItem()
          .title('Информация о сайте')
          .id('siteInfo')
          .schemaType('siteInfo'),
        S.documentListItem()
          .title('Фото на главной')
          .id('mainPhoto')
          .schemaType('mainPhoto'),
      ])
  );
