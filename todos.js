// alert("Connected!");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        // console.log("Mouse over!");
        // this.style.color = "green";
        this.classList.add("selected");
    });    

    lis[i].addEventListener("mouseout", function(){
        // console.log("Mouse over!");
        // this.style.color = "black";
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}

// firstLI.addEventListener("mouseover", function(){
//     // console.log("Mouse over!");
//     firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function(){
//     firstLI.style.color = "black";
// });