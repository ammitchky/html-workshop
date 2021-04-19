/**
 * Rainbow Piano
 *
 * Use HTML, CSS and JS to create a simple piano with 7 notes. Each key should be
 * a different color and all keys should have a hover effect. Clickin ga key on the piano
 * should play a note.
 */
function playNote(e){
    var note = document.querySelector(`#${e}Control`);
    note.currentTime=0;
    note.play();
}