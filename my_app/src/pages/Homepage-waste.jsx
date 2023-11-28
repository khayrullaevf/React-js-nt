import TodoItem from "../components/TodoItem";

const Homepage = () => {
  const todos=[
    { title: "Playing football", time: "14:00" },
    { title: "Reading books", time: "16:00" },
    { title: "Doing sports", time: "18:00" },
    { title: "working", time: "08:00" },
    { title: "sleeping", time: "23:00" },
  ];

  return (
    <section>
      <div className="container">
        <h1 className="text-center my-3">TODO PROJECT</h1>
        <TodoItem time="14:00" title="Playing football" />
        <TodoItem time="16:00" title="reading books" />
        <TodoItem time="18:00" title="Doing sports" />
        <TodoItem time="08:00" title="working" />
      </div>
    </section>
  );
};

export default Homepage;
