import styled from 'styled-components'

export const Checkbox = styled.input`
  display: none;

  &:checked + label {
    border-color: #ddd;
  }
  
  &:checked + label:before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }

  &:checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #333;
    z-index: -1;
  }
`

export const ItemList = styled.li`
  display: inline-block;
`

export const LabelImage = styled.label`
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;

  &::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
  }

  & img {
    height: 50px;
    width: 50px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }
`

export const Label = styled.label`
  text-transform: capitalize;
`
