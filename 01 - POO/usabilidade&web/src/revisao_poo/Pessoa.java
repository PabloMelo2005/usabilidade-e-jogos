package revisao_poo;

public class Pessoa {
	
	String nome, sobrenome;
	
	public Pessoa() {
		nome = " ";
		sobrenome = " ";
	}
	
	public Pessoa (String nome, String sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	
	public String getNomeSobrenome() {
		return "\n O seu nome completo é: " + this.nome.concat(" " + this.sobrenome);
	}
	
	

}
