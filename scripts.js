const convertButton = document.querySelector(".convert-button")
const inputValue1 = document.querySelector(".input-value")
const selectMoedas = document.querySelector(".select-1")
const selectPrincipal = document.querySelector(".select-2")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueReal = document.querySelector(".p-1-2")
    const otrosValue = document.querySelector(".p-1-2-3")

    const cubanoToday = 0.02
    const dolarToday = 4.87
    const euroToday = 5.40



    if(selectMoedas.value == "dolar") {
        otrosValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if(selectMoedas.value == "cup") {
        otrosValue.innerHTML = new Intl.NumberFormat("es", {
            style: "currency",
            currency: "CUP"
        }).format(inputValue / cubanoToday)

    }


    if(selectMoedas.value == "euro") {
        otrosValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

    }


    valueReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
   
    console.log(converting)
}



function changeMoeda() {
    const p4 = document.getElementById("p-4")
    const imgUS = document.getElementById("img-us")

    if(selectMoedas.value == "dolar") {
        p4.innerHTML = "Dólar americano",
            imgUS.src = "./img/estados-unidos (1) 1.png"
    }

    if(selectMoedas.value == "cup") {
        p4.innerHTML = "CUP",
            imgUS.src = "./img/cuba.png"
    }

    if(selectMoedas.value == "euro") {
        p4.innerHTML = "Euro",
            imgUS.src = "./img/euro.png"
    }

    convertValues()

}


selectMoedas.addEventListener("change", changeMoeda)
convertButton.addEventListener("click", convertValues)
