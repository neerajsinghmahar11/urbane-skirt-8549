import { Routes, Route } from "react-router-dom";
import Signin from "../components/Authentication/Signin";
import Signup from "../components/Authentication/Signup";
import Home from "../pages/Home/Home";
import OnTheMenu from "../pages/On The Menu/OnTheMenu";
import Wine from "../pages/Wine/Wine";
import PrivateRoute from "../Context/PrivateRoute";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../components/ProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import OTP from "../pages/Checkout/OTP";

function AllRoutes() {

    return <div>

        <br />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/otp" element={<OTP/>} />
            <Route exact path="/on_the_menu" element={<OnTheMenu />} />
            <Route exact path="/signin" element={<Signin/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/wine" element={<Wine/>} />
            <Route exact path="/cart" element={<PrivateRoute> <Cart/> </PrivateRoute>} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/checkout" element={<Checkout/>} />
        </Routes>

    </div>;
}

export default AllRoutes;