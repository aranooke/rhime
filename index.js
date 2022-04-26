// Цикл рекурсией
function loop(n,iterator) 
{
    
    if(iterator < n) {
        iterator++;
        console.log(iterator);
        loop(n,iterator); // Цикл от 1 до 5 - РЕКУРСИЕЙ
    }
    
}
// console.log(loop(25,12));
// ОТ А ДО Б Числа 2 Рекурсия
/*
function secondLoop(a,b) 
{
    if(a >= b) 
    {
        console.log(a);
        a--;
        secondLoop(a,b);
    }
}
secondLoop(13,8);
*/ 

function square(n) 
{
    if(n == 2)
    {
        console.log("Yes");
    }
    else if(n % 2 == 0)
    {
        square(n / 2);
    }
    
    else {
        console.log("NO")
    }
}
// square(128);
// сумма цифр числа
let n = 179;
n = n.toString();

/*
let sum = (n,summa,iterator)=> {

    if(iterator < n.length) 
    {
        summa += parseInt(n.charAt(iterator));
        console.log(summa);
        iterator++;
        return sum(n-1);
        
    }

    console.info("Работаем");

}
sum(n,"",0); */

// Палиндром рекурсией
let str = "rada";
function palindrom(n,iterator,len,sum,secIt)
{

    if(iterator < len)
    {

        console.log(n[iterator]);
        iterator++;
        palindrom(n,iterator,len);
    }
    else if(iterator > 0) {
        secIt = len;
        secIt = secIt - 1;
        console.log(n[iterator]);
        palindrom(n,secIt,len);
        

    }


}

// Поиск рифмы 

function rifma()
{
    let mas = [];
    let sequence = prompt("Введите текст для поиска рифмы");        // "зеленый том ученый кругом направо заводит налево говорит";
    let slovoRifm = prompt("Введите окончание слова");
    mas = sequence.split(/ |;|\r|\n|,/);
    let rifmi = [];
    for(let i = 0; i < mas.length;i++) 
    {
        
        for(let j = mas[i].length -1;j >= 0;j--)
        {
            if(mas[i].includes(slovoRifm)) {
                rifmi.push(mas[i]);
                break;
            }
            
        }
        
    }
    console.log(mas);
    console.log(rifmi);
}
rifma();
// palindrom(str,0,str.length,"",0);