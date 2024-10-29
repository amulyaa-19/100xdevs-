import { RecoilRoot , atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { useState , memo, useEffect } from 'react'
import './App.css'
import { counterAtom, evenSelector } from './store/atom/counter'


// Selector

function App(){
  return <div>
    <RecoilRoot>
    <Buttons/>
    <Counter/>
    <IsEven/>
    </RecoilRoot>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(c => c + 2)
  }
  function decrease(){
    setCount(c => c - 1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter(){
  const count = useRecoilValue
  (counterAtom);
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even = useRecoilValue(evenSelector)
  return <div>
    {even ? "even" : "odd"}
  </div>
}


export default App
// function App() {
//   return(
//     <RecoilRoot>
//     <Counter/>
//     </RecoilRoot>
//   )
// }

// function Counter(){
  
//   return <div>
//     <CurrentCount/>
//     <Decrease />
//     <Increase />
//   </div>
// }

// function CurrentCount(){
//  const count =  useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }

// function Increase(){

// const setCount = useSetRecoilState(counterAtom); 

//   function increase(){
//     setCount(c => c + 1);
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// function Decrease(){
//   const setCount = useSetRecoilState(counterAtom); 

//   function decrease(){
//     setCount(c => c - 1);
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }



// function App() {
//   return(
   
//     <Counter/>
   
//   )
// }
// function Counter(){
//   const[count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1);
//     }, 3000)
//   }, []);
   
//   return <div>
//     <MemoizedCurrentCount/>
//     <Increase/>
//     <Decrease/>
//   </div>
// }
// const MemoizedCurrentCount = memo(CurrentCount);


// const CurrentCount = memo(function(){

//   return <div>
//     {1}
//   </div>
// })

// const Increase = memo(function(){

//   function increase(){
   
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// })

// const Decrease = memo(function (){
 

//   function decrease(){

//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// })


