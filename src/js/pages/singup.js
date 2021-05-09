// eslint-disable-next-line
function singup() {
    const nameValue = document.getElementById('username').value;
    const passValue = document.getElementById('password').value;
    const confirmValue = document.getElementById('confirm-password').value;
    // eslint-disable-next-line
    if (passValue === confirmValue) {
        const data = JSON.stringify({
            username: nameValue,
            password: passValue,
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        // eslint-disable-next-line func-names
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                // eslint-disable-next-line no-console
                console.log(this.responseText);
                document.getElementById('signup-form').submit();
            }
        });
        xhr.open('POST', 'http://127.0.0.1:5000/signup');
        xhr.setRequestHeader('content-type', 'application/json');

        xhr.send(data);
        setTimeout(() => {
        }, 5000);
        // eslint-disable-next-line no-console
        console.log('done');
        setTimeout(() => {
        }, 10000);
    } else {
        // eslint-disable-next-line no-alert
        alert('Wrong confirm password');
    }
}
export default singup;