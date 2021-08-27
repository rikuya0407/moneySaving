document.addEventListener('DOMContentLoaded',function(){
    // 読み込み時テキストアニメーションを展開
    new TextAnimation('.head-word');

    // 1,localStorage.getItemで配列のあたいをとる
    // 2,JSON.parseでobjectとしてあたいを変更
    const underWatch = JSON.parse(localStorage.getItem("money"));

    // 初期の貯金金額
    let money = 0;

    let watchMoney = [];
    // 要素の取得
    const put = document.querySelector('.put-text');
    const out = document.querySelector('.out-text');
    const putBtn = document.querySelector('.put-btn');
    const outBtn = document.querySelector('.out-btn');
    const allMoney = document.querySelector('.all-money');
    const noOut = document.querySelector('.no-out');

    // JSONで値をとってきてあたいがあればそれをいれる
    if(underWatch){
        allMoney.innerHTML = underWatch[0] + '円';
    }

    // 入金ボタンを押したら
    putBtn.addEventListener('click',function(){
        // エラーメッセージを空にする
        noOut.innerHTML = ''
        // 入力した値を足していく
        money = parseInt(put.value) + parseInt(allMoney.innerHTML);
        // JSONに渡す配列の先頭の要素を変える
        watchMoney[0] = money;
        // html内の表示を変更
        allMoney.innerHTML = money + '円';
        put.value = ''
        saveData();
    });

    // 出金ボタンが押されたら
    outBtn.addEventListener('click',function(){
        // もし引き出せるお金がない場合
        if( parseInt(allMoney.innerHTML) < out.value){
            noOut.innerHTML = '出金できるお金がありません'
            out.value = '';
        }else{
            // 引き出せるお金がある場合
            noOut.innerHTML = ''
            money = parseInt(allMoney.innerHTML) - parseInt(out.value);
            watchMoney[0] = money;
            allMoney.innerHTML = money + '円';
            out.value = '';
            saveData();
        }
    })

    // 一つ一つの処理をJSONに保存していく関数
    function saveData(){
        // localStorage.setItem('kye名', Value)
        localStorage.setItem("money", JSON.stringify(watchMoney));
    }

})

