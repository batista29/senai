package visao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;
import java.util.ArrayList;
import java.util.Collections;

public class Menu {

	public static void main(String[] args) throws IOException {

		BufferedWriter bw;
		BufferedReader br;

		Random rand = new Random();
		int v;

		String entrada = "C:\\Users\\des\\Desktop\\Nat� Ex - 1DES\\aleatorios\\dados\\entrada.csv";
		ArrayList<Integer> linhas = new ArrayList<>();

		bw = new BufferedWriter(new FileWriter(entrada));
		br = new BufferedReader(new FileReader(entrada));
		for (int i = 0; i < 10; i++) {
			v = rand.nextInt(100);
			bw.write(v + "\r\n");
		}
		bw.close();

		String l = br.readLine();
		while (l != null) {
			linhas.add(Integer.parseInt(l));
			l = br.readLine();
		}
		br.close();

		linhas.sort(null);

		System.out.println("N�meros aleat�rios gerados:");
		for (Integer integer : linhas) {
			System.out.println(integer);

		}
	}
}