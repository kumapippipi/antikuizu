const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
const explanation = document.getElementById('explanation');


const correctClass = 'correct-choice';
const incorrectClass = 'incorrect-choice';

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        switch (choice.id) {
            case 'choice-1':
                choice.classList.add(correctClass);
                result.textContent = '〇';

                break;
            case 'choice-2':
                choice.classList.add(incorrectClass);
                result.textContent = '✘';

                break;
            case 'choice-3':
                choice.classList.add(incorrectClass);
                result.textContent = '✘';

                break;
            case 'choice-4':
                choice.classList.add(incorrectClass);
                result.textContent = '✘';

                break;
            default:
                // choice.idがどのcaseにも該当しない場合の処理
                break;
        }
        choices.forEach((c) => {
            if (c.id !== choice.id) {
                c.classList.add(incorrectClass);
            }
        });
    });
});


