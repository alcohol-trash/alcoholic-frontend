/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

interface StyledProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  width?: number;
  height?: number;
  bgcolor?: string;
  btncolor?: string;
  fontweight?: number;
  bordercolor?: string;
  borderradius?: number;
  textalign?: 'start' | 'end';
  content?: string;
  style?: React.CSSProperties;
}

/**
 * @required content(string)
 * @optional Excluding require
 */
const CustomButton = ({
  type,
  width,
  height,
  content,
  onClick,
  bgcolor,
  btncolor,
  fontweight,
  textalign,
  bordercolor,
  borderradius,
  style,
}: StyledProps) => {
  return (
    <ButtonWrap
      width={width}
      height={height}
      bgcolor={bgcolor}
      fontweight={fontweight}
      btncolor={btncolor}
      bordercolor={bordercolor}
      textalign={textalign}
      borderradius={borderradius}
    >
      <button type={type} onClick={onClick} style={style}>
        {content}
      </button>
    </ButtonWrap>
  );
};

export default CustomButton;

const ButtonWrap = styled.div<StyledProps>`
  /* padding: 0 0 0 10px; */
  button {
    background-color: ${(props) => (props.bgcolor ? `${props.bgcolor}` : 'inherit')};
    color: ${(props) => (props.btncolor ? `${props.btncolor}` : 'inherit')};
    border: ${(props) => (props.bordercolor ? `1px solid ${props.bordercolor}` : 'none')};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    text-align: ${(props) => (props.textalign ? `${props.textalign}` : 'center')};
    font-weight: ${(props) => (props.fontweight ? `${props.fontweight}` : 500)};
    border-radius: ${(props) => (props.borderradius ? `${props.borderradius}` : 'none')};
    padding: 10px;
    cursor: pointer;
    border-radius: var(--br-6);
  }
  button:hover {
    /* color: white; */
    /* background-color: #0065e1; */
  }
`;
