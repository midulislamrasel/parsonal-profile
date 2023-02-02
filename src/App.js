import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import SingIn from './Components/SingIn/SingIn';
import Main from './Components/leyout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/team',
          element:<Team></Team>
        },
        {
          path: '/services',
          element:<Services></Services>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/sing in',
          element:<SingIn></SingIn>
        }
      ]
    },
    {
      path: '*',
      element: <div> This page is not Found</div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
