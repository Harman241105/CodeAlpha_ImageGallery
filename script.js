const gallery =
document.querySelector(".gallery");

const buttons =
document.querySelectorAll(".btn");

const loadMore =
document.querySelector(".load-more");

/* Categories */

const categories = [
  "forest",
  "mountain",
  "ocean",
  "desert",
  "city"
];

let count = 1;

/* Current Filter */

let currentFilter = "all";

/* Add Images Function */

function addImages(){

  for(let i=0; i<20; i++){

    let randomCategory;

    /* ALL */

    if(currentFilter === "all"){

      randomCategory =
      categories[
        Math.floor(
          Math.random() * categories.length
        )
      ];

    }

    /* Selected Category */

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

/* Load More Button */

loadMore.addEventListener("click",()=>{

  addImages();

});

/* Filter Buttons */

buttons.forEach((button)=>{

  button.addEventListener("click",()=>{

    currentFilter =
    button.dataset.name;

    /* Clear Gallery */

    gallery.innerHTML = "";

    /* Add New Images */

    addImages();

  });

});
