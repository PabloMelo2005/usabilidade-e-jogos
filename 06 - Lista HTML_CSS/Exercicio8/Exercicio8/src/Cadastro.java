import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Cadastro {
    private List<Pessoa> pessoas;

    public Cadastro() {
        this.pessoas = new ArrayList<>();
    }

    public void adicionarPessoa(Pessoa pessoa) {
        pessoas.add(pessoa);
    }

    public void imprimirCadastro() {
        for (Pessoa pessoa : pessoas) {
            System.out.println(pessoa);
        }
    }

    public void cadastrarPessoas() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite '1' para cadastrar Pessoa Física ou '2' para Pessoa Jurídica (ou '0' para sair): ");
        int opcao = scanner.nextInt();

        while (opcao != 0) {
            if (opcao == 1) {
                System.out.print("Digite o nome da Pessoa Física: ");
                String nome = scanner.next();
                System.out.print("Digite o CPF: ");
                String cpf = scanner.next();
                adicionarPessoa(new PessoaFisica(nome, cpf));
            } else if (opcao == 2) {
                System.out.print("Digite o nome da Pessoa Jurídica: ");
                String nome = scanner.next();
                System.out.print("Digite o CNPJ: ");
                String cnpj = scanner.next();
                adicionarPessoa(new PessoaJuridica(nome, cnpj));
            } else {
                System.out.println("Opção inválida. Tente novamente.");
            }
            System.out.println("Digite '1' para cadastrar Pessoa Física ou '2' para Pessoa Jurídica (ou '0' para sair): ");
            opcao = scanner.nextInt();
        }
        scanner.close();
    }
}
