const ARTICLES = [
  { id: "article-1", titel: "Min första artikel om esport", category: "Esport" },
  { id: "article-2", titel: "Utveckling och sånt", category: "Development" },
  { id: "article-3", titel: "Bygg en nice produkt", category: "Product" }
];

function getArticles(category = null) {
  if (category) {
    return ARTICLES.filter(a => a.category === category);
  }
  return ARTICLES;
}

function showArticles(list) {
  const ul = document.getElementById("articlelist");
  ul.innerHTML = ""; // Töm listan först

  // Loop över alla artiklar i listan och skapa <li>
  list.forEach(articles => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="article.html?id=${articles.id}">${articles.titel}</a>`;
    ul.appendChild(li);
  });
}