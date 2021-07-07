function init() {
    var numa = Number(document.getElementById("a").value);
    var numb = Number(document.getElementById("b").value);
    var numc = Number(document.getElementById("c").value);
    var x1h1 = document.getElementById("x1");
    var x2h2 = document.getElementById("x2");

    fun(numa, numb, numc, x1h1, x2h2);
}

function fun(a, b, c, x1h1, x2h2) {
    let bc = Math.pow(b, 2) - 4*a*c;

    if (a === 0) {
        alert("a no puede ser cero");
    } else {
        if (a != 0 || b != 0 || c != 0) {

            if (bc < 0) {
                alert("La ecuación no tiene solución real");
            } else {
                let x1 = (-b + Math.sqrt(bc)) / (2*a);
                let x2 = (-b - Math.sqrt(bc)) / (2*a);

                x1h1.innerHTML = `X1 = ${x1}`
                x2h2.innerHTML = `X2 = ${x2}`
            }
        }
    }
}