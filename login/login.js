// Função para alternar a visibilidade da senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Alterna o ícone entre 🙈 e 👁️ para indicar o estado de visualização
    this.textContent = type === 'password' ? '🙈' : '👁️';
});

// Função auxiliar para definir um cookie
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Função auxiliar para obter o valor de um cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Adiciona evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'root' && password === '0000') {
        // Salva o login em cookies, incluindo o nome do usuário
        setCookie("loggedIn", "true", 1); // Expira em 1 dia
        setCookie("username", username, 1); // Expira em 1 dia

        // Redireciona para index.html
        window.location.href = '../index.html'; // O caminho está correto para a estrutura atual
    } else {
        document.getElementById('message').innerText = 'Usuário ou senha incorretos.';
    }
});

// Redirecionamento para a página de registro
document.getElementById('registerRedirect').addEventListener('click', function() {
    window.location.href = '../registrar/registrar.html'; // Ajuste o caminho conforme necessário
});
