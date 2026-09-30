const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    [...document.querySelectorAll(selector)];


function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}


/* ==============================
   ELEMENTOS
============================== */

const escena =
    $("#escena");

const cargando =
    $("#cargando");

const intro =
    $("#intro");

const botonEntrar =
    $("#botonEntrar");

const escenarioCumple =
    $("#escenarioCumple");

const torta =
    $("#torta");

const indicacion =
    $("#indicacion");

const celebracion =
    $("#celebracion");


/* ==============================
   ESTRELLAS
============================== */

function crearEstrellas() {

    const contenedor =
        $("#estrellas");

    for (let i = 0; i < 140; i++) {

        const estrella =
            document.createElement("span");

        estrella.className =
            "estrella";

        estrella.style.left =
            aleatorio(2, 98) + "%";

        estrella.style.top =
            aleatorio(3, 68) + "%";

        const tamaño =
            aleatorio(1, 3);

        estrella.style.width =
            tamaño + "px";

        estrella.style.height =
            tamaño + "px";

        estrella.style.animationDelay =
            aleatorio(0, 4) + "s";

        estrella.style.animationDuration =
            aleatorio(1.5, 4) + "s";

        contenedor.appendChild(
            estrella
        );
    }
}


/* ==============================
   LUCES
============================== */

function crearLuces() {

    const contenedor =
        $("#luces-jardin");

    for (let i = 0; i < 45; i++) {

        const luz =
            document.createElement("span");

        luz.className =
            "luz";

        luz.style.left =
            aleatorio(8, 92) + "%";

        luz.style.top =
            aleatorio(63, 88) + "%";

        luz.style.animationDelay =
            aleatorio(0, 3) + "s";

        contenedor.appendChild(
            luz
        );
    }
}


/* ==============================
   LUCIÉRNAGAS
============================== */

function crearLuciernagas() {

    const contenedor =
        $("#luciernagas");

    for (let i = 0; i < 28; i++) {

        const luz =
            document.createElement("span");

        luz.className =
            "luciernaga";

        luz.style.left =
            aleatorio(10, 90) + "%";

        luz.style.top =
            aleatorio(45, 88) + "%";

        luz.style.setProperty(
            "--dx",
            aleatorio(-70, 70) + "px"
        );

        luz.style.setProperty(
            "--dy",
            aleatorio(-60, 40) + "px"
        );

        luz.style.animationDelay =
            aleatorio(-7, 0) + "s";

        contenedor.appendChild(
            luz
        );
    }
}


/* ==============================
   RAYOS
============================== */

function crearRayos() {

    const contenedor =
        $("#rayos");

    for (let i = 0; i < 45; i++) {

        const rayo =
            document.createElement("span");

        rayo.className =
            "rayo";

        rayo.style.setProperty(
            "--angulo",
            (
                i * (360 / 45) +
                aleatorio(-4, 4)
            ) + "deg"
        );

        rayo.style.animationDelay =
            aleatorio(0, .2) + "s";

        contenedor.appendChild(
            rayo
        );
    }
}


/* ==============================
   PÉTALOS
============================== */

function crearPetalos() {

    const contenedor =
        $("#petalos");

    const colores = [
        "#e36d82",
        "#f1b35d",
        "#f7d77f",
        "#d75b73",
        "#fff0cf",
        "#d992a0"
    ];


    for (let i = 0; i < 110; i++) {

        const petalo =
            document.createElement("span");

        petalo.className =
            "petalo";

        petalo.style.background =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];

        petalo.style.setProperty(
            "--x",
            aleatorio(-52, 52) + "vw"
        );

        petalo.style.setProperty(
            "--y",
            aleatorio(-70, 35) + "vh"
        );

        petalo.style.setProperty(
            "--rotacion",
            aleatorio(-720, 720) + "deg"
        );

        petalo.style.setProperty(
            "--duracion",
            aleatorio(1.4, 3.2) + "s"
        );

        petalo.style.setProperty(
            "--retraso",
            aleatorio(0, .7) + "s"
        );

        contenedor.appendChild(
            petalo
        );
    }
}


/* ==============================
   TULIPANES
============================== */

function crearTulipanes() {

    const contenedor =
        $("#tulipanes");

    const cantidad = 20;


    for (let i = 0; i < cantidad; i++) {

        const tulipan =
            document.createElement("div");

        tulipan.className =
            "tulipan";

        tulipan.style.left =
            (
                4 +
                i * (92 / (cantidad - 1))
            ) + "%";

        tulipan.style.setProperty(
            "--retraso",
            (
                .6 +
                Math.abs(i - cantidad / 2) *
                .045
            ) + "s"
        );

        tulipan.style.setProperty(
            "--inclinacion",
            aleatorio(-8, 8) + "deg"
        );

        tulipan.innerHTML = `

            <div class="tallo"></div>

            <div class="hoja a"></div>

            <div class="hoja b"></div>

            <div class="cabeza-tulipan"></div>

        `;

        contenedor.appendChild(
            tulipan
        );
    }
}


/* ==============================
   ENTRAR
============================== */

botonEntrar.addEventListener(
    "click",
    () => {

        intro.classList.add(
            "oculto"
        );

        setTimeout(() => {

            escenarioCumple.classList.add(
                "activo"
            );

        }, 500);

    }
);


/* ==============================
   SORPRESA
============================== */

let sorpresaActivada = false;


function activarSorpresa() {

    if (sorpresaActivada)
        return;


    sorpresaActivada = true;


    /*
       IMPORTANTE:
       La indicación desaparece
       completamente al tocar.
    */

    indicacion.classList.add(
        "oculta"
    );


    torta.style.pointerEvents =
        "none";


    /* TEMBLOR */

    torta.animate(

        [
            {
                transform:
                    "scale(1) rotate(0)"
            },

            {
                transform:
                    "scale(1.05) rotate(-2deg)"
            },

            {
                transform:
                    "scale(.98) rotate(2deg)"
            },

            {
                transform:
                    "scale(1.03) rotate(-1deg)"
            },

            {
                transform:
                    "scale(1) rotate(0)"
            }

        ],

        {
            duration: 700,
            easing: "ease-in-out"
        }

    );


    /* APAGAR VELAS */

    $$(".vela span").forEach(
        llama => {

            llama.style.animationPlayState =
                "paused";

            llama.style.opacity =
                "0";
        }
    );


    /* EXPLOSIÓN */

    setTimeout(() => {

        celebracion.classList.add(
            "activa",
            "explosion"
        );

        escena.classList.add(
            "revelada"
        );

    }, 650);


    /* MENSAJE FINAL */

    setTimeout(() => {

        celebracion.classList.add(
            "completa"
        );

    }, 3000);

}


/* CLICK */

torta.addEventListener(
    "click",
    activarSorpresa
);


/* TECLADO */

torta.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Enter" ||
            evento.key === " "
        ) {

            evento.preventDefault();

            activarSorpresa();
        }

    }
);


/* ==============================
   MOVIMIENTO DEL FONDO
============================== */

function moverEscena(x, y) {

    const horizontal =
        (x / window.innerWidth - .5) * 2;

    const vertical =
        (y / window.innerHeight - .5) * 2;


    escena.style.setProperty(
        "--mov-x",
        horizontal * 18 + "px"
    );

    escena.style.setProperty(
        "--mov-y",
        vertical * 12 + "px"
    );
}


window.addEventListener(
    "mousemove",
    evento => {

        moverEscena(
            evento.clientX,
            evento.clientY
        );

    }
);


/* CELULAR */

window.addEventListener(
    "touchmove",
    evento => {

        if (!evento.touches[0])
            return;

        moverEscena(
            evento.touches[0].clientX,
            evento.touches[0].clientY
        );

    },
    {
        passive: true
    }
);


/* ==============================
   CREAR ELEMENTOS
============================== */

crearEstrellas();

crearLuces();

crearLuciernagas();

crearRayos();

crearPetalos();

crearTulipanes();


/* ==============================
   CARGA
============================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            cargando.classList.add(
                "oculto"
            );

        }, 900);

    }
);