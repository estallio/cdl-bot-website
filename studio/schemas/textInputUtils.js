import React from 'react';
import { AiOutlineLink, AiOutlineFileAdd } from 'react-icons/ai';

export const linkIcon = () => (
  <span>
    <AiOutlineLink />
  </span>
)

export const linkRenderer = (props) => (
  <span>
    {props.children}
  </span>
)

export const fileIcon = () => (
  <span>
    <AiOutlineFileAdd />
  </span>
)

export const fileRenderer = (props) => (
  <span>
    {props.children}
  </span>
)

export const blueBoxLinkIcon = () => (
  <span style={{ padding: '5px 5px 1px 5px', borderRadius: 3, backgroundColor: '#00314C', color: '#FFF' }}>
    <AiOutlineLink />
  </span>
)

export const blueBoxLinkRender = (props) => (
  <span style={{ backgroundColor: '#00314C', color: '#FFF' }}>
    {props.children}
  </span>
)

export const blueBoxFileIcon = () => (
  <span style={{ padding: '5px 5px 1px 5px', borderRadius: 3, backgroundColor: '#00314C', color: '#FFF' }}>
    <AiOutlineFileAdd />
  </span>
)

export const blueBoxFileRender = (props) => (
  <span style={{ backgroundColor: '#00314C', color: '#FFF' }}>
    {props.children}
  </span>
)
