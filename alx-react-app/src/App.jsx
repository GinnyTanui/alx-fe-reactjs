import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Header from "./Header.jsx"; 
import MainContent from "./MainContent.jsx"; 
import Footer from "./Footer.jsx";
import UserProfile from "./UserProfile.jsx";

function App() {  
  return( 
    <> 
    <WelcomeMessage /> 
    <Header/> 
    <MainContent/> 
    <Footer/> 
    <UserProfile name="Alice"  age="25" bio="Loves hiking and photography"/>
    </>

  )
 
 
}

export default App
