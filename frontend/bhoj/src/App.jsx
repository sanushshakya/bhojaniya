import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import FoodDonate from "./pages/FoodDonate/FoodDonate";
import Funding from "./pages/Funding/Funding";
import Congrats from "./pages/Congrats/Congrats";
import Organizations from "./pages/Organizations/Organizations";
import Galleries from "./pages/Gallery/Galleries";



function App() {
  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/food',
          element: <FoodDonate />
        },
        {
          path: '/fund',
          element: <Funding />
        },
        {
          path: '/congrats',
          element: <Congrats />
        },
        {
          path: '/org',
          element: <Organizations />
        },
        {
          path: '/gallery',
          element: <Galleries />
        }
      ],
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
