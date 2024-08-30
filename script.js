
const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')
const buttonNext = document.querySelector('#next')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}


const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const mainMessageElement = document.querySelector('#mainMessage')
const originalMessage = mainMessageElement.textContent;

btnCloseElement.disabled = true
buttonNext.disabled=true


btnOpenElement.addEventListener('click', ()=> {

  mainMessageElement.style.display = "flex";
  mainMessageElement.style.justifyContent = "flex-start";
  mainMessageElement.style.alignItems = "flex-start";
  mainMessageElement.style.height ="100hv";

  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  buttonNext.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{

    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})


let mensajeIndex = 0;

btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true
  buttonNext.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'

    mainMessageElement.textContent = originalMessage;
    mensajeIndex = 0;
  },500)
})



let mensajes = [
  "Por otro lado siento que entre nosotros empezó un silencio que poco a poco ha ido llenando el espacio que antes compartíamos. Me pregunto si tú también lo has sentido, ese enfriamiento entre nosotros, y si quizás en algún momento te preguntaste lo mismo que yo. ¿Qué pasó?",
  "Posiblemente mis palabras no tengan mucho sentido ahora, pero no puedo ignorar lo mucho que te estoy extrañando. Extraño tu presencia, pasar tiempo y esa calidez de estar contigo. Si alguna vez te lastime con algo que hice, lo lamento mucho, no tenia esa intención.",
  'No pretendo buscar respuestas inmediatas. Solo quería expresar lo que llevo dentro, y decirte que, a pesar del silencio o el tiempo, valoro todos los momentos compartidos.<br>"Te esperaré hasta donde tú me lo permitas porque en serio quiero que seas tú y nadie más"',
  "De: Mi<br>Para: Tú"
]



buttonNext.addEventListener('click', () => {
  if (mensajeIndex < mensajes.length) {
    mainMessageElement.innerHTML = mensajes[mensajeIndex];


    if (mensajes[mensajeIndex] === "De: Mi<br>Para: Tú") {
      mainMessageElement.style.display = "flex";
      mainMessageElement.style.justifyContent = "center";
      mainMessageElement.style.alignItems = "center";

    }
    else{
      mainMessageElement.style.display = "flex";
      mainMessageElement.style.justifyContent = "flex-start";
      mainMessageElement.style.alignItems = "flex-start";
      mainMessageElement.style.height ="100hv";
    } 
    mensajeIndex++;
  }
});

const audio = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');

const volumePercentage = 20;
audio.volume = volumePercentage / 100;


const startTime = 144;

audio.currentTime = startTime;

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '🔊';
    } else {
        audio.play();
        playPauseBtn.textContent = '🔇';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '🔊';
    isPlaying = false;
});