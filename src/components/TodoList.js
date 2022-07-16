import React from 'react'
import { Todo } from './Todo';

export const TodoList = ({todoList, onCheckedTodo}) => {
  return (
    <>
        {
            todoList.map(item => 
                <Todo 
                  key={item?.id}
                  todo={item}
                  onCheckedTodo={onCheckedTodo} 
                />
            )
        }
    </>
  )
}
