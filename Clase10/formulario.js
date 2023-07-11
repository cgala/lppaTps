
var formulario = document.getElementById('formulario');


var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
var direccion = document.getElementById('direccion');
var ciudad = document.getElementById('ciudad');
var postal = document.getElementById('postal');
var dni = document.getElementById('dni');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var correo = document.getElementById('correo');
var telefono = document.getElementById('telefono');
// var terminos = document.getElementById('terminos');



var expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    postal: /^\d{1,5}$/, // 1 a 5 numeros.
    dni: /^\d{1,9}$/, // 1 a 9 numeros.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{1,14}$/ // 7 a 14 numeros.
}

var estados={
    nombre: false,
    edad:false,
    direccion:false,
    ciudad:false,
    postal:false,
    dni:false,
    password:false,
    correo:false,
    telefono:false,
    // terminos:false

}


nombre.addEventListener('blur',valNombre);
edad.addEventListener('blur',valEdad);
direccion.addEventListener('blur',valDireccion);
ciudad.addEventListener('blur',valCiudad);
postal.addEventListener('blur',valPostal);
dni.addEventListener('blur',valDni);
password.addEventListener('blur',valPasssword);
password2.addEventListener('blur',valPasssword2);
correo.addEventListener('blur',valCorreo);
telefono.addEventListener('blur',valTelefono);



function valNombre(e){
    var campo = e.target.value;
    if (expresiones.nombre.test(campo)){
        console.log("okkkk");
        document.getElementById("error_nombre").innerHTML = "";

        estados.nombre=true;
    }else{
        console.log("Minimo un caracter y como maximo 20");
        document.getElementById("error_nombre").innerHTML = "Minimo una letra y como maximo 20";

    }
}  

function valEdad(e){
    var campo = e.target.value;
    if (campo >= 18){
        console.log("okkkk");
        document.getElementById("error_edad").innerHTML = "";

        estados.edad=true;
    }else{
        console.log("La edad tiene que ser mayor a 18");
        document.getElementById("error_edad").innerHTML = "La edad tiene que ser mayor a 18";

    }
}
function valDireccion(e){
    var campo = e.target.value;
    if (expresiones.direccion.test(campo)){
        console.log("okkkk");
        document.getElementById("error_direccion").innerHTML = "";

        estados.direccion=true;
    }else{
        console.log("Letras, numeros, guion y guion_bajo minimo 4 y maximo 16 caracteres");
        document.getElementById("error_direccion").innerHTML = "Letras, numeros, guion y guion_bajo minimo 4 y maximo 16 caracteres";

    }
}  
function valCiudad(e){
    var campo = e.target.value;
    if (expresiones.ciudad.test(campo)){
        console.log("okkkk");
        document.getElementById("error_ciudad").innerHTML = "";

        estados.ciudad=true;
    }else{
        console.log("Letras y espacios, pueden llevar acentos.");
        document.getElementById("error_ciudad").innerHTML = "Letras y espacios, pueden llevar acentos.";

    }
}  
function valPostal(e){
    var campo = e.target.value;
    if (expresiones.postal.test(campo)){
        console.log("okkkk");
        document.getElementById("error_postal").innerHTML = "";

        estados.postal=true;
    }else{
        console.log("1 a 5 numeros.");
        document.getElementById("error_postal").innerHTML = "1 a 5 numeros.";

    }
}  
function valDni(e){
    var campo = e.target.value;
    if (expresiones.dni.test(campo)){
        console.log("okkkk");
        document.getElementById("error_dni").innerHTML = "";

        estados.dni=true;
    }else{
        console.log("1 a 9 numeros.");
        document.getElementById("error_dni").innerHTML = "1 a 9 numeros.";

    }
}  
function valPasssword(e){
    var campo = e.target.value;
    if (expresiones.password.test(campo)){
        console.log("okkkk");
        document.getElementById("error_password").innerHTML = "";

        estados.password=true;
    }else{
        console.log("4 a 12 digitos.");
        document.getElementById("error_password").innerHTML = "4 a 12 digitos.";

    }
}  

function valPasssword2(e){
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    if(password.value !== password2.value){
        document.getElementById("error_password2").innerHTML = "Las contraseñas no coinciden";
    }
    else{
        document.getElementById("error_password2").innerHTML = "";
    }
}  




function valCorreo(e){
    var campo = e.target.value;
    if (expresiones.correo.test(campo)){
        console.log("okkkk");
        document.getElementById("error_correo").innerHTML = "";

        estados.correo=true;
    }else{
        console.log("Un formato de correo valido.");
        document.getElementById("error_correo").innerHTML = "Un formato de correo valido.";

    }
}  
function valTelefono(e){
    var campo = e.target.value;
    if (expresiones.telefono.test(campo)){
        console.log("okkkk");
        document.getElementById("error_telefono").innerHTML = "";

        estados.telefono=true;
    }else{
        console.log("1 a 14 numeros.");
        document.getElementById("error_telefono").innerHTML = "1 a 14 numeros.";

    }
}  
// function valTerminos(){
   
//     if (terminos.checked){
//         console.log("okkkk");
//         document.getElementById("error_terminos").innerHTML = "";

//         estados.telefono=true;
//     }else{
//         console.log("1 a 14 numeros.");
//         document.getElementById("error_terminos").innerHTML = "acepta los terminos";

//     }
// }  


  formulario.addEventListener("click",valForm);

  function valForm(e){
    e.preventDefault();
    if(estados.nombre && estados.edad && estados.direccion && estados.ciudad && estados.postal && estados.dni && estados.password && estados.correo && estados.telefono){
        document.getElementById("formulario__mensaje-exito").innerHTML = "Formulario enviado con exito!";

        
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("edad",edad.value);
        localStorage.setItem("direccion",direccion.value);
        localStorage.setItem("ciudad",ciudad.value);
        localStorage.setItem("postal",postal.value);
        localStorage.setItem("correo",correo.value);
        localStorage.setItem("telefono",telefono.value);
        


        alert("Datos enviados:" + " \n Nombre:" + localStorage.getItem("nombre") + "\n Edad:" + localStorage.getItem("edad") + "\n direccion:" + localStorage.getItem("direccion")
        + "\n Ciudad:" + localStorage.getItem("ciudad") + " \n Postal:" + localStorage.getItem("postal") + "\n Correo:" + localStorage.getItem("correo")
        + "\n Telefono:" + localStorage.getItem("telefono"));

    }else{
        document.getElementById("formulario__mensaje-exito").innerHTML = "Completa el formulario";

        localStorage.removeItem("nombre");
        localStorage.removeItem("edad");
        localStorage.removeItem("direccion");
        localStorage.removeItem("ciudad");
        localStorage.removeItem("postal");
        localStorage.removeItem("correo");
        localStorage.removeItem("telefono");

        alert("Datos NO enviados:" + " \n Nombre:" + localStorage.getItem("nombre") + "\n Edad:" + localStorage.getItem("edad") + "\n direccion:" + localStorage.getItem("direccion")
        + "\n Ciudad:" + localStorage.getItem("ciudad") + " \n Postal:" + localStorage.getItem("postal") + "\n Correo:" + localStorage.getItem("correo")
        + "\n Telefono:" + localStorage.getItem("telefono"));
        

    }

  }
 