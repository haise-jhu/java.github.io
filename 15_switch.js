function ejercicio15() {

    let dia = 3;

    let resultado = "";

    switch (dia) {

        case 1:
            resultado = "Lunes";
            break;

        case 2:
            resultado = "Martes";
            break;

        case 3:
            resultado = "Miércoles";
            break;

        default:
            resultado = "Otro día";
    }

    document.getElementById("r15").innerHTML =
        resultado;
}