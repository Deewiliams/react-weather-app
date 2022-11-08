import Search from "./Components/Search/Search";

function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log("data", searchData);
  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
