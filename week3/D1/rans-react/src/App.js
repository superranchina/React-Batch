import './App.css';
// this is a compoment
function App() {
  // const name = <h1>{name}</h1>;
  // const age = <h2> 21 </h2>;
  // const email = <h2> liuran0614@gmail.com </h2>;
  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  //user component need to slef closed whne using it
  return (
  <div className="App">
    <User name="Ran" age={21} email="liuran@gamil.com" /> 
    <Job salry={80000} postion="SDE" company="microsoft" />
  </div>
  );
}

// const props = {
//   name: "Ran",
//   age: 21,
//   email: "liuran@gmail.com"
// }

//this is an react component, always return html , UI type, always capital letter
const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email} </h1>
    </div>
  )
};

const Job = (props) => {
  return (
    <div>
      <h1> {props.salry}</h1>
      <h1> {props.postion}</h1>
      <h1> {props.company}</h1>
    </div>
  )
};

export default App;
