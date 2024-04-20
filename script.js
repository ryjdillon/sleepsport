var logs = new Map();
logs.set("2024-04-10", {'time_slept': "22:19", 'time_awoke': "7:30", 'num_practices': 2, 'comments': "help"});
logs.set("2024-04-10", {'time_slept': "21:33", 'time_awoke': "7:36", 'num_practices': 1, 'comments': "help"});
logs.set("2024-04-10", {'time_slept': "20:57", 'time_awoke': "7:32", 'num_practices': 1, 'comments': "help"});

window.onload = function() {
    event.preventDefault;
    if (window.location.href.indexOf('pages/log.html') > -1) {
      showLogs();
    }
}

window.onload = function() {
    if (window.location.href.indexOf('index.html') > -1) {
      createGraphs();
    }
}

function showLogs() {
    console.log('in showLogs()');
    console.log(logs);
    logs.forEach((value, key) => {
        console.log(value, key);
    });
    /* document.getElementById('logs').insertAdjacentHTML('beforeend', `<table>`)
    for (var date in logs) {
        console.log(logs[date]);
        var logArray = logs[date];
        document.getElementById('logs').insertAdjacentHTML('beforeend', 
        `<tr><td>${date}</td><td>${logArray[0].time_slept}</td><td>${logArray[1].time_awoke}</td><td>${logArray[2].num_practices}</td><td>comments</td></tr>`)
    }
    document.getElementById('logs').insertAdjacentHTML('beforeend', `</table>`);  */
}

function addLog() {
    window.location.replace("pages/log.html");
    return false;
    /* var date = document.getElementById('date').value;
    var time_slept = document.getElementById('sleep-time');
    var time_awoke = document.getElementById('wake-time');
    var num_practices = document.getElementById('num-practices');
    var comments = document.getElementById('comments');
    logs.set(date, {'time_slept': time_slept, 'time_awoke': time_awoke, 'num_practices': num_practices, 'comments': comments});
    console.log(logs); */
}

function createGraphs() {
    console.log(d3);
}

function deleteLog(date) {
    return true;
}

function validateForm() {
    location.href='log.html';
}

function confirmSubmission() {
    document.getElementById('confirmation').innerHTML = '<h1 style="margin-left: 100px">Logged Successfully</h1>';
    event.preventDefault;
}



