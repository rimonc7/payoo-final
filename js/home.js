document.getElementById('btn-add-money').addEventListener('click', function () {
    // const addMoneyForm = document.getElementById('add-money-form');
    // addMoneyForm.classList.remove('hidden');
    // document.getElementById('btn-add-money').style.backgroundColor = 'pink';
    // const cashOutForm = document.getElementById('cashout-form');
    // cashOutForm.classList.add('hidden');
    // document.getElementById('cashout-btn').style.backgroundColor = 'white';
    // const transferMoneyForm = document.getElementById('transfer-money-form');
    // transferMoneyForm.classList.add('hidden');
    // document.getElementById('transfer-btn').style.backgroundColor = 'white';
    showSectionById('add-money-form');
})

document.getElementById('money-added-primarybtn').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = document.getElementById('amount-input');
    const amountValue = amount.value;
    const pin = document.getElementById('pin-input').value;

    if (amountValue <= 0 || isNaN(amountValue)) {
        alert('You Foul')
        return;
    }

    if (pin === '1234') {
        const Balance = document.getElementById('available-balance').innerText;
        const availableMoney = parseFloat(Balance)
        const addedAmount = parseFloat(amountValue);
        const total = availableMoney + addedAmount;
        document.getElementById('available-balance').innerText = total;
        amount.value = '';
        document.getElementById('pin-input').value = '';

        const p = document.createElement('p');
        p.innerText = `Added: ${addedAmount} tk. Balance: ${total}`;
        // p.innerText = 'Added: ' + addedAmount + ' tk ' + ' Balance: ' + total;
        document.getElementById('transaction-section').appendChild(p);
    }
    else {
        alert('you foul')
    }
})

// cash out 

document.getElementById('cashout-btn').addEventListener('click', function () {
    // const cashOutForm = document.getElementById('cashout-form');
    // cashOutForm.classList.remove('hidden');
    // document.getElementById('cashout-btn').style.backgroundColor = 'pink';
    // const addMoneyForm = document.getElementById('add-money-form');
    // addMoneyForm.classList.add('hidden');
    // document.getElementById('btn-add-money').style.backgroundColor = 'white';
    // const transferMoneyForm = document.getElementById('transfer-money-form');
    // transferMoneyForm.classList.add('hidden');
    // document.getElementById('transfer-btn').style.backgroundColor = 'white';
    showSectionById('cashout-form');
})

document.getElementById('cashout-primarybtn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashAmount = document.getElementById('cahsout-amount-input');
    const cashAmountValue = cashAmount.value;
    const cashOutPin = document.getElementById('cashout-pin-input').value;

    if (cashAmountValue <= 0 || isNaN(cashAmountValue)) {
        alert('You Foul')
        return;
    }


    if (cashOutPin === '1234') {
        const Balance = document.getElementById('available-balance').innerText;
        const availableMoney = parseFloat(Balance)
        const cashOutAmount = parseFloat(cashAmountValue);
        if (availableMoney < cashOutAmount) {
            alert("You don't have enough money")
            return;
        }
        const restAmount = availableMoney - cashOutAmount;
        document.getElementById('available-balance').innerText = restAmount;
        cashAmount.value = '';
        document.getElementById('cashout-pin-input').value = '';
        const div = document.createElement('div');
        div.classList.add('bg-red-500');
        div.innerHTML = `
        Cashout: ${cashOutAmount} tk. Balance: ${restAmount}`
        document.getElementById('transaction-section').appendChild(div);
    }
    else {
        alert('you foul')
    }

})


// transfer start

document.getElementById('transfer-btn').addEventListener('click', function () {
    showSectionById('transfer-money-form');

    // const transferForm = document.getElementById('transfer-money-form');
    // transferForm.classList.remove('hidden');
    // document.getElementById('transfer-btn').style.backgroundColor = 'pink';
    // const cashOutForm = document.getElementById('cashout-form');
    // cashOutForm.classList.add('hidden');
    // document.getElementById('cashout-btn').style.backgroundColor = 'white';
    // const addMoneyForm = document.getElementById('add-money-form');
    // addMoneyForm.classList.add('hidden');
    // document.getElementById('btn-add-money').style.backgroundColor = 'white';

})


document.getElementById('transfer-now-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amountValue = getAmountbyId('transfer-amount');
    const pinNumber = getPinById('transfer-pin');

    if (pinNumber === '1234') {
        const balance = getAvailableBlanceById('available-balance')
        const newBalance = balance - amountValue;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('ac-num').value = '';
        document.getElementById('transfer-amount').value = '';
        document.getElementById('transfer-pin').value = '';
    }
    else {
        alert('you foul')
    }


})

// transaction section
document.getElementById('transaction-btn').addEventListener('click', function (event) {
    showSectionById('transaction-section');
})