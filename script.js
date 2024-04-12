var logs = {
    "03/29/2024": 
            [
                {"time_slept" : "10:38pm"},
                {"time_awoke" : "7:40am"},
                {"num_practices" : 1},
                {"comments" : "not very tired"}
            ],
    "03/30/2024": 
            [
                {"time_slept" : "11:20pm"},
                {"time_awoke" : "8:06am"},
                {"num_practices" : 2},
                {"comments" : "had a lot of homework to do"}
            ],
    "03/31/2024": 
            [
                {"time_slept" : "10:17pm"},
                {"time_awoke" : "7:48am"},
                {"num_practices" : 1},
                {"comments" : "got to sleep early last night"}
            ],
    "04/01/2024": 
            [
                {"time_slept" : "10:38pm"},
                {"time_awoke" : "7:40am"},
                {"num_practices" : 1},
                {"comments" : "not very tired"}
            ]
};

function initL() {
    event.preventDefault()
    window.onload = showLogs();
}

window.onload = function() {
    if (window.location.href.indexOf('index.html') > -1) {
      createGraphs();
    }
}

function showLogs() {
    console.log('in showLogs()');
    console.log(logs);
    document.getElementById('logs').insertAdjacentHTML('beforeend', `<table>`)
    for (var date in logs) {
        console.log(logs[date]);
        var logArray = logs[date];
        document.getElementById('logs').insertAdjacentHTML('beforeend', 
        `<tr><td>${date}</td><td>${logArray[0].time_slept}</td><td>${logArray[1].time_awoke}</td><td>${logArray[2].num_practices}</td><td>comments</td></tr>`)
    }
    document.getElementById('logs').insertAdjacentHTML('beforeend', `</table>`); 
}

function addLog(data) {
    return true;
}

function createGraphs() {
    console.log(d3);
}

function deleteLog(date) {
    return true;
}



