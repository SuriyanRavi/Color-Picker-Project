const colorinput=document.getElementById("color");

colorinput.addEventListener("input",()=>{
  let colorcode=document.getElementById("color").value;
  document.body.style.backgroundColor=colorcode;
})