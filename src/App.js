
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {SignUp} from "./pages/SignUp";
import {SignIn} from './pages/SignIn';
import Main from './pages/main';
import SecondPart from './pages/SignUpPt2'

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route index path='/' element={<SignUp></SignUp>}></Route>
  <Route index path='/SingIn' element={<SignIn></SignIn>}></Route>
  <Route index path='/Main' element={<Main></Main>}></Route>
  <Route index path='/SignUp' element={<SecondPart></SecondPart>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
