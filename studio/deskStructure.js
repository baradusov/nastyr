import S from '@sanity/desk-tool/structure-builder';

import { SettingsMenu, PagesMenu, Mixes } from './structure/index';

export default () =>
  S.list()
    .title('Контент')
    .id('content')
    .items([PagesMenu, Mixes, S.divider(), SettingsMenu]);
