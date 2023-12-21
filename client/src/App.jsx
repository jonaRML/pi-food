import './App.css'
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav'
import Recipes from './components/Recipes'
import Detail from './components/Detail';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Form from './components/Form';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Nav/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Recipes/>
        },
        {
          path:'detail/:id',
          element : <Detail/>
        },
        {
          path:'createRecipe',
          element:<Form/>
        }

      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
