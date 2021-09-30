const btn = document.querySelector(".btn")

const divMain = document.querySelector(".content")

btn.addEventListener("click",mudaCor)

function mudaCor(){
  
    if(divMain.style.backgroundColor === "rgb(252, 66, 69)"){
        divMain.style.backgroundColor = "rgb(13, 165, 177)"
        
    }else {
        divMain.style.backgroundColor = "rgb(252, 66, 69)" 
        
    } 
        
 
}
console.log(divMain.style.backgroundColor);