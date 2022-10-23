package controllers;

import java.util.ArrayList;

import models.Orcamento;
import models.OrcamentoDAO;

public class OrcamentoProcess {
	
	public static ArrayList<Orcamento> orcamentos = new ArrayList<>();
	public static OrcamentoDAO od = new OrcamentoDAO();

	//public static boolean compararProdutos() {
		
	//}
	
	public static void salvar() {
		od.escrever(orcamentos);
	}
	
	public static void abrir() {
		orcamentos = od.ler();
	}
	
}