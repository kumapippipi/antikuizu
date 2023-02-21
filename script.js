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
                result.textContent = '正解！理由は👇';
                const img1 = document.createElement('img');
                img1.src = './antiA.png';
                explanation.appendChild(img1);
                const p1 = document.createElement('p');
                p1.textContent = '↑  地点Aの説明をここに記述します。';
                explanation.appendChild(p1);
                break;
            case 'choice-2':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img2 = document.createElement('img');
                img2.src = './antiB.png';
                explanation.appendChild(img2);
                const p2 = document.createElement('p');
                p2.textContent = '↑  地点Bの説明をここに記述します。';
                explanation.appendChild(p2);
                break;
            case 'choice-3':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img3 = document.createElement('img');
                img3.src = './antiC.png';
                explanation.appendChild(img3);
                const p3 = document.createElement('p');
                p3.textContent = '↑  地点Cの説明をここに記述します。';
                explanation.appendChild(p3);
                break;
            case 'choice-4':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img4 = document.createElement('img');
                img4.src = './antiD.png';
                explanation.appendChild(img4);
                const p4 = document.createElement('p');
                p4.textContent = '↑  地点Dの説明をここに記述します。';
                explanation.appendChild(p4);
                break;
            case 'choice-5':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img5 = document.createElement('img');
                img5.src = './antiE.png';
                explanation.appendChild(img5);
                const p5 = document.createElement('p');
                p5.textContent = '↑  地点Eの説明をここに記述します。';
                explanation.appendChild(p5);
                break;
            case 'choice-6':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img6 = document.createElement('img');
                img6.src = './antiF.png';
                explanation.appendChild(img6);
                const p6 = document.createElement('p');
                p6.textContent = '↑  地点Fの説明をここに記述';
                explanation.appendChild(p6);
                break;
            case 'choice-7':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img7 = document.createElement('img');
                img7.src = './antiG.png';
                explanation.appendChild(img7);
                const p7 = document.createElement('p');
                p7.textContent = '↑  地点Gの説明をここに記述します。';
                explanation.appendChild(p7);
                break;
            case 'choice-8':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img8 = document.createElement('img');
                img8.src = './antiH.png';
                explanation.appendChild(img8);
                const p8 = document.createElement('p');
                p8.textContent = '↑  地点Hの説明をここに記述します。';
                explanation.appendChild(p8);
                break;
            case 'choice-9':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img9 = document.createElement('img');
                img9.src = './antiI.png';
                explanation.appendChild(img9);
                const p9 = document.createElement('p');
                p9.textContent = '↑  地点Iの説明をここに記述します。';
                explanation.appendChild(p9);
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
