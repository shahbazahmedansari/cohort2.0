let form = document.querySelector("#form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    document.querySelector(".cards").innerHTML = "";
    this.users.forEach((user) => {
      // card
      const card = document.createElement("div");
      card.className =
        "card flex flex-col items-center justify-center border border-gray-600 p-6 rounded-xl w-70 text-center bg-gray-900";

      // image wrapper
      const imgWrapper = document.createElement("div");

      // image
      const img = document.createElement("img");
      img.src = user.photo;
      img.alt = "profile pic";
      img.height = 100;
      img.width = 100;
      img.className = "rounded-full";

      // name
      const name = document.createElement("h1");
      name.className = "text-xl font-bold";
      name.innerText = user.username;

      // role
      const role = document.createElement("p");
      role.className = "text-lg font-semibold";
      role.innerText = user.role;

      // bio
      const bio = document.createElement("p");
      bio.className = "text-sm";
      bio.innerText = user.bio;

      // remove button
      const removeBtn = document.createElement("button");
      removeBtn.className =
        "border border-gray-600 bg-blue-900 rounded-full py-1 w-full mt-2 cursor-pointer active:bg-gray-900 active:scale-[0.95]";
      removeBtn.innerText = "Remove";

      // append structure
      imgWrapper.appendChild(img);

      card.appendChild(imgWrapper);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);
      card.appendChild(removeBtn);

      document.querySelector(".cards").appendChild(card);

    });
  },
  removeUser: function () { },
};

userManager.init();