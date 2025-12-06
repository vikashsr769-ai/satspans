const auth = firebase.auth();
const database = firebase.database();

const authen = document.getElementById('authen');
const main = document.getElementById('main');
const RegisterForm = document.getElementById('RegisterForm');
const LoginForm = document.getElementById('LoginForm');
const Register = document.getElementById('Register');
const Login = document.getElementById('Login');
const regform = document.getElementById('regform');
const emailElement = document.getElementById('email');
const passElement = document.getElementById('pass');
const cpassElement = document.getElementById('cpass');

const ale = document.getElementById('alert');
const userdetails = document.getElementById('userdetails');

const userForm = document.getElementById('userForm');

const Usname = document.getElementById('name');

Register.onclick = () =>{
var email = emailElement.value;
var mailuserid="";
for(var i=0;i<email.length;i++){
if(email[i] == "@"){
break;
}else{mailuserid+=email[i];}
} 

var Uname = Usname.value;
var email = emailElement.value;
var password = passElement.value;
console.log(mailuserid);

firebase.database().ref('Faculty/' + mailuserid).set({        
Username : Uname,
UserEMAIL:email,
UserPassword : password
});

auth.createUserWithEmailAndPassword(email,password).then(()=>{
ale.innerHTML="<span style='padding: 20px;height:30px;width:80%;background-color:lime;color:#000;'>Account Registered Sucessfully</span>";
}).catch((err)=>{
ale.innerHTML="<span style='padding: 20px;width:80%;background-color: #f44336;color: white;'>"+err.message+"</span>";
});
}


