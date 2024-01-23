let toSolve = ""; // real calculate

    // func when adding char to calculate
    // different for display and for real calculate
    function appendChar(char){

        let charToSolve;
        let charToDisplay;

        switch (char){
            case "rpar":
                charToSolve = ")";
                charToDisplay = ")";
                break;
            case "lpar":
                charToSolve = "(";
                charToDisplay = "(";
                break;
            case "log":
                charToSolve = "Math.log10(";
                charToDisplay = "log(";
                break;
            case "ln":
                charToSolve = "Math.log(";
                charToDisplay = "ln(";
                break;
            case "e":
                charToSolve = "Math.E";
                charToDisplay = "e";
                break;
            case "pi":
                charToSolve = "Math.PI";
                charToDisplay = "π";
                break;
            case "mod":
                charToSolve = "%";
                charToDisplay = "mod";
                break;
            case "exp":
                charToSolve = "Math.E**";
                charToDisplay = 'e^';
                break;
            case "abs":
                charToSolve = "Math.abs(";
                charToDisplay = 'abs(';
                break;
            case "sqrt":
                charToSolve = "Math.sqrt(";
                charToDisplay = '√(';
                break;
            case "factorial":
                charToSolve = "factorial(";
                charToDisplay = 'fac(';
                break;
            case "**2":
                charToSolve = "**2";
                charToDisplay = "^2";
                break;
            case "**":
                charToSolve = "**";
                charToDisplay = "^";
                break;
            case "10**":
                charToSolve = "10**";
                charToDisplay = "10^";
                break;

            default:
                charToSolve = char;
                charToDisplay = char;   
        }
        toSolve += charToSolve
        document.querySelector('.result').value += charToDisplay
    }

    function notImplemented(){
        alert("not implemnted yet")
    }

        // solve func for calculating the result (toSolve)
        function solve(){

            // factorial function (n!)
            function fac(n) {
                if (n === 0 || n === 1) {
                    return 1;
                } else {
                    return n * fac(n - 1);
                }
            }
                console.log(toSolve)
                // first, changing the factorial func to real one (and calc the factorial) and than using eval
                toSolve = toSolve.replace(/factorial\(([^)]+)\)/g, function(match, expression) {
                    console.log(expression)
                return fac(parseInt(eval(expression)));
                });

            result = eval(toSolve); // solving
            toSolve = String(result); // save the result in toSolve
            document.querySelector('.result').value = result; // display it for the user
            
        }

        // clear all
        function deleteAll(){
            toSolve = "";
            document.querySelector('.result').value = "";
        }

        // +/- func
        function plusMinus(){
            if(!isNaN(parseFloat(toSolve))){
                result = String(parseFloat(toSolve) * -1);
                document.querySelector('.result').value = result;
                toSolve = result;
            }
        }

        // func to delete a single char by cutting the result in the display respectively to the real calculate
        function deleteLastChar(){
            var cutFrom_display = 0; // how much to cut from the user display
            var cutFrom_toSolve = 0; // how much to cut from the real calculate string (toSolve)

            let checkForOperator_power2 = toSolve.slice(-3)
            let checkForOperator_log10 = toSolve.slice(-10)
            let checkForOperator_E = toSolve.slice(-6)
            let checkForOperator_PI = toSolve.slice(-7)
            let checkForOperator_mod = toSolve.slice(-1)
            let checkForOperator_power = toSolve.slice(-2)
            let checkForOperator_abs_ln = toSolve.slice(-8)
            let checkForOperator_fac_sqrt = toSolve.slice(-9)

            if(checkForOperator_log10 == "Math.log10"){
                cutFrom_toSolve = 10;
                cutFrom_display = 3; // log
            }
            else if(checkForOperator_abs_ln == "Math.log"){
                cutFrom_toSolve = 8;
                cutFrom_display = 2; // ln
            }
            else if(checkForOperator_E == "Math.E"){
                cutFrom_toSolve = 6;
                cutFrom_display = 1; // e
            }
            else if(checkForOperator_PI == "Math.PI"){
                cutFrom_toSolve = 7;
                cutFrom_display = 1; // π
            }
            else if(checkForOperator_mod == "%"){
                cutFrom_toSolve = 1;
                cutFrom_display = 3; // mod
            }
            else if(checkForOperator_power == "**"){
                cutFrom_toSolve = 2;
                cutFrom_display = 1; // ^
            }
            else if(checkForOperator_abs_ln == "Math.abs"){
                cutFrom_toSolve = 8;
                cutFrom_display = 3; // abs
            }
            else if(checkForOperator_fac_sqrt == "Math.sqrt"){
                cutFrom_toSolve = 9;
                cutFrom_display = 1; // √
            }
            else if(checkForOperator_fac_sqrt == "factorial"){
                cutFrom_toSolve = 9;
                cutFrom_display = 3; // fac
            }
            else{ // if there is only one char both display result and toSolve
                cutFrom_toSolve = 1;
                cutFrom_display = 1;
            }
            toSolve = toSolve.slice(0, -cutFrom_toSolve)
            document.querySelector('.result').value = document.querySelector('.result').value.slice(0, -cutFrom_display)
        }