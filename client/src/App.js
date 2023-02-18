import ListHeader from "./components/ListHeader";

const App = () => {
  const getData = async () => {
    try {
      const response = await fetch(`https://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />{" "}
    </div>
  );
};

export default App;
