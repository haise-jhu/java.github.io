function ejercicio17() {

    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    document.getElementById("r17").innerHTML =
        suma;
}