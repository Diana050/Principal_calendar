

let x = document.getElementsByTagName("td");
for (const day of x) {
    day.addEventListener("click", myFunction);
}


function myFunction(){
    alert(this.innerText);
}