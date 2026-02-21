import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Player></Player>
      <Developer name="Nazim" tech="javascript"></Developer>
      <Developer name="jahanggir" tech="python"></Developer>
      <MyFriends></MyFriends>
    </>
  );
}

function Player() {
  const age = 22;
  return (
    <div
      style={{
        border: "1px solid salmon",
        borderRadius: "20px",
        margin: "20px",
        padding: "30px",
      }}
    >
      <h3>MY name is :Nazim</h3>
      <p>age :{age}</p>
    </div>
  );
}
function Developer(props) {
  return (
    <div className="devo">
      <h3>Hello Developer</h3>
      <h4>Name :{props.name}</h4>
      <p>Technology :{props.tech}</p>
    </div>
  );
}

function MyFriends() {
  const friends = {
    color: "Yellow",
    textAlign: "center",
    padding: "10px",
    margin: "20px",
    border: "2px dotted crimson",
    borderRadius: "20px",
  };
  return (
    <div style={friends}>
      <h3>First firend :Sayed</h3>
      <h3>last friend : Nai</h3>
    </div>
  );
}
export default App;
