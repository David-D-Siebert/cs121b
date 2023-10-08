/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
   name: "David Siebert",
   photo: "images/me.jpeg",
   favoriteFoods: [
      'pizza', 
      'pasta', 
      'prime rib',
      'ice cream'
   ],
   hobbies: [
      'History',
      'writing software',
      'rocketry',
      'making things'
   ],
   placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
 { 
   place: 'Charleston, SC',
   length: '4 years'
 }  
);

myProfile.placesLived.push (
   { 
     place: 'Vero Beach, FL',
     length: '28 years'
   },
   {
     place: 'Port St. Lucie, FL',
     length: '25 years'
   }
  );
  

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute("src",myProfile.photo);
document.querySelector('#photo').setAttribute("alt",myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
   let li = document.createElement('li');
   li.textContent = food;
   document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
   let ul = document.createElement('ul');
   ul.textContent = hobby
   document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
   let dt = document.createElement('dt');
   let dd = document.createElement('dd');
   dt.textContent = element.place;
   dd.textContent = element.length;
   document.querySelector('#places-lived').appendChild(dt);
   document.querySelector('#places-lived').appendChild(dd);
});


