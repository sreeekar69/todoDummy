const additem=()=>{
    let userinput=document.querySelector("#inp").value
    //step2 create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //step 3 target the list
    let list=document.querySelector("#todo")
    //add item to the list
    list.appendChild(listitem)
}
let btn=document.querySelector("#btn")
//document.getElementId('btn')
btn.addEventListener("click",additem)
