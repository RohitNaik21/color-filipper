const mainDiv = document.querySelector(".main-color-div");
const draggables = document.getElementsByClassName("color-div");

function getRandomColor(){
    const randomno=Math.floor(Math.random()*16777215)
    const color="#"+randomno.toString(16)
    // console.log(color)
    return color
}
 
 function getcolorload(draggables){
       const arraydiv=Array.from(draggables);
       for(let el of arraydiv){
        const btn=el.querySelector(".btn-lock")
        //  console.log(btn)
         btn.addEventListener("click",(e)=>{
          e.stopImmediatePropagation()
          e.stopPropagation();
          e.preventDefault()
          console.log("click button")
          if(btn.classList.contains("locked")){
            btn.classList.remove("locked")
            btn.innerHTML="🔑"
          }

          else if(!btn.classList.contains("locked")){
            btn.classList.add("locked")
            btn.innerHTML="🔒"
          }
         })
            const color_value=el.querySelector(".color-value")
            
            let random=getRandomColor()
            // console.log(random)
            if(!btn.classList.contains("locked")){
              color_value.innerHTML=random;
              el.style.backgroundColor=random;
            }

       }
 }
  
 function handleCopyEvent(para) {
  console.log(para.textContent)
  navigator.clipboard.writeText(para.textContent).then(() => {
    console.log('text copied')
  }).catch(err => console.log(err))
 }

    const arr=Array.from(draggables)
    for(let el of arr){
      let color_code=el.querySelector(".color-value");
      color_code.addEventListener('click',(e)=>{
           e.stopPropagation();
           e.stopImmediatePropagation()
           e.preventDefault();
           handleCopyEvent(color_code)
      })

    }

  
 
document.addEventListener("keydown",(e)=>{
  e.stopPropagation();
  e.stopImmediatePropagation()
  e.preventDefault();
  // copycolorcode(draggables)

   if(e.code==="Space"){
    getcolorload(draggables)
   }
})

window.onload = getcolorload(draggables)
