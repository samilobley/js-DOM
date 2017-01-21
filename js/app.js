/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var nameElement = document.getElementById("name1");

nameElement.innerHTML = "Tay-Tay";



/*2. Replace the n/a with the following: 

Project Manager*/

var positionElement = document.getElementById("position2");
positionElement.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var aliasElement = document.getElementById("alias3");
aliasElement.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var profileElement = document.getElementsByClassName("profile");
profileElement[0].innerHTML = "Lorem that's the shizzle dolor i'm in the shizzle amizzle, consectetizzle adipiscing uhuh ... yih!. Tellivizzle black velizzle, crazy volutpizzle, suscipit break yo neck, yall, gangsta vel, dope. Pellentesque eget tortor. Shizzle my nizzle crocodizzle erizzle. izzle break it down ma nizzle get down get down tempus bow wow wow. I'm in the shizzle shizzle my nizzle crocodizzle fo shizzle my nizzle i'm in the shizzle check it out. Rizzle i saw beyonces tizzles and my pizzle went crizzle tortor. Pellentesque eleifend nizzle. In hizzle fo shizznit dictumst. Donec dapibizzle. Nizzle shizzle my nizzle crocodizzle urna, pretizzle check it out, mattis shizznit, eleifend my shizz, nunc. Yippiyo suscipizzle. Integer sempizzle velizzle sizzle fo shizzle.";
console.log(profileElement);



/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var samuelElement = document.getElementsByClassName("profile");
samuelElement[2].innerHTML = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?";
console.log(samuelElement);



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var chuckElement = document.createElement("div");
    chuckElement.id = "name7";
    chuckElement.innerHTML = "Chuck Norris";	
    nameBox.appendChild(chuckElement);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var grimmaceElement = document.createElement("div");
grimmaceElement.id = "alias8";
grimmaceElement.innerHTML = "The Purple Monster";
aliasBox.appendChild(grimmaceElement);



//Final Boss
/*8. Create your own profile.*/

var newName = document.createElement("div");
var newPosition = document.createElement("div");
var newAlias = document.createElement("div");
var newBio = document.createElement("div");

newName.className = "name";
newPosition.className = "position";
newAlias.className = "alias";
newBio.className = "profile";

newName.innerHTML = "Sami";
newPosition.innerHTML = "Software Engineer";
newAlias.innerHTML = "JavaScript Kween";
newBio.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolores numquam excepturi perferendis, quam quas iste quae vitae, sint facere, dignissimos in, ipsam ab velit odio architecto. Non, porro, ducimus.";

var newProfile = document.getElementsByClassName("block3 col-sm-4")[2];
newProfile.appendChild(newName);
newProfile.appendChild(newPosition);
newProfile.appendChild(newAlias);
newProfile.appendChild(newBio);
















