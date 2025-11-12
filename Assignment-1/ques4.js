// The Weather Alert System
let temp=32;//in celcius
let humid=20;//in percent
let windspeed=50;//in km/h
if(temp>35 && humid>70){
    console.log("Cancel ! Heat Alert");
}
else if(temp<10 || windspeed>40){
    console.log("Cancel ! COLD/Windy Alert");
}
else{
    console.log("Event Approved");
}
if(temp<20){
    console.log("wear jacket");
}
else if(temp>=20 && temp<=30){
    console.log("Confortabe");
}
else if(temp>30){
    console.log("Stsy Hydrated");
}