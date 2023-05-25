//typeof,number to string ,string to number,boolean,conversion nan is return,string to boolean,unary operators,string concatnation,+number any number to positive ,object priority,prefix,post fix,bitwise,<,>,!=,===,== - with strings and number and data comparision,undefined null

function typeofExample() {
    var input = document.getElementById("typeofInput").value;
    var result;

    if (!isNaN(input)) {
        // Check if the input is a number
        result = typeof +input === 'number' ? 'number' : 'not a number';
    } else if (input === 'true' || input === 'false') {
        // Check if the input is a boolean
        result = 'boolean';
    } else if (input === 'null') {
        // Check if the input is null
        result = 'object (null)';
    } else if (input === 'undefined') {
        // Check if the input is undefined
        result = 'undefined';
    } else {
        // If none of the above, it is treated as a string
        result = 'string';
    }

    document.getElementById("typeofResult").innerHTML = result;
}
    
    function numberToStringExample() {
        var input = document.getElementById("numberToStringInput").value;
        document.getElementById("numberToStringResult").innerHTML = input.toString();
    }
    
    function stringToNumberExample() {
        var input = document.getElementById("stringToNumberInput").value;
        document.getElementById("stringToNumberResult").innerHTML = Number(input);
    }
    
    function booleanExample() {
    var input = document.getElementById("booleanInput").value;
    var result;

    if (input === 'false') {
        result = false;
    } else if (input === '0') {
        result = false;
    } else if (input === '') {
        result = false;
    } else if (input === 'null') {
        result = false;
    } else if (input === 'undefined') {
        result = false;
    } else if (isNaN(input)) {
        result = true;
    } else {
        result = Boolean(input);
    }

    document.getElementById("booleanResult").innerHTML = Boolean(`\0`);
}
    
    function nanExample() {
        var input = document.getElementById("nanInput").value;
        document.getElementById("nanResult").innerHTML = isNaN(input);
    }
    
    function stringToBooleanExample() {
    var input = document.getElementById("stringToBooleanInput").value;
    var result;

    if (input.toLowerCase() === 'true') {
        result = true;
    } else if (input.toLowerCase() === 'false') {
        result = false;
    } else {
        result = 'Invalid input';
    }


    document.getElementById("stringToBooleanResult").innerHTML = Boolean(input);
}
    
function unaryOperatorExample() {
    var a = 10;
    var b = -a; // Unary negation operator
    var c = !a; // Unary logical NOT operator
    var d = ++a; // Unary pre-increment operator
    var e = --a; // Unary pre-decrement operator

    document.getElementById("unaryOperatorResult").innerHTML = "a: " + a + ", b: " + b + ", c: " + c + ", d: " + d + ", e: " + e;
}
    
    function stringConcatExample() {
        var input1 = document.getElementById("stringConcatInput1").value;
        var input2 = document.getElementById("stringConcatInput2").value;
        var result = input1 + input2;
        document.getElementById("stringConcatResult").innerHTML = result;
    }
    
    function positiveNumberExample() {
        var input = document.getElementById("positiveNumberInput").value;
        var result = +input;
        document.getElementById("positiveNumberResult").innerHTML = result;
    }
    
    function objectPriorityExample() {
        var result = 10 + "20";
        document.getElementById("objectPriorityResult").innerHTML = result;
    }
    
    function prefixPostfixExample() {
        var input = document.getElementById("prefixPostfixInput").value;
        var prefixResult = ++input;
        var postfixResult = input++;
        document.getElementById("prefixPostfixResult").innerHTML = "Prefix: " + ++input + ", Postfix: " + input++;
        console.log("Prefix: " + prefixResult + ", Postfix: " + postfixResult);
        console.log(input);
    }
    
    function bitwiseExample() {
        var input1 = document.getElementById("bitwiseInput1").value;
        var input2 = document.getElementById("bitwiseInput2").value;
        var result = input1 & input2;
        document.getElementById("bitwiseResult").innerHTML = result;
    }
    
    function comparisonExample() {
        var input1 = document.getElementById("comparisonInput1").value;
        var input2 = document.getElementById("comparisonInput2").value;
        var result = input1 < input2;
        document.getElementById("comparisonResult").innerHTML = result;
    }
    
    function undefinedNullExample() {
        var result = undefined == null;
        document.getElementById("undefinedNullResult").innerHTML = result;
    }