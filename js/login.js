document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    if (phoneNumber === '01768885113' && pinNumber === 'rimonc7') {
        window.location.href = '/home.html'
    }
    else {
        alert('You foul')
    }
})