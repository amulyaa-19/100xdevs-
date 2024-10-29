import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePostTitle , useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/use-prev'

// function useCounter(){
//   const[count , setCount] = useState(0);

//   function increaseCount(){
//     setCount(c => c + 1)

//   }
//   return{
//     count:count,
//     increaseCount: increaseCount
//   }
// }


// function App() {
  

//   return(
//     <div>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     </div>
//   )
// }
// function Counter(){
//   const { count , increaseCount } = useCounter();
//   return(
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   )
// }

// function App(){
//   const [currentPost , setCurrentPost] = useState(1);
//   const { finalData , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

//   if(loading){
//     return<div>
//       Loading....
//     </div>
//   }
  
//   return (
//     <div>
//     <button onClick={() => setCurrentPost(1)}>1</button>
//     <button onClick={() => setCurrentPost(2)}>2</button>
//     <button onClick={() => setCurrentPost(3)}>3</button>
//     {JSON.stringify(finalData)}
//     </div>
//   )
// }

// function App(){
//   const[state, setState] = useState(0);
//   const prev = usePrev(state);

//   return(
//     <>
//     <p>{state}</p>
//     <button onClick={() => {
//       setState((curr) => curr+1);
//     }}>
//       Click Me
//     </button>
//     <p>The previous value was {prev}</p>
//     </>
//   ); 
// }



//debounce hook
function useDebounce(orignialFn)
{
  const currentClock = useRef();
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orignialFn, 30);

  }
  return fn;
}

function App()
{
 function sendDataToBackend(){
  fetch("api.amazon.com/search/");
 } 
 const debouncedFn = useDebounce(sendDataToBackend);
  return(
  <>
  <input type="text" onChange={debouncedFn}></input>
  </>
 )
}
export default App
