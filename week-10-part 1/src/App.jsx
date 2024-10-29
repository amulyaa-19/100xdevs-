import './App.css'
import{BrowserRouter , Routes , Route , Link , useNavigate} from "react-router-dom";

function App() {
   
  return <div>
    <a href="/">Allen</a>
     | 
    <a href="/neet/online-coaching-class-11">Class 11</a>
     | 
     <a href ="/neet/online-coaching-class-12">Class 12 </a>
    <BrowserRouter>
      <Routes>
        <Route path="/neet" element={<Layout/>}></Route>
        <Route path = "neet/online-coaching-class-11" element={<Class11Program/>}/>
        <Route path = "neet/online-coaching-class-12" element={<Class12Program/>}/>
        <Route path="/" element={<Landing/>}/>     
        <Route path="*" element={<ErrorPage/>}/>
        
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
    header
  
  </div>
}
function ErrorPage(){
  return <div>
    Sorry page not found
  </div>
}
function Landing(){
  return <div>
    Welcome to allen 
    
  </div>
}
function Class11Program(){
  return <div>
    NEET programs for class 11

  </div>
}
function Class12Program(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate("/")
  }

  return <div>
    NEET programs for class 12
    <button onclick = {redirectUser}>Go back to landing page </button>
  </div>
}

export default App
