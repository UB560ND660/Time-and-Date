let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText = zeroPadding(now.getHours(), 2) + ":" + zeroPadding(now.getMinutes(), 2) + ":" + zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText = zeroPadding(now.getMonth() + 1, 2) + "-" + zeroPadding(now.getDate(), 2) + "-" + zeroPadding(now.getFullYear());

    document.getElementById("week").innerText = week[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}