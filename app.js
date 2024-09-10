function pesquisar () {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descrição = "";
    
    for (let notícia of notícias) {
        titulo = notícia.titulo.toLowerCase()
        descrição = notícia.descrição.toLowerCase()
        notícia.titulo.includes(campoPesquisa)
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
            resultados += `
            <div class="card">
                <h3>${notícia.titulo}</h2>
                <p>${notícia.descrição}</p>
            </div>
        `
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    }
    
    section.innerHTML = resultados
}


