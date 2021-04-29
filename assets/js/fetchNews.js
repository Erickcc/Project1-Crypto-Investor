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

// API token/key
var token = "10250ea8aa62ea37de00eb8a2370479d";


function fetchNews(cryptoName) {
    // Build API URL
    var newsUrl = 'https://gnews.io/api/v4/search?q=' +
        cryptoName + '&' +
        'from=2021-04-15&' +
        'lang=en&' +
        'in=title&' +
        'sortBy=relevance&' +
        'country=us&' +
        'token=' + token;
    // Create an array of objetcs that will be used to store the retrieved information from the API
    var cryptoNews = [];
    
    fetch(newsUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            // Loop through the first 4 news retrieved from the API
            for (var i = 0; i < 4; i++) {
                // Store the current news article information (title, description, image and url)
                cryptoNews.push({
                    title: locRes.articles[i].title,
                    description: locRes.articles[i].description,
                    image: locRes.articles[i].image,
                    url: locRes.articles[i].url,
                });
            }
            // Display the retrieved information
            renderCryptoNews(cryptoNews);

        })
        .catch(function (error) {
            console.error(error);
        });
};