import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header/Header";
import Home from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import NotFound from "./Shared/NotFound/NotFound";
import Blog from "./Pages/Blog/Blog";
import Inventories from "./Pages/Inventories/Inventories";
import ItemDetails from "./Home/Inventory/ItemDetails/ItemDetails";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import Login from "./Pages/Log in/Login/Login";
import Register from "./Pages/Log in/Register/Register";
import RequireAuth from "./Pages/Log in/RequireAuth/RequiredAuth";
import AddItem from "./Pages/AddItem/AddItem";
import MyItems from "./Pages/MyItems/MyItems";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventories"
          element={<Inventories></Inventories>}
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
