// eslint-disable-next-line
function smoke() {
    // eslint-disable-next-line no-console
    console.log(localStorage.getItem('token'));
    // eslint-disable-next-line
    $.ajax({
        type: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
        url: 'http://127.0.0.1:5000/smoke',
        success(data) {
            // eslint-disable-next-line no-console
            console.log(data);
        },
    });
}
