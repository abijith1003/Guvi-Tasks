fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1ac7ace6835fe8ed325a25426fbd214c')
.then(res => res.json())
.then(json => console.log(json));