//Jesse Abarca
//1/24/22
//Enhanced Random Name Generator
//Build out an enhanced random name generator that allows you to: add names to a list, pick a random name, generate groups based on # of groups
//and people per group, design it, create elements, and have local storage working to store the names of people who you added to the list!
//Unable to complete number of groups and enter number of people per group!

//ADDITIONAL NOTES FOR USING: Type in a name and then removeBtn to remove an existing name!
//Type in a name and then AddBtn to add a name to the list!
//Clicking randomBtn by itself will select a random name from the list!

//Import the local storage saves!
import {SaveToLocalStorageByName, GetLocalStorage, RemoveFromLocalStorage} from './localStorage.js';

//Import the create elements!
import{AddName, createGroup} from './createElements.js';

//gain connections to input fields
let EnterName = document.getElementById('EnterName');
let NumberOfGroups = document.getElementById('NumberOfGroups');
let NumberOfPeoplePerGroup = document.getElementById('NumberOfPeoplePerGroup');

//access to the btns
let AddBtn = document.getElementById('AddBtn');
let RemoveBtn = document.getElementById('RemoveBtn');
let RandomBtn = document.getElementById('RandomBtn');
let MakeGroupBtn = document.getElementById('MakeGroupBtn');

//Where to inject Names?
let injectNameHere = document.getElementById('injectHere');
let injectGroupsHere = document.getElementById('injectGroupsHere');

//Array to hold all the elements
let CreateNameElements = [];

//Add event listeners
AddBtn.addEventListener('click',function(e)
{   
    let letters = /^[A-Za-z]+$/;
    //Check if the name is empty
    if(EnterName.value == null || EnterName.value == undefined || EnterName.value.length <1){
        alert('Enter a Name');
    }else if(EnterName.value.match(letters)){ //Check if the name has special characters inside of it!
        //If you add a name it also must be saved to the local storage!
        SaveToLocalStorageByName(EnterName.value);
        AddName(EnterName.value);
        // CreateNameElements.push(EnterName.value);
        // console.log(CreateNameElements);
        CheckIfTheNameIsFavorited(EnterName.value);
    }else{
        alert('You entered numbers or special characters in the name!');
    }
});

RemoveBtn.addEventListener('click', function(e)
{
    let letters = /^[A-Za-z]+$/;
    let isItFavorited;
    //Check if the name is empty
    if(EnterName.value == null || EnterName.value == undefined || EnterName.value.length <1){
        alert('Enter a Name');
    }else if(EnterName.value.match(letters)){ //Check if the name has special characters inside of it!
        //If you add a name it also must be saved to the local storage!
        isItFavorited = CheckIfTheNameIsFavorited(EnterName.value);
        if(isItFavorited == true){
            RemoveFromLocalStorage(EnterName.value);
            CheckIfTheNameIsFavorited(EnterName.value)
            document.getElementById(EnterName.value).remove(); //Use .remove() to remove the name from the favorites's list!
        }else if(isItFavorited == false){
            alert('The name you attempted to remove is not in the list!')
            //The name is valid but does not match!
        }
    }else{
        alert('You entered numbers or special characters in the name you want to remove!');
    }
});

RandomBtn.addEventListener('click', function(e)
{
    //When the random button is clicked a random name must be selected!
    //obtain access to the favorites array in this block of code, just like I did in CheckIfTheNameIsFavorited function!
    const favorites = GetLocalStorage();
    if(favorites.length < 1){
        //Random cannot choose a random name because none exist!
        alert('Random cannot choose a random name because there are none!');
    }else{
        //generate a random number from 0 and the length of the favorites array!
        let rNum = Math.floor(Math.random()* favorites.length);
        console.log(favorites[rNum]);
        alert(favorites[rNum]+ ' is the randomly choosen name!');

    }

});

MakeGroupBtn.addEventListener('click', function(e)
{
    injectGroupsHere.innerHTML = "";
    const favorites = GetLocalStorage();
    let counter = 0;
    //The number the user inputed determines how mnay groups there are!
    let groupsTotal = NumberOfGroups.value;
    // let groupsTotal = favorites.length / NumberOfGroups.value;

    //take the array and divide it by the number of groups the user Inputed


    for(let i = 0; i < groupsTotal; i++){
        //Make the card
        counter++;
        createGroup('Group' +counter, favorites[i]);
    }
});

//Check if the name is already favorited, pass in the city's name in a format all lowercase!
function CheckIfTheNameIsFavorited(Name){
    const favorites = GetLocalStorage(); //Get the favorites from local storage!
    console.log(JSON.stringify(favorites)); //Console.logs all the favorites that are in the array so we know what is inside!
    // console.log(favorites[0]); // the first index of the favorites's appears!
    return favorites.includes(Name); //Check if the user input is included in the array and returns a boolean
}


//When the page is refreshed Check the data and create elements for the names inside of favorites!
function CheckForFavoritedNames(){
    const favorites = GetLocalStorage();
    for(let i = 0; i < favorites.length; i++){
        console.log(favorites[i]);
        AddName(favorites[i]);
    }
}

//Run everytime the page is refreshed
CheckForFavoritedNames();

// createGroup();
// createGroup();
// createGroup();

//  localStorage.clear();


