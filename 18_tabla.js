function ejercicio18() {

    let numero = 5;

    let texto = "";

    for (let i = 1; i <= 10; i++) {

        texto +=
            numero + " x " + i +
            " = " + (numero * i) + "<br>";
    }

    document.getElementById("r18").innerHTML =
        texto;
}