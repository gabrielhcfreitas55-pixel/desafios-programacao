// Perímetro de um triângulo equilátero
function perimetroTrianguloEquilatero(aresta) {
    return 3 * aresta;
}

// Perímetro de um quadrado
function perimetroQuadrado(aresta) {
    return 4 * aresta;
}

// Perímetro de um retângulo
function perimetroRetangulo(l1, l2) {
    return 2 * (l1 + l2);
}

// Perímetro de um pentágono
function perimetroPentagono(l1, l2, l3, l4, l5) {
    return l1 + l2 + l3 + l4 + l5;
}

// Perímetro de um hexágono
function perimetroHexagono(a1, a2, a3, a4, a5, a6) {
    return a1 + a2 + a3 + a4 + a5 + a6;
}

// Converter segundos em horas
function segundosParaHoras(segundos) {
    return segundos / 3600;
}

// Solucionar equação do tipo ax + b = 0
function resolverEquacaoLinear(a, b) {
    if (a === 0) return "Sem solução";
    return -b / a;
}

// Solucionar equação do tipo ax + b = c
function resolverEquacaoLinear2(a, b, c) {
    if (a === 0) return "Sem solução";
    return (c - b) / a;
}