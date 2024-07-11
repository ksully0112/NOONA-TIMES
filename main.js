const API_KEY = `557ab4c2cf244be5a7d3bd6382bcb22a`;
let newsList = [];
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)))

const getLatesNews = async () => {
    const url = new URL(
        `https://startling-sundae-91d173.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("News List:", newsList);
};

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase()
    console.log("category, category")
    const url = new URL (`https://startling-sundae-91d173.netlify.app/top-headlines?country=us&category=${category}&apikey=${API_KEY}`)
    const response = await fetch(url)
    const data = await esponse.json()
    console.log("Ddd", data)
    newsList = data.articles
    render()
}

const render = () => {
    const newsHTML = newsList.map(news => {
        const description = news.description 
            ? news.description.length > 200
                ? news.description.substring(0, 200) + "..."
                : news.description
            : "내용없음";

        const image = news.urlToImage 
            ? news.urlToImage 
            : "https://via.placeholder.com/150?text=Image+Not+Available";

        const source = news.source.name 
            ? news.source.name 
            : "no source";

        return `<div class="row news">
            <div class="col-lg-4">
                <img class="news-img-size" src="${image}" />
            </div>
            <div class="col-lg-8">
                <h2>${news.title}</h2>
                <p>${description}</p>
                <div>
                    ${source} * ${news.publishedAt}
                </div>
            </div>
        </div>`;
    }).join('');

    document.getElementById("news-board").innerHTML = newsHTML;
};

getLatesNews();

