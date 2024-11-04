public class Main {
    public static void main(String[] args) {
        Cadastro cadastro = new Cadastro();
        cadastro.cadastrarPessoas();
        System.out.println("Cadastro de Pessoas:");
        cadastro.imprimirCadastro();
    }
}
