package modelo;

public class Alunos {

	private String name;
	private Double v1;
	private Double v2;
	private Double v3;
	private Double media;

	public Alunos(String entrada) {

		name = (entrada.split(";")[0]);
		v1 = Double.parseDouble(entrada.split(";")[1]);
		v2 = Double.parseDouble(entrada.split(";")[2]);
		v3 = Double.parseDouble(entrada.split(";")[3]);
		
	}

	public String salvarAlunos() {
		media = (v1 + v2 + v3) / 3;
		return name + ";" + media;
	}

}