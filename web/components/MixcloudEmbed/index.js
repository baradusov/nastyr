const MixcloudEmbed = (props) => {
  const { url } = props;

  if (!url) {
    return <p>Не указана ссылка на микс</p>;
  }

  const relativeUrl = new URL(url).pathname;

  return (
    <div>
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
};

export default MixcloudEmbed;
