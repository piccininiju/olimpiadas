function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.querySelector('.resultados-pesquisa');
  // Obtém o termo de pesquisa digitado pelo usuário
  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  // Verifica se o usuário digitou algum termo de pesquisa
  if (campoPesquisa == '') {
    // Se o campo estiver vazio, exibe uma mensagem de erro
    section.innerHTML = '<p>Campo de pesquisa vazio. Você precisa digitar o nome de um atleta ou esporte</p>';
    return; // Interrompe a função
  }

  // Converte o termo de pesquisa para minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = '';

  // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    // Converte os dados do atleta para minúsculas para facilitar a comparação
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item de resultado, formatando os dados do objeto
      resultados += ` <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    // Se não houver resultados, exibe uma mensagem informando que o atleta ou esporte não foi encontrado
    resultados = '<p>Atleta ou esporte não encontrado.</p>'
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}






