const currentcurrency = document.getElementById('current-currency')
const currentcurrency2 = document.getElementById('current-currency-2')
const changequantityafter = document.getElementById('change-quantity-after')
const changequantitylater = document.getElementById('change-quantity-later')
const btn = document.getElementById('btn')


btn.addEventListener("click",()=>{
       const currency_first = currentcurrency.value
       const currency_second = currentcurrency2.value  
       const value = changequantityafter.value


if (currency_first != currency_second) {
       convert(currency_first, currency_second, value)
}else{
       alert("Scegli due valute differenti.")
}
})
 async function convert(currency_first, currency_second, value){
       const host = "api.frankfurter.app";
       const response = await fetch(`https://${host}/latest?amount=${value}&from=${currency_first}&to${currency_second}`)
       const data = await response.json()
       console.log(response)
       changequantitylater.value = data.rates[currentcurrency2.value]
}





