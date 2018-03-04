/* Write a program which has an array of diamonds with different value e.g. [1,2,3,4,5]. 
The program should distribute the diamonds equally to 3 people.
 For example: Person 1: 1,4 Person 2: 2,3 Person 3: 5 There may be any number of diamonds with any value. 
 If diamonds cannot be equally distributed(e.g [1,2,3,4]), the program should print message “Cannot distribute equally to 3 people”.
*/

var arr=[1,2,3,4,5,6];
var total=0;
var arrSum=0;
var newArr=[];
var person="";

for( var i=0; i<arr.length;i++)
	{ 
		total= total+arr[i]; 
	}
	 if(total%3!=0)
	 	{ 
	 		console.log("Cannot distribute equally to 3 people"); 
	 	}


 	else
 	{
 		arr.sort().reverse();

 		for(var i=0;i<arr.length;i++)
 		{
 			arrSum= arrSum+arr[i];
 			
 			newArr.push(i);
 			
 
 			if(arrSum==(total/3))
 			{
 				
 				for(var j=newArr.length-1;j>=0;j--)
 				{
 					person=person+ " " +arr[newArr[j]];
 					arr.splice(newArr[j],1);
 				}
 				
 				console.log("person:" +person);
 				newArr=[];
 				i=-1;
 				person="";
 				arrSum=0;
 			}

 			
 			

 			if (arrSum>(total/3))
 			{
 				
 				arrSum=arrSum-arr[i];
  				newArr.pop();
 				
 			}
 		} 
 		 }
 			
