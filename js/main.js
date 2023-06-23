myTotal = 0;
myInput = "";
myCalc = "+";
myflg = 1; // １回前に入力したもの 0:数字 1:演算子

function myValue(myData) {
    myflg = 0;
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

function myCalculate(myData) {
    if(myflg == 0) {
        myflg = 1;
        myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        myInput = "";
        document.myForm.myLine.value = myTotal;
    } 

    if(myData == "=") {
        myTotal = 0;
        myCalc = "+";
    } else {
        myCalc = myData;
    }
}

function myC() {
    myTotal = 0;
    myInput = 0;
    myCalc = "+";
    myflg = 0;
}
