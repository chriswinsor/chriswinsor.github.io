function calc(){
    var productType = document.getElementById("product").value;
    var unitNum = document.getElementById("unitNum").value;
    var termLength = document.getElementById("length").value;

    if (productType == -1) {
        alert("Choose a product.");
        return;
    }
    if (termLength == -1) {
        alert("Choose a term length.");
        return;
    }

    var dollarNum = unitNum * productType;
    var output = 0;

    if (dollarNum >= 250000){
        if (termLength == 24){
            output = dollarNum * 1.04585;
        } else if (termLength == 36){
            output = dollarNum * 1.03144;
        }
    } else if (dollarNum >= 50000){
        if (termLength == 24){
            output = dollarNum * 1.04629;
        } else if (termLength == 36){
            output = dollarNum * 1.03192;
        }
    } else{
        if (termLength == 24){
            output = dollarNum * 1.04762;
        } else if (termLength == 36){
            output = dollarNum * 1.03306;
        }
    }
    output /= termLength;
    output = parseFloat(output).toFixed(2);
    var plural = (unitNum > 1) ? "s":"";
    alert("Cost of " + unitNum + " unit" + plural + " for " + termLength + " months is $"
    + output + " per month. \nThis number is only an estimate. For a quote, please contact us." );
}