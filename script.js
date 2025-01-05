document.getElementById("button").onclick=function(){
	const heading = document.getElementById("url");
      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value
	
      if (name !== "" && year !== "") {
        heading.innerHTML = `https://localhost:8080/?name=${name}&year=${year}`;
      } else if (name === "") {
        heading.innerHTML = `https://localhost:8080/?year=${year}`;
      } else {
        heading.innerHTML = `https://localhost:8080/?name=${name}`;
      }
}