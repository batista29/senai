package visao;

import java.io.IOException;
import java.util.Scanner;
import controle.ProcessaPlanilha;

public class Tela {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) throws IOException {

		ProcessaPlanilha.carregar();
		
		int menu = 0;

		while (menu != 5) {
			System.out.println("1-Adição\n 2-Multiplicação\n 3-Subtração \n 4-Divisão \n 5-Sair");
			menu = scan.nextInt();
			ProcessaPlanilha.saida(menu);
		}
		}

}
