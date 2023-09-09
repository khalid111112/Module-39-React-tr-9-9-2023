import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './useEffect';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFice = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third click')}}>Click3</button>
      <button onClick={() => addToFice(3)}>Four</button>
    </>
  )
}

export default App
