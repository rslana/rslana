import React from "react";

const ExternalLink = ({ children, ...rest }) => {
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
