document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verificação básica dos campos do formulário
    const email = document.getElementById('inputEmail4').value.trim();
    const senha = document.getElementById('inputPassword4').value.trim();
    const nome = document.getElementById('inputName').value.trim();
    const dataNascimento = document.getElementById('inputDate').value.trim();
    const endereco = document.getElementById('inputAddress2').value.trim();
    const estado = document.getElementById('inputState').value;
    const telefone = document.getElementById('inputPhone').value.trim();
    const termosUso = document.getElementById('gridCheck').checked;

    if (email && senha && nome && dataNascimento && endereco && estado !== 'Selecione...' && telefone && termosUso) {
        // Se todos os campos estiverem preenchidos, redireciona para a página de confirmação
        window.location.href = 'confirmacao.html';
    } else {
        // Se algum campo estiver vazio, exibe uma mensagem de erro
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

