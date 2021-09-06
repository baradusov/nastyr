import React from 'react';
import getYoutubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYoutubeId(url);

  return <YouTube videoId={id} opts={{ width: '100%' }} />;
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [{ name: 'url', type: 'url', title: 'Ссылка на видео' }],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};
