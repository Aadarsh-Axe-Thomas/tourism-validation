let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let phone = document.getElementById("phone");
let error = document.getElementById("error");
let error3 = document.getElementById("error3");






function validate(){
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let numreg1 = /^\(?([0-9]{3})\)?[-. ]{1}([0-9]{3})[-. ]{1}([0-9]{4})$/;
	let pass = /^(\w{8,})$/;
	let pass2 =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	if(regex.test(email.value)&&numreg1.test(phone.value)&&pass2.test(pwd.value)){
		error.innerHTML = "valid";
		error.style.color = "green";
		return true;
	}
	else if(numreg1.test(phone.value)!=true){
		error2.innerHTML = "Invalid phone number";
		error2.style.color = "red";
		return false;
	}

	else if(regex.test(email.value)!=true){
		
		error.innerHTML = "Invalid email";
		error.style.color = "red";
		return false;
	}

	else if(pass2.test(pwd.value)!=true){
		error3.innerHTML = "weak password";
		error3.style.color = "red";
		return false;
	}

}


function validates(){
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let pass = /^(\w{8,})$/;
	let pass2 =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	if(regex.test(email.value)&&pass2.test(pwd.value)){
		error.innerHTML = "valid";
		error.style.color = "green";
		return true;
	}
	
	else if(regex.test(email.value)!=true){
		
		error.innerHTML = "Invalid email";
		error.style.color = "red";
		return false;
	}

	else if(pass2.test(pwd.value)!=true){
		error3.innerHTML = "weak password";
		error3.style.color = "red";
		return false;
	}

}


