// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length-1; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length-1; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;

        div.style.display = "none";
    }
}

function sum() {
    return sum;

}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
function Product(name,price,amount,sum) {

    this.name = name;
    this.price=price;
    this.amount=amount;
    this.sum=price*amount;
}
var mainObj = [];


function printTable() {
    var k = '<tbody>'
    for (i = 0; i < mainObj.length; i++) {
        k += '<tr>';
        k += '<td>' + mainObj[i].name + '</td>';
        k += '<td>' + mainObj[i].price + '</td>';
        k += '<td>' + mainObj[i].amount + '</td>';
        k += '<td>' + mainObj[i].sum + '</td>';
        k += '</tr>';

    }
    k += '<tr>';
    k += '<td colspan="3">' + "Загалом" + '</td>';
    k += '<td>' + AllSum() + '</td>';
    k += '</tr>';
    k += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
}
function add() {
    var name1 =document.getElementById("name");
    var price1 =document.getElementById("number");
    var amount1 =document.getElementById("number1");
    if(!price1||!amount1||!name1){
        alert( "Поля повинні бути заповненні")
    } else if(amount1<=0||price1<=0){
        alert("Кількість та вартість товару має бути більша за 0")
    } else if (amount1.value.search(/[^\d]/) !=-1   ) {
        alert("Має бути введене ціле число!");
        return;
    }

    mainObj.push(new Product(name1.value,price1.value,amount1.value," "));
    printTable();

}
function AllSum() {
    var result=0
    for(i=0;i<mainObj.length;i++){
        result+=mainObj[i].sum;
    }
    return result;
}
// Create a new list item when clicking on the "Add" button
function newElement() {

    var li = document.createElement("li");
    var probil =" ------------------ ";
    var amount =" quantity";
    var price = " UAH                   ";
    var inputValue = document.getElementById("myInput").value+probil+document.getElementById("amount").value+amount+probil+document.getElementById("price").value +  price;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length-1; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}