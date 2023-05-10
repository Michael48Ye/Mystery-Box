const weapons = [
    'Ballistic Knife',
    'Ray Gun',
    'Galil',
    'Barrett M82A1',
    'Chicom CQB',
    'DSR 50',
    'Executioner',
    'Python',
    'FAL',
    'Five-seven',
    "Five-seven Dual Wield",
    'HAMR',
    'KAP-40',
    'LSAT',
    'M8A1',
    'RPD',
    'M1216',
    'MTAR',
    'Monkey Bomb'
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