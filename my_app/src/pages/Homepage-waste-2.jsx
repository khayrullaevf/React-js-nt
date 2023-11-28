import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoItem from "../components/TodoItem";

const Homepage = () => {
  const todos = [
    { title: "Playing football", time: "14:00", done: true },
    { title: "Reading books", time: "16:00", done: false },
    { title: "Doing sports", time: "18:00", done: false },
    { title: "working", time: "08:00", done: true },
    { title: "sleeping", time: "23:00", done: true },
  ];

  const mappingTodos = todos.map((todo, index) => (
    <TodoItem
      key={index + 1}
      title={todo.title}
      time={todo.time}
      done={todo.done}
    />
  ));

  const doneTodos = todos
    .filter((todo) => todo.done)
    .map((todo, index) => (
      <TodoItem
        key={index + 1}
        title={todo.title}
        time={todo.time}
        done={todo.done}
      />
    ));
  const undoneTodos = todos
    .filter((todo) => !todo.done)
    .map((todo, index) => (
      <TodoItem
        key={index + 1}
        title={todo.title}
        time={todo.time}
        done={todo.done}
      />
    ));

  return (
    <section>
      <div className="container">
        <h1 className="text-center my-3">TODO PROJECT</h1>
        <Tabs
          variant="pills"
          defaultActiveKey="all"
          transition={false}
          id="todo"
          className="mb-3"
          justify
        >
          <Tab eventKey="all" title="all todos">
            {mappingTodos}
          </Tab>
          <Tab eventKey="undone" title="Undone todos">
            {undoneTodos}
          </Tab>
          <Tab eventKey="done" title="done todos">
            {doneTodos}
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Homepage;
