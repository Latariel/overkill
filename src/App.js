
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {SignUp} from "./pages/SignUp";
// import {auth} from './pages/auth'
import {SignIn} from './pages/SignIn'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route index path='/' element={<SignUp></SignUp>}>
  {/*<Route index path='/auth' element={<auth></auth>}*/}
  </Route>
  <Route index path='/SingIn' element={<SignIn></SignIn>}>

  </Route>
</Routes>

</BrowserRouter>
  );
}

export default App;
