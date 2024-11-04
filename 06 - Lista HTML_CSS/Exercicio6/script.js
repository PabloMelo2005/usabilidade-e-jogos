document.getElementById('form-folha').addEventListener('submit', function(event) {
    event.preventDefault();


    const codigo = parseInt(document.getElementById('codigo').value);
    const horas = parseFloat(document.getElementById('horas').value);


    const colaboradores = {
        1: { nome: 'Ana', valorHora: 45.78 },
        2: { nome: 'Bruna', valorHora: 60.00 },
        3: { nome: 'Carlos', valorHora: 38.99 },
        4: { nome: 'Diogo', valorHora: 45.78 },
        5: { nome: 'Ester', valorHora: 45.78 }
    };

   
    const resultado = document.getElementById('resultado');
    if (colaboradores[codigo]) {
        const valorBruto = (horas * colaboradores[codigo].valorHora).toFixed(2);
        resultado.innerHTML = `Colaborador: ${colaboradores[codigo].nome}<br>
                               Valor da Hora: R$ ${colaboradores[codigo].valorHora.toFixed(2)}<br>
                               Horas Trabalhadas: ${horas}<br>
                               Valor Bruto: R$ ${valorBruto}`;
    } else {
        resultado.innerHTML = 'Código inválido. Por favor, insira um código de 1 a 5.';
    }
});
