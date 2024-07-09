const API_KEY=`557ab4c2cf244be5a7d3bd6382bcb22a`;
let news = []
const getLatesNews = async () => {
    const url = new URL(
        `https://startling-sundae-91d173.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("ddddd", news);
};

getLatesNews();