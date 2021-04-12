// eslint-disable-next-line
function login() {
    const nameValue = document.getElementById('username').value;
    const passValue = document.getElementById('password').value;
    let accesToken = '';
    const data = JSON.stringify({
        username: nameValue,
        password: passValue,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    // eslint-disable-next-line func-names
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const result = JSON.parse(this.responseText);
            accesToken = result.token;
            // eslint-disable-next-line no-console
            console.log(accesToken);
            localStorage.setItem('token', accesToken);
            document.getElementById('signup-form').submit();
        }
    });

    xhr.open('POST', 'http://127.0.0.1:5000/login');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.send(data);
}
