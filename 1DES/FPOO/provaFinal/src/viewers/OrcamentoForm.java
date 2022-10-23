package viewers;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.plaf.ColorUIResource;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import controllers.OrcamentoProcess;
import models.Orcamento;

public class OrcamentoForm extends JFrame implements ActionListener{

	private String telinha = "";
	private JPanel painel;
	private JTextField id, fornecedor, produto, preco;
	private JButton adicionar, alterar, deletar, buscar;
	private JLabel tfid, tffornecedor, tfproduto, tfpreco;
	private int autoId = OrcamentoProcess.orcamentos.size() + 1;
	private JTextArea texto;

	OrcamentoForm() {
		setTitle("ORÇAMENTO");
		setBounds(450, 200, 700, 600);
		painel = new JPanel();
		painel.setBackground(new ColorUIResource(192, 192, 192));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		tfid = new JLabel("Id:");
		tfid.setBounds(50, 50, 100, 14);
		id = new JTextField(String.format("%d",autoId));
		id.setEditable(false);
		id.setBounds(50, 80, 86, 25);
		painel.add(tfid);
		painel.add(id);

		tffornecedor = new JLabel("Fornecedor:");
		tffornecedor.setBounds(50, 110, 100, 14);
		fornecedor = new JTextField();
		fornecedor.setBounds(50, 140, 86, 25);
		painel.add(tffornecedor);
		painel.add(fornecedor);

		tfproduto = new JLabel("Produto:");
		tfproduto.setBounds(50, 170, 100, 14);
		produto = new JTextField();
		produto.setBounds(50, 210, 86, 25);
		painel.add(tfproduto);
		painel.add(produto);

		tfpreco = new JLabel("Preço:");
		tfpreco.setBounds(50, 240, 100, 14);
		preco = new JTextField();
		preco.setBounds(50, 270, 86, 25);
		painel.add(tfpreco);
		painel.add(preco);

		adicionar = new JButton("Adicionar");
		buscar = new JButton("Buscar");
		alterar = new JButton("Alterar");
		deletar = new JButton("Apagar");
		adicionar.setBounds(550, 80, 110, 30);
		buscar.setBounds(550, 120, 110, 30);
		deletar.setBounds(550, 210, 110, 30);
		alterar.setBounds(550, 250, 110, 30);
		alterar.setEnabled(false);
		deletar.setEnabled(false);

		painel.add(adicionar);
		painel.add(deletar);
		painel.add(alterar);
		painel.add(buscar);

		texto = new JTextArea();
		texto.setBounds(50, 300, 600, 200);
		texto.setEnabled(true);
		texto.setBorder(BorderFactory.createMatteBorder(6, 6, 6, 6, ColorUIResource.black));
		painel.add(texto);
		
		adicionar.addActionListener(this);
		buscar.addActionListener(this);
		deletar.addActionListener(this);
		alterar.addActionListener(this);
	}
	
	private void limparCampos() {
		id.setText(null);
		produto.setText(null);
		fornecedor.setText(null);
		preco.setText(null);
	}

	private void preencherAreaDeTexto() {
		telinha = "";
		for (Orcamento o : OrcamentoProcess.orcamentos) {
			telinha += o.toString()+"\n";
		}
		texto.setText(telinha);
	}
	
	public void adicionar() {

		if (preco.getText().length() != 0 && produto.getText().length() != 0) {

			OrcamentoProcess.orcamentos.add(new Orcamento(autoId, fornecedor.getText().toString(),
					produto.getText().toString(), Double.parseDouble(preco.getText().toString()), false));
			autoId++;
		} else {
			JOptionPane.showMessageDialog(this, "Favor Preencher todos as informações");
		}
		limparCampos();
		preencherAreaDeTexto();
		OrcamentoProcess.salvar();
	}
	
	public void buscar() {
		String entrada = JOptionPane.showInputDialog( this,"Digite o id do orçamento");
	
		boolean num = true;
		if(entrada != null) {
			for (int i = 0; i < entrada.length(); i++) {
				if(!Character.isDigit(entrada.charAt(i))) {
					num = false;
				}
			}
			
		}else {
			num = false;
		}
		if (num) {
			int id = Integer.parseInt(entrada);
			
			boolean achou = false;
			for (Orcamento orca : OrcamentoProcess.orcamentos) {
				if (orca.getId() == id) {
					achou = true;
					int indice = OrcamentoProcess.orcamentos.indexOf(orca);
					tfid.setText(OrcamentoProcess.orcamentos.get(indice).getId("s"));
					fornecedor.setText(OrcamentoProcess.orcamentos.get(indice).getFornecedor());
					produto.setText(OrcamentoProcess.orcamentos.get(indice).getProduto());
					preco.setText(OrcamentoProcess.orcamentos.get(indice).getPreco("s"));
					OrcamentoProcess.salvar();
					adicionar.setEnabled(true);
					alterar.setEnabled(true);
					deletar.setEnabled(true);
					break;
				}
			}
			
			if (!achou) {
				JOptionPane.showMessageDialog(this, "Não encontrado");
			}
		}
	}
	
	
	private void alterar() {

		int id = Integer.parseInt(tfid.getText());
		int indice = -1;
		
		for(Orcamento orca : OrcamentoProcess.orcamentos) {
			if (orca.getId() == id ) {
				indice = OrcamentoProcess.orcamentos.indexOf(orca);
			}
			
		}
		if(tfid.getText().length() !=0 && produto.getText().length() !=0){
			
			
			OrcamentoProcess.orcamentos.set(indice, new Orcamento(id, fornecedor.getText().toString(),
					produto.getText().toString(), Double.parseDouble(preco.getText().toString()), false));
			preencherAreaDeTexto();
			limparCampos();
			
		
	} else {
		JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
	}
	adicionar.setEnabled(true);
	alterar.setEnabled(true);
	deletar.setEnabled(false);
	tfid.setText(String.format("%d", OrcamentoProcess.orcamentos.size() + 1));
	OrcamentoProcess.salvar();
}

	public void deletar() {
		
		int id = Integer.parseInt(tfid.getText());
		 int indice = -1;
		for(Orcamento o : OrcamentoProcess.orcamentos) {
			if (o.getId() == id) {
				indice = OrcamentoProcess.orcamentos.indexOf(o);
	}
		}
		OrcamentoProcess.orcamentos.remove(indice);
		preencherAreaDeTexto();
		limparCampos();
		adicionar.setEnabled(true);
		alterar.setEnabled(false);
		deletar.setEnabled(true);
		buscar.setEnabled(true);
		OrcamentoProcess.salvar();
		tfid.setText(String.format("%d", OrcamentoProcess.orcamentos.size() + 1));
	
}
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == adicionar) {
			adicionar();
		}
		if (e.getSource() == deletar) {
		deletar();
		}
		if(e.getSource() == buscar) {
			buscar();
		}
		if(e.getSource() == alterar) {
			alterar();
		}
	}

	public static void main(String[] args) {
		OrcamentoProcess.abrir();
		new OrcamentoForm().setVisible(true);
	}

}