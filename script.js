const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
const explanation = document.getElementById('explanation');

const correctClass = 'correct-choice';
const incorrectClass = 'incorrect-choice';

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
         while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        while (explanation.firstChild) {
            explanation.removeChild(explanation.firstChild);
        }
        switch (choice.id) {
            case 'choice-1':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img1 = document.createElement('img');
                img1.src = './antiA.png';
                explanation.appendChild(img1);
                const p1 = document.createElement('p');
                p1.textContent = '↑  地点A：ブルータルとロンリー・ラボに少なくとも１パーティーずつ降りてるとするとこの安置では大体の人が安置に最短距離の直線で行き、安置に入ったところで接敵し戦闘になることが多い！';
                explanation.appendChild(p1);
                break;
            case 'choice-2':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img2 = document.createElement('img');
                img2.src = './antiB.png';
                explanation.appendChild(img2);
                const p2 = document.createElement('p');
                p2.textContent = '↑  地点B：フレンジーフィールド、フォールティースピリッツに少なくとも１パーティーずつ降りてるとするとこの安置では大体の人が安置に最短距離の直線で行き、安置に入ったところで接敵し戦闘になることが多い！';
                explanation.appendChild(p2);
                break;
            case 'choice-3':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img3 = document.createElement('img');
                img3.src = './antiC.png';
                explanation.appendChild(img3);
                const p3 = document.createElement('p');
                p3.textContent = '↑  地点C：フレンジーフィールド、シャッタードスラブスに少なくとも１パーティーずつ降りてるとするとこの安置では大体の人が安置に最短距離の直線で行き、安置に入ったところで接敵し戦闘になることが多い！';
                explanation.appendChild(p3);
                break;
            case 'choice-4':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img4 = document.createElement('img');
                img4.src = './antiD.png';
                explanation.appendChild(img4);
                const p4 = document.createElement('p');
                p4.textContent = '↑  地点D：周辺に大きな町がブレイクウォーターベイの１つしかなく仮に２パーティーそこに降りていたとしても戦闘が起きてD地点に来るのは１パーティーとなる。また１パーティーが引いた時そのパーティーははＩ地点付近で安置に入ることが多い';
                explanation.appendChild(p4);
                break;
            case 'choice-5':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img5 = document.createElement('img');
                img5.src = './antiE.png';
                explanation.appendChild(img5);
                const p5 = document.createElement('p');
                p5.textContent = '↑  地点E：シタデルが安置内に入っていることと、周辺に大きな町（ブレイクウォーターベイ）があることからシタデルのパーティーはとどまりブレイクウォーターベイのパーティーは安置内に入りＥ地点で接敵することが多い！';
                explanation.appendChild(p5);
                break;
            case 'choice-6':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img6 = document.createElement('img');
                img6.src = './antiF.png';
                explanation.appendChild(img6);
                const p6 = document.createElement('p');
                p6.textContent = '↑  地点F：スラッピー・ショア、フォールティー・スピリッツに少なくとも１パーティーずつ降りてるとするとこの安置では大体の人が安置に最短距離の直線で行き、安置に入ったところで接敵し戦闘になることが多い！';
                explanation.appendChild(p6);
                break;
            case 'choice-7':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img7 = document.createElement('img');
                img7.src = './antiG.png';
                explanation.appendChild(img7);
                const p7 = document.createElement('p');
                p7.textContent = '↑  地点G：ブルータル、スラッピー・ショアに少なくとも１パーティーずつ降りてるとするとこの安置では大体の人が安置に最短距離の直線で行き、安置に入ったところで接敵し戦闘になることが多い！';
                explanation.appendChild(p7);
                break;
            case 'choice-8':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img8 = document.createElement('img');
                img8.src = './antiH.png';
                explanation.appendChild(img8);
                const p8 = document.createElement('p');
                p8.textContent = '↑  地点H：安置外に降りたパーティーは安置内に入ろうとするため安置の端に集まることが多いので円の中心は人が集まりにくい！しかし、終盤になると中心に人が少ないことからヘイトを買いやすいため気を付ける！';
                explanation.appendChild(p8);
                break;
            case 'choice-9':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img9 = document.createElement('img');
                img9.src = './antiI.png';
                explanation.appendChild(img9);
                const p9 = document.createElement('p');
                p9.textContent = '↑  地点I：周辺に大きな町（ブレイクウォーターベイ）があるが大抵のパーティーは円に最短で入ろうとするためI地点には集まりにくい！';
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
