import S from '@sanity/desk-tool/structure-builder';

import { SettingsMenu, PagesMenu, Mixes, About } from './structure/index';

export default () =>
  S.list()
    .title('Контент')
    .id('content')
    .items([PagesMenu, Mixes, S.divider(), About, SettingsMenu]);
