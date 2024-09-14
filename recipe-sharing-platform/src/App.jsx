import HomePage from "./components/HomePage"; 
import RecipeDetail from "./components/RecipeDetail";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  

  return ( 
   
    <> 
   
     
     <Router> 
      <nav>
        <ul>
          <Link to='/'>Home</Link> 
         
        </ul>
      </nav>
       <Routes> 
        <Route path ='/' element={<HomePage/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail/>}/>
         
       </Routes>
     </Router> 
    </> 
  )
}

export default App
