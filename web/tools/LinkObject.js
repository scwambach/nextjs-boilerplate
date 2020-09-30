import React from 'react';
import Link from 'next/link';

const LinkObject = (props) => {
  return props.newTab ? (
    <a
      href={props.url}
      target={props.newTab && '_blank'}
      rel={props.newTab && 'noreferrer'}
    >
      {props.copy}
    </a>
  ) : (
    <Link href={props.url}>
      <a target={props.newTab && '_blank'} rel={props.newTab && 'noreferrer'}>
        {props.copy}
      </a>
    </Link>
  );
};

export default LinkObject;
