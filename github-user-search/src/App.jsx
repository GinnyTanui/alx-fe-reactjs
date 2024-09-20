import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
const Home = () => <h1>Welcome Home</h1> 
  const GithubApi = () => {
    const apiKey = process.env.REACT_APP_GITHUB_API_KEY; 
    return(
      <div>
      <h1>Github API key</h1> 
      <p>{apiKey ?  apiKey : "Github Api key is not found"}</p>
    </div>
    )
  }
  

function App() { 
  
  return (
    <> 
    <Router> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
            <Link to="/github-api">Github-Api</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/github-api" element={<GithubApi/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
