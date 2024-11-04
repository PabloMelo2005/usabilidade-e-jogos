document.getElementById('form-troco').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valor-compra').value);
    const valorPago = parseFloat(document.getElementById('valor-pago').value);

    const notasDisponiveis = [50, 20, 10, 5, 2, 1];
    let troco = valorPago - valorCompra;
    let resultado = '';

    if (valorPago < valorCompra) {
        resultado = 'A quantia paga é insuficiente para realizar a compra!';
    } else if (troco === 0) {
        resultado = 'Não há troco a ser devolvido.';
    } else {
        resultado = `Troco: R$ ${troco.toFixed(2)}<br>`;
        notasDisponiveis.forEach(nota => {
            const quantidadeNotas = Math.floor(troco / nota);
            if (quantidadeNotas > 0) {
                resultado += `Notas de R$ ${nota},00: ${quantidadeNotas}<br>`;
                troco -= quantidadeNotas * nota;
            }
        });
    }

    document.getElementById('resultado').innerHTML = resultado;
});
