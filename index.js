let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function(){
var text  = this.value;
console.log(text);

document.getElementById("char").innerHTML=text.length;
text = text.trim();

let words = text.split(" ");
let cleanList = words.filter(function(Element){
       return Element != "";
});
console.log(cleanList );
document.getElementById("word").innerHTML = cleanList.length;

});

//split(" ")==> spaces dekeke word ko todata hai 
//trim()==> starting or end ka space remove krta hai 
