import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const { todoList, todoFilter } = useSelector(state => state.todo);

  return (
    <div className="md:container md:mx-auto">
      <Header>
        <Input />
        <TodoList />
      </Header>
    </div>
  );
}

export default App;
