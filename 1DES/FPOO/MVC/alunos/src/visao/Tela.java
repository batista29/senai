package visao;

import java.io.IOException;
import java.util.Scanner;
import controle.ProcessaAluno;

public class Tela {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) throws IOException {
		
		ProcessaAluno.carregar();
		ProcessaAluno.saida();
		System.out.println("M�dias calculadas com sucesso");

	}
}
