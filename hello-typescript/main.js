var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var pi = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 2015
var matematica = /** @class */ (function () {
    function matematica() {
    }
    matematica.prototype.Soma = function (a, b) {
        return a + b;
    };
    return matematica;
}());
var n1 = "asdf";
