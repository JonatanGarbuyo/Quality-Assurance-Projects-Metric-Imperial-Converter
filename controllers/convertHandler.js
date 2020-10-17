/*
*       Complete the handler logic below      
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log("input: " + input);///////////////////////
    // regex checks for non digit char at the left of numbers or double fraction.
    let invalidNumRegEx = /^[^\d\+\-\.]\d+|[^\d\+\-\*\./]\d+|\/.*\//;
    if (invalidNumRegEx.test(input)) { 
      console.log('invalid number');
      return 'invalid number';
    }

    let regex = /[a-z]+/i;
    let num = input.split(regex)[0];
    console.log("num: " + num);///////////////////////
    if (!num) { 
      console.log("num empty. changing num to 1")
      num = 1;
    }
    let result = eval(num);
    console.log("result: " + result);///////////////////////
    return result;
  };
  
  this.getUnit = function(input) {
    let unitRegEx = /[a-z]+/i;
    let unit = input.match(unitRegEx)[0].toLowerCase();
    console.log("unit: " + unit);///////////////////////
    let unitsArray = ['gal','l','mi','km','lbs','kg'];

    if (!unitsArray.includes(unit)) { 
      console.log('invalid unit');
      return 'invalid unit';
    }
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var returnUnit = {
      'gal':'l',
      'l':'gal',
      'mi':'km',
      'km':'mi',
      'lbs':'kg',
      'kg':'lbs'
    };
    console.log(returnUnit[initUnit]);///////////////////////
    return returnUnit[initUnit];
  };

  this.spellOutUnit = function(unit) {
    var spelledOutUnits = {
      'gal':'gallons',
      'l':'liters',
      'mi':'miles',
      'km':'kilometers',
      'lbs':'pounds',
      'kg':'kilograms'
    };
    console.log(spelledOutUnits[unit]);///////////////////////
    return spelledOutUnits[unit];    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit){
      case 'gal':
        console.log("gal: ");///////////////////////
        console.log(parseFloat((initNum*galToL).toFixed(5)));///////////////////////
        return parseFloat((initNum*galToL).toFixed(5));
      case 'l':
        console.log("l: " + parseFloat((initNum/galToL).toFixed(5)));///////////////////////
        return parseFloat((initNum/galToL).toFixed(5));
      case 'mi':
        console.log("mi: " + parseFloat((initNum*miToKm).toFixed(5)));///////////////////////
        return parseFloat((initNum*miToKm).toFixed(5));
      case 'km':
        console.log("km: " + parseFloat((initNum/miToKm).toFixed(5)));///////////////////////
        return parseFloat((initNum/miToKm).toFixed(5));
      case 'lbs':
        console.log("lbs: " + parseFloat((initNum*lbsToKg).toFixed(5)));///////////////////////
        return parseFloat((initNum*lbsToKg).toFixed(5));
      case 'kg':
        console.log("kg: " + parseFloat((initNum/lbsToKg).toFixed(5)));///////////////////////
        return parseFloat((initNum/lbsToKg).toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
