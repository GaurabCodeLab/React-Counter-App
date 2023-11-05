import { useState} from 'react';

function App(){
  const [counter, setCounter] = useState(0);

  function increaseCounter(){
    setCounter((pre)=>{
      return pre+1;
    })
  }
    function decreaseCounter(){
      setCounter((pre)=>{
        return pre-1;
      })
    }
  
  return(
    <>
    <h1>{counter}</h1>
    <button onClick={increaseCounter}>Increase Counter</button>
    <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  )
}

export default App;