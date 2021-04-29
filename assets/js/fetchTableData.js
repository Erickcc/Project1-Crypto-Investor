function getDate(index) {
    // Get the date from a week ago with the month-day format e.g. 04-28
    var aWeekAgo = moment().subtract((7-index), 'days').format('MM/DD');

    /* Format the date for a request that was not used in the final code and required a different date format
    console.log(aWeekAgo);
    var dateFormat = aWeekAgo.split('');
    dateFormat.length=5;
    dateFormat = dateFormat.toString();
    dateFormat = dateFormat.replace(/,/g, '\/');
    var newDateFormat = aWeekAgo.split('');
    newDateFormat[0] = dateFormat[3];
    newDateFormat[1] = dateFormat[4];
    newDateFormat[3] = dateFormat[0];
    newDateFormat[4] = dateFormat[1];
    newDateFormat = newDateFormat.toString();
    newDateFormat = newDateFormat.replace(/,/g, '');
    newDateFormat = newDateFormat.replace(/\//g, '-');
    */

    return aWeekAgo;
}

function fetchTableData(cryptoName) {
    // Get the current unix date in seconds
    var currentDate = Math.floor(Date.now() / 1000);
    // 1 week = 604800 second, substract this amout to the current's unix date to get the unix date from a week ago
    var aWeekAgoDate = currentDate - 604800;

    // Build the url for the API
    var cryptoUrl = 'https://api.coingecko.com/api/v3/coins/'+
        cryptoName +
        '/market_chart/range?vs_currency=usd&from='+
        + aWeekAgoDate + '&to='
        + currentDate
    // Build an array of objects that will store the daily crypto currency price in USD from a week ago to today
    var cryptoValues = [];
    
    fetch(cryptoUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            // Variable that we retrieve the correct element from the API's array
            var dailyPosition = 0;

            // Loop the API 8 times to get the past 7 days info as well as the price that the crypto coin has in this moment
            for (var i = 0; i < 8; i++) {
                // Get the information from the API of the past 7 days
                if (i != 7) {
                    cryptoValues.push({
                        price: locRes.prices[dailyPosition][1],
                        date: getDate(i),
                    });
                    /*
                    The API displays the information in the following manner:
                        -1 day from query time = 5 minute interval data
                        -1 - 90 days from query time = hourly data
                        -above 90 days from query time = daily data (00:00 UTC)
                    Because we only wanted 1 value of the crypto currency at around the same time each day, we had to
                    retrieve only 1 value every 24 positions in the array we get from the API
                    */
                    dailyPosition += 24;
                } else {
                    // If we already retrieved the past 7 days information, then get the price of the crypto coin it has in this moment
                    var lastPosition = locRes.prices.length - 1;
                    cryptoValues.push({
                        price: locRes.prices[lastPosition][1],
                        date: getDate(i),
                    });
                }
            }
            // Once we  have the information, then build the chart and display it
            renderChart(cryptoValues, cryptoName);
        })
        .catch(function (error) {
            console.error(error);
        });
}

