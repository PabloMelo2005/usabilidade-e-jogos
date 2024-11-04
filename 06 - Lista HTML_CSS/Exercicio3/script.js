class Veiculo {
    #numeroDoChassi;
    #placa;

    constructor(numeroDoChassi, placa) {
        this.#numeroDoChassi = numeroDoChassi;
        this.#placa = placa;
    }

    getDados() {
        return `Chassi: ${this.#numeroDoChassi}, Placa: ${this.#placa}`;
    }
}

let veiculos = [];

document.getElementById('form-veiculo').addEventListener('submit', function(event) {
    event.preventDefault();

 
    const numeroDoChassi = document.getElementById('chassi').value;
    const placa = document.getElementById('placa').value;

 
    const veiculo = new Veiculo(numeroDoChassi, placa);

  
    veiculos.push(veiculo);


    exibirVeiculos();


    document.getElementById('form-veiculo').reset();
});

function exibirVeiculos() {
    const listaVeiculos = document.getElementById('lista-veiculos');
    listaVeiculos.innerHTML = '';  

    veiculos.forEach((veiculo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${veiculo.getDados()}`;
        listaVeiculos.appendChild(li);
    });
}
