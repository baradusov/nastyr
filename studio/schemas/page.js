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
      title: 'Фотографии',
      name: 'images',
      description: 'Минимум одна фотография',
      type: 'array',
      of: [
        {
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
      ],
      validation: (Rule) =>
        Rule.required().error('Выберите как минимум одну фотографию'),
    },
    {
      title: 'Описание раздела',
      name: 'description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(400).error('Максимум 400 символов'),
    },
  ],
};
