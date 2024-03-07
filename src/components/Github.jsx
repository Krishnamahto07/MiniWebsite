// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data ,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Krishnamahto07').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    const data = useLoaderData();
    return (
        <div className="h-[300px] rounded-md flex justify-center items-center text-center m-4 bg-gray-700 text-3xl text-white gap-5 ">
            <div><img src={data.avatar_url} alt="Git img" height={150} width={150} /></div>
            <div >
                <div>
                    Name : {data.name}
                </div>
                {/* <div>
                    Total Repo : {data.name}
                </div> */}
                <div>
                Github follower : {data.followers}
                </div> 
            </div>
        </div>
        
    )
}
export default Github;
export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/Krishnamahto07')
    return response.json()
}