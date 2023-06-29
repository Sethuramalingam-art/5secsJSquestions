/// call first function without delay and in intervals usinf IIFE

setInterval(function exampleFunction() {
                console.log('Function Executed! ' + count);
                count = count + 1;
          
                return exampleFunction;
            }(), 3000);
