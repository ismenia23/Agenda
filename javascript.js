function adicionarContato(){
    let nome = document.getElementById("nome").value.trin()
     let email = document.getElementById("email").value.trin()
      let telefone= document.getElementById("telefone").value.trin()

if (!nome || email || telefone){
    alert("Preencha todos os campos");
    return;
}

let tabela=document.getElementById("tabelacontatos").querySelector("tbody");
let navaLinha =tabela.insertRow();

novaLinha.insertCell(0).innerText=nome;
novaLinha.insertCell(1).innerText=email;
novaLinha.insertCell(2).innerText=telefone;

 document.getElementById("nome").value=""
 document.getElementById("email").value=""
 document.getElementById("telefone").value=""






    
}