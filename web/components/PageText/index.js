import BlockContent from '@sanity/block-content-to-react';

const PageText = (props) => {
  const { content, className } = props;

  if (!content) return null;

  const serializers = {
    marks: {
      link: (props) => {
        return (
          <a href={props.mark.href} target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        );
      },
    },
  };

  return (
    <BlockContent
      className={className}
      blocks={content}
      serializers={serializers}
    />
  );
};

export default PageText;
