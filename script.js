let result_show = false;

function dice() {
  return Math.random() * 100;
}
function color() {
  return Math.random() * 100;
}

function uranai() {
  if (result_show === false) {
    let message_result = document.getElementById("message_result");
    let dice_result = dice();
    let color_result = color();
    let first_message;
    let luck;
    let luck_color;

    if (dice_result < 15) {
      first_message = "おめでとう！"
      luck = "大吉";
    }
    else if (dice_result < 35) {
      first_message = "";
      luck = "中吉";
    }
    else if (dice_result < 50) {
      first_message = "";
      luck = "小吉";
    }
    else if (dice_result < 85) {
      first_message = "";
      luck = "末吉";
    }
    else {
      first_message = "ごめんなさい…"
      luck = "凶";
    }

    let text_color;
    if (color_result < 10) {
      luck_color = "赤";
      text_color = "red";
    }
    else if (color_result < 20) {
      luck_color = "ピンク";
      text_color = "pink";
    }
    else if (color_result < 30) {
      luck_color = "オレンジ";
      text_color = "orange";
    }
    else if (color_result < 40) {
      luck_color = "黄色";
      text_color = "yellow";
    }
    else if (color_result < 50) {
      luck_color = "緑";
      text_color = "green";
    }
    else if (color_result < 60) {
      luck_color = "水色";
      text_color = "sky";
    }
    else if (color_result < 70) {
      luck_color = "青";
      text_color = "blue";
    }
    else if (color_result < 80) {
      luck_color = "紫";
      text_color = "purple";
    }
    else if (color_result < 90) {
      luck_color = "黒";
      text_color = "black";
    }
    else {
      luck_color = "白";
      text_color = "white";
    }
    //.insertAdjacentHTMLでelementに追加することができる
    //基礎文法：element.insertAdjacentHTML('position', '追加したいテキスト');
    // message_tag.insertAdjacentHTML('beforeend', `あなたの結果は ${result} です。`);

    message_result.innerHTML = first_message + "あなたの運勢は" + luck + "です。今日のラッキーカラーは" + luck_color + "です。";

    //2回以上クリックできないようにする制御
    result_show = true;
  }
}

//リロード
let reload = document.getElementById('reload');
reload.addEventListener('click', function () {
  window.location.reload();
});