const form = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Impede a página de recarregar sozinha ao clicar em Cadastrar

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const veiculo = document.getElementById("veiculo").value.trim();

    // Remove qualquer símbolo do telefone para contar só os números
    const apenasNumeros = telefone.replace(/\D/g, "");

    // Validações
    if (nome.length < 3) {
        mensagem.textContent = "Erro: Digite o seu nome completo (mínimo 3 letras).";
        mensagem.style.color = "red";
        return;
    }

    if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
        mensagem.textContent = "Erro: Digite um telefone válido com DDD (10 ou 11 números).";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "Erro: A senha precisa ter pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    if (veiculo === "") {
        mensagem.textContent = "Erro: Informe o modelo do seu veículo.";
        mensagem.style.color = "red";
        return;
    }

    // Se passou por tudo sem erro:
    mensagem.textContent = `Cadastro realizado com sucesso, ${nome}! Seu veículo (${veiculo}) já tem direito a 10% de desconto na mão de obra.`;
    mensagem.style.color = "green";
    form.reset();
});