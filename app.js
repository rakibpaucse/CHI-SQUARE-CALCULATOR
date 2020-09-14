// var seed = 15;
// var m = 31;
// var a = 3;
// var randomNumbers =[];
// var valueOfIteration = 12;


// window.onload = build;


// function build(){
 
//     for (let i = 0; i < valueOfIteration ; i++) {
//         randomNumbers.push(makeDecimal(randomNumberGenerator(seed)));
//     }
   
//    function randomNumberGenerator(sed){
//        seed = ((sed*a)%m);
//        return (seed/m);
//     }
   
//     check_ckiSqure(randomNumbers);
    

// }


// function makeDecimal (intergerNumber){
//     return intergerNumber.toFixed(2);  
// }


// function makeExceptedValues(){
//     return Math.floor(Math.random()*80) ;
// }



// function check_ckiSqure(observedValus){
    
//     //var expectedValues = [14,14,14,14,14,14,14];
//     var expectedValues = [];
//     var chi_values = [];
//     var sumOfchi = 0;
//     const chi_withLimit = 122.06; 


//     for(let i = 0; i<valueOfIteration ; i++){
//         expectedValues.push(makeExceptedValues());
//     }


//     for (let i = 0; i < valueOfIteration ; i++) {
//         var chiValue = (Math.pow((observedValus[i] - expectedValues[i]),2))/expectedValues[i];
//         sumOfchi += chiValue;
//         chi_values.push(makeDecimal(chiValue));    
//     }
        


//     console.log("Sum of chi is = " + makeDecimal(sumOfchi));
//     console.log("chi values are = " + chi_values);


//     if ( makeDecimal(sumOfchi) > chi_withLimit){
//         console.log("rejected!");
//     }else{
//         console.log("accepted!");
//     }
    
// }




window.onload = build ;

function build() {

    var sumOfchi = 0;
    var chi_values = [];
    var count = 0;


    selector('.addbtn').addEventListener('click',function(){ 
    
        var observedValue = selector('#observedValue').value;
        
        var expectValue = selector('#expectValue').value;
    
        if( observedValue != '' && expectValue != ''){
    
         selector('.showRslt').style.display = 'block';
    
        var chiValue = parseFloat((makeDecimal((Math.pow((observedValue - expectValue),2))/expectValue)));
        sumOfchi += chiValue;
        chi_values.push(chiValue); 
        
        count++;
            
        if(count == 1){
            selector('.showRslt').innerHTML = '<h3> Chi Square Value : </h3> </br>'
        }
        selector('.showRslt').innerHTML += '<div class="fadeout">' + count + ") " + chiValue + '<br> </div>';
    
        }else{
            selector('#observedValue').required = true;
            selector('#expectValue').required = true;
        }
    
    });




function selector(sel){
    return document.querySelector(sel);
}

function makeDecimal (intergerNumber){
    return parseFloat(intergerNumber.toFixed(2));  
}






selector('.calbtn').addEventListener('click',function(){
    selector('.showRslt').innerHTML = '<div class="fadeout">' +'The sum of chi value is = ' + makeDecimal(sumOfchi) + '</div>';
    selector('.chiSquare').style.display = 'block';
    selector('#chi_value').value = '';
});



selector('.checkbtn').addEventListener('click',function(){
    
    var chi_limited = makeDecimal(parseFloat(selector('#chi_value').value));

    if (isNaN(chi_limited)){
        selector('#chi_value').required = true;
        
        
    }else{

    //style
     selector('.check_block').style.display = 'block';
     selector('.corner').style.display = 'block';
     selector('.chiSquare').style.paddingTop = '2rem';
     selector('.checkbtn').style.marginTop = '2rem';

    if(sumOfchi <= chi_limited ){
       
        selector('.check_block').style.backgroundColor = 'green';
        selector('.check_block').classList.add("chkIt");
        selector('.check_block').innerHTML = 'Accpeted';

    }else{
        
        selector('.check_block').style.backgroundColor = 'red';
        selector('.check_block').classList.add("chkIt");
        selector('.check_block').innerHTML = 'Rejected';
    }

    
    selector('#observedValue').value = '' ;
    selector('#expectValue').value = '';
    selector('.addbtn').disabled = true;
    selector('.calbtn').disabled = true;

    selector('#observedValue').required = false;
    selector('#expectValue').required = false;

    

}
});



selector('.reset').addEventListener('click',function(){

   // hiding stuffs

    selector('.check_block').style.display = 'none';
    selector('.corner').style.display = 'none';
    selector('.chiSquare').style.display = 'none';
    selector('.showRslt').style.display = 'none';
    selector('.showRslt').classList.remove('fadeout');
    selector('.showRslt').innerHTML = '';

    selector('#chi_value').required = false;



    // intialization of values

     sumOfchi = 0;
     chi_values = [];
     count = 0;  

     selector('#observedValue').value = '' ;
     selector('#expectValue').value = '';
     selector('.addbtn').disabled = false;
     selector('.calbtn').disabled = false;

});

}