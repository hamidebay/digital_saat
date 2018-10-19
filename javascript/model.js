/* bir digital saat olusturulacak
1. Saat, dakika, saniye ve milisaniyeyi gösterecek.
2. Saat alanina tiklayinca 12 lik ya da 24 lük gösterim birimleri arasinda degisecek.
3. aktüel epoch degeri gösterilecek.
4. Log butonuna basilinca, butona basilma zamani, butonun altinda olan bir listeye eklenecek.
*/
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let miliSeconds = date.getMilliseconds();

function update(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    miliSeconds = date.getMilliseconds(); 
}

function showTime() {
    update();
    let time = hours + ":" + checkTime(minutes) + minutes + ":" + checkTime(seconds) + seconds + ":" + miliSeconds;
    return time;
}



function checkTime(i) {
    if (i < 10) {
        i = "0";
    } else {
        i = "";
    }
    return i;
}

function changeTimeUnit() {

    if (hours <= 12) {
        hours += 12;
    } else {
        hours = hours - 12;
    }

    let newTime = hours + ":" + checkTime(minutes) + minutes + ":" + checkTime(seconds) + seconds + ":" + miliSeconds;
    //console.log(hours);
    return newTime;

}

console.log("test");