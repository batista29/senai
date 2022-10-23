package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;

import controle.ProcessaAluno;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class TesteConsole extends JFrame{
	
	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel painel;
	private JLabel rotulo1, rotulo2, rotulo3;
	private JTextField nota1, nota2, nota3;
	private JButton carregar;

	TesteConsole() {
		// Propriedades B�sicas
		setTitle("Tela de Notas");
		setBounds(600, 200, 360, 250);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); //Painel de elementos
		setContentPane(painel); //Configua o painel
		setLayout(null);

		// Conte�dos da tela
		rotulo1 = new JLabel("1� Nota:");
		rotulo1.setBounds(20, 20, 100, 20);
		nota1 = new JTextField();
		nota1.setBounds(120, 20, 200, 30);
		
		rotulo2 = new JLabel("2� Nota:");
		rotulo2.setBounds(20, 60, 100, 20);
		nota2 = new JTextField();
		nota2.setBounds(120, 60, 200, 30);
		
		rotulo3 = new JLabel("3� Nota:");
		rotulo3.setBounds(20, 100, 100, 20);
		nota3 = new JTextField();
		nota3.setBounds(120, 100, 200, 30);
		
		carregar = new JButton("Carregar M�dia");
		carregar.setBounds(120, 140, 200, 30);
		
		
		//Adicioar todos os elementos no painel
		painel.add(rotulo1);
		painel.add(nota1);
		painel.add(rotulo2);
		painel.add(nota2);
		painel.add(rotulo3);
		painel.add(nota3);
		painel.add(carregar);
	}
	public static void main(String[] args) {
		TesteConsole tela = new TesteConsole();
		tela.setVisible(true);
	}
}
