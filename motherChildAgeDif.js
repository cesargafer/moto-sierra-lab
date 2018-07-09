'use strict'
var ancestry = require('./ancestry.js');
var ancestryObj = JSON.parse(ancestry);

function showDif(arr_ancestryObj){
 
const registrosDeHijosConMadre = ancestryObj.filter(obj => obj.mother != null);
 
function age(arr){
  const ages = [];
   arr.map((record) => {
    const ageRecord = record.died - record.born;
   ages.push(ageRecord);
  })
 return ages;
}

function average(array){
 function plus(a, b) {return a + b }
 return array.reduce(plus) / array.length
}

// nombres de madres c/ nulls
 function mothersName(arr){
  const names = [];
   arr.map((record) => {
   const nameRecord = record.mother;
   names.push(nameRecord);
  })
  return names;
 }

let nombresDeMadres = mothersName(registrosDeHijosConMadre); // 34 nombres madre 
const mothersAge = []; // 18 madres con registro de hija tambien 

  nombresDeMadres.forEach(function(elemento, array){
    for(let i = 0; i < ancestryObj.length; i++){
  
     if(elemento == ancestryObj[i].name){
       // se hace array
        //mothersAge.push(elemento)
        const mothersAgeRecord = ancestryObj[i].died - ancestryObj[i].born;
        mothersAge.push(mothersAgeRecord); 
       // console.log(mothersAgeRecord)
      }   
    }
  })
  const promedioEdadGral = average(age(registrosDeHijosConMadre));
  const promedioEdadMadres = average(mothersAge)
  const result = promedioEdadGral - promedioEdadMadres;
  console.log('Promedio de edad de en general: ' + average(age(registrosDeHijosConMadre)))
  console.log('Promedio de edad de madres: ' + average(mothersAge))
  console.log(result);
  return mothersAge
}

showDif(ancestryObj);
