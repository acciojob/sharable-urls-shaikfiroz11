// your code here
const heading=document.getElementById("id");
const name=document.getElementById("name");
const year=document.getElementById("year");
const submit=document.getElementById("button");

submit.addEventListenner('click',()=>{
	const Name=document.getElementById("name").value;
	const Year=document.getElementById("year").value;
	  if(Name!=="" &Year!==""){
		  heading.innerHTML=`https://localhost:8080/?name=${Name}&year=${Year}`;
	  }elseif(name===""){
		   heading.innerHTML=`https://localhost:8080/?year=${Year}`
	  }else{
		   heading.innerHTML=`https://localhost:8080/?name=${Name}`
	  }
})