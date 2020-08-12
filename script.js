//header fixed
window.onscroll=function(){
	const docScrollTop=(document.documentElement.scrollTop);

	if (window.innerWidth>991) {
		if (docScrollTop>100){
			document.querySelector("header").classList.add("fixed")
		}
		else{
			document.querySelector("header").classList.remove("fixed")
		}
	} 
}

//navbar links
const navbar = document.querySelector(".navbar");
	a=document.querySelectorAll("a");

	a.forEach(function(element){
		element.addEventListener("click",function(){
			for (let i=0; i<a.length; i++){
				a[i].classList.remove("active");
			}
			this.classList.add("active")
			document.querySelector(".navbar").classList.toggle("show");

		})
	})


//ham-burger
const humBurger=document.querySelector(".ham-burger");

humBurger.addEventListener("click",function(){
	document.querySelector(".navbar").classList.toggle("show");
})

