import React from 'react';
import Link from 'next/link';

const LinkObject = (props) =>
  props.newTab ? (
    <a
      aria-label={props.copy}
      href={props.url}
      target={props.newTab && '_blank'}
      rel={props.newTab && 'noreferrer'}
    >
      {props.copy}
    </a>
  ) : props.url ? (
    <Link href={props.url}>
      <a
        aria-label={props.copy}
        target={props.newTab && '_blank'}
        rel={props.newTab && 'noreferrer'}
      >
        {props.copy}
      </a>
    </Link>
  ) : (
    ''
  );

export default LinkObject;