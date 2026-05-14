fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const timeline = document.getElementById("timeline");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.style.left = item.position + "px";

      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="info">
          <h3>${item.title}</h3>
          <p>${item.year}</p>
          <p>${item.description}</p>
        </div>
      `;

      timeline.appendChild(div);
    });
  });
