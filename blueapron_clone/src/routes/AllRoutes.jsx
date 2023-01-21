import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


function AllRoutes() {

    return <div>

        <br />
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/home" element={<Home />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route exact path="/television" element={<Television />} />
            <Route exact path="/watches" element={<Watch />} />
            <Route exact path="/mobiles" element={<Mobiles />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/otp" element={<OTP />} /> */}
        </Routes>

    </div>;
}

export default AllRoutes;