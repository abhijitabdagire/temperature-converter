const calculateTemp = () => {
    let numberTemp = parseFloat(document.getElementById('temp').value);
    console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    if (valueTemp == 'Celsius') {
        let fahrenheit = (numberTemp * 9/5) + 32;
        
        if(!Number.isInteger(fahrenheit )){
            fahrenheit = fahrenheit .toFixed(4);
        }

        document.getElementById('resultContainer').innerHTML = ` ${fahrenheit} &degF`;
        // console.log(fahrenheit);
       
    }
   
    else if (valueTemp == 'Fahrenheit'){
         let celsius = (numberTemp - 32) * 5/9;
         if(!Number.isInteger(celsius)){
            celsius = celsius.toFixed(4);
         }
        //  console.log(celsius);
         document.getElementById('resultContainer').innerHTML = `${celsius} &degC`
    }
    else if (valueTemp == 'Kelvin'){
        let celsius = (numberTemp - 273.15);
        if(!Number.isInteger(celsius)){
            celsius = celsius.toFixed(2);
         }
        //  console.log(celsius);
        document.getElementById('resultContainer').innerHTML = `${celsius} &degC`
       
    }  
    else{
        console.log("NaN");
    } 
}