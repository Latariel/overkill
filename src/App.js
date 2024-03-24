
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {SignUp} from "./pages/SignUp";
import {SignIn} from './pages/SignIn';
import Main from './pages/main';
import {auth} from "./firebase/firebase";
import SecondPart from './pages/SignUpPt2'
// import ProtectedRoute from './pages/components/protectedRoute'
import {useEffect, useState} from "react";

function App() {
  const [user,setUser] = useState(null);
  const [isFetching,setIsFetching] = useState(true)

  useEffect(() => {



// const unsubscribe = onAuthStateChanged(auth,(user) =>{
//   if(user){
//     //
//     setUser(user)
//     setIsFetching(false)
//     return;
//   }
//   setUser(null);
//   setIsFetching(false)
// });
//    return () => unsubscribe()
// },[])
//
// if (isFetching) {
//   return <h2>Loading...</h2>
// }


    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>
  }

  return (
<BrowserRouter>
<Routes>
  <Route index path='/' element={<SignUp></SignUp>}></Route>
  <Route index path='/SingIn' element={<SignIn></SignIn>}></Route>
  {/*<Route index path='/Main' element={*/}
  {/*  <ProtectedRoute user={user}>*/}
  {/*    <Main></Main>*/}
  {/*  </ProtectedRoute>*/}
  {/*}>*/}
  {/*</Route>*/}
  <Route index path='/Main' element={<Main></Main>}></Route>
  <Route index path='/SignUp' element={<SecondPart user={user}></SecondPart>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
