import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title; // Update the title when the component is rendered
  }, [title]);

  return null; // The component doesn't render anything in the DOM
};

export default PageTitle;
