//Exchange rates:
//https://api.coingecko.com/api/v3/exchange_rates

//Compare prices:
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,litecoin&vs_currencies=eth,usd,mxn

//Supported currency exchages
//https://api.coingecko.com/api/v3/simple/supported_vs_currencies

//Main info link
//https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true

//NewsAPI
//Key: c291ba41b0364ba5a0476ff14be9cef8


function getCryptoInfo(event) {
    event.preventDefault();
    // Extracts the current value of the drop down menu
    var cryptoName = $('#form-element').val();
    // Turns the name to lowercase so that we can later feed that name to the API
    cryptoName = cryptoName.toLowerCase();
    // Function that gets the main market information of the chosen crypto currency from an API
    fetchCryptoInfo(cryptoName);
    // Function that gets the news regarding the chosen currency from an API
    fetchNews(cryptoName);
    // Function that retrieves the crypto coin value in USD of several days to make a chart with said info
    fetchTableData(cryptoName);
}

// Listens to the form button
$("#input-button").click(getCryptoInfo);




