#include <iostream>

using namespace std;


//
//class pessoa {
//	public:
//		char mome[40];
//		int idade;
//}p1;
//
//
//
//main(){
//	cout << "insira o seu nome: " ;
//	cin >> p1.mome;
//	cout <<"insira a sua idade: ";
//	cin >> p1.idade;
//	cout << "nome:" <<p1.mome<<" idade:" <<p1.idade;
//	
//}


class aluno{
	private:
		
		int numero_do_aluno;
		float nota1;
		float nota2;
	public:
		char nome_do_aluno[100];
		float nota_final;
	
		void setNumero_do_aluno(int num){
			numero_do_aluno=num;
		}
		int getNumero_do_aluno (){
			return numero_do_aluno;
		}
		void setnota1 (float nota1){
			 nota1 = nota1;
		}
		float getnota1(){
			return nota1;
		}
		void setnota2 (float nota2){
			nota2 = nota2;
		}
		float getnota2(){
			return nota2;
		}	
		}
		float Nota_final(){
			return (nota1 + nota2)/2;
		}
}p1;




main(){
	int id;
	float nota1;
	float nota2;
		cout << "insira o seu nome: " ;
		cin >> p1.nome_do_aluno;

		cout <<"insira o numero: ";
		cin >> id;
		p1.setNumero_do_aluno(id);
		
		cout << "insira a nota 1: ";
		cin >> nota1;
		p1.setnota1(nota1);
		
		cout << "insira a nota 2: ";
		cin >> nota2;
		p1.setnota2(nota2);
		
		
		
		
		
		system("cls");
		cout<< "nome: " <<p1.nome_do_aluno << " numero de aluno: " <<p1.getNumero_do_aluno() << "nota final: " << p1.nota_final; 
}
