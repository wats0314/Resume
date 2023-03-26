function changeSheet(){
event.preventDefault();
document.getElementById("styler").setAttribute("href","styles.css");
console.log("run")}

function changeBack(){
  event.preventDefault();
  document.getElementById("styler").setAttribute("href","styles2.css");
  console.log("run")}