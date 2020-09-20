import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import React from "react";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="bold">{text}</span>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

const ContentfulRichText = (props: { document: Document }) => {
  return <>{documentToReactComponents(props.document, options)}</>;
};

export default ContentfulRichText;
