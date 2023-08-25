// Função assíncrona para buscar e exibir dados
async function fetchData() {
    try {
      // Faz uma requisição assíncrona para a URL 'http://localhost:3000/pessoas/'
      const response = await fetch('http://localhost:3000/pessoas');
      // Converte a resposta da requisição em formato JSON
      const data = await response.json();
      
      let conteudoLinhas = ''; // Inicializa a string que armazenará as linhas
      
      // Percorre cada item do array 'data' com forEach
      data.forEach(item => {
        conteudoLinhas += `
          <tr>    
          <td>${item.id}</td>
            <td>${item.nome}</td> <!-- Insere o nome do item na célula da tabela -->
            <td> ${item.email}</td> <!-- Insere o email do item na célula da tabela -->
            <td class="btn-excluir"> <button class="btn" type="button">Excluir</button></td> <!-- Insere o email do item na célula da tabela -->
          </tr>
        `;
      });
      
      // Seleciona o elemento da tabela onde queremos adicionar as linhas
      const corpoTabela = document.querySelector("#tabela-principal");
      // Define o conteúdo HTML da tabela como as linhas geradas pelo forEach
      corpoTabela.innerHTML = conteudoLinhas;
      
    } catch (error) {
      // Caso ocorra algum erro na requisição ou na conversão para JSON
      console.error('Erro ao obter o JSON:', error);
    }
  }
  
  // Chama a função fetchData para buscar e exibir os dados
  fetchData();
  

  var tabela = document.querySelector("#tabela-principal");
  tabela.addEventListener("click", function(event){
    var elementoClicado = event.target;
    if(elementoClicado.classList.contains("btn-excluir")){
        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        var celulaId = celula.querySelector("td")
        var id = celulaId.textContent;
        console.log(id)

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("DELETE",`http://localhost:3000/pessoas/${id}`)
        xmlhttp.send()

    }
  })
  