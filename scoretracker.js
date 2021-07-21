
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
    let e = +document.getElementById("round1Player2Score").value;
    let f = +document.getElementById("round2Player2Score").value;
    let g = +document.getElementById("round3Player2Score").value;
    let h = +document.getElementById("puddingP2Score").value;
    const P2score = e + f + g + h;
    document.querySelector("#p2total").innerHTML = P2score;
}

function calcP3score() {
    let j = +document.getElementById("round1Player3Score").value;
    let k = +document.getElementById("round2Player3Score").value;
    let l = +document.getElementById("round3Player3Score").value;
    let m = +document.getElementById("puddingP3Score").value;
    const P3score = j + k + l + m;
    document.querySelector("#p3total").innerHTML = P3score;
}

function calcP4score() {
    let n = +document.getElementById("round1Player4Score").value;
    let o = +document.getElementById("round2Player4Score").value;
    let p = +document.getElementById("round3Player4Score").value;
    let q = +document.getElementById("puddingP4Score").value;
    const P4score = n + o + p + q;
    document.querySelector("#p4total").innerHTML = P4score;
}

function calcP5score() {
    let r = +document.getElementById("round1Player5Score").value;
    let s = +document.getElementById("round2Player5Score").value;
    let t = +document.getElementById("round3Player5Score").value;
    let u = +document.getElementById("puddingP5Score").value;
    const P5score = r + s + t + u;
    document.querySelector("#p5total").innerHTML = P5score;
}

function ResetScores() {
    document.getElementById("round1Player1Score").value = "";
    document.getElementById("round2Player1Score").value = "";
    document.getElementById("round3Player1Score").value = "";
    document.getElementById("puddingP1Score").value = "";
    document.querySelector("#p1total").innerHTML = "Total";
}

