//Page: https://gnews.io/docs/v4#introduction
//https://gnews.io/api/v4/search?q=example&token=10250ea8aa62ea37de00eb8a2370479d
//token: 10250ea8aa62ea37de00eb8a2370479d

/*
Values to retrieve:
-Title (title)
-Description (description)
-Image (image)
-URL (url)
*/

var token = "10250ea8aa62ea37de00eb8a2370479d";


function fetchNews(cryptoName) {
    var newsUrl = 'https://gnews.io/api/v4/search?q=' +
        cryptoName + '&' +
        'from=2021-04-15&' +
        'lang=en&' +
        'in=title&' +
        'sortBy=relevance&' +
        'country=us&' +
        'token=' + token;

    var cryptoNews = [];
    console.log(newsUrl);
    fetch(newsUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            // console.log("Name: " + locRes.name);
            // console.log("Current Price: " + locRes.market_data.current_price.usd);
            // console.log("All time high: " + locRes.market_data.ath.usd);
            // console.log("Market Cap: " + locRes.market_data.market_cap.usd);
            // console.log(locRes);
            for (var i = 0; i < 4; i++) {
                cryptoNews.push({
                    title: locRes.articles[i].title,
                    description: locRes.articles[i].description,
                    image: locRes.articles[i].image,
                    url: locRes.articles[i].url,
                });
            }
            console.log(cryptoNews);
            renderCryptoNews(cryptoNews);

        })
        .catch(function (error) {
            console.error(error);
        });
};