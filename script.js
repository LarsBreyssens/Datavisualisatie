fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const timeline = document.getElementById("timeline");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.style.left = item.position + "px";

      const title = document.createElement("h3");
      title.textContent = item.title;
      title.classList.add("item-title");

      const info = document.createElement("div");
      info.classList.add("info");
      info.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <p>${item.year}</p>
        <p>${item.description}</p>
      `;

      title.addEventListener("mouseenter", () => {
        info.style.display = "block";
      });
      title.addEventListener("mouseleave", () => {
        info.style.display = "none";
      });

      div.appendChild(title);
      div.appendChild(info);
      timeline.appendChild(div);
    });
  });
