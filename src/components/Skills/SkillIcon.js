// SkillIcon.js
import React from 'react';

const SkillIcon = ({ iconCode, altText }) => {
  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: iconCode }} />
      <p>{altText}</p>
    </div>
  );
};

export default SkillIcon;
