package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Pessoas;

public class DAO {

	private BufferedWriter bw;
	private BufferedReader br;

	private String entrada = "C:\\Users\\des\\Desktop\\Natã Ex - 1DES\\pessoas\\dados\\pessoas.csv";
	private String Saida = "C:\\Users\\des\\Desktop\\Natã Ex - 1DES\\pessoas\\dados\\saida.csv";

	public ArrayList<Pessoas> abrir() throws IOException {

		ArrayList<Pessoas> linhas = new ArrayList<>();
		Pessoas p;

		try {
			br = new BufferedReader(new FileReader(entrada));
			String l = br.readLine();
			while (l != null) {
				p = new Pessoas(l);
				linhas.add(p);
				l = br.readLine();

			}

			br.close();

		} catch (FileNotFoundException e) {

			e.printStackTrace();
		}

		return linhas;

	}

	public void salvarPessoa(ArrayList<Pessoas> linhas) {
		try {

			bw = new BufferedWriter(new FileWriter(Saida));
			for (Pessoas l : linhas) {
				bw.write(l.salvarPessoa() + "\r\n");
			}
			bw.close();

		} catch (IOException e) {

			e.printStackTrace();

		}

	}

}
