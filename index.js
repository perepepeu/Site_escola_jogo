document.addEventListener('DOMContentLoaded', function() {
    // Obtem os cookies de login e nome do usuário
    const cookies = document.cookie.split('; ');
    const loggedInCookie = cookies.find(row => row.startsWith('loggedIn='));
    const usernameCookie = cookies.find(row => row.startsWith('username='));

    // Verifica se o usuário está logado
    if (loggedInCookie && loggedInCookie.split('=')[1] === 'true') {
        const username = usernameCookie ? usernameCookie.split('=')[1] : 'Usuário';

        // Seleciona os elementos para exibir o nome do usuário e o menu suspenso
        const loginButton = document.getElementById('loginButton');
        const usernameDisplay = document.getElementById('usernameDisplay');
        const userMenu = document.getElementById('userMenu');
        const editContentOption = document.getElementById('editContent');

        // Atualiza a interface para mostrar o nome do usuário
        loginButton.style.display = 'none';
        usernameDisplay.textContent = username;
        userMenu.style.display = 'inline-block';

        // Exibe a opção "Editar Conteúdo do Site" somente para o usuário root
        if (username === 'root') {
            editContentOption.style.display = 'block';
        }

        // Alterna a visibilidade do menu suspenso ao clicar no nome do usuário
        usernameDisplay.addEventListener('click', function() {
            const dropdownMenu = document.getElementById('dropdownMenu');
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Função de logout
        document.getElementById('logout').addEventListener('click', function() {
            // Remove os cookies de login e nome de usuário
            document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
            // Redireciona para a página de login
            window.location.href = 'login/login.html';
        });

        // Função para o link "Editar Conta"
        document.getElementById('editAccount').addEventListener('click', function() {
            window.location.href = 'edicao_conta/edicao_conta.html';
        });

        // Função para o link "Editar Conteúdo do Site" (somente para root)
        editContentOption.addEventListener('click', function() {
            alert('Função de edição do site ainda não implementada.');
        });

    } else {
        // Caso o usuário não esteja logado, oculta o menu de usuário
        document.getElementById('userMenu').style.display = 'none';
    }
});

document.getElementById('inicioLink').addEventListener('click', function() {
    window.location.href = 'index.html'; // Altere '#inicio' para a URL ou seção desejada
});

document.getElementById('contatoLink').addEventListener('click', function() {
    window.location.href = 'outros/contact/contact.html'; // Altere '#contato' para a URL ou seção desejada
});

document.getElementById('categoriaLink').addEventListener('click', function() {
    window.location.href = 'outros/category/category.html'; // Altere '#categoria' para a URL ou seção desejada
});

document.getElementById('quemSomosLink').addEventListener('click', function() {
    window.location.href = 'outros/info/info.html'; // Altere '#quem-somos' para a URL ou seção desejada
});

