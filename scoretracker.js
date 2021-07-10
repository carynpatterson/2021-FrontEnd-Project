
function submitplayercount() {
   
    let player_count = document.getElementById("player_count").value;
    for (let i = 1; i < 6; i++) {
        if ( i > player_count ) {
        document.getElementById("Player" + i ).style.display="none";
        } else  {
        document.getElementById("Player" + i ).style.display="block";
        }
      }
}

function calcscores() {
    let a = +document.getElementById("round1Player1Score").value;
    let b = +document.getElementById("round2Player1Score").value;
    let c = +document.getElementById("round3Player1Score").value;
    let d = +document.getElementById("puddingP1Score").value;
    alert( a + b + c + d);
}