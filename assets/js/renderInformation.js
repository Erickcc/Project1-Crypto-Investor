/*
Values to render:
-Name (name) id: nameCrypto
-Current price (USD) (currentPrice) id: currentPrice
-All time high (USD) (allTimeHigh) id: allTimeHigh
-Market Cap (USD) (marketCap) id: marketCap
*/

// Display the crypto market information in its corresponding place
function renderCryptoInfo(cryptoInfo){
    // Variable whose value changes dynamically to build the text that is displayed in each section
    var currentText;
    $("#nameCrypto").text(cryptoInfo.name);
    currentText = "Current Price: ";
    // .toLocaleString() method is used to add "," to the market value every 3 digits to make it more readable
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

// Display the crypto news information in its corresponding place
function renderCryptoNews(cryptoNews){
    // Remove the elements that have the class "removable" so that only the current crypto currency information is displayed
    $( ".removable" ).remove();
    for(var i = 0; i < 4; i++){
        // Change the title's information
        $('#newsTitle' + (i+1)).text(cryptoNews[i].title);
        // Change the news content information
        $("#newsContent" + (i+1)).text(cryptoNews[i].description);
        // Append a new image with the class removable and set a height to keep a better overall format
        $("#newImage" + (i+1)).prepend('<img src="' + cryptoNews[i].image + '" class="removable" style="height:100px" >');
        // Append a new anchor element with the class removable, when clicked it will open the link on a new tab
        $("#newImage" + (i+1)).append('<a href="' + cryptoNews[i].url + '" class="removable" target="_blank">Link to the news</a>');
    }
}
