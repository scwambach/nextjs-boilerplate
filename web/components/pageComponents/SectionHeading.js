import React from 'react';
import RichText from '../RichText';
import Wrapper from '../../tools/Wrapper';
import styled from 'styled-components';

const SectionHeading = ({ heading, copy }) => {
  return (
    <SSectionHeading>
      <Wrapper narrow>
        {heading && <h2>{heading}</h2>}
        {copy && <RichText content={copy} />}
      </Wrapper>
    </SSectionHeading>
  );
};

export default SectionHeading;

const SSectionHeading = styled.div`
  text-align: center;
`;
