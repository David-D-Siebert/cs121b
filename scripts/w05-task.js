/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.getElementById('temples');
let templeList = {};

/* async displayTemples Function */
const displayTemples = (temples) =>
{
    
   templeList.forEach((temple) => {
      article = document.createElement("article");
      var title = document.createElement("h3");
      title.textContent=temple["templeName"];
      article.appendChild(title);
      pic = document.createElement("img");
      pic.src = temple.imageUrl;
      pic.alt = temple.location;
      article.appendChild(pic);
      templeElement.appendChild(article);   
   });
}



/* async getTemples Function using fetch()*/
const getTemples = async() => {
   const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
   templeList = await response.json();
   displayTemples(templeList);
}

/* reset Function */
function reset(){
   while(templeElement.hasChildNodes()){
      templeElement.firstChild.remove();
   }
}

/* sortBy Function */
function sortBy(temples){
   reset()
   let filter = document.getElementById('sortBy');
   console.log(filter.options[filter.selectedIndex].text);
   switch (filter.options[filter.selectedIndex].text) {
      case "Utah":
         return  temples.filter(item => item.templeName.contains("Utah"));
         break;
      case "notutah":
         return  temples.filter(temple => !temple.templeName.contains("Utah") );
         break;
      case "older" :
         break;
      default :
   }
   return temples;
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) })