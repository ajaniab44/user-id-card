const url = "https://dummyjson.com/users";
const fetchData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
 
};

let allusers = document.querySelector("#allusers");

fetch(url, fetchData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let users = data.users;
    console.log(users);

    allusers.innerHTML = users
      .map(function (value, index, array) {

        return `
            <div class="eachuser">
                <img class="image" src="${value.image}" alt="">
                <p><span> ${value.firstName}<span/>
                <span> ${value.lastName}<span/>
                </p>
                <p>${value.gender}</p>
                <p>${value.id}</p>
                <p>${value.bloodGroup}</p>
                <p>${value.phone}</p>
             
            </div>
        `;
      })
      .join("");
    })
  