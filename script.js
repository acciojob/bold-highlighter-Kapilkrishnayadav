let str=document.querySelectorAll("strong");


function highlight() {
    //Write your code here
	str.forEach((e)=>{
		e.style.color="rgb(0, 128, 0)";
	})


}


function return_normal() {
    //Write your code here
str.forEach((e)=>{
		e.style.color="rgb(0, 0, 0)";
	})
    
}
