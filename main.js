function eligeHoroscopo() {
    
    let horoscopoElegido = document.getElementById("Horoscopo").value.toLowerCase();
    console.log(horoscopoElegido);
    let imagenHtml = document.getElementById("imagen-horoscopo");
    let textoHtml = document.getElementById("nombre-horoscopo");
    let fechasHtml = document.getElementById("fecha-horoscopo");

    switch (horoscopoElegido) {
        case "aries":
            textoHtml.innerHTML = "Aries";
            imagenHtml.style.backgroundImage = "url(images/aries-i.jpg)";
            fechasHtml.innerHTML = "21 de marzo al 19 de abril";
            break;

        case "tauro":
            textoHtml.innerHTML = "Tauro";
            imagenHtml.style.backgroundImage = "url(images/tauro-i.webp)";
            fechasHtml.innerHTML = "20 de abril al 20 de mayo";
            break;

        case "geminis":
            textoHtml.innerHTML = "Geminis";
            imagenHtml.style.backgroundImage = "url(images/geminis-i.webp)";
            fechasHtml.innerHTML = "21 de mayo al 20 de junio";
            break;


        case "cancer":
            textoHtml.innerHTML = "Cancer";
            imagenHtml.style.backgroundImage = "url(images/cancer-i.jpg)";
            fechasHtml.innerHTML = "21 de junio al 22 de julio";
            break;

        case "leo":
            textoHtml.innerHTML = "Leo";
            imagenHtml.style.backgroundImage = "url(images/leo-i.webp)";
            fechasHtml.innerHTML = "23 de julio al 22 de agosto";
            break;

        case "virgo":
            textoHtml.innerHTML = "Virgo";
            imagenHtml.style.backgroundImage = "url(images/virgo-i.webp)";
            fechasHtml.innerHTML = "23 de agosto al 22 de septiembre";
            break;

        case "libra":
            textoHtml.innerHTML = "Libra";
            imagenHtml.style.backgroundImage = "url(images/libra-i.webp)";
            fechasHtml.innerHTML = "23 de septiembre al 22 de octubre";
            break;

        case "escorpio":
            textoHtml.innerHTML = "Escorpio";
            imagenHtml.style.backgroundImage = "url(images/escorpio-i.jpg)";
            fechasHtml.innerHTML = "23 de octubre al 21 de noviembre";
            break;

        case "sagitario":
            textoHtml.innerHTML = "Sagitario";
            imagenHtml.style.backgroundImage = "url(images/sagitario-i.jpg)";
            fechasHtml.innerHTML = "22 de noviembre al 21 de diciembre";
            break;

        case "capricornio":
            textoHtml.innerHTML = "Capricornio";
            imagenHtml.style.backgroundImage = "url(images/capricornio-i.jpg)";
            fechasHtml.innerHTML = "22 de diciembre al 19 de enero";
            break;

        case "acuario":
            textoHtml.innerHTML = "Acuario";
            imagenHtml.style.backgroundImage = "url(images/acuario-i.webp)";
            fechasHtml.innerHTML = "20 de enero al 18 de febrero";
            break;

        case "piscis":
                textoHtml.innerHTML = "Piscis";
                imagenHtml.style.backgroundImage = "url(images/piscis-i.webp)";
                fechasHtml.innerHTML = "19 de febrero al 20 de marzo";
                break;

        default:
            textoHtml.innerHTML = "Horoscopo";
                imagenHtml.style.backgroundImage = "url(/images/Horoscopos.jpg)";
                imagenHtml.innerHTML = "<h1>Elige tu horoscopo</h1>";
                imagenHtml.style = "display: flex; justify-content: center; align-items: center; color: white; text-shadow: 5px 5px 5px black"
                break;
    }
}

