

export default function App() {
  // const name = <h1>Ran</h1>;
  // const age = <h2>23</h2>;
  // const email = <h2> liuran0614@gamil.com</h2>;

  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  // return (
  //   <div className='App'>
  //     {user}
  //   </div>
  // )
  const age = 15;
  return ( <div className="App">
    {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
  </div>
  );
};


// const GetName = () => {
//   return "Ran";
// };

// const GetNameComp = () => {
//   return <h1>Ran</h1>;
// }
