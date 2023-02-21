const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (choice.id === 'choice-1' || choice.id === 'choice-2' || choice.id === 'choice-3' || choice.id === 'choice-5' || choice.id === 'choice-6' || choice.id === 'choice-7') {
            choice.classList.add('correct');
            result.textContent = '正解！';
            '理由は'
        } else {
            choice.classList.add('incorrect');
            result.textContent = '不正解！';
        }
        choices.forEach((c) => {
            if (c.id !== choice.id) {
                c.classList.add('incorrect');
            }
        });
    });
});