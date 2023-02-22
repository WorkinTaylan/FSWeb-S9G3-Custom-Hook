import React, {useState} from "react";

export const localStorageKullan=(key, initialValue)=>{
    const [storedValue, setStoredValue]=useState(()=>{
        const item=window.localStorage.getItem(key); //item should be string on LocalStorage but JSON.parse kullanıp onu eski haline çeviriyoruz 
        
        return item?JSON.parse(item):initialValue; //with JSON.parse whatever data before we stored
});
    const setValue=value=>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value)); //we only store string
    };
    return [storedValue, setValue];
};