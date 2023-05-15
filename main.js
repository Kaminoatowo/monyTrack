// initialize total value
var total = 0;

document.getElementById("tot").innerHTML = total.toString().concat(" ", `&euro;`);

// define function that acts on pushing the add button
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#expense input').value.length == 0){
        alert("You forgot your expense...")
    } // check if expense was entered

    else{

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

        // print value of total

        document.getElementById("tot").innerHTML = total.toString().concat(" ", `&euro;`) ;

        // clean input entries

        document.querySelector('#amount').value = '';
        document.querySelector('#description').value = '';

    }
}