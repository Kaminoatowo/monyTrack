import Chart from 'chart.js/auto'; // HOW TO IMPORT CORRECTLY?

// initialize total value
var total = 0;

document.getElementById("tot").innerHTML = total.toString().concat(" ", `&euro;`);

var index = 0;

var xValues = [];
var yValues = [];

// define function that acts on pushing the add button
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#expense input').value.length == 0){
        alert("You forgot your expense...")
    } // check if expense was entered

    else{
        index += 1;
        /*
        // date object for current location
        const date = new Date();

        // get current date 
        let today = date.getDate() + '-' + (date.getMonth() + 1 ) + '-' + date.getFullYear();
        */

        // add the new expense to the list of expenses

        var select = document.getElementById('sign');
        var sign = select.options[select.selectedIndex].value;
        var amount = document.getElementById('amount').value;

        if(sign == "plus"){
            total -= -amount;
            document.querySelector('#expenses').innerHTML += `
            <div class="expense">
                <span id="expensename">
                    <p class="description"> ${document.querySelector('#description').value} :</p>
                    <p class="amount"> + ${document.querySelector('#amount').value} &euro;</p>
                </span>
            </div>
            <br>
        `; 
        }else{
            total -= amount;
            document.querySelector('#expenses').innerHTML += `
            <div class="expense">
                <span id="expensename">
                    <p class="description"> ${document.querySelector('#description').value} :</p>
                    <p class="amount"> - ${document.querySelector('#amount').value} &euro;</p>
                </span>
            </div>           
            <br>
        `; 
        }

        xValues.push(index);
        yValues.push(total);
/*
        new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
            }
        }
        });
*/
        // print value of total

        document.getElementById("tot").innerHTML = total.toString().concat(" ", `&euro;`) ;
        

        // clean input entries

        document.querySelector('#amount').value = '';
        document.querySelector('#description').value = '';

    }
}

//                    ${document.write('\u20AC')}
