import "./Cart.css"

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import CartProducts from "./CartProducts";
import { NavLink } from "react-router-dom";
const Cart = () => {
        let totals=0;
        const [loader, setLoader] = useState(false);
        const [data, setData] = useState();
        const [length,setLength]=useState(0);
        const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
        setLoader(true)
        axios
            .get("https://confused-bear-life-jacket.cyclic.app/cart")
            .then(data => {
                setData(data.data);
                setLength(data.data.length);
                {(data.data.forEach((el)=>{
                return totals+=Number(el.price);
                }))}
                setTotalPrice(totals);
                setLoader(false);
            })
            .catch(error => {
                console.log(error)
                setLoader(false);
            });
    },[])

    const Remove =(id) => {
            
        fetch(`https://confused-bear-life-jacket.cyclic.app/cart/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
        alert("removed");
        window.location.href="/cart"
    }
    
    return (
        
        <div style={{margin:"auto", marginTop: "150px",height:"auto",width:"95%",display:"flex",justifyContent:"space-between",gap:"20px" }}>
            <div className="container">{loader ? <Loader /> : data?.map((item) => {
                return <CartProducts key={item.id} data={item} Remove={Remove} />
            })}</div>
            <div style={{border:"1px solid black",borderRadius:"20px",width:"28%",height:"100%",padding:"35px"}}>
                <h1><b>Price Details</b></h1>
                <br />
                
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1>Price<span>{" ( "+length}</span> items{" )"}</h1>
                <h1>{totalPrice}</h1>
                </div>
                <br />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{}}>Delivery Charges</h1>
                <h1 style={{color:"green"}}>FREE</h1>
                </div>
                <br />
                <hr style={{border:"1px solid black"}} />
                <br />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1><b>AMOUNT PAYABLE</b></h1>
                <h1>{totalPrice}</h1>
                </div>
                <br />
                <div>
                {length==0 ? "Cart is empty" : <NavLink to="/checkout"><button style={{width:"100%",borderRadius:"5px",color:"white",margin:"auto",backgroundColor:"#e42529",display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}}>Checkout</button></NavLink>}
                </div>
            </div>
        </div>  
    )
}
export default Cart;