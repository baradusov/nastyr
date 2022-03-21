const SoundcloudEmbed = (props) => {
  const { url } = props;

  if (!url) {
    return <p>Не указана ссылка на микс</p>;
  }

  return (
    <div>
      <iframe
        width="100%"
        height="60"
        scrolling="no"
        frameBorder="0"
        src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    </div>
  );
};

export default SoundcloudEmbed;
