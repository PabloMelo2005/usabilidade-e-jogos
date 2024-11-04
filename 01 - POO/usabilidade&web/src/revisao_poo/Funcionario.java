package revisao_poo;

public class Funcionario extends Pessoa {
	
	int idade;
	double salario;
	
	public Funcionario(String nome, String sobrenome, int idade, double salario) {
		super(nome, sobrenome);
		this.idade = idade;
		this.salario = salario;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}
	
	//Primeira parcela é 60% e a segunda é de 40%:
	public double getSalarioPrimeiraParcela () { 
		return  salario * 0.6;
	}
	
	public double getSalarioSegundaParcela () {
		return salario * 0.4;
	}
	
	public void ficha() {
		System.out.printf("\n[ Informações ] \n %s \n Primeira parcela: %.2f \n Segunda parcela: %.2f", getNomeSobrenome(), getSalarioPrimeiraParcela(), getSalarioSegundaParcela());
	}

}
