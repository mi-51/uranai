// window.onload = function () {
//   // TODO: write code
//   // console.log("Hello, runstant!");
// };

let result_show = false;

function uranai(result) {
  if (result_show === false) {
    
    let message_tag = document.getElementById("message");

    //.insertAdjacentHTMLでelementに追加することができる
    //基礎文法：element.insertAdjacentHTML('position', '追加したいテキスト');
    message_tag.insertAdjacentHTML('beforeend', `あなたの結果は ${result} です。`);

    //2回以上クリックできないようにする制御
    result_show = true;
  }
}

//リロード
  let reload =document.getElementById('reload');
  reload.addEventListener('click',function(){
    window.location.reload();
  });