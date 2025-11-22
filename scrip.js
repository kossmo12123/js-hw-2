// Задание 1
const btn1ru = document.getElementById('btn1ru');
        const screenBox = document.getElementById('screenBox');

        btn1ru.addEventListener('click', function() {
            
            screenBox.textContent = 'Привет, Мир';
            
            
            console.log('Hello from RU');
        });

// Задание 2       
const btn2 = document.getElementById('btn2');
const out1 = document.getElementById('out1');
btn2.addEventListener('click', function() {
const name = prompt('Введите ваше имя:');
            
if (name === null || name.trim() === '') {
    out1.textContent = 'Имя не указано';
    } else {
        out1.textContent = `Привет, ${name}!`;
    }
});

// Задание 3
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
    screenBox.textContent = '';
    out1.textContent = '';
    document.getElementById('out2').textContent = '';
    document.getElementById('out3').textContent = '';
    document.getElementById('out4').textContent = '';
    document.getElementById('out5').textContent = '';
    document.getElementById('evenOut').textContent = '';
            
    console.log('Все блоки очищены');
});

function fillOutputs() {
    screenBox.textContent = 'Текст в screenBox';
    out1.textContent = 'Текст в out1';
    document.getElementById('out2').textContent = 'Текст в out2';
    document.getElementById('out3').textContent = 'Текст в out3';
    document.getElementById('out4').textContent = 'Текст в out4';
    document.getElementById('out5').textContent = 'Текст в out5';
    document.getElementById('evenOut').textContent = 'Текст в evenOut';
}