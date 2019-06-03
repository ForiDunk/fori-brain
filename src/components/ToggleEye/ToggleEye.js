import React from 'react';
import { ReactComponent as EOpen } from './eye-open.svg';
import { ReactComponent as ECrossed } from './eye-crossed.svg';

const defStyles = {
  height: '30px',
  width: 'auto',
};

export default function ToggleEye({ open }) {
  return (
    <>{!open ? <EOpen style={defStyles} /> : <ECrossed style={defStyles} />}</>
  );
}
