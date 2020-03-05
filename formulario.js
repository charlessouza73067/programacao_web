var enviar = document.getElementById("enviar")

enviar.setAttribute('onclick','exibirDadosDigitados()')

function exibirDadosDigitados(){

    var nome = document.getElementById("nome").value
    
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var texto = document.getElementById("texto").value
    

 alert(

      `-nome: ${nome}
      -Email: ${email}
      -Telefone: ${telefone}
      -Mensagem: ${texto}
      `
)

}