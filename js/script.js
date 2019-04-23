var person1 = {email: "mashagal14@gmail.com", password: "qwerty", name: "Masha", surname: "Halchenko"};
var person2 = {email: "irina@gmail.com", password: "12345", name: "Ira", surname: "Danilova"};
var person3 = {email: "danil@gmail.com", password: "qwerty1", name: "Danya", surname: "Belokon"};

var people = [person1, person2, person3];

var user = null;

//перевырка на існування користувача
function checkLog(){
	var mail = document.getElementById("mail");
	var pass = document.getElementById("password");

	if(mail.value == "" || pass.value == ""){//переірка введених данних
		mail.style.border = "1px solid red";
		pass.style.border = "1px solid red";
		return;
	}

	mail.style.border = "none";
	pass.style.border = "none";

	for (var i = 0; i < people.length; i++) {
		if(people[i].email == mail.value && people[i].password == pass.value){
			document.location.href = "index.html";
			user = people[i];
			return;
		}
	}

	mail.style.border = "1px solid red";
	pass.style.border = "1px solid red";
	alert("Невірний email чи пароль");
	return false;
}


//створення нового користувача
function checkSign(){
	var surname = document.getElementById("surname");
	var name = document.getElementById("name");
	var mail = document.getElementById("new_mail");
	var pass = document.getElementById("new_password");
	var c_pass = document.getElementById("conf_password");

//переірка введених данних
	if(mail.value == "" || pass.value == "" || surname.value == "" || name.value == "" || c_pass.value == ""){
		mail.style.border = "1px solid red";
		pass.style.border = "1px solid red";
		surname.style.border = "1px solid red";
		name.style.border = "1px solid red";
		c_pass.style.border = "1px solid red";
		return;
	}
		
	mail.style.border = "none";
	pass.style.border = "none";
	surname.style.border = "none";
	name.style.border = "none";
	c_pass.style.border = "none";


	if(c_pass.value != pass.value){
		alert("Невірний пароль");
		pass.style.border = "1px solid red";
		c_pass.style.border = "1px solid red";
		return;
	}

	var dog = false;
	for (var i = 0; i < mail.value.length; i++) {
		if(mail.value.charAt(i) == '@'){
			dog = true;
			break;
		}
	}
	if(!dog){
		mail.style.border = "1px solid red";
		alert("email має містити @");
		return;
	}

	//створення нового користувача
	var person = {email: mail.value, password: pass.value, name: name.value, surname: surname.value};
	user = person;

	people = newArray(person);


	document.location.href = "index.html";

	return false;
}


//створити новий масив
function newArray(element){
	var arr = new Array(people.length + 1);
	for (var i = 0; i < people.length; i++) {
		arr[i] = people[i];
	}
	arr[i] = element;
	return arr;
}