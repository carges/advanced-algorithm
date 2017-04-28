function telephoneCheck(str) {
  // Good luck!
  var re1 = /^(\d{3}|\(\d{3}\)|\(\d{3}\)\s)([-\/\.\s]\d{3}|\d{3})([-\/\.\s])\d{4}/;
  var re2 = /^\d{10}/;
  var re3 = /^1(\s\d{3}|\s\(\d{3}\)|\(\d{3}\))([-\/\.\s]\d{3}|\d{3})([-\/\.\s])\d{4}/;

  if (str.match(re1) || str.match(re2) || str.match(re3)) {
    if (str.match(re2)) {
      var arr = str.split("");
      if ((arr.length === 11) && (arr[0] != 1)) {
        return false;
      }
    }
  	return true;
  } else {
  	  return false;
  }
}

function sym(args) {
  var diff = arguments[0];
  var tmp = [];
  var i = 0;

  function compare(arr, val) {
  	if ((arr.includes(val) === false) && (tmp.includes(val) === false)) {
    	return tmp.push(val);
    }
  }
	while (i<arguments.length-1) {
    for (k=0; k<diff.length; k++) {
			compare(arguments[i+1], diff[k]);
    }
    for (k=0; k<arguments[i+1].length; k++) {
			compare(diff, arguments[i+1][k]);
    }
    diff = tmp.slice();
    tmp = [];
    i++;
  }
  return diff;
}

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  var obj = new Object;
  var res = new Object;
  // Create object from cid
  for (i=0; i<cid.length; i++) {
  	var key = cid[i][0];
  	var value = cid[i][1];
    obj[key] = value;
  }
  var change = Number((cash - price).toFixed(2));
  // Function to calculate change
  function giveChange(amount, prop) {
  	if ((prop === "PENNY") && (obj.hasOwnProperty(prop))) {
      if (change === 0) return;
      if (obj[prop] === change) {
        res[prop] = change;
        delete obj[prop];
      } else if (obj[prop] > change) {
      	res[prop] = Number(change.toFixed(2));
      } else {
      	return "Insufficient Funds";};
        change = change - res[prop];
    }
  	if ((Number((change%amount).toFixed(2)) < change) && (obj.hasOwnProperty(prop))) {
      if (obj[prop] >= (change - change%amount)) {
        res[prop] = change - change%amount;
      } else {
        res[prop] = obj[prop];
        delete obj[prop];
      }
      change = change - res[prop];
  	}
    return;
  }
  giveChange(100, "ONE HUNDRED");
  giveChange(20, "TWENTY");
  giveChange(10, "TEN");
  giveChange(5, "FIVE");
  giveChange(1, "ONE");
  giveChange(0.25, "QUARTER");
  giveChange(0.10, "DIME");
  giveChange(0.05, "NICKEL");
  giveChange(0.01, "PENNY");
	for (var i in obj) {
    if (obj[i] === 0) {
      delete obj[i];
    }
  }
  // Function to check if obj is empty
  function isEmpty() {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
  }
  var empty = isEmpty();
  if (empty) {
  	return "Closed";
  }
  var arrRes = [];
  for(var prop in res) {
    arrRes.push([prop, res[prop]]);
  }
  if (change > 0) {
    return "Insufficient Funds";
  } else return arrRes;
}


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var obj = new Object;
    for (i=0; i<arr1.length; i++) {
    	obj[arr1[i][1]] = arr1[i][0];
    }
    for (k=0; k<arr2.length; k++) {
    	if (obj.hasOwnProperty(arr2[k][1])) {
      	obj[arr2[k][1]] = obj[arr2[k][1]] + arr2[k][0];
      } else {
      	obj[arr2[k][1]] = arr2[k][0];
      }
    }
    function sortObject(o) {
      var sorted = {},
      key, a = [];
      for (key in o) {
          if (o.hasOwnProperty(key)) {
              a.push(key);
          }
      }
      a.sort();
      for (key = 0; key < a.length; key++) {
          sorted[a[key]] = o[a[key]];
      }
      return sorted;
		}
    obj = sortObject(obj);
    var res = [];
    for (var prop in obj) {
    	res.push([obj[prop], prop]);
    }
    return res;
}

function permutation() {
  var permArr = [],
  usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };
}

function permAlone(str) {
  var permArr = [],
  usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }
  permArr = permute(str.split(""));
  var x = permArr[0].join("");
  var res = [];
  for (i=0; i<permArr.length; i++) {
    var mystr = permArr[i].join("");
    var k = 0;
    var found = false;
    while ((k<permArr[i].length) && (found === false)) {
      var re = new RegExp(permArr[i][k] + permArr[i][k]);
      if (mystr.match(re) !== null) {
          res.push(mystr);
        found = true;
      }
      k++;
    }
  }
  return permArr.length - res.length;
}

function makeFriendlyDates(arr) {
 var year = today.getFullYear();
 var bgn = arr[0];
 var end = arr[1];
 var bgnDay = bgn.substr(8, 2);
 var bgnMonth = bgn.substr(5, 2);
 var bgnYear = bgn.substr(0, 4);
 var endDay = end.substr(8, 2);
 var endMonth = end.substr(5, 2);
 var endYear = end.substr(0, 4);

 function getDay(strDay) {
   var resDay = "";
   if (strDay === "01") {
     resDay = "1st";
   } else if (strDay === "02") {
     resDay = "2nd";
   } else if (strDay === "03") {
     resDay = "3rd";
   } else {
     if (strDay.substr(0, 1) === "0") {
       resDay = strDay.substr(1, 1) + "th";
     } else
       resDay = strDay.substr(0, 2) + "th";
   }
   return resDay;
 }

 function getMonth(strMonth) {
   var resMonth = "";
   switch (strMonth) {
     case "01":
       resMonth = "January";
       break;
     case "02":
       resMonth = "February";
       break;
     case "03":
       resMonth = "March";
       break;
     case "04":
       resMonth = "April";
       break;
     case "05":
       resMonth = "May";
       break;
     case "06":
       resMonth = "June";
       break;
     case "07":
       resMonth = "July";
       break;
     case "08":
       resMonth = "August";
       break;
     case "09":
       resMonth = "September";
       break;
     case "10":
       resMonth = "October";
       break;
     case "11":
       resMonth = "November";
       break;
     case "12":
       resMonth = "December";
       break;
   }
   return resMonth;
 }

 var myBgnDay = getDay(bgnDay);
 var myBgnMonth = getMonth(bgnMonth);
 var myEndDay = getDay(endDay);
 var myEndMonth = getMonth(endMonth);

 if ((year === parseInt(bgnYear)) && (year === parseInt(endYear))) {
   if (bgnMonth === endMonth) {
     arr = [myBgnMonth + " " + myBgnDay, myEndDay];
   } else
     arr = [myBgnMonth + " " + myBgnDay, myEndMonth + " " + myEndDay];
 } else if ((bgnYear === endYear) && ((bgnMonth !== endMonth) || (bgnDay !== endDay))) {
   arr = [myBgnMonth + " " + myBgnDay + ", "+ bgnYear, myEndMonth + " " + myEndDay];
 } else if (bgn === end) {
   arr = [myBgnMonth + " " + myBgnDay + ", "+ bgnYear];
 } else if ((parseInt(endYear) - parseInt(bgnYear)) === 1) {
   if (year === parseInt(bgnYear)) {
     arr = [myBgnMonth + " " + myBgnDay, myEndMonth + " " + myEndDay];
   } else if ((bgnMonth === endMonth) && (bgnDay <= endDay)) {
     arr = [myBgnMonth + " " + myBgnDay + ", " + bgnYear, myEndMonth + " " + myEndDay + ", " + endYear];
   } else
     arr = [myBgnMonth + " " + myBgnDay + ", " + bgnYear, myEndMonth + " " + myEndDay];
 } else if ((parseInt(endYear) - parseInt(bgnYear)) > 1) {
     arr = [myBgnMonth + " " + myBgnDay + ", " + bgnYear, myEndMonth + " " + myEndDay + ", " + endYear];
 }

 return arr;
}

var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var res = arr;
  for (i=0; i<arr.length; i++) {
    var orbPer = 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + arr[i].avgAlt), 3) / GM);
    res[i].name = arr[i].name;
    res[i].orbitalPeriod = Math.round(orbPer);
    delete res[i].avgAlt;
  }
  return res;
}

function pairwise(arr, arg) {
  var sum = 0;
  var pairArr = arr.slice();
  for(i=0; i<pairArr.length; i++) {
    for(j=i+1; j<pairArr.length; j++) {
      if (pairArr[i] + pairArr[j] == arg) {
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  return sum;
}
