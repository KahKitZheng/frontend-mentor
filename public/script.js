import { challenges } from "./challenges.js";

loadData();

function loadData() {
  challenges.forEach((item) => {
    createCard(item);
  });
}

function createCard(item) {
  const gridEl = document.getElementById("gridEl");
  const url = item.internalhost === true ? `./${item.name}` : item.url;
  const image = `./${item.name}/design/desktop-design.jpg`;
  const repo =
    item.internalhost === true
      ? `https://github.com/KahKitZheng/frontend-mentor/tree/main/${item.name}`
      : item.repo;

  const cardHTML = `
    <li class="card">
      <div class="image">
        <img src=${image} alt=""/>
      </div>
      <div class="text">            
        <h2>
          <a href="${url}">${item.title}</a>
        </h2>          
        <small>
          <a href="${repo}">Github repo</a>
        </small>  
      </div>
    </li>
  `;

  gridEl.insertAdjacentHTML("beforeend", cardHTML);
}
