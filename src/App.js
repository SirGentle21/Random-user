import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {dataLoader} from "./dataLoader";
import RandomUsers from "./RandomUser";
import DisplayUserDetails from "./DisplayUserDetails";

function App() {
  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Outlet />}>
             <Route path="/" index element={<RandomUsers /> }
                 loader={dataLoader} errorElement={<h1>An Error occured</h1>}/>
                 <Route path='/userDetails' element={<DisplayUserDetails />}/>
     </Route>
 ))

    return (
      <div className="App">
    <RouterProvider router={browserRoutes} />
    </div>
  );
}

export default App;
