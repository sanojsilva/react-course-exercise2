import TodoItem from "./TodoItem";

const todos = [
  {
    name: "Go Shopping",
    isCompleted: false,
  },
  {
    name: "Do Homework",
    isCompleted: true,
  },
  {
    name: "Play Cricket",
    isCompleted: false,
  },
  {
    name: "Do the assignment",
    isCompleted: false,
  },
];

function TodoList() {
  return (
    <div>
      <h2>My TODO List</h2>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo.name}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
