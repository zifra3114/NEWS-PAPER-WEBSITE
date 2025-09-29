function swap(){
document.getElementById("before").src = "header-img2.webp"
}
function reset(){
document.getElementById("before").src = "header-img.webp"
}

let readMore =  document.getElementById("Read-more")
let extraText = document.getElementById("extra-text");
readMore.onclick = () =>{
    if(extraText.style.display=== "none"){
        extraText.style.display = "inline";
        readMore.textContent = "Read Less"
    }
     else{
        extraText.style.display = "none";
        readMore.textContent = "Read More"
    }
}
