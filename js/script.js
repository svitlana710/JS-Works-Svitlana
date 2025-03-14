'use strict';

const htmlNode = document.documentElement;

function changeAttributeLang(params){
  htmlNode.setAttribute('lang','ukr');
}

const btnChangeLang = document.querySelector('#btn_lang');
const bodyBlock = document.querySelector('body');

const textBlock = document.querySelector('.text');
const textBlocks = document.querySelectorAll('.text');
const textBlocks2 = document.getElementsByClassName('text');

/*--------------------------- MINIMUM ---------------------------*/

function playListFunction(){
  const playListBLock = document.querySelector('#songs');
  
  // Перевіряємо, чи вже існує ul
  if (!playListBLock.querySelector('ul')) {
    const playListUl = document.createElement('ul');
    playListBLock.appendChild(playListUl);

    let playList = [
      { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
      { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
      { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
      { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
      { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
      { author: "AC/DC", song: "BACK IN BLACK" },
      { author: "QUEEN", song: "WE WILL ROCK YOU" },
      { author: "METALLICA", song: "ENTER SANDMAN" }
    ];

    playList.forEach(song => {
      const playListLi = document.createElement('li');
      playListLi.innerText = `Автор пісні: ${song.author}\nПісня: ${song.song}`;
      playListUl.appendChild(playListLi);
    });
  }
}


/*--------------------------- MEDIUM ---------------------------*/

function openModalWindow(){
  const modalWindow = document.querySelector('#modal');
  modalWindow.classList.add('show');
  modalWindow.classList.remove('close');
}

function closeModalWindow(){
  const modalWindow = document.querySelector('#modal');
  modalWindow.classList.add('close');
  modalWindow.classList.remove('show');
}



/*--------------------------- MAXIMUM ---------------------------*/
        let currentLight = 0;
        function changeLight() {
            const lights = ['red', 'yellow', 'green'];
            document.getElementById(lights[currentLight]).classList.remove(lights[currentLight]);

            currentLight = (currentLight + 1) % lights.length;
            document.getElementById(lights[currentLight]).classList.add(lights[currentLight]);
        }