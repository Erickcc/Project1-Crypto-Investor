/*
Values to retrieve:
-Name (name)
-Current price (USD) (currentPrice)
-All time high (USD) (allTimeHigh)
-Market Cap (USD) (marketCap)
*/

function fetchCryptoInfo(cryptoName) {
    var cryptoUrl = 'https://api.coingecko.com/api/v3/coins/' +
        cryptoName +
        '?localization=false&' +
        'tickers=true&' +
        'market_data=true&' +
        'community_data=true&' +
        'developer_data=true&' +
        'sparkline=true';
    var cryptoInfo;

    fetch(cryptoUrl)
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
            cryptoInfo = {
                name: locRes.name,
                currentPrice: locRes.market_data.current_price.usd,
                allTimeHigh: locRes.market_data.ath.usd,
                marketCap: locRes.market_data.market_cap.usd,
            };
            console.log(cryptoInfo);
            renderCryptoInfo(cryptoInfo);
        })
        .catch(function (error) {
            console.error(error);
        });
};