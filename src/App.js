import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { TodoList } from "./components/TodoList";
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TODO_APP_STORAGE_KEY = "TODO_LIST";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');

  useEffect(()=>{
    const storageTodoList = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY)) || [];
    if(storageTodoList.length > 0) {
      setTodoList((storageTodoList))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  },[todoList])
  
  const handleTextInput = useCallback((e) => {
    setTextInput(e.target.value)
  }, []);

  const handleAddTodo = useCallback(() => {
    setTodoList(
      [
        {id: uuidv4(), name: textInput, isCompleted: false}, 
        ...todoList
      ]
    );
    setTextInput('');
  }, [textInput, todoList]);

  const handleCheckedTodo = useCallback((id) => {
    setTodoList(prevState => prevState.map(
      item => item?.id === id ? {...item, isCompleted: true} : item
    ))    
  },[]);

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder='Nhâp việc cần làm...'
        elemAfterInput={
            <Button
                isDisabled={!textInput}
                appearance='primary'
                onClick={handleAddTodo}
                style={{marginRight: "2px"}}
            >Thêm</Button>
        }
        value={textInput}
        onChange={handleTextInput}
      >
      </Textfield>
      <TodoList todoList={todoList} onCheckedTodo={handleCheckedTodo} />
    </>
  );
}

export default App;
