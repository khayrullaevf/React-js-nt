import { useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoItem from "../components/TodoItem";

const Homepage = () => {

  const todosJSON=localStorage.getItem('todos')





  const todoinputRef = useRef();
  const timeinputRef = useRef();

  const [todos, setTodos] = useState(JSON.parse(todosJSON)||[]);
  const [selected,setSelected]=useState(null)

  const submit = (e) => {
    e.preventDefault();
    

    const title = todoinputRef.current.value.trim();
    const time = timeinputRef.current.value.trim();

    if(title&&time){
      const todo = {
        id: String(Date.now()),
        title,
        time,
        done: false,
      };
      let newTodos;
      if (selected===null) {
        //add todo
        newTodos = [todo, ...todos];
      }else{
        //edit todo
        newTodos=todos.map(element=>element.id===selected?{...element,title,time}:element);
        setSelected(null)
      }

       setTodos(newTodos);

       localStorage.setItem('todos',JSON.stringify(newTodos))


  todoinputRef.current.focus()
       e.target.reset();

      
    }else{
      window.alert('Please fill!')
    }

    
  };
  
  const doneTodo=(id)=>{
    const newTodos=todos.map(todo=>todo.id===id?{...todo,done:true}:todo);
    setTodos(newTodos)

  }

  const deleteTodo=(id)=>{
   const newTodos=todos.filter((todo)=>todo.id!==id)
   setTodos(newTodos)
  }

  const editTodo=(id)=>{
   const {title,time}=todos.find((todo)=>todo.id===id);
    todoinputRef.current.value=title;
    timeinputRef.current.value=time;
    setSelected(id)
  }

  const mappingTodos = todos.map((todo, index) => (
    <TodoItem order={index + 1} key={index} {...todo} doneTodo={doneTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
  ));

  const doneTodos = todos
    .filter((todo) => todo.done)
    .map((todo, index) => (
      <TodoItem
        order={index + 1}
        key={index}
        {...todo}
        doneTodo={doneTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ));
  const undoneTodos = todos
    .filter((todo) => !todo.done)
    .map((todo, index) => (
      <TodoItem
        order={index + 1}
        key={index}
        {...todo}
        doneTodo={doneTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ));

  return (
    <section>
      <div className="container">
        <h1 className="text-center my-3 ">TODO PROJECT</h1>
        <form onSubmit={submit} className="d-flex mb-3 gap-3">
          <input ref={todoinputRef} type="text" className="form-control flex-grow-2 " />
          <input ref={timeinputRef} type="time" className="form-control" />
          <button className="btn btn-success">{selected===null?"Add":"Save"}</button>
        </form>

        <Tabs
          variant="pills"
          defaultActiveKey="all"
          transition={false}
          id="todo"
          className="mb-3"
          justify
        >
          <Tab eventKey="all" title={`All todos (${mappingTodos.length})`}>
            {mappingTodos}
          </Tab>
          <Tab eventKey="undone" title={`Undone todos (${undoneTodos.length})`}>
            {undoneTodos}
          </Tab>
          <Tab eventKey="done" title={`Done todos (${doneTodos.length})`}>
            {doneTodos}
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Homepage;
