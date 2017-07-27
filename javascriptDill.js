const getCoinoneData = (suffix) => {
    return fetch(`https://api.coinone.co.kr/orderbook/?currency=${suffix}&format=json`);
}

window.setInterval( () => {
    Promise.all([getCoinoneData('eth'),getCoinoneData('eth'), getCoinoneData('xrp'),getCoinoneData('xrp')])
    .then((data) => {
        Promise.all(data["ask"][i]["price"].json(),data["ask"][i]["price"], data["ask"][i]["price"].json(),data["ask"][i]["price"].json()])
        .then((data) => {
            var fundAmountKK = 19000;
            var pointKK = 0;
            var fundAmountCO = 22000000;
            var pointCO = 0;

            var eth = data[0];
            var xrp = data[1];

            console.log(fundAmountCO);
            //document.getElementById("fundAmountCO").innerHTML = fundAmountCO ;
            
            //Put your logics here
            //You can access all variables in this scope
            });
        });
    } , 1000);
