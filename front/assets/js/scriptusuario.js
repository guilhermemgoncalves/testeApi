// const dbcompra = [];


document.getElementById('cadastraUsuario').addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    // let sobrenome = document.getElementById('sobrenome').value;

    // const usuario = { 
    //     nome: nome,
    //     sobrenome: sobrenome
    // };

    //transformar em request 

    let usuario = cadastraUsuario(nome);

    // const p = document.createElement('p');
    // p.innerHTML = `Usuario: ${usuario.nome} ${usuario.sobrenome}`;
    // document.getElementById('result').appendChild(p);

    // dbcompra.push(usuario);
    // alert(`Usuario nº${dbcompra.length} cadastrado com sucesso!`);	
    //console.log(dbcompra);    

});


async function cadastraUsuario(nome) {
    
    
    const usuario = { 
        nome: nome,
        // sobrenome: sobrenome
    };
    console.log(usuario);

    console.log("Passei por aqui")
    const response = await fetch('http://localhost:3000/usuario', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {'Content-type': 'application/json; charset=utf-8'}});  

    console.log(response)

    return response.status === 201;
}
