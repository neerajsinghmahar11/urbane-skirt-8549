import { border } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useState } from 'react';
import "./OnTheMenu.css"
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import Cards from '../../components/Cards/Cards';

const OnTheMenu = () => {
    const [page,setPage]=useState("signature")
    const [loader,setLoader]=useState(false);
    const [data ,setData]=useState();


    useEffect(()=>{
    setLoader(true)
        axios
        .get("https://confused-bear-life-jacket.cyclic.app/products")
            .then(data => {setData(data.data)
            setLoader(false);   
        })
        .catch(error => {console.log(error)
        setLoader(false);
        });

        },[])


  return (
    <div style={{marginTop:"50px"}} >

        <h1 style={{fontSize:"50px",textAlign:"center",fontFamily:"monospace",fontWeight:"700",color:"#0f346c"}}>Explore our Menus</h1>
        <div className='menusHeading'>
            <div onClick={()=>setPage("signature")}  >
                <h2 style={{fontWeight:"600",letterSpacing:"2px"}}>2 SERVING</h2>
                <h1 style={{fontSize:"20px",fontFamily:"sans-sarif",fontWeight:"600"}}>Signature</h1>
            </div>
            <div onClick={()=>setPage("vegetarian")}>
                <h2 style={{fontWeight:"600",letterSpacing:"2px"}}>2 SERVING</h2>
                <h1 style={{fontSize:"20px",fontFamily:"sans-sarif",fontWeight:"600"}}>Vegetarian</h1>
            </div>
            <div onClick={()=>setPage("signature")}>
                <h2 style={{fontWeight:"600",letterSpacing:"2px"}}>2 SERVING</h2>
                <h1 style={{fontSize:"20px",fontFamily:"sans-sarif",fontWeight:"600"}}>Wellness</h1>
            </div>
            <div onClick={()=>setPage("Signature for Four")}>
                <h2 style={{fontWeight:"600",letterSpacing:"2px"}}>2 SERVING</h2>
                <h1 style={{fontSize:"20px",fontFamily:"sans-sarif",fontWeight:"600"}}>Signature for Four</h1>
            </div>
            <div onClick={()=>setPage("Add-on")}>
                <h2 style={{fontWeight:"600",letterSpacing:"2px"}}>WEEKLY OPTIONS</h2>
                <h1 style={{fontSize:"20px",fontFamily:"sans-sarif",fontWeight:"600"}}>Add-Ons</h1>
            </div>
            
        </div>

        <div className="container" style={{marginTop:"60px"}}>
            {loader ? <Loader /> : data?.map((item) => { if(item.category===page){return <Cards key={item.id} {...item}/>}
            })}
            
            </div>
    </div>
  )
}

export default OnTheMenu