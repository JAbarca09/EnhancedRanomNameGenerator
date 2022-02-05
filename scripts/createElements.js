let injectNameHere = document.getElementById('injectNameHere');
let injectGroupsHere = document.getElementById('injectGroupsHere');

//create an name
function AddName(Name){
    //The outerMostDiv
    let outerMostDiv = document.createElement('div');
    outerMostDiv.className = "col-12 mt-2 text-center";
    outerMostDiv.id = Name;
    //One div below
    let InnerRow = document.createElement('div');
    InnerRow.className = "row d-flex justify-content-center";
    //Another div below
    let InnerMostDiv = document.createElement('div');
    InnerMostDiv.className = "col-5 bgWhite";
    //pTag
    let pTag = document.createElement('p');
    pTag.textContent = Name;
    pTag.className = "NameTxt mb-1";
    InnerMostDiv.appendChild(pTag);
    InnerRow.appendChild(InnerMostDiv);
    outerMostDiv.appendChild(InnerRow);
    injectNameHere.appendChild(outerMostDiv);

}

function createGroup(GroupTitle, Names){
    //Add a counter to keep track of groups Ex: group + counter, use increments!
    let OuterMostDiv = document.createElement('div');
    OuterMostDiv.className = "card";
    OuterMostDiv.style = "width: 18rem;";
    //Inner card body
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = "card-body text-center";
    let h5 = document.createElement('h5');
    h5.textContent = GroupTitle;
    let pTag = document.createElement('p');
    pTag.className = "card-text";
    pTag.textContent = Names;

    //Combine the card together!
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(pTag);
    OuterMostDiv.appendChild(cardBodyDiv);
    injectGroupsHere.appendChild(OuterMostDiv);
}

// Card html here!
//  <div class="card" style="width: 18rem;">
//                   <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                   </div>
//                 </div> 


export {AddName, createGroup}