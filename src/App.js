
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import Wrapper from './component/Wrapper';
import UserProfile from './pages/UserProfile';
import Orders from './pages/Orders';

const router = createBrowserRouter([


  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
    ],
  },
  {
    path : "/Orders",
    element : <Wrapper />,
    children: [
      {
        index: true,
        element: <Orders/>,
      },
    ],

  }
])



function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
