function getDate(index) {
    var aWeekAgo = moment().subtract((7-index), 'days').format('MM/DD');
    // console.log(aWeekAgo);
    // var dateFormat = aWeekAgo.split('');
    // dateFormat.length=5;
    // dateFormat = dateFormat.toString();
    // dateFormat = dateFormat.replace(/,/g, '\/');
    // var newDateFormat = aWeekAgo.split('');
    // newDateFormat[0] = dateFormat[3];
    // newDateFormat[1] = dateFormat[4];
    // newDateFormat[3] = dateFormat[0];
    // newDateFormat[4] = dateFormat[1];
    // newDateFormat = newDateFormat.toString();
    // newDateFormat = newDateFormat.replace(/,/g, '');
    // newDateFormat = newDateFormat.replace(/\//g, '-');
    return aWeekAgo;
}

function fetchTableData(cryptoName) {
    var currentDate = Math.floor(Date.now() / 1000);
    var aWeekAgoDate = currentDate - 604800;

    var cryptoUrl = 'https://api.coingecko.com/api/v3/coins/'+
        cryptoName +
        '/market_chart/range?vs_currency=usd&from='+
        + aWeekAgoDate + '&to='
        + currentDate

    var cryptoValues = [];
    // console.log(cryptoUrl);
    // console.log(weekTimes);
    fetch(cryptoUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            var dailyPosition = 0;

            for (var i = 0; i < 8; i++) {
                if (i != 7) {
                    cryptoValues.push({
                        price: locRes.prices[dailyPosition][1],
                        date: getDate(i),
                    });
                    dailyPosition += 24;
                } else {
                    var lastPosition = locRes.prices.length - 1;
                    cryptoValues.push({
                        price: locRes.prices[lastPosition][1],
                        date: getDate(i),
                    });
                }
            }
            renderChart(cryptoValues, cryptoName);
            // console.log(locRes);
            // console.log(cryptoValues);
        })
        .catch(function (error) {
            console.error(error);
        });
}

