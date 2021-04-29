/*
Values to retrieve:
-Name (name)
-Current price (USD) (currentPrice)
-All time high (USD) (allTimeHigh)
-Market Cap (USD) (marketCap)
*/

function fetchCryptoInfo(cryptoName) {
    // Build the URL to retrieve the crypto coin market information
    var cryptoUrl = 'https://api.coingecko.com/api/v3/coins/' +
        cryptoName +
        '?localization=false&' +
        'tickers=true&' +
        'market_data=true&' +
        'community_data=true&' +
        'developer_data=true&' +
        'sparkline=true';
    // Object that we are going to use to store the crypto market information
    var cryptoInfo;

    fetch(cryptoUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            /*
            Retrieve the crypto name, current price, all time high value and market cap and
            Store it in the crypto infor variable
            */
            cryptoInfo = {
                name: locRes.name,
                currentPrice: locRes.market_data.current_price.usd,
                allTimeHigh: locRes.market_data.ath.usd,
                marketCap: locRes.market_data.market_cap.usd,
            };
            // Once the information was retrieved, then use the next function to display it
            renderCryptoInfo(cryptoInfo);
        })
        .catch(function (error) {
            console.error(error);
        });
};