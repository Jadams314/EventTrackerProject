window.addEventListener('load', function (evt) {
    console.log('script.js loaded');
    init();
});


let showDetails = function(id){
    let div = document.getElementById('rideDetails');

}
function init() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/rides');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                let rides = JSON.parse(xhr.responseText);
                //formSearch();
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
        table.setAttribute("id", 'tbl');
        table.setAttribute('border', "2");
        div.appendChild(table);
    let thead = document.createElement('thead');
        let theadrow = document.createElement('tr');
        // populates the head of the table with properties of the object
        for (var p in rides[0]){
                var th = document.createElement('th');
                th.textContent = p
                theadrow.appendChild(th);
               // console.log(rides[0].title);
            
        }
    thead.appendChild(theadrow);
    table.appendChild(thead);
    
    let tbody = document.createElement('tbody');
    
   // make a row for each object in the list
        
        for (var i = 0; i < rides.length - 1; i++){
            let tr = document.createElement('tr')
            tr.setAttribute('id', rides[i].id);

            tr.addEventListener('click', function(e){
                e.preventDefault();
                var id = tr.id;
                if (!isNaN(id) && id > 0){
                   
                    rideDetails(id);
                    console.log('row clicked');
                    
                }
            })
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
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tbody.appendChild(tr);
        }
 

    table.appendChild(tbody);
    div.appendChild(table);
    
    let br = document.createElement('br');
    let btn3 = document.createElement('button');
    btn3.setAttribute('id', "add");
    btn3.innerHTML = "Add Ride";
    div.appendChild(btn3);

    btn3.addEventListener('click', function(e){
        e.preventDefault();
            console.log('Add Clicked');
           addRide();
    })
}

function addRide(){
    let div = document.getElementById('formDiv');
    let div2 = document.getElementById('rideTable');
    let tbl = document.getElementById('tbl');
    let btn2 = document.getElementById('add')
    var br = document.createElement('br');
    div2.removeChild(tbl);
    div2.removeChild(btn2);



        let form = document.createElement('form');
            
            // title
            var input = document.createElement('input')
                input.type = "text";
                input.name = "title";
                input.insertAdjacentText(input,"Title")
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
            // description
            var input = document.createElement('input')
                input.type = "text";
                input.name = "description";
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
            // bikeUsed
            var input = document.createElement('input')
                input.type = "text";
                input.name = "bikeUsed";
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
            // miles
            var input = document.createElement('input')
                input.type = "number";
                input.name = "miles";
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
            // timeHours
            var input = document.createElement('input')
                input.type = "number";
                input.name = "timeHours";
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
            // timeMinutes
            var input = document.createElement('input')
                input.type = "number";
                input.name = "timeMinutes";
                form.appendChild(input);
                var br = document.createElement('br');
                form.appendChild(br);
                
                let btn3 = document.createElement('button');
                    btn3.setAttribute('id', "submit");
                    btn3.innerHTML = "submit";
                    form.appendChild(btn3);

                    btn3.addEventListener('click', function(e){
                        e.preventDefault();
                            console.log('Submit Clicked');
                        //create();
                    })


            div.appendChild(form);
        
}

function rideDetails(id){
    let div = document.getElementById('rideDetails');
    let div2 = document.getElementById('rideTable');
        let tbl = document.getElementById('tbl')
        div2.removeChild(tbl);
    
        div.textContent = '';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/rides/'+ id);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                let ride = JSON.parse(xhr.responseText);
                let h3 = document.createElement('h3');
                h3.textContent = ride.title;
                div.appendChild(h3);
                let bq = document.createElement('p');
                bq.textContent = ride.description;
                div.appendChild(bq);
                let ul = document.createElement('ul');

                    let li3 = document.createElement('li');
                    li3.textContent = 'Bike: ' + ride.bikeUsed;
                    ul.appendChild(li3);

                    let li1 = document.createElement('li');
                    li1.textContent = 'Distance: ' + ride.miles + " Miles";
                    ul.appendChild(li1);

                    let li2 = document.createElement('li');
                    li2.textContent = 'Time: ' + ride.timeHours + "." + ride.timeMinutes;
                    ul.appendChild(li2);



                div.appendChild(ul);
                let br = document.createElement('br');
                let btn = document.createElement('button');
                btn.setAttribute('id', "btn");
                btn.innerHTML = "Delete";
                div.appendChild(btn);

                let btn2 = document.createElement('button');
                btn2.setAttribute('id', "updateBtn");
                btn2.innerHTML = "Update";
                div.appendChild(btn2);

                btn2.addEventListener('click', function(e){
                    e.preventDefault();
                        console.log('Update clicked');
                       // deleteRide(ride.id);
                })


                btn.addEventListener('click', function(e){
                    e.preventDefault();
                        console.log('Delete clicked');
                       // deleteRide(ride.id);
                })

            }
            else{
                displayError('Error retrieving Rides: ' + xhr.status);
                
            }
        }
    }
   xhr.send();
    
}
