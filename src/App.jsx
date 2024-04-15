import { useState } from "react";
import Form from "./Form";
import "./global.css";
import { v4 as uuidv4 } from "uuid";
//import TodoList from "./TodoList";
import TodoList from './TodoList'; 

 
const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "",
    trainer: "",
    id: uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: state.id,
      course: state.course,
      trainer: state.trainer,
    };

    let finalItems = [...state.items, newItem];

    setState({
      items: finalItems,
      id: uuidv4(),
      course: "",
      trainer: "",
    });
  };

  console.log(state);
  let handleDelete =(x)=>{
    let filteredItem = state.items.filter(item=>item.id!=x)
    console.log(filteredItem);
    setState({...state,items:filteredItem})
  };
  let handleUpdate =(y)=>{
    let restItem = state.items.filter((item)=>value.id!=y)
    let selectedItem = state.items.find((item)=>value.id==y)
    setState({...state,
        items: restItem,
        coures: selectedItem.coures,
        trainer: selectedItem.trainer
    });


  };

  return (
    <>
      <article>
        <h1>ToDo List</h1>
        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={state.items} handleDelete={handleDelete}/>
        </main>
      </article>
    </>
  );
};

export default App;
