import React from 'react'
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
import Button from '@atlaskit/button';

const ButtonStyle = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,
  &:hover {
    ${props => props.$isCompleted && css`
      text-decoration: line-through;
      text-decoration-color: #f00;
    `}
  };
  

  .check-icon {
    display: none;

    &:hover {
      background-color: #ccc;
      border-radius: 3px;  
    };
  };
  
  &:hover {
    .check-icon {
      display: inline-block;
    }
  };

`;

export const Todo = ({todo, onCheckedTodo}) => {
  return (
    <ButtonStyle
      $isCompleted = {todo?.isCompleted}
      shouldFitContainer
      iconAfter={!todo?.isCompleted && (
        <span 
          className='check-icon'
          onClick={()=>onCheckedTodo(todo?.id)}
        >
          <CheckIcon primaryColor="#47ff00" />
        </span>
      )}
    >
        {todo?.name}
    </ButtonStyle>
  )
}
