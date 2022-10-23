package visao;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class TesteConsole extends JFrame{

	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel painel;
	private JLabel rotulo1,rotulo2;
	private JButton carregar1,carregar2,carregar3,carregar4;
	
	TesteConsole() {
		
		setTitle("PLANILHA");
		setBounds(650, 200, 400, 300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); //Painel de elementos
		setContentPane(painel); //Configua o painel
		setLayout(null);
		
		rotulo1 = new JLabel("ESCOLHA A OP��O");
		rotulo1.setBounds(135, 20, 200, 20);
		
		rotulo2 = new JLabel("DE SEU DESEJO");
		rotulo2.setBounds(145, 60, 200, 20);
		
		carregar1 = new JButton("SOMA");
		carregar1.setBounds(90, 100, 200, 30);
		
		carregar2 = new JButton("MULTIPLICA��O");
		carregar2.setBounds(90, 140, 200, 30);
		
		carregar3 = new JButton("SUBTRA��O");
		carregar3.setBounds(90, 180, 200, 30);
		
		carregar4 = new JButton("DIVIS�O");
		carregar4.setBounds(90, 220, 200, 30);
		
		painel.add(rotulo1);
		painel.add(rotulo2);
		painel.add(carregar1);
		painel.add(carregar2);
		painel.add(carregar3);
		painel.add(carregar4);
	}
	
	public static void main(String[] args) {
		TesteConsole tela = new TesteConsole();
		tela.setVisible(true);
	}


	
}
