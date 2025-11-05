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
                <img src="${value.image}" alt="">
                <p>Name:<span> ${value.firstName}<span/>
                <span> ${value.lastName}<span/>
                </p>
                <p><span>Gender:<span/> <span>${value.gender}<span/></p>
                <p>Id no:${value.id}</p>
                <p>B.group:${value.bloodGroup}</p>
             
             
            </div>
        `;
      })
      .join("");
    })
  