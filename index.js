const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers =  function(){
    return drivers.slice(0,2)
}


const returnLastTwoDrivers =  function(){
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare){
          function fareQuintupler(){
            return fare*5;
         }; return fareQuintupler;
     }
createFareMultiplier(5);

function fareDoubler(fare){
    return fare*2;
}  

function fareTripler(fare){
    return fare*3;
}

/*function returnLastTwoDrivers(drivers){
   return drivers.slice(-2);
} */



function selectDifferentDrivers(drivers, funct) {
    if(funct === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }else{
       return returnFirstTwoDrivers(drivers);
    };
}