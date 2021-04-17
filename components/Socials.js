import React, { useContext } from 'react';
import * as Icons from '@meronex/icons/ai';
import styled from 'styled-components';
import { LayoutContext } from './Layout';

const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.AiFillFire />;
  }

  return <IconComponent />;
};

const Socials = () => {
  const { socials } = useContext(LayoutContext);
  return (
    <ScSocials>
      {socials.map((soc) => (
        <li key={soc._id}>
          <a href={soc.link} target="_blank" rel="noopener noreferrer">
            <DynamicFaIcon name={soc.icon} />
          </a>
        </li>
      ))}
    </ScSocials>
  );
};

export default Socials;

export const ScSocials = styled.ul`
  list-style-type: none;
  font-size: 30px;

  li {
    display: inline-block;

    + li {
      margin-left: 5px;
    }
  }
`;
