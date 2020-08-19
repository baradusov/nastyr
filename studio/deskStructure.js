import S from '@sanity/desk-tool/structure-builder';

import { SettingsMenu, PagesMenu } from './structure/index';

export default () =>
  S.list()
    .title('Контент')
    .id('content')
    .items([PagesMenu, S.divider(), SettingsMenu]);
