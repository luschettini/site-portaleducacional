function validarRespostas() {
    const questions = document.querySelectorAll('.question');
    // Seleciona todas as questões no formulário

    let allAnswered = true;
    // Variável para verificar se todas as perguntas foram respondidas

    questions.forEach(question => {
        const correctAnswer = question.getAttribute('data-answer');
        // Pega o valor da resposta correta da questão (atributo 'data-answer')

        const selectedOption = question.querySelector('input[type="radio"]:checked');
        // Verifica qual resposta foi selecionada pelo usuário

        const justificativa = question.querySelector('.justificativa');
        // Seleciona a área de justificativa da questão

        const gabarito = question.querySelector('.gabarito');
        // Seleciona a área do gabarito explicado da questão

        if (selectedOption) {
            const userAnswer = selectedOption.value;
            // Pega a resposta do usuário

            question.querySelectorAll('label').forEach(label => {
                // Remove quaisquer classes de respostas anteriores
                label.classList.remove('correct', 'incorrect');
            });

            if (userAnswer === correctAnswer) {
                // Se a resposta do usuário estiver correta
                selectedOption.parentElement.querySelector('label').classList.add('correct');
                // Adiciona a classe 'correct'
            } else {
                // Se a resposta do usuário estiver incorreta
                selectedOption.parentElement.querySelector('label').classList.add('incorrect');
                // Adiciona a classe 'incorrect' 
            }


            gabarito.style.display = 'block';
            // Exibe o gabarito explicado para a questão
        } else {
            allAnswered = false;
            // Marca como não respondido caso nenhuma opção tenha sido selecionada
        }
    });

    if (!allAnswered) {
        alert('Por favor, responda todas as questões!');
        // Alerta se o usuário não tiver respondido todas as questões
    }
}
