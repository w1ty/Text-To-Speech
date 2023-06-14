const tts = document.querySelector("textarea");
 const btn = document.querySelector("button");
 const languageSelect = document.querySelector("#language");
 let synth = speechSynthesis,
   isSpeaking = true;
 
 function tTs(text) {
   let speak = new SpeechSynthesisUtterance(text);
   speak.lang = languageSelect.value;
   console.log(speak);
   synth.speak(speak);
 }
 
 btn.addEventListener('click', e => {
   e.preventDefault();
   if (tts.value != "") {
     tTs(tts.value);
   }
 });
 speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
  console.log(voices);
};
