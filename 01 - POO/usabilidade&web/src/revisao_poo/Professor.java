package revisao_poo;

public class Professor extends Funcionario {
	
	public Professor(String nome, String sobrenome, int idade, double salario) {
		super(nome, sobrenome, idade, salario);
		
	}
	
	public double getSalarioPrimeiraParcela() { //sobrescrever a função de funcionário, retornando o valor inteiro, sem parcelar.
		return getSalario();
	}
	
	public double getSalarioSegundaParcela() {//Valor é 0 pois não possui segunda parcela.
		return 0.0;
	}
	
	public void ficha() {
		System.out.printf("\n[ Informações do professor ] \n %s \n Salário: %.2f  ", getNomeSobrenome(), getSalarioPrimeiraParcela());
	}

}
