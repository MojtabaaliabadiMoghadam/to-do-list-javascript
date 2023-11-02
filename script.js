let list = document.querySelector("#to-do-list");
let addinput = document.querySelector("#add-form input");
let searchinput = document.querySelector("#search-form input");
let btninput = document.querySelector("#add-form button");
 list.addEventListener("click",(e)=>{
    if (e.target.className == "delete-btn") {
        e.target.parentNode.remove();
        if (list.children.length == 0 ) {
            let mity=document.createElement("div")
            mity.style.textAlign =" center"
            mity.style.color="black"
            mity.innerText=" there is no item to do"
            mity.id="mity"
            list.appendChild(mity)
        }
    }
 })
 btninput.addEventListener("click",(e)=>{
    e.preventDefault();
    if(addinput.value.length == 0){
        return  
    }
    if(document.querySelector("#mity")){
        document.querySelector("#mity").remove()
    }
    list.append(ctrLi(addinput.value))
    addinput.value = ""
 })
function ctrLi (itemValue){
    let li = document.createElement("li")
    let span = document.createElement("span")
    let button = document.createElement("button")
    li.className = "to-do-item"
    span.className ="title"
    span.innerText= addinput.value
    button.className ="delete-btn"
    button.innerText ="delete"
    li.append(span)
    li.append(button)

    return li
}

searchinput.addEventListener("input",(e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#mity")){
     return
        }
         if(element.querySelector(".title").innerText.includes(e.target.value)){
     element.style.display ="flex";
         }else{
             element.style.display ="none"
         }
     })
})