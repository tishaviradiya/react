import { useEffect } from "react";


const UseEff=()=>{
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then((res=>res.json()))
        .then((data)=>{
            console.log(data);
        })
    })
    return(
        <div></div>
    )
}
export default UseEff;