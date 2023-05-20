// Code your solution in this file!

function distanceFromHqInBlocks(value){
    return Math.abs(value-42);
}

function distanceFromHqInFeet(value){
   let result = distanceFromHqInBlocks(value);
    return result*264;
}

function distanceTravelledInFeet(start, destination){
    let result = Math.abs(destination-start);
    return result*264;
}

function calculatesFarePrice(start,destination){
    let result= distanceTravelledInFeet(start,destination);
    if(result<=400){
        return 0;
    }

   else if (result>400 && result<=2000){
        let price = (result-400)*0.02;
        return price;
    }
    else if (result>2000 && result <2500){
        return 25;
    }

    else{
        return "cannot travel that far";
    }

}