function ejercicio16() {

    let texto = "";

    for (let i = 1; i <= 10; i++) {
        texto += i + "<br>";
    }

    document.getElementById("r16").innerHTML =
        texto;
}