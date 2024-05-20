import React from "react";

export default function IP(){

    const [ip,setIp] = React.useState('');

    const getIPAdress = async () => {
        try {
            const res = await fetch('https://api.ipify.org');
            const data = await res.text();
            setIp(data);

        } catch(error){
            console.log('failed', error);
        }
    }
    React.useEffect(()=>{
        getIPAdress();
    },[])
    

    return(
        <p>{ip}</p>
    )
}