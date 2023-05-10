const weapons = [
    'M1911',
    'MP40',
    'Ray Gun',
    'Galil',
    'HK21',
    'Crossbow',
    'AK-74u',
    'Thundergun',
    'Python',
    'RPK',
    'Scavenger',
    "Winter's Howl",
    'G11',
    'Commando',
    'Ballistic Knife',
    'L96A1',
    'HS10',
    'China Lake',
    'Sickle',
    'Matryoshka Dolls'
];
  
const mysteryBox = document.getElementById('mystery-box');
const interactBtn = document.getElementById('interact-btn');
const spinSound = document.getElementById('spin-sound');
  
  
let isBoxAnimating = false;
let weaponIndex;
  
interactBtn.addEventListener('click', interactWithBox);
  
function interactWithBox() {
    if (!isBoxAnimating) {
      isBoxAnimating = true;
      weaponIndex = Math.floor(Math.random() * weapons.length);
  
      mysteryBox.classList.add('shake-animation');
      playSound(spinSound);
      setTimeout(revealWeapon, 2000);
    }
}
  
function revealWeapon() {
    mysteryBox.classList.remove('shake-animation');
    mysteryBox.style.backgroundImage = `url(images/${weapons[weaponIndex]}.png)`;
    mysteryBox.classList.add('rotate-animation');
  
    setTimeout(() => {
        isBoxAnimating = false;
        mysteryBox.style.backgroundImage = '';
        mysteryBox.classList.remove('rotate-animation');
    }, 3000);
}
  
function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}