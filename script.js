const gallery =
document.querySelector(".gallery");

const buttons =
document.querySelectorAll(".btn");

/* Categories */

const categories = [
  "forest",
  "mountain",
  "ocean",
  "desert",
  "city"
];

let count = 1;

/* Current Active Filter */

let currentFilter = "all";

/* Add Images Function */

function addImages(){

  for(let i=0; i<20; i++){

    let randomCategory;

    /* If ALL */

    if(currentFilter === "all"){

      randomCategory =
      categories[
        Math.floor(
          Math.random() * categories.length
        )
      ];

    }

    /* Selected Button Category */

    else{

      randomCategory =
      currentFilter;
    }

    gallery.innerHTML += `

      <div class="image ${randomCategory}"
      data-category="${randomCategory}">

        <img src=
        "https://picsum.photos/300/300?random=${Date.now()+count}">

        <h3>${randomCategory}</h3>

      </div>

    `;

    count++;

  }

}

/* First Images */

addImages();

/* Button Filter */

buttons.forEach((button)=>{

  button.addEventListener("click",()=>{

    /* Get Button Name */

    currentFilter =
    button.dataset.name;

    /* Clear Old Images */

    gallery.innerHTML = "";

    /* Add New Filtered Images */

    addImages();

  });

});

/* Infinite Scroll */

window.addEventListener("scroll",()=>{

  if(

    window.innerHeight +
    window.scrollY

    >=

    document.body.offsetHeight - 100

  ){

    addImages();

  }

});