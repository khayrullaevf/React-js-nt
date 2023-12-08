import React, { useReducer } from "react";
import { useEffect } from "react";

const initialState = {
  items: JSON.parse(localStorage.getItem("todoList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items:state.items.filter((item,index)=>index!==action.payload)
      };

    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (text) => {
    dispatch({ type: "ADD_ITEM", payload: text });
  };
  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state.items));
  }, [state.items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target.task.value.trim();
    if (inputValue !== "") {
      addItem(inputValue);
      e.target.reset();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo</h1>

      <form className="d-flex mt-2" onSubmit={handleSubmit}>
        <input
          className="form-control me-3"
          type="text"
          name="task"
          placeholder="enter task"
        />
        <button className="btn btn-primary " type="submit">
          add
        </button>
      </form>
      {state.items.map((todo, index) => (
        <div className="d-flex justify-content-between mt-5" key={index}>
          <h1>
            {index + 1}.{todo}
          </h1>
          <button onClick={()=>removeItem(index)} className="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
