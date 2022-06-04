import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import ListContent from "./components/ListContent/ListContent";

function App() {
  return (
    <div className="md:container md:mx-auto">
      <Header>
        <Input />
        <ListContent />
      </Header>
    </div>
  );
}

export default App;
