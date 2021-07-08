
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

