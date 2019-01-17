var x = 12;


if(x > 12) {
    console.log(x);
}
else {
    console.log('ya cooked it mate');
}


for(var i = 0; i < x; i++) {
    // displays only even numbers
    if(i % 2 === 0){
        console.log(i);
    }
}

function sayHello() {
    console.log('hi')
}

sayHello();


//eslint-dsable-next-line
function evenOrOdd() {
    var input = document.getElementById('number');

    var y = input.value;

    if(y % 2 === 0){
        console.log('even');
    }
    else {
        console.log('odd');
    }
}