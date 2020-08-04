/*codigo boton ir arriba*/
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
            .classList.add('show');
    } else {
        document.querySelector('.go-top-container')
            .classList.remove('show');
    }
}
document.querySelector('.go-top-container')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
/*codigo boton contacto*/
$(".btnContacto").click((ev) => {
    $(".formulario").show()
})
$(".btnGuardar").click((ev) => {
    //obetener valor de imput
    var texto = $("#exampleInputEmail1").val()
    var texto1 = $("#exampleInputPassword1").val()
    var texto3 = $("#exampleInputTelefono1").val()
    //reemplazar un texto de cualquier etiqueta
    $(".reemplazar").text("contactar " + texto + " " + texto1 + " telefono:" + texto3)
    $(".formulario").hide()
})


var database = firebase.database();
var infoPersonal = database.ref('infoPersonal/');

infoPersonal.once('value', function (snapshot) {
    var info = snapshot.val()
    console.log(info)
    $(".nombre").text("Nombre: " + info.nombre)
    $(".telefono").text("Teléfono: " + info.telefono)
    $(".direccion").text("Dirección: " + info.direccion)
    $(".disponibilidad").text("Disponibilidad Horaria: " + info.disponibilidad)
    $(".estadoCivil").text("Estado Civil: " + info.estadoCivil)
    $(".fechaNacimiento").text("Fecha de Nacimiento: " + info.fechaNacimiento)
});


var expLaboral = database.ref('expLaboral/t1/');

expLaboral.once('value', function (snapshot) {
    var exp = snapshot.val()

    cadena = ""
    for (var i in exp)
        cadena += "<ul>"
    cadena += exp.nombre + " - " + exp.puesto
    cadena += "<br>"
    cadena += exp.desde + " - " + exp.hasta
    cadena += "<br>"
    cadena += exp.tareas
    cadena += "<br>"
    cadena += exp.referencias
    cadena += "</ul>"

    $(".expLaboral").html(cadena)

});

var database = firebase.database();
var formacionAcademica = database.ref('educacion/');
formacionAcademica.on('value', function (snapshot) {
    var formacion = snapshot.val()
  console.log(formacion)
    cadena = ""
    for (var i in formacion) {
        var elem = formacion[i]
        cadena += `<li > Academia: ${elem.nombre} <br></br>`
        cadena += "Duracion: " + elem.desde + " - " + elem.hasta


    }
    $(".forAcademica").html(cadena)
})