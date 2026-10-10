function getFormvalue() {
    //Write your code here
	document.getElementById("form1").addEventListener("Submit",function (event){
    event.preventDefault();	
		
	})
	let FirstName = document.getElementById("fname").values;
	let LastName = document.getElementById("lname").values;

	alter=("First Name ",fname  + "Last Name" ,lname);
	
}
