import React from 'react';

const MixcloudEmbed = (props) => {
  try {
    const { url } = props.value;

    if (!url) {
      return <p>Не указана ссылка на микс</p>;
    }

    const relativeUrl = new URL(url).pathname;

    return (
      <div style={{ width: '100%', paddingRight: 30, cursor: 'pointer' }}>
        <iframe
          width="100%"
          height="60"
          src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${encodeURIComponent(
            relativeUrl
          )}`}
          frameBorder="0"
        />
      </div>
    );
  } catch (error) {
    return <p>Какая-то неправильная у вас ссылка</p>;
  }
};

export default {
  name: 'mixes',
  title: 'Миксы',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
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
      readOnly: true,
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Алиас страницы обязателен'),
    },
    {
      title: 'Миксы',
      name: 'mixes',
      description: 'Минимум один микс',
      type: 'array',
      validation: (Rule) =>
        Rule.required().error('Выберите как минимум одну фотографию'),
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Ссылка на микс',
              name: 'url',
              type: 'url',
            },
          ],
          preview: {
            select: {
              url: 'url',
            },
            component: MixcloudEmbed,
          },
        },
      ],
    },
    {
      title: 'Фотография для меню на главной',
      name: 'menuImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
