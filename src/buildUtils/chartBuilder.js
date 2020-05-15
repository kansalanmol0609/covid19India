const getColor = (title) => {
    if(title === 'Confirmed'){
        return 'red';
    }else if(title === 'Deceased'){
        return 'black';
    }else if(title === 'Recovered'){
        return 'green';
    }else{
        return 'blue';
    }
}

export const chartBuilder = (chartId, dataPoints, title) => {
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
        // console.log(data)
      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataPoints);

        var options = {
          title,
          hAxis: {
              title: 'Date',
          },
          yAxis: {
              title: 'Number of Cases',
          },
          legend: { position: 'none' },
          colors: [getColor(title)],
        };

        var chart = new google.visualization.LineChart(document.getElementById(chartId));

        chart.draw(data, options);
      }
}

// [
//     ['Year', 'Sales', 'Expenses'],
//     ['2004',  1000,      400],
//     ['2005',  1170,      460],
//     ['2006',  660,       1120],
//     ['2007',  1030,      540]
//   ]