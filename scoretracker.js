
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

function calcP1score() {
    let a = +document.getElementById("round1Player1Score").value;
    let b = +document.getElementById("round2Player1Score").value;
    let c = +document.getElementById("round3Player1Score").value;
    let d = +document.getElementById("puddingP1Score").value;
    const P1score = a + b + c + d;
    document.querySelector("#p1total").innerHTML = P1score;
}

function calcP2score() {
    let a = +document.getElementById("round1Player2Score").value;
    let b = +document.getElementById("round2Player2Score").value;
    let c = +document.getElementById("round3Player2Score").value;
    let d = +document.getElementById("puddingP2Score").value;
    const P2score = a + b + c + d;
    document.querySelector("#p2total").innerHTML = P2score;
}

function calcP3score() {
    let a = +document.getElementById("round1Player3Score").value;
    let b = +document.getElementById("round2Player3Score").value;
    let c = +document.getElementById("round3Player3Score").value;
    let d = +document.getElementById("puddingP3Score").value;
    const P3score = a + b + c + d;
    document.querySelector("#p3total").innerHTML = P3score;
}

function calcP4score() {
    let a = +document.getElementById("round1Player4Score").value;
    let b = +document.getElementById("round2Player4Score").value;
    let c = +document.getElementById("round3Player4Score").value;
    let d = +document.getElementById("puddingP4Score").value;
    const P4score = a + b + c + d;
    document.querySelector("#p4total").innerHTML = P4score;
}

function calcP5score() {
    let a = +document.getElementById("round1Player5Score").value;
    let b = +document.getElementById("round2Player5Score").value;
    let c = +document.getElementById("round3Player5Score").value;
    let d = +document.getElementById("puddingP5Score").value;
    const P5score = a + b + c + d;
    document.querySelector("#p5total").innerHTML = P5score;
}

function ResetScores() {
    document.getElementById("scorecard1").reset();
    document.querySelector("#p1total").innerHTML = "Total";
    document.getElementById("scorecard2").reset();
    document.querySelector("#p2total").innerHTML = "Total";
    document.getElementById("scorecard3").reset();
    document.querySelector("#p3total").innerHTML = "Total";
    document.getElementById("scorecard4").reset();
    document.querySelector("#p4total").innerHTML = "Total";
    document.getElementById("scorecard5").reset();
    document.querySelector("#p5total").innerHTML = "Total";
}