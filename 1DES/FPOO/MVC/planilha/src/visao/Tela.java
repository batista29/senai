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
			System.out.println("1-Adi��o\n 2-Multiplica��o\n 3-Subtra��o \n 4-Divis�o \n 5-Sair");
			menu = scan.nextInt();
			ProcessaPlanilha.saida(menu);
		}
		}

}
