# FRONT-END-PROCESSO-DTI-
Gerenciador de Notas e Frequência
Descrição
Este projeto é um sistema web simples que permite a um professor inserir notas e frequência dos alunos em cinco disciplinas, calcular a média das notas e a frequência geral de cada aluno, e identificar alunos que precisam de atenção especial.

Funcionalidades
Inserção das notas de cinco disciplinas para cada aluno.
Cálculo da média das notas de cada aluno.
Cálculo da média da turma em cada disciplina.
Verificação dos alunos com média de notas acima da média da turma.
Verificação dos alunos com frequência abaixo de 75%.
Tecnologias Utilizadas
HTML5
CSS3
JavaScript
Bootstrap 4
Instruções para Executar o Sistema
Pré-requisitos
Para executar este projeto, você precisará de:

Um navegador web moderno (Chrome, Firefox, Edge, etc.).
Opcionalmente, um editor de texto (VSCode, Sublime, etc.) para modificar o código.

Executando o Sistema
Clone o repositório (ou faça o download dos arquivos) em seu computador:


git clone https://github.com/Matheusanttao/FRONT-END-PROCESSO-DTI-.git
Navegue até o diretório do projeto:


cd FRONT-END-PROCESSO-DTI-
Abra o arquivo index.html em um navegador:

Dê um duplo clique no arquivo index.html.
Ou abra o arquivo diretamente no navegador.
Use o sistema:

Preencha o formulário com o nome do aluno, as notas das disciplinas e a frequência.
Clique em "Adicionar Aluno".
Os resultados serão atualizados automaticamente.
Premissas Assumidas
Cada aluno possui uma nota para cada uma das cinco disciplinas e uma porcentagem de frequência.
Notas são valores numéricos de 0 a 10.
Frequência é expressa em percentual, variando de 0 a 100%.
Não há necessidade de persistência dos dados, pois este é um protótipo simples para uso em uma única sessão.
Decisões de Projeto
Responsividade: O projeto utiliza Bootstrap para garantir uma interface responsiva.
Interface Simples: O foco foi na simplicidade e clareza para que o professor possa rapidamente inserir e visualizar as informações dos alunos.
Cálculo Dinâmico: As médias e frequências são calculadas em tempo real conforme os dados são inseridos.
