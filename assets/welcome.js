var nama = prompt("Masukkan Nama Panggilan : ");
if (nama != null  && lupa != '') {
    document.getElementById("welcome").innerHTML = "Hai " + nama + "! Selamat Menjelajah di Websiteku.";
    document.getElementById("welcome").style.background = '#ebbd6a';
    document.getElementById("welcome").style.color = 'white';
} else {
    alert('Kamu belum menuliskan namamu, tapi okelah Selamat Datang!')
}

function namaKlik() {
    var lupa = prompt("Masukkan Nama Panggilan : ");
    if (lupa != null && lupa != '') {
        document.getElementById("welcome").innerHTML = "Hai " + lupa + "! Selamat Menjelajah di Websiteku.";
        document.getElementById("welcome").style.background = '#ebbd6a';
        document.getElementById("welcome").style.color = 'white';
    } else {
        alert('Kamu belum jadi memberikan namamu')
    }
}