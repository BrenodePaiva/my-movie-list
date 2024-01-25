import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 3px solid ${props => (props.green ? '#189b20' : '#fff')};
  background: ${props => (props.green ? '#189b20' : 'transparent')};
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background: ${props => (props.green ? '#189b20' : '#fff')};
    color: ${props => (props.green ? '#fff' : '#ff0000')};
  }

  &:active {
    opacity: 0.7;
  }
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`

export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #fff;
  }
`
