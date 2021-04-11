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
                console.log(rides);
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
    let table = document.createElement('table');
        table.setAttribute('border', "2");
        div.appendChild(table);
    let thead = document.createElement('thead');
        let theadrow = document.createElement('tr');
        // populates the head of the table with properties of the object
        for (var p in rides[1]){
            if (p !== rides[1].deleted){
                var th = document.createElement('th');
                th.textContent = p
                theadrow.appendChild(th);
                console.log(rides[0].title);
            }
            
        }
        console.log(rides.length);
    thead.appendChild(theadrow);
    table.appendChild(thead);
    
    let tbody = document.createElement('tbody');
    
   // make a row for each object in the list
    
        for (var i = 0; i < rides.length; i++){
            let tr = document.createElement('tr');
            ////id
            let td1 = document.createElement('td');
            td1.textContent = rides[i].id;
            // title
            let td2 = document.createElement('td');
            td2.textContent = rides[i].title;
            // description
            let td3 = document.createElement('td');
            td3.textContent = rides[i].description;
            // miles
            let td4 = document.createElement('td');
            td4.textContent = rides[i].miles;
            //bikeUsed
            let td5 = document.createElement('td');
            td5.textContent = rides[i].bikeUsed;
            // Time Hours
            let td6 = document.createElement('td');
            td6.textContent = rides[i].timeHours;
            //Time Minutes
            let td7 = document.createElement('td');
            td7.textContent = rides[i].timeMinutes;
            //deleted
            let td8 = document.createElement('td');
            td8.textContent = rides[i].deleted
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tbody.appendChild(tr);
        }
 

    table.appendChild(tbody);
    div.appendChild(table);
    
    


    // for (const ride of rides) {
    //         let li = document.createElement('li');
    //         li.textContent = ride.title + " " + ride.description;
    //         ol.appendChild(li);
    //     }
}

function table(){
    let table = document
}