const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
const explanation = document.getElementById('explanation');


const correctClass = 'correct-choice';
const incorrectClass = 'incorrect-choice';

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        switch (choice.id) {
            case 'choice-1':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img1 = document.createElement('img');
                img1.src = "./mappuA.png";
                explanation.appendChild(img1);
                const p1 = document.createElement('p');
                p1.textContent = '↑  地点A:ロンリー・ラボ、ブルータル・バスティオン、スラッピー・ショアからパーティーが安置内に入ろうとするとき大体最短で行こうとするのでA付近で接敵し、戦闘になることが多い!';
                explanation.appendChild(p1);
                break;
            case 'choice-2':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img2 = document.createElement('img');
                img2.src = './mappuB.png';
                explanation.appendChild(img2);
                const p2 = document.createElement('p');
                p2.textContent = '↑  地点B:安置外に降りたパーティーは安置内に入ろうとするため安置の端に集まることが多いので円の中心は人が集まりにくい！しかし、終盤になると中心に人が少ないことからヘイトを買いやすいため気を付ける！';
                explanation.appendChild(p2);
                break;
            case 'choice-3':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img3 = document.createElement('img');
                img3.src = './mappuC.png';
                explanation.appendChild(img3);
                const p3 = document.createElement('p');
                p3.textContent = '↑  地点C:ブルータル・バスティオンに２パーティー以上降りていて接敵すること恐れてそれてきたパーティーは少し左の方をあさりに行くと考えた時に安置に入るとなるとアンヴィル・スクエアのパーティーとかぶってしまって戦闘になることが多い';
                explanation.appendChild(p3);
                break;
            case 'choice-4':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img4 = document.createElement('img');
                img4.src = './mappuD.png';
                explanation.appendChild(img4);
                const p4 = document.createElement('p');
                p4.textContent = '↑  地点D:近くにフォールティー・スプリッツがあるが安置内に入ってるのでそこのパーティーは移動することなく次の安置を待つことが多い。よってD地点に来る可能性は低い';
                explanation.appendChild(p4);
                break;
            case 'choice-5':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img5 = document.createElement('img');
                img5.src = './mappuE.png';
                explanation.appendChild(img5);
                const p5 = document.createElement('p');
                p5.textContent = '↑  地点E:周辺にはフレンジーフィールドだけしか大きな町はなくほかの大きな町から移動してくるということは考えずらい';
                explanation.appendChild(p5);
                break;
            case 'choice-6':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img6 = document.createElement('img');
                img6.src = './mappuF.png';
                explanation.appendChild(img6);
                const p6 = document.createElement('p');
                p6.textContent = '↑  地点F:グレイクウォーターベイとシタデルから安置内に入ることを考えると最短距離で入ろうとするパーティーが多くF地点で戦闘になることが多い!';
                explanation.appendChild(p6);
                break;
            case 'choice-7':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img7 = document.createElement('img');
                img7.src = './mappuG.png';
                explanation.appendChild(img7);
                const p7 = document.createElement('p');
                p7.textContent = '↑  地点G:D地点からG地点へ行こうと考えるときに川、海があるのでどうしても行きづらい!そしてフレンジー・フィールドは安置内に入ってるのでとどまるパーティーが多い!よってG地点は安全!';
                explanation.appendChild(p7);
                break;
            case 'choice-8':
                choice.classList.add(incorrectClass);
                result.textContent = '不正解！理由は👇';
                const img8 = document.createElement('img');
                img8.src = './mappuH.png';
                explanation.appendChild(img8);
                const p8 = document.createElement('p');
                p8.textContent = '↑  地点H:スラッピー・ショアに2パーティー以上降りていて接敵することを恐れてそれたパーティーを考えるとフォールティー・スプリッツよりの家をあさる事が多い!そしてそこから安置内に入ろうとなると大体最短距離で入ろうとするためフォールティー・スプリッツの敵と戦闘になることが多い!';
                explanation.appendChild(p8);
                break;
            case 'choice-9':
                choice.classList.add(correctClass);
                result.textContent = '正解！理由は👇';
                const img9 = document.createElement('img');
                img9.src = './mappuI.png';
                explanation.appendChild(img9);
                const p9 = document.createElement('p');
                p9.textContent = '↑  地点I:シャッタードスラブスから安置に最短距離で入ろうとするとI地点になるがシャッタードより上の大きな町から入ってくるパーティーはF地点に集まるのでIは安全!';
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


