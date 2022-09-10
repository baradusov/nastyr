export default {
  name: 'about',
  _id: 'about',
  title: 'Обо мне/Контакты',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'delete', 'create' */],
  fields: [
    {
      title: 'Заголовок',
      description: 'Отображается в меню',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Заголовок обязателен'),
      readOnly: true,
    },
    {
      title: 'Алиас страницы',
      description: 'Человекочитаемая ссылка',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Алиас страницы обязателен'),
      readOnly: true,
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Обо мне',
      options: { isHighlighted: true },
    },
    {
      title: 'Ссылки',
      name: 'links',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return Object.assign(
        {},
        {
          title: 'Информация о сайте',
        }
      );
    },
  },
};
