const loadPhotoData = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotoData(data));
};
loadPhotoData();
const displayPhotoData = (data) => {
  console.log(data);
  const dataContainer = document.getElementById("data-container");
  data.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div onclick = "displayDetails(${data.id})" class="card">
              <img src=${data.url} height = '300' class=" card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
    `;
    dataContainer.appendChild(div);
  });
};

const displayDetails = (id) => {
  document.getElementById("data-details").innerText = "";
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const dataDetails = document.getElementById("data-details");
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
            <div class = "d-flex ">
                <img src=${data.url} height = '250' class="m-1 card-img-top" alt="..." />
                <img src=${data.thumbnailUrl} height = '250' class="m-1 card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
      `;
      dataDetails.appendChild(div);
    });
};
