function TodoItem({ todo, isCompleted }) {
  return (
    <div>
      {isCompleted === true && <div>{todo} - Completed</div>}
      {!isCompleted && <div>{todo} - Pending</div>}
      <br />
    </div>
  );
}

export default TodoItem;
