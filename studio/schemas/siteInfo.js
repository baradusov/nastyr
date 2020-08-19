export default {
  name: 'siteInfo',
  _id: 'siteInfo',
  title: 'Настройки сайта',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete', */],
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return Object.assign({}, {
        title: 'Информация о сайте'
      })
    }
  }
};
