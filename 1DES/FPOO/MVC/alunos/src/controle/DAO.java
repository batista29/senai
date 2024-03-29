package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Alunos;

public class DAO {

	private BufferedWriter bw;
	private BufferedReader br;

	private String entrada = "C:\\Users\\des\\Desktop\\Nat� Ex - 1DES\\alunos\\dados\\entrada.csv";
	private String Saida = "C:\\Users\\des\\Desktop\\Nat� Ex - 1DES\\alunos\\dados\\saida.csv";

	public ArrayList<Alunos> abrir() throws IOException {

		ArrayList<Alunos> linhas = new ArrayList<>();
		Alunos a;

		try {
			br = new BufferedReader(new FileReader(entrada));
			String l = br.readLine();
			while (l != null) {
				a = new Alunos(l);
				linhas.add(a);
				l = br.readLine();

			}

			br.close();

		} catch (FileNotFoundException e) {

			e.printStackTrace();
		}

		return linhas;

	}

	public void salvarAlunos(ArrayList<Alunos> linhas) {
		try {

			bw = new BufferedWriter(new FileWriter(Saida));
			for (Alunos l : linhas) {
				bw.write(l.salvarAlunos() + "\r\n");
			}
			bw.close();

		} catch (IOException e) {

			e.printStackTrace();

		}

	}

}
