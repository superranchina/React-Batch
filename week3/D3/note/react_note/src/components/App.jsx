import useUpdatingClock from 'hooks/useUpdatingClock'

export default function App() {
  const name = <h1>Ran</h1>;
  const age = <h2>23</h2>;
  const email = <h2> liuran0614@gamil.com</h2>;

  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return (
    <div className='App'>
      {user}
    </div>
  )
};


const GetName = () => {
  return "Ran";
};

const GetNameComp = () => {
  return <h1>Ran</h1>;
}
