package controle;
//objeto de acesso a datas

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.io.BufferedReader;
import modelo.Planilha;

public class DAO {

	private BufferedWriter bw;
	private BufferedReader br;

	private String entrada = "C:\\Users\\des\\Desktop\\Nat� Ex - 1DES\\planilha\\dados\\entrada.csv";
	private String saida = "C:\\Users\\des\\Desktop\\Nat� Ex - 1DES\\planilha\\dados\\saida.csv";

	public ArrayList<Planilha> abrir() throws IOException {

		ArrayList<Planilha> linhas = new ArrayList<>();
		Planilha p;

		try {

			br = new BufferedReader(new FileReader(entrada));
			String l = br.readLine();
			while (l != null) {
				p = new Planilha(l);
				linhas.add(p);
				l = br.readLine();

			}
			br.close();
		} catch (FileNotFoundException e) {

			e.printStackTrace();
		}

		return linhas;
	}

	public void salvarSoma(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.adicao() + "\r\n");

			}
			bw.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	public void salvarMult(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.mult() + "\r\n");

			}
			bw.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	public void salvarSub(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.sub() + "\r\n");

			}
			bw.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	public void salvarDiv(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.div() + "\r\n");

			}
			bw.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}
}
