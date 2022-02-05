//import the function from createElements!
import { AddName  } from "./createElements.js";

//change the imported names and modify the functions to how you need them to be!
function SaveToLocalStorageByName(Name)
{
    let favorites = GetLocalStorage();
    favorites.push(Name);
    SaveToLocalStorage(favorites);
    // localStorage.setItem('Favorites',JSON.stringify(favorites));
}


function SaveToLocalStorage(favorites){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

// function CheckLocalStorage(){
//     const localStorageItem = localStorage.getItem('Favorites');
//     localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
// }

function GetLocalStorage(){
    let localStorageData = localStorage.getItem('Favorites');
    //Check if the data even exists
    //If there is no existing data then return nothing!

    if(localStorageData == null){
        return [];
    }else{
        return JSON.parse(localStorageData);
    }
   
}

function RemoveFromLocalStorage(Name){
    const favorites = GetLocalStorage();
    let NameIndex = favorites.indexOf(Name);
    
    //found cityname in array favorites
    favorites.splice(NameIndex,1);
    SaveToLocalStorage(favorites);
}

export {SaveToLocalStorageByName, GetLocalStorage, RemoveFromLocalStorage}

