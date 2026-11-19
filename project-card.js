document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project-card").forEach(card => {
        const title = card.dataset.title;
        const category = card.dataset.category;
        const description = card.dataset.description;
        const image = card.dataset.image;
        const link = card.dataset.link;

        card.innerHTML = `<a href="${link}" style="text-decoration: none;">
            <div class="project-card-base">
                <image class="project-card-img" src="${image}"></image>
                <div class="project-card-textbackground"></div>
                <div class="project-card-textparent">
                    <p class="project-card-title"><b>${title}</b></p>
                    <p class="project-card-category"><b>${category}</b></p>
                </div>
                <div class="project-card-descriptionparent">
                    <p class="project-card-description"><b>${description}</b></p>
                </div>
                <div class="project-card-highlight"></div>
            </div>
        </a>`;
    })
});