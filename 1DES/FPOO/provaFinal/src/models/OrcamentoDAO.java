package models;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class OrcamentoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "C:\\Users\\User\\Desktop\\Natã Batista - 1DES\\prova\\dados\\arquivo.csv";
	
	public ArrayList<Orcamento> ler (){
		ArrayList<Orcamento> linhas = new ArrayList<>();
		Orcamento o; 
		
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = br.readLine();
			while(linha != null) {
				o = new Orcamento(linha); 
				linhas.add(o);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
			
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
		
	}
	
	public void escrever (ArrayList<Orcamento> linhas) {
		try {
		bw = new BufferedWriter(new FileWriter(arquivo));
		for (Orcamento l : linhas) {
			bw.write(l.toCSV()+"\r\n");
		}
		bw.close();
	}catch(IOException e) {
		System.out.println(e);
	}
}
}