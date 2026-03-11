function toggleCondition(icon){
if(icon.classList.contains("bad")){
icon.classList.remove("fa-circle-xmark","bad")
icon.classList.add("fa-circle-check","good")
}else{
icon.classList.remove("fa-circle-check","good")
icon.classList.add("fa-circle-xmark","bad")
}
}

const canvas=document.getElementById("signature")
const ctx=canvas.getContext("2d")
let drawing=false
canvas.addEventListener("mousedown",()=>drawing=true)
canvas.addEventListener("mouseup",()=>drawing=false)
canvas.addEventListener("mousemove",(e)=>{
if(!drawing) return
ctx.lineWidth=2
ctx.lineCap="round"
ctx.lineTo(e.offsetX,e.offsetY)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(e.offsetX,e.offsetY)
})

window.onload=function(){
let today=new Date().toISOString().split('T')[0]
document.getElementById("date").value=today
document.getElementById("csr").value="CSR-"+Date.now()
}