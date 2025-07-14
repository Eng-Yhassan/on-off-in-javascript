

const off_image=document.getElementById("Off-image");
const on_image=document.getElementById("on_image");
const ON=document.getElementById("ON");
const off=document.getElementById("Off");


off_image.style.display="none"
// on_image.style.display="none"

ON.addEventListener("click",()=>{
    off_image.style.display="none"
    on_image.style.display="block"
});


off.addEventListener("click", ()=>{
    off_image.style.display="block";
    on_image.style.display="none"
})

