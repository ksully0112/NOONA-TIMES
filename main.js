const API_KEY = `557ab4c2cf244be5a7d3bd6382bcb22a`;
let newsList = [];

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

const render = () => {
    const newsHTML = newsList.map(news => {
        const description = news.description 
            ? news.description.length > 200
                ? news.description.substring(0, 200) + "..."
                : news.description
            : "내용없음";
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
