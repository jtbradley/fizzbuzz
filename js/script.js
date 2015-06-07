

var list = document.getElementById("list");

var output = "";

var i;

for (i = 1; i <= 100; i = i +1) {

    output += "<li>";

    if ((i % 3 === 0) && (i % 5 === 0)) {
        output += "fizzbuzz";
    }
    else if (i % 3 === 0) {
        output += "fizz";
    }
    else if (i % 5 === 0) {
        output += "buzz";
    }
    else {
        output += i;
    }

    output += "</li>";

};


list.innerHTML += output;
