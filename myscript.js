let formulario = document.getElementById('formEnviar');
let esconderformulario = document.getElementById('formEnviar').style.display = 'none';
let formRegistro = document.getElementById('formRegistro');
let error = document.getElementById('msgError').style.display = 'none';
let btnRegistro = document.getElementById('btnRegistro');


let esconderformRegistro = document.getElementById('formRegistro').style.display = 'block';

/* 
    formulario.addEventListener('submit',function(e){
        e.preventDefault()
        let datosForm = new FormData(formularioRegistro);
        let nombreRecibido = datosForm.get('usuario');
        let passwdRecibida = datosForm.get('passwd');

        validarCampos();

    function validarCampos() {
        if (nombreRecibido == '' || passwdRecibida == '') {
            error = document.getElementById('msgError').style.display = 'block';
            setTimeout(() => {
                error = document.getElementById('msgError').style.display = 'none';
            }, 3000);
            console.log(error)
    
        } else {
            formulario.action = 'http://localhost/ejercicio/ejLogin/logued.php'
            formulario.method = 'POST';
            formulario.submit();
            }
        }
 
        
    }); */

    btnRegistro.addEventListener('click',function(e){
       /*  e.preventDefault()
        let datosForm = new FormData(formularioRegistro);
        let nombreRecibido = datosForm.get('usuario');
        let passwdRecibida = datosForm.get('passwd');
 */
        guardarDatos();

    function guardarDatos() {
        let nombre = document.getElementById('txtNombre').value;
        let passwd = document.getElementById('txtPasswd').value;

        let datos = [nombre,passwd];
        console.log(datos);

        esconderformRegistro = document.getElementById('formRegistro').style.display = 'none';
        esconderformulario = document.getElementById('formEnviar').style.display = 'block';
    }
    });
    


