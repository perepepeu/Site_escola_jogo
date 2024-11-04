const textarea = document.getElementById('question');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function () {
    const maxLength = 1000;
    const currentLength = textarea.value.length;

    charCount.textContent = `${currentLength} / ${maxLength} caracteres`;

    // Caso o usuário ultrapasse o limite, limita o valor do textarea
    if (currentLength >= maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
        charCount.style.color = 'red';
    } else {
        charCount.style.color = 'black';
    }
});

// Função para verificar o login e atualizar a interface
function checkLogin() {
    const cookies = document.cookie.split('; ');
    const loggedInCookie = cookies.find(row => row.startsWith('loggedIn='));
    const usernameCookie = cookies.find(row => row.startsWith('username='));

    if (loggedInCookie && loggedInCookie.split('=')[1] === 'true') {
        const username = usernameCookie ? usernameCookie.split('=')[1] : 'Usuário';
        
        // Exibe o nome do usuário e o menu de usuário
        document.getElementById('usernameDisplay').textContent = username;
        document.getElementById('usernameDisplay').style.display = 'block';
        document.getElementById('userMenu').style.display = 'block';
    } else {
        // Se não estiver logado, esconde o nome do usuário e exibe o botão de login
        document.getElementById('usernameDisplay').style.display = 'none';
        document.getElementById('loginButton').style.display = 'block';
    }
}

// Alterna a exibição do menu do usuário ao clicar no nome do usuário
document.getElementById('usernameDisplay').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdownMenu = document.getElementById('userMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Fecha o menu ao clicar fora dele
window.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('userMenu');
    if (!dropdownMenu.contains(event.target) && event.target.id !== 'usernameDisplay') {
        dropdownMenu.style.display = 'none';
    }
});

// Função de logout
function logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '../login/login.html';
}

// Adiciona o evento de logout ao botão de logout
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}

// Navegação entre as páginas
document.getElementById('inicioLink').addEventListener('click', function() {
    window.location.href = '../../index.html';
});

document.getElementById('contatoLink').addEventListener('click', function() {
    window.location.href = '../../outros/contact/contact.html';
});

document.getElementById('categoriaLink').addEventListener('click', function() {
    window.location.href = '../../outros/category/category.html';
});

document.getElementById('quemSomosLink').addEventListener('click', function() {
    window.location.href = '../../outros/info/info.html';
});

// Função para simular o envio do formulário de contato e exibir uma confirmação
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Exibir mensagem de confirmação decorativa
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Sua mensagem foi enviada com sucesso! Obrigado pelo contato.';
    messageElement.style.color = 'green';

    // Limpar o formulário
    document.getElementById('contactForm').reset();

    // Atraso para redirecionamento
    setTimeout(function() {
        window.location.href = '../../../index.html';
    }, 3000); // Redireciona após 3 segundos
});

// Chama a função para verificar o login ao carregar a página
checkLogin();


