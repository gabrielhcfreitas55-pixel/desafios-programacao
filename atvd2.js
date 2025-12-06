// Escolher o maior entre dois números
function maior(a, b) {
    return a > b ? a : b;
}

// Bhaskara para ax² + bx + c
function bhaskara(a, b, c) {
    const delta = b*b - 4*a*c;

    if (delta < 0) return "Sem raízes reais";

    const x1 = (-b + Math.sqrt(delta)) / (2*a);
    const x2 = (-b - Math.sqrt(delta)) / (2*a);

    return { x1, x2 };
}

// Distância entre dois pontos 3D
function distancia3D(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(
        (x2 - x1)**2 +
        (y2 - y1)**2 +
        (z2 - z1)**2
    );
}

// Hipotenusa (Teorema de Pitágoras)
function hipotenusa(cateto1, cateto2) {
    return Math.sqrt(cateto1*2 + cateto2*2);
}

// Trocar duas variáveis
function trocar(a, b) {
    return [b, a]; // retorna invertido
}