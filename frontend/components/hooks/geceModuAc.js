import {useEffect} from "react";
import {localStorageKullan} from "./localStorageKullan";

export const useGeceModu= (initialValue)=>{
    const [geceModu, setGeceModu]=localStorageKullan("dark-mode", initialValue);
    useEffect(()=>{
        if(geceModu){
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode')
        }
    }, [geceModu]); //geceModu'a bağlı. 

    return [geceModu, setGeceModu];
};

//useGeceModu(false)------> [value,setValue]

