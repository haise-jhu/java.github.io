function ejercicio20() {

    let numeros = [1, 2, 3, 4, 5];

    let texto = "";

    for (let i = 0; i < numeros.length; i++) {

        texto += numeros[i] + "<br>";
    }

    document.getElementById("r20").innerHTML =
        texto;
}