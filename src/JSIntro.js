
exports.Sum = function(num1, num2){
   return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
     var sum=0;
var i;
for( i=0;i<arrayOfNums.length;i++)
  sum=sum+arrayOfNums[i];
return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
                var sum=0;
                var d=[];
//var i;
for(var i=0;i<arrayOfNums.length;i++)
{
	if(d[arrayOfNums[i]]!=1){
		d[arrayOfNums[i]]=1;
		sum=sum+arrayOfNums[i];
	}
  
}
return sum;

}

exports.ReverseString = function(str){
      str=str.split("").reverse("").join("");
      return str;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
  return arrayOfStrings;

}