export default {
  name: 'mainPhoto',
  _id: 'mainPhoto',
  title: 'Настройки сайта',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete', */],
  fields: [
    {
      title: 'Фотография на главной',
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return Object.assign(
        {},
        {
          title: 'Фотография на главной',
        }
      );
    },
  },
};
