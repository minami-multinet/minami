alert('連携できました');
console.log("ログの書き出し");

function calcAge(year, month, day) {
        var birthdate = year * 10000 + month * 100 + day;
        var today = new Date();
        var targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        return (Math.floor((targetdate - birthdate) / 10000));
}

function main(){
alert('main()関数が実行されました');

    // 生年月日を変数に格納
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
   // 生年月日から現在の年齢を計算
    year = Number(year);
    month = Number(month);
    day = Number(day);
    age = calcAge(year, month, day);
    // 結果表示
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    alert('あなたの年齢は' + age + '歳です');
}