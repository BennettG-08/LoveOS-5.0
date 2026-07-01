/* ==========================================
            LOVE OS 5.0
========================================== */

const openButton = document.getElementById("openLetter");
const letterWindow = document.getElementById("letterWindow");
const letterContent = document.getElementById("letterContent");
const music = document.getElementById("bgMusic");

/* ==========================================
              CARTA
========================================== */

const paragraphs = [

`Hay personas que aparecen en tu vida cuando menos lo esperas, y sin hacer demasiado ruido terminan convirtiéndose en una parte muy importante de tu historia.`,

`Desde que llegaste entendí que los pequeños momentos pueden ser los más valiosos. Una conversación, una sonrisa o un simple mensaje tuyo tienen la capacidad de cambiar por completo mi día.`,

`No sé qué caminos nos esperan ni cuánto tiempo pasará, pero sí sé que conocerte ha sido una de las coincidencias más bonitas que me ha regalado la vida.`,

`Quiero que nunca olvides que eres una persona increíble. Más allá de cualquier palabra, deseo que siempre encuentres motivos para sonreír y que nunca dejes de creer en todo lo bueno que eres capaz de lograr.`,

`Si algún día vuelves a leer esta carta, recuerda que fue escrita pensando únicamente en ti, con el deseo de regalarte un pequeño momento especial.`,

`Gracias por existir, por cada recuerdo compartido y por hacer que mi mundo sea un lugar mucho más bonito.`,

`Y pase lo que pase... siempre voy a desearte lo mejor. Hasta el infinito y mucho más allá. ♾️❤️`

];

/* ==========================================
          ABRIR LA CARTA
========================================== */

openButton.addEventListener("click", async () => {

    letterWindow.classList.remove("hidden");

    openButton.disabled = true;

    openButton.textContent = "❤️ Carta Abierta";

    letterWindow.scrollIntoView({
        behavior: "smooth"
    });

    try {

        music.currentTime = 0;

        await music.play();

    } catch (error) {

        console.log("No se pudo reproducir la música.");

    }

    showParagraphs();

});

/* ==========================================
          LOVE OS 5.0 - PARTE 2
========================================== */

async function showParagraphs() {

    letterContent.innerHTML = "";

    for (const text of paragraphs) {

        const paragraph = document.createElement("p");

        paragraph.className = "paragraph";

        paragraph.textContent = text;

        letterContent.appendChild(paragraph);

        requestAnimationFrame(() => {
            paragraph.classList.add("show");
        });

        await sleep(2500);

    }

}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

/* ==========================================
        EFECTO ESTRELLAS
========================================== */

function createStar() {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.getElementById("stars").appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 5000);

}

setInterval(createStar, 180);

/* ==========================================
        EFECTO CORAZONES
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (7 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 1800);

/* ==========================================
        EFECTO PÉTALOS
========================================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (8 + Math.random() * 3) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 1500);

/* ==========================================
        LOVE OS 5.0 - PARTE 3
========================================== */

// Mensaje en consola
console.log("❤️ LoveOS 5.0 iniciado correctamente.");

// Efecto de brillo del botón
setInterval(() => {

    openButton.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 2200,
            iterations: 1
        }
    );

}, 4000);

// Animación de entrada de la ventana
letterWindow.style.opacity = "0";
letterWindow.style.transform = "translateY(40px)";
letterWindow.style.transition = "all .8s ease";

openButton.addEventListener("click", () => {

    setTimeout(() => {

        letterWindow.style.opacity = "1";
        letterWindow.style.transform = "translateY(0)";

    }, 250);

});

// Estrella fugaz ocasional
function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "vh";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(shootingStar, 9000);

// Mensaje final cuando termina la carta
setTimeout(() => {

    console.log("✨ Gracias por usar LoveOS.");

}, 10000);
