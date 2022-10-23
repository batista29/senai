package controle;

import java.io.IOException;
import java.util.ArrayList;
import modelo.Planilha;

public class ProcessaPlanilha {

	private static ArrayList<Planilha> linhas = new ArrayList<>();
	
	
	private static DAO dao = new DAO();
	
	
	public static void carregar() throws IOException{
		linhas = dao.abrir();
	}

	public static void saida(int opcao) {
		
		switch (opcao) {
		case 1:
			dao.salvarSoma(linhas);
			break;
		case 2:
			dao.salvarMult(linhas);
			break;
		case 3:
			dao.salvarSub(linhas);
			break;
		case 4:
			dao.salvarDiv(linhas);
			break;
		}

	}
}