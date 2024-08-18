import { UserDataContext } from './UserContext.js';

import ProfilePage from './ProfilePage.jsx';

function App() {  
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return( 
    <> 
     <UserDataContext.Provider value={userData}>
       <ProfilePage userData={userData} />;
     </UserDataContext.Provider> 
    
    </>

  )
 
 
}

export default App
