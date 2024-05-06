const continerEl = document.querySelector(".continer");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImages();
});

function addNewImages() {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

    continerEl.appendChild(newImgEl);
}