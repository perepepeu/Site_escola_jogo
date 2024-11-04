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
        event.stopPropagation(); // Impede o clique de propagar para o window
        const dropdownMenu = document.getElementById('userMenu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Para fechar o menu ao clicar fora dele
    window.addEventListener('click', function(event) {
        const dropdownMenu = document.getElementById('userMenu');
        if (!dropdownMenu.contains(event.target) && event.target.id !== 'usernameDisplay') {
            dropdownMenu.style.display = 'none'; // Fecha o menu se clicar fora
        }
    });

    // Função de logout para remover cookies e redirecionar para a página de login
    function logout() {
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/login/login.html';
    }

    // Adiciona o evento de logout ao botão de logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    // Chama a função para verificar o login ao carregar a página
    checkLogin()