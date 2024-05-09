
console.log("6 lab")
let buttonOne////инициализирую переменную buttonOne, которая используется в функциях toOpen  toClose
function toOpen() {
    console.log("кнопка нажата")
     buttonOne = window.open("","name","")
    document.getElementById("buttonOne").innerText+=` открыть сайт ${buttonOne}`
}

function toClose() {
    console.log("кнопка нажата")
    buttonOne.close()

}
function toAdd() {
    console.log("кнопка нажата")
buttonOne.document.body.innerHTML+=`Имя окна :${buttonOne.name}`
}


document.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML=`${navigator.userAgent}`
document.getElementsByTagName("tr")[2].getElementsByTagName("td")[1].innerHTML=`${navigator.appVersion}`
document.getElementsByTagName("tr")[3].getElementsByTagName("td")[1].innerHTML=`${navigator.appName}`
document.getElementsByTagName("tr")[4].getElementsByTagName("td")[1].innerHTML=`${navigator.appCodeName}`
document.getElementsByTagName("tr")[5].getElementsByTagName("td")[1].innerHTML=`${navigator.platform}`
document.getElementsByTagName("tr")[6].getElementsByTagName("td")[1].innerHTML=`${navigator.javaEnabled()}`
document.getElementsByTagName("tr")[7].getElementsByTagName("td")[1].innerHTML=`Ширина :${screen.width} и высота : ${screen.height}`
document.getElementsByTagName("tr")[8].getElementsByTagName("td")[1].innerHTML=` ${screen.colorDepth}`
document.getElementsByTagName("tr")[9].getElementsByTagName("td")[1].innerHTML=` ${history.length}`
document.getElementsByTagName("tr")[10].getElementsByTagName("td")[1].innerHTML=` ${location.href}`
document.getElementsByTagName("tr")[11].getElementsByTagName("td")[1].innerHTML=` ${location.pathname}`
document.getElementsByTagName("tr")[12].getElementsByTagName("td")[1].innerHTML=` ${location.hostname}`