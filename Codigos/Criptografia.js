function conversor_binario(numero, lista) {
    if (numero <= 1) {
        lista.push(numero);
        return numero;
    }

    lista.push(Math.floor(numero % 2));
    return conversor_binario(Math.floor(numero / 2), lista);
}

function criptografar(palavra) {
    const letras = palavra.split('');
    const numerosAscii = [];

    for (let i = 0; i < letras.length; i++) {
        numerosAscii.push(letras[i].charCodeAt(0));
    }

    let texto = "";
    const listaAsci = [];

    for (let n = 0; n < numerosAscii.length; n++) {
        conversor_binario(numerosAscii[n], listaAsci);
        listaAsci.reverse();
        texto += "0";

        // remove o valor 0.5 se existir (não deve ocorrer em JS, mas mantido por fidelidade)
        const index = listaAsci.indexOf(0.5);
        if (index !== -1) {
            listaAsci.splice(index, 1);
        }

        for (let i = 0; i < listaAsci.length; i++) {
            texto += listaAsci[i].toString();
        }

        listaAsci.length = 0; // limpa a lista
        texto += " ";
    }

    return texto;
}

function converterParaTexto(numero) {
    let textoconvertido = "";
    let letra = String.fromCharCode(numero);
    textoconvertido += letra;
    return textoconvertido;
}

function descriptografar(numero) {
    let listaNumero = String(numero).split("");
    listaNumero.reverse();
    let soma = 0;

    for (let i = 0; i < listaNumero.length; i++) {
        soma += parseInt(listaNumero[i]) * (2 ** i);
    }

    console.log(soma);
    let converter = converterParaTexto(soma);
    return converter;
}

function descriptografia(binario) {
    let textoFinal = "";
    let listaBinarios = binario.split(" ");
    for (let i = 0; i < listaBinarios.length; i++) {
        let textoconvertido = descriptografar(listaBinarios[i]);
        textoFinal += textoconvertido;
    }
    return textoFinal;
}

