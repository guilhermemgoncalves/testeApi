const dbcompra = [];


document.getElementById('enviarCarrinho').addEventListener('click', () => {
    let cliente = document.getElementById('nome').value;
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    const compra = { 
        cliente: cliente,
        produto: produto,
        quantidade: quantidade
    };

    const p = document.createElement('p');
    p.innerHTML = `Compra: Cliente${compra.cliente} comprou${compra.quantidade} ${compra.produto},`;
    document.getElementById('result').appendChild(p);

    dbcompra.push(compra);
    alert(`Usuario nº${dbcompra.length} cadastrado com sucesso!`);	
    console.log(dbcompra);

    

});
