const stars = document.querySelectorAll(".stars i");

//percorrer a lista
stars.forEach((star, index0) => {
  //função
  star.addEventListener("mouseover", () =>{
    stars.forEach((star, index1) =>{      
      index0 > index1 ? star.classList.add("active") : star.classList.remove("active");
      
    })
  });
});