import React from 'react';

const Excerpt = ({ content }) => {
  const truncString = (contentArr) => {
    const newString = [];

    console.log(contentArr);

    contentArr.forEach((block) => {
      if (block.style === 'normal') {
        block.children.forEach((textObject) => {
          if (textObject.text !== '') {
            newString.push(textObject.text);
          }
        });
      }
    });

    return newString.join().substring(0, 400).concat('...');
  };

  return <p>{truncString(content)}</p>;
};

export default Excerpt;
