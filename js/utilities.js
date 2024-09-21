function getAmountbyId(id) {
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}

function getPinById(id) {
    const pinNumber = document.getElementById(id).value;
    return pinNumber;
}

function getAvailableBlanceById(id) {
    const availableBalance = document.getElementById(id).innerText;
    const balanceNum = parseFloat(availableBalance);
    return balanceNum;
}


function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden')
    // showingid
    document.getElementById(id).classList.remove('hidden')

}
