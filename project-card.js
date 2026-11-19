document.querySelectorAll(".project-card").forEach(card => {
    const title = card.dataset.title;
    const category = card.dataset.category;
    const description = card.dataset.description;
    const image = card.dataset.image;
    const link = card.dataset.link;

    card.innerHTML = `<a href="${link}" style="text-decoration: none;"></a>
        <div class="project-card">
          <image src="${image}"></image>
          <div></div>
          <div>
            <p><b>${title}</b></p>
            <p><b>${category}</b></p>
          </div>
          <div>
            <p><b>${description}</b></p>
          </div>
          <div></div>
        </div>
      </a>`;
});