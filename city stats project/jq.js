/*const button =document.querySelector('button')
button.addEventListener('click',displaystats)


function displaystats(){

    let output ="";

    const cities = document.getElementById('city_dropdown').value
    
    switch(cities){

   case 'pondy':
        output = "pop:123<br>lang:tamil<br>area:51";

        break
gb   
    case 'cuddalore':
        output =  "pop:894<br>lang:tamil<br>area:61";
        
        break
    case 'ooty':
        output = "pop:326<br>lang:tamil<br>area:51";

        break

    case 'mysore':
        output = "pop:432<br>lang:hindi<br>area:32";  
        break
        
     default:
        output =  "select a city"   




    }
    
    document.querySelector('.result').innerHTML=output


    

} */

     object1 ={

name : 'yASH', age: 21, area:'py'


    }

    object2 = {

        name : 'vijay', age: 32, area: 'py'
    }

    object2.country = 'india';
    delete object2.country;
    

    console.log(object1.name)
    console.log(object2['name'])
    console.log(object2.country)