package visao;

import java.io.IOException;
import java.util.Scanner;
import controle.ProcessaPessoa;

public class Tela {
	
	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) throws IOException{
		
		ProcessaPessoa.carregar();
		ProcessaPessoa.saida();
		System.out.println("Idades calculadas com sucesso : )");
	}

}
