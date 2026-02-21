import "./App.css";
import Todo from "./Todo";

function App() {
  const time = 50;
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="learn react" isDone={true} time={time}></Todo>
      <Todo task="Revised js" isDone={false}></Todo>
      <Todo task="take a showerd" isDone={true}></Todo>
      <Player></Player>
      <Developer name="Nazim" tech="javascript"></Developer>
      <Developer name="jahanggir" tech="python"></Developer>
      <MyFriends></MyFriends>
      <Mobile name="infinix" prices="20000"></Mobile>
      <Mobile name="realme" prices="30000"></Mobile>
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

// destructring props
function Mobile({ name, prices }) {
  return (
    <div className="devo">
      <h3>Mobile phone</h3>
      <p>Name :{name}</p>
      <p>Price :{prices}</p>
    </div>
  );
}
export default App;
