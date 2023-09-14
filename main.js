var name = prompt ('Назовите своё имя');
console.log('Мне зовут ' + name);

var data = prompt ('Сколько вам лет');
console.log('Мне ' + data + ' года');

var prim1 = prompt ('решите пример  10 + 25 = ?');
console.log('Пример:1  10 + 25 = 35 ' + 'ваш ответ ' + prim1);

var prim2 = prompt ('решите пример  50 - 25 = ?');
console.log('Пример:2  50 - 25 = 25' + 'ваш ответ' + prim2);

var prim3 = prompt ('решите пример  100 \ 25 = ?');
console.log('Пример:3  100 \ 25 = 4 ' + 'ваш ответ ' + prim3);

var prim4 = prompt ('решите пример  100 % 25 = ?');
console.log('Пример:4  100 % 25 = 0 ' + 'ваш ответ ' + prim4);


var end = confirm ('Войдите в консоль для просмотра ');
console.log(end);





var chi1 = prompt ('Введите первое чилсо');

var chi2 = prompt ('Введите второе число');

var chi3 = prompt ('Введите третье число');

var otv  = chi1 + chi2 + chi3  ;

var otv2 = otv / 3;


var res = alert ('средне арифметическое число:' + otv2);
console.log(res);