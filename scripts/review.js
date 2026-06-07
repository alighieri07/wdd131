let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
  reviewCount = 1;
} else {
  reviewCount = parseInt(reviewCount) + 1;
}

localStorage.setItem("reviewCount", reviewCount);
document.getElementById("reviewCount").textContent = reviewCount;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});