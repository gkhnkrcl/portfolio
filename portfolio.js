const ligth = document.querySelector("#ligth");
 createDiv();
function createDiv() {
  let div;
  let x = 2500;
  for (y = 0; y < x; y++) {
    div = document.createElement("div");
    ligth.appendChild(div);
  }
}

/*personİnformation*/

const personİnformation = document.querySelector(".personInformation");
const aboutMe = document.querySelector(".aboutMe");
const myProjects = document.querySelector(".myProjects");
const navİtem=document.querySelector(".nav-item")
const bars = document.querySelector(".bars");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const textAboutMe= document.querySelector(".textAboutMe")
const cardText=document.querySelector(".card-text")
const connection= document.querySelector(".connection")
const cv= document.querySelector(".cv")

const videos=document.querySelector(".carousel")

personİnformation .addEventListener("click", () => {
  personİnformation.classList.add("personInformationIn")
   personİnformation.style.animation = " zoomIn 2s";
  personİnformation.style.backgroundImage = "url('images/1.JPG')";
  bars.style.display = "none";
  title1.style.animation = "fadeOut 1s forwards  ";
  myProjects.style.display = "block";
  aboutMe.style.display = "block";

  setTimeout(() => {
    title2.style.display= " block ";
  }, 800);
 

 
});

myProjects.addEventListener("click", ()=>{
  title2.style.animation = "fadeOut 1s  forwards";
  textAboutMe.style.display="none"
  videos.style.display="flex"
  videos.style.animation = " jackInTheBox 2s forwards";


});

aboutMe.addEventListener("click", () => {
  textAboutMe.style.display="block"
  cardText.style.animation = "fadeIn 1s  forwards";
   title2.style.animation = "fadeOut 1s  forwards";
   connection.style.opacity="0"
   cv.style.opacity="0"


  videos.style.display="none"


});

textAboutMe.addEventListener("click",()=>{
  connection.style.opacity="1"
  cv.style.opacity="1"

  cardText.style.animation = "slideOutUp 1s  forwards";

})



