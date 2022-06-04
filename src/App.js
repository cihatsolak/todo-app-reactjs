import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
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
