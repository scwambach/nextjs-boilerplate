import React from 'react';
import * as Components from '@/components/pageComponents';
import { colors } from '@/styles/settings';

import styled from 'styled-components';

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const DynamicComponent = (props) => {
  const Component = Components[capitalizeFirstLetter(props._type)];
  return <Component {...props} />;
};

const PageContent = (content) =>
  content.pageContent.map((component, index) => (
    <ScPageContent
      className={`${component._type} pageComponent_${index}`}
      id={`${component._type}_${component._key}_${index}`}
      style={{
        backgroundColor: component.backgroundColor
          ? component.backgroundColor.color
          : colors.white,
      }}
      key={component._key}
    >
      <DynamicComponent
        {...component}
        index={index}
        mainImage={component.backgroundImage || content.mainImage}
      />
    </ScPageContent>
  ));

export default PageContent;

export const ScPageContent = styled.section`
  &:first-child {
    > *,
    > .button {
      margin-top: 0;
    }
  }

  > *,
  > .button {
    margin: 60px 0;
  }
`;
