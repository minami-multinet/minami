alert('�A�g�ł��܂���');
console.log("���O�̏����o��");

function calcAge(year, month, day) {
        var birthdate = year * 10000 + month * 100 + day;
        var today = new Date();
        var targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        return (Math.floor((targetdate - birthdate) / 10000));
}

function main(){
alert('main()�֐������s����܂���');

    // ���N������ϐ��Ɋi�[
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
   // ���N�������猻�݂̔N����v�Z
    year = Number(year);
    month = Number(month);
    day = Number(day);
    age = calcAge(year, month, day);
    // ���ʕ\��
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    alert('���Ȃ��̔N���' + age + '�΂ł�');
}