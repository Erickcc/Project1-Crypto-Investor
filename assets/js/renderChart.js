function renderChart(cryptoValues) {
    var chart = JSC.chart('chartDiv', {
        debug: true,
        type: 'line',
        title_label_text: 'Line Series Types',
        legend_position: 'inside bottom right',
        toolbar_items: {
            'Line Type': {
                type: 'select',
                label_style_fontSize: 13,
                margin: 5,
                items: 'Line,Step,Spline',
                events_change: function (val) {
                    chart.series().options({ type: val });
                }
            }
        },
        xAxis: { scale_type: 'time' },
        series: [
            {
                name: 'Purchases',
                points: [
                    [cryptoValues[0].date, cryptoValues[0].price],
                    [cryptoValues[1].date, cryptoValues[1].price],
                    [cryptoValues[2].date, cryptoValues[2].price],
                    [cryptoValues[3].date, cryptoValues[3].price],
                    [cryptoValues[4].date, cryptoValues[4].price],
                    [cryptoValues[5].date, cryptoValues[5].price],
                    [cryptoValues[6].date, cryptoValues[6].price],
                    [cryptoValues[7].date, cryptoValues[7].price],
                ]
            }
        ]
    });
}