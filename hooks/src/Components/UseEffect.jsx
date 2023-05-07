import React, { useEffect, useState } from 'react';
import './style.css';


const UseEffect = () => {
    const [dataType, setDataType] = useState("Posts");
    const [dataInfo, setDataInfo] = useState([]);

    useEffect( ()=>{
        // https://jsonplaceholder.typicode.com/posts/1
        fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            setDataInfo(data);
        })
    }, [dataType] )

    return ( 
    <>
    <div>
        <button className="btn" onClick={ () => {setDataType("posts")} }>Posts</button>
        <button className="btn" onClick={ () => {setDataType("comments")} }>Comments</button>
        <button className="btn" onClick={ () => {setDataType("albums")} }>Albums</button>
    </div>
    <h1>{dataType}</h1>
    <p>{JSON.stringify(dataInfo) }</p>
    </>
     );
}
 
export default UseEffect;