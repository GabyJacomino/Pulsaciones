function pulsaciones() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var iden= document.getElementById("ident").value;
    var pulso;
    var texto;

    if (nombre ==="")
        texto = "Introduzca el nombre";
    else if (edad ==="")
        texto = "Introduzca la edad";
    else if (iden ==="")
        texto = "Introduzca la identificacion";

    else if (sexo === "femenino") {
    pulso = (210 - parseInt(edad))/10;
         texto = "Por cada 10 segundos de ejercicio aerobico debe tener " + pulso + " pulsaciones";
    } else {
        pulso =(220 - parseInt(edad))/10;
        texto = "Por cada 10 segundos de ejercicio aerobico debe tener " + pulso + " pulsaciones";
    }
    window.alert(texto);

}