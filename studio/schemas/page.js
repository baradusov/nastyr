export default {
  name: 'page',
  title: 'Страница',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      description: 'Отображается в меню',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Заголовок обязателен'),
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
    },
    {
      title: 'Контент',
      name: 'images',
      description: 'Минимум одна фотография',
      type: 'array',
      of: [
        {
          title: 'Фото',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Описание',
              options: { isHighlighted: true },
            },
          ],
        },
        {
          title: 'Текст',
          name: 'textPost',
          type: 'object',
          fields: [
            {
              name: 'body',
              type: 'blockContent',
              title: 'Текст',
              options: { isHighlighted: true },
            },
          ],
          preview: {
            select: { title: 'body' },
          },
        },
        {
          type: 'youtube',
        },
      ],
      validation: (Rule) =>
        Rule.required().error('Выберите как минимум одну фотографию'),
    },
    {
      title: 'Описание раздела',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.max(400).error('Максимум 400 символов'),
    },
    {
      title: 'Фотография для меню на главной',
      name: 'menuImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Отображать в меню',
      name: 'enabled',
      type: 'boolean',
    },
  ],
};
