import React from 'react';

const PlayerEmbed = (props) => {
  const { url } = props.value;

  if (!url) {
    return <p>Не указана ссылка на микс</p>;
  }

  if (url.includes('soundcloud')) {
    return <SoundcloudEmbed {...props} />;
  }

  return <MixcloudEmbed {...props} />;
};

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
          width="90%"
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

const SoundcloudEmbed = (props) => {
  try {
    const { url } = props.value;

    if (!url) {
      return <p>Не указана ссылка на микс</p>;
    }

    return (
      <div style={{ width: '100%', paddingRight: 30, cursor: 'pointer' }}>
        <iframe
          width="90%"
          height="60"
          scrolling="no"
          frameBorder="0"
          src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`}
        ></iframe>
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
        Rule.required().error('Добавьте, как минимум, один микс'),
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
            component: PlayerEmbed,
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
    {
      title: 'Отображать на сайте',
      name: 'enabled',
      type: 'boolean',
    },
  ],
};
