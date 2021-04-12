// eslint-disable-next-line
$(document).ready(() => {
    // eslint-disable-next-line
    $('#seat').text((Math.floor(Math.random() * 1000)));
});

// eslint-disable-next-line
function buy() {
    const date = new Date();
    const placeValue = document.getElementById('seat').innerHTML;
    const titleValue = document.getElementById('title').innerHTML;
    const priceValue = parseFloat(document.getElementById('price').innerHTML);
    const dateValue = `${date.getDate()}/${date.getMonth() + 2}/${date.getFullYear()}`;
    const ticket = JSON.stringify({
        place: placeValue,
        title: titleValue,
        price: priceValue,
        date: dateValue,
    });

    // eslint-disable-next-line no-console
    console.log(ticket);
    // eslint-disable-next-line no-console
    console.log(localStorage.getItem('token'));
    // eslint-disable-next-line
    var xhttp = new XMLHttpRequest();
    // eslint-disable-next-line func-names
    xhttp.onreadystatechange = function () {
        // eslint-disable-next-line eqeqeq
        if (this.readyState === 4 && this.status === 200) {
            // eslint-disable-next-line no-console
            console.log(this.responseText);
        }
    };
    xhttp.open('POST', 'http://127.0.0.1:5000/buy');
    xhttp.setRequestHeader('content-type', 'application/json');
    xhttp.setRequestHeader('authorization', localStorage.getItem('token'));

    xhttp.send(ticket);
}
// eslint-disable-next-line no-unused-vars
function book() {
    const date = new Date();
    const placeValue = document.getElementById('seat').innerHTML;
    const titleValue = document.getElementById('title').innerHTML;
    const priceValue = parseFloat(document.getElementById('price').innerHTML);
    const dateValue = `${date.getDate()}/${date.getMonth() + 2}/${date.getFullYear()}`;
    const ticket = JSON.stringify({
        place: placeValue,
        title: titleValue,
        price: priceValue,
        date: dateValue,
    });

    // eslint-disable-next-line no-console
    console.log(ticket);
    // eslint-disable-next-line no-console
    console.log(localStorage.getItem('token'));
    // eslint-disable-next-line
    var xhttp = new XMLHttpRequest();
    // eslint-disable-next-line func-names
    xhttp.onreadystatechange = function () {
        // eslint-disable-next-line eqeqeq
        if (this.readyState === 4 && this.status === 200) {
            // eslint-disable-next-line no-console
            console.log(this.responseText);
        }
    };
    xhttp.open('POST', 'http://127.0.0.1:5000/book');
    xhttp.setRequestHeader('content-type', 'application/json');
    xhttp.setRequestHeader('authorization', localStorage.getItem('token'));

    xhttp.send(ticket);
}
