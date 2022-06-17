const dbproduto = [];


document.getElementById('cadastraProduto').addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    let preco = document.getElementById('preco').value;

    const produto = { 
        nome: nome,
        preco: preco
    };

    const p = document.createElement('p');
    p.innerHTML = `Usuario: ${produto.nome} ${produto.preco}`;
    document.getElementById('result').appendChild(p);

    dbcompra.push(produto);
    alert(`Produto nº${dbcompra.length} cadastrado com sucesso!`);	
    console.log(dbcompra);

    

});
