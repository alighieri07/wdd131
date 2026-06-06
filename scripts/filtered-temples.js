const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Elko Nevada",
    location: "Elko, Nevada, United States",
    dedicated: "2025, October, 12",
    area: 12901,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/elko-nevada-temple/elko-nevada-temple-63344-main.jpg"
  },
  {
    templeName: "Concepción Chile",
    location: "Concepción, Bio-Bio, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");

function showTemples(templeList) {
  const container = document.querySelector("#temple-container");
  container.innerHTML = "";
  templeList.forEach(temple => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      </figcaption>
    `;
    container.appendChild(figure);
  });
}

showTemples(temples);

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    const filter = event.target.dataset.filter;
    let filteredTemples;

    if (filter === "old") {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
    } else if (filter === "new") {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000);
    } else if (filter === "large") {
      filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === "small") {
      filteredTemples = temples.filter(temple => temple.area < 10000);
    } else {
      filteredTemples = temples;
    }

    navbar.classList.remove("show");
    menuButton.textContent = "☰";
    showTemples(filteredTemples);
  });
});

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuButton.textContent = navbar.classList.contains("show") ? "✕" : "☰";
});

const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});