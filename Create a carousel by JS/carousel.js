// Local reviews data
const reviews = [

    {
        id: 1,
        name: "Sinthiya Smith",
        job: "Web Developer",
        img: "./img/1.webp",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus harum perferendis autem sequi natus facilis eaque cumque nobis. Dolores modi natus fuga, id molestias hic quas cumque reprehenderit quia atque."
    },
    {
        id: 2,
        name: "David Smith",
        job: "UX Designer",
        img: "./img/2.webp",
        text: "Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. Next than near to four so hand. Times so do he downs me would. Witty abode party her found quiet law. They door four bed fail now have."
    },
    {
        id: 3,
        name: "Sara Jones",
        job: "Product Designer",
        img: "./img/3.jpeg",
        text: "New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered."
    },
    {
        id: 4,
        name: "Laury Smith",
        job: "Software Engineer",
        img: "./img/8.webp",
        text: "Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on."
    },
    {
        id: 5,
        name: "Alexa Smith",
        job: "Fornt-End Developer",
        img: "./img/9.jpg",
        text: "Enjoyed minutes related as at on on. Is fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh screened he. Gravity he mr sixteen esteems. Mile home its new way with high told said. Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel."
    }

];

// Select all DOM selector
const img = document.getElementById("img");
const name = document.getElementById("name");
const age = document.getElementById("age");
const profession = document.getElementById("profession");
const desProf = document.getElementById("des-prof");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () =>{
    showPerson();
})

// show person item base 
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    age.textContent = item.age;
    profession.textContent = item.job;
    desProf.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", () => {
    currentItem++
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

// Show prev person
prevBtn.addEventListener("click", () => {
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// Show random parson
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})