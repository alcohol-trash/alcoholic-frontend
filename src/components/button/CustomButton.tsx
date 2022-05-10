import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

interface StyledProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  width?: number;
  height?: number;
  bgcolor?: string;
  btncolor?: string;
  bordercolor?: string;
  fontsize?: string;
  fontweight?: number;
  textalign?: 'start' | 'end';
  content?: string;
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
  fontsize,
  fontweight,
  btncolor,
  textalign,
  bordercolor,
}: StyledProps) => {
  return (
    <ButtonWrap
      width={width}
      height={height}
      bgcolor={bgcolor}
      btncolor={btncolor}
      bordercolor={bordercolor}
      textalign={textalign}
      fontsize={fontsize}
      fontweight={fontweight}
    >
      <button type={type} onClick={onClick}>
        {content}
      </button>
    </ButtonWrap>
  );
};

export default CustomButton;

const ButtonWrap = styled.div<StyledProps>`
  /* padding: 0 0 0 10px; */
  button {
    background-color: ${(props) =>
      props.bgcolor ? `${props.bgcolor}` : 'inherit'};
    color: ${(props) => (props.btncolor ? `${props.btncolor}` : 'inherit')};
    font-size: ${(props) => (props.fontsize ? `${props.fontsize}` : '14px')};
    font-weight: ${(props) => (props.fontweight ? `${props.fontweight}` : '500')};
    border: ${(props) =>
      props.bordercolor ? `1px solid ${props.bordercolor}` : 'none'};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    text-align: ${(props) =>
      props.textalign ? `${props.textalign}` : 'center'};
    padding: 10px;
    cursor: pointer;
    border-radius: var(--br-6);
  }
  button:hover {
    /* color: white; */
    /* background-color: #0065e1; */
  }
`;