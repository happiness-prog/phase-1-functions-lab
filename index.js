// Code your solution in this file!


 function distanceFromHqInBlocks(streetNumber){
    return Math.abs(42-streetNumber);
        
    }

    function distanceTravelledInFeet(start, destination) {
      const feetPerBlock = 264;
      return Math.abs(destination - start) * feetPerBlock;
  }
function distanceFromHqInFeet(location){
  const feetPerBlock= 264;
  const Hq=42;
  return Math.abs(location-Hq)*264;
}  

 function calculatesFarePrice(start, destination) {
     const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return parseFloat((distance - 400) * 0.02);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}


    
    