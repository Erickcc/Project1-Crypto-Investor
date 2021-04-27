/*
Values to render:
-Name (name) id: nameCrypto
-Current price (USD) (currentPrice) id: currentPrice
-All time high (USD) (allTimeHigh) id: allTimeHigh
-Market Cap (USD) (marketCap) id: marketCap
*/
function renderCryptoInfo(cryptoInfo){
    var currentText;
    $("#nameCrypto").text(cryptoInfo.name);
    currentText = "Current Price: ";
    $("#currentPrice").text(currentText + " $" + cryptoInfo.currentPrice.toLocaleString("en-US") + " USD");
    currentText = "All Time High: ";
    $("#allTimeHigh").text(currentText + " $" + cryptoInfo.allTimeHigh.toLocaleString("en-US") + " USD");
    currentText = "Market Cap: ";
    $("#marketCap").text(currentText + " $" + cryptoInfo.marketCap.toLocaleString("en-US") + " USD");
}


/*
Values to render:
-Title (title) id: newsTitle#
-Description (description) id: newsContent#
-Image (image) id: newImage#
-URL (url) 
*/
function renderCryptoNews(cryptoNews){
    $( ".removable" ).remove();
    for(var i = 0; i < 4; i++){
        $('#newsTitle' + (i+1)).text(cryptoNews[i].title);
        $("#newsContent" + (i+1)).text(cryptoNews[i].description);
        $("#newImage" + (i+1)).prepend('<img src="' + cryptoNews[i].image + '" class="removable" style="height:100px" >');
        $("#newImage" + (i+1)).append('<a href="' + cryptoNews[i].url + '" class="removable" target="_blank">Link a la noticia</a>');
    }
}
