var hello;

// arrow function
hello = () => {
    document.getElementById("demo").innerHTML += "Hello";
}

// Anonymus function
var hello2 = function() {
    document.getElementById("demo").innerHTML += "Hello2";
}

// Named function
function hello3() {
    document.getElementById("demo").innerHTML += "Hello3";
}

window.addEventListener("load", hello);

document.getElementById("btn").addEventListener("click", hello);

// var numbers = [1,2,3,4,5];
// const squares = numbers.map(n => n * n);
// document.write(squares);

// var evens = new Array();
// numbers.forEach(n => {
// if (n % 2 === 0) {
// evens.push(n);
// }
// });
// document.write(evens);

const author = {
    fullName: "Bob Alice",
    books: ["Book 01","Book 02","Book 03"],
    
    printBooks() {
        this.books.forEach(book => document.write(book + ' by ' +this.fullName + '<br>'));
    },
    
    printBooks1() {
        function printValue(book) {
            document.write(book + ' by ' +this.fullName + '<br>'); // Undefined expected for fullname
        }
    
        this.books.forEach(printValue);
    },
    
    printBooks2() {
        this.books.forEach(function(book){
            document.write(book + ' by ' +this.fullName + '<br>'); // Undefined expected for fullname
        });
    }
};
    
author.printBooks();
author.printBooks1();
author.printBooks2();