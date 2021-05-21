// eslint-disable-next-line
import $ from 'jquery';
function smoke() {
    // eslint-disable-next-line no-console

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


export default smoke;