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
var buttonEl = document.querySelector('#input-button');

function getCryptoInfo(event) {
    event.preventDefault();
    var cryptoName = $('#form-element').val();
    cryptoName = cryptoName.toLowerCase();
    fetchCryptoInfo(cryptoName);
}


function test(event){
    event.preventDefault();

    console.log("Clicked");
    console.log($('#form-element').val());
}

//  $("#input-button").click(test);
$("#input-button").click(getCryptoInfo);

// buttonEl.addEventListener('click', getCryptoInfo);



