window.addEventListener('load', function (evt) {
    console.log('script.js loaded');
    init();
});

function init() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/rides');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                let rides = JSON.parse(xhr.responseText);
                displayRides(rides);
            }
            else{
                displayError('Error retrieving Rides: ' + xhr.status);
                
            }
        }
    }
    xhr.send();
}

function displayErrors() {
    let div = document.getElementById('errors');
    let h1 = document.createElement('h3');
    h1.textContent = msg;
    div.appendChild(h1);
}

function displayRides(rides) {
    let div = document.getElementById('rideTable');

    for (const ride of rides) {
        let li = document.createElement('li');
        li.textContent = ride.title;
        div.appendChild(li);
    }
}