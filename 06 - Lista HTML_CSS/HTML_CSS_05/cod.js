function informarPreco(codigo) {
    switch (codigo) {
        case 1:
            console.log("Produto: Sapato - Preço: R$ 99,99");
            break;
        case 2:
            console.log("Produto: Bolsa - Preço: R$ 103,89");
            break;
        case 3:
            console.log("Produto: Camisa - Preço: R$ 49,98");
            break;
        case 4:
            console.log("Produto: Calça - Preço: R$ 89,72");
            break;
        case 5:
            console.log("Produto: Blusa - Preço: R$ 97,35");
            break;
        default:
            console.log("Código inválido. Por favor, insira um código entre 1 e 5.");
    }
}

informarPreco(1);  // Saída: Produto: Bolsa - Preço: R$ 103,89
