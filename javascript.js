//variables
var total_cost = 0;
var total_volume = +0;
var volumes = [5000, 5500, 6300, 9000, 6000, 5000];
var prices = [0.55, 0.58, 0.60, 0.63, 0.65, 0.70];

// making table
var table = document.getElementsByTagName("table")[0];

// hard coding first row to add titles for columns
table.innerHTML = '<thead><tr><th>Volume</th><th>Price Per Share</th><th>Transaction Cost</th><th>Total Cost</th><th>Total Volume Held</th><th>Moving Average</th><th>Profit/Loss</th></tr></thead><tbody></tbody>';
/*reference: https://www.codeproject.com/Questions/305676/How-to-create-table-in-javascript*/


//using the body of the table for output
table = document.getElementsByTagName("tbody")[0];

function calculate(volume, pps){

    table.innerHTML += '<tr></tr>'; //making new row

    var row = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1 ]; // Selecting row and assigning variable

    row.innerHTML += '<td>' + volume + '</td>'; //putting volume inside of cell for table

    var costofshare = pps
    row.innerHTML += '<td>' + costofshare + '</td>'; //putting pps inside of cell for table

    var transaction_cost = (volume * pps);            //calculate transaction cost
    row.innerHTML += '<td>' + transaction_cost + '</td>'; //putting trabsaction cost insode of cell for table

    total_cost += transaction_cost;
    row.innerHTML += '<td>' + total_cost + '</td>'; //putting total cost insode of cell for table

    total_volume += +volume;
    row.innerHTML += '<td>' + total_volume + '</td>'; //putting total volume insode of cell for table

    var moving_average = total_cost / total_volume;
    row.innerHTML += '<td>' + moving_average.toFixed(4) + '</td>'; //calculating moving average and putting it insode of cell for table

    var profit = 100 - (100 * moving_average / costofshare);
    row.innerHTML += '<td>' + profit.toFixed(4) + '</td>'; //calculating profit and putting into cell for table
}

for(var i = 0; i < volumes.length; i++)
    calculate(volumes[i], prices[i]);