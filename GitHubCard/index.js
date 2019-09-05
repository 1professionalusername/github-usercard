/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
axios.get('https://api.github.com/users/1professionalusername')
  .then(response => {
    console.log(response)
  })
  .catch(err => {

  })

//create elements
// function createCard(imgUrl) {
//   const newcard = document.createElement('div')
//   newimage = document.createElement("img"),
//     cardinfo = document.createElement("div"),
//     name = document.createElement("h3");
//   username = document.createElement("p"),
//     location = document.createElement("p"),
//     followers = document.createElement("p");
//   following = document.createElement("p"),
//     bio = document.createElement("p"),

//     //content
//     name.textContent = "blue";
//   newimage.src = 'blue';

//   //classes
//   newcard.classList.add("card");
//   cardInfo.classList.add("card-info");
//   name.classList.add('name');
//   username.classList.add('username');

//   //append
//   newCard.appendChild(newImage);
//   newCard.appendChild(cardInfo);
//   cardInfo.appendChild(name);
//   cardInfo.appendChild(username);
//   cardInfo.appendChild(location);
//   cardInfo.appendChild(profile);
//   profile.appendChild(a);
//   cardInfo.appendChild(followers);
//   cardInfo.appendChild(following);
//   cardInfo.appendChild(bio);

//   // add this functionality later
//   newCard.addEventListener("click", () => {
//     newCard.classList.toggle("selected");
//   });

//   return createCard;
// }

function DogCard(imgUrl) {
  const
    newCard = document.createElement("div"),
    newImage = document.createElement("h3"),
    breed = document.createElement("h3");

  breed.textContent = "Breed: Mastiff";
  newImage.textContent = "Breed";
  newImage.classList.add("dog-image");
  newCard.classList.add("dog-card");
  newCard.appendChild(newImage);
  newCard.appendChild(breed);

  // add this functionality later
  newCard.addEventListener("click", () => {
    newCard.classList.toggle("selected");
  });

  return newCard;
}