package revisao_poo;

import java.util.Scanner;

public class MainPessoa {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.print("Insira seu nome: ");
		String nome = sc.next();
		System.out.print("Insira seu sobrenome: ");
		String sobrenome = sc.next();
		System.out.print("Insira sua idade: ");
		int idade = sc.nextInt();
		System.out.print("Insira seu salario: ");
		double salario = sc.nextDouble();
		
		Pessoa p = new Pessoa(nome, sobrenome);

		System.out.println(p.getNomeSobrenome());
		
		Funcionario f = new Funcionario(nome, sobrenome, idade, salario);
		
		Professor prof = new Professor(nome, sobrenome, idade, salario);
		
		f.ficha();
		System.out.println("\n");
		prof.ficha();

		sc.close();

	}

}
