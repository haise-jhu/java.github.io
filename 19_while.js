function ejercicio19() {

    let i = 10;

    let texto = "";

    while (i >= 1) {

        texto += i + "<br>";

        i--;
    }

    document.getElementById("r19").innerHTML =
        texto;
}