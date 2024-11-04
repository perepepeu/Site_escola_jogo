document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação de usuário e senha
    if (username.length < 5) {
        document.getElementById('message').innerText = 'O nome de usuário deve ter pelo menos 5 caracteres.';
        return;
    }
    if (password.length < 6) {
        document.getElementById('message').innerText = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    // Lógica para salvar o novo usuário em contas.json
    loadAccounts().then(accounts => {
        // Verifica se o nome de usuário já existe
        const existingUser = accounts.find(account => account.username === username);
        if (existingUser) {
            document.getElementById('message').innerText = 'Nome de usuário já existe.';
            return;
        }

        // Adiciona a nova conta ao array
        accounts.push({ username: username, password: password });

        // Salva o novo array em contas.json
        saveAccounts(accounts).then(() => {
            // Loga automaticamente o usuário após o registro
            const userData = { username: username };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = '../index.html'; // Redireciona para a página inicial
        }).catch(error => {
            document.getElementById('message').innerText = 'Erro ao salvar a conta.';
            console.error('Erro ao salvar contas:', error);
        });
    });
});

// Função para salvar contas em contas.json
function saveAccounts(accounts) {
    return fetch('login/contas.json', {
        method: 'PUT', // Método para atualizar o arquivo
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(accounts)
    });
}

// Função para carregar as contas do arquivo JSON (repetida para o registro)
function loadAccounts() {
    return fetch('login/contas.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Erro:', error);
            return [];
        });
}

document.getElementById('loginRedirect').addEventListener('click', function() {
    window.location.href = '../login/login.html'; // Ajuste o caminho conforme necessário
});