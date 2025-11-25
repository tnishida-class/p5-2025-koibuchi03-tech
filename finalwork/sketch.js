// 最終課題を制作しよう

function setup() {
  createCanvas(600, 400); 
  noStroke(); 
  rectMode(CENTER); // ★追加：四角形の中心を座標に合わせる設定
}

function draw() {
  background(200); 

  // --- 繰り返し処理 ---
  for (let x = 50; x < width; x += 80) {
    for (let y = 50; y < height; y += 80) {
      drawDot(x, y); 
    }
  }
}

// --- 自作関数の定義 ---
function drawDot(x, y) {
  let d = dist(mouseX, mouseY, x, y);

  // ★変更点：条件分岐で「形」も変えるようにした
  if (d < 40) {
    // マウスに近いとき
    fill(255, 100, 100); // 薄い赤にする
    rect(x, y, 60, 60);  // ★丸ではなく「四角形」を描く
  } else {
    // 遠いとき
    fill(255);           // 白にする
    ellipse(x, y, 60, 60); // 通常通り「円」を描く
  }
}