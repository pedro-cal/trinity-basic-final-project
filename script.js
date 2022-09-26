const mainBox = document.getElementById("main-box");
const modalDiv = document.getElementById("modal-div");
const nameInput = document.getElementById("user-name-input");
const roleInput = document.getElementById("role-input");

let showModal = false;

function toggleModal() {
   showModal = !showModal;
   if (showModal === true) {
      modalDiv.style.display = 'flex';
   } else {
      modalDiv.style.display = 'none';
   }
}

function saveUser() {
   console.log(nameInput.value);
   console.log(roleInput.value);
}

function renderUserCard(userData) {
   // Template strings
   const cardHTML = `
	<div class="card-box">
    <div class="card-upper-box">
      <div class="image-box">
        <img src=${userData.image} />
      </div>
    </div>
    <div class="text-box">
      <div class="title-box">
        <h1 class="card-title">${userData.firstName} ${userData.lastName}</h1>
        <h2>Teacher</h2>
      </div>
      
      <div class="body-box">
        <h3>Birthdate: 1986-04-02</h3>
        <h3>Status: Active</h3>
        <h3>Mode: Onsite</h3>
      </div>
    </div>
  </div>
`;

   const newCard = document.createElement('div');
   newCard.innerHTML = cardHTML;
   mainBox.appendChild(newCard);
}

const userData = fetch('https://dummyjson.com/users')
   .then(dadosCrus => dadosCrus.json())
   .then(dadosJson => dadosJson.users.splice(9, 100))
   .then(splicedArray => splicedArray.forEach((user) => {
      renderUserCard(user);
   })
   );
