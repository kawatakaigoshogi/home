document.addEventListener('DOMContentLoaded', () => {
    // 全ての「回答を見る」ボタンを取得
    const answerButtons = document.querySelectorAll('.check-answer');
    // 回答ウィンドウと閉じるボタンを取得
    const answerWindow = document.getElementById('answerWindow');
    const closeButton = document.querySelector('.close-button');
    const answerDetails = document.getElementById('answerDetails');

    // 回答ボタンごとにイベントリスナーを設定
    answerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // クリックされたボタンの親要素のコンテナを取得
            const container = event.target.closest('.container');
            // コンテナ内の詰将棋画像を取得
            const imageElement = container.querySelector('img');
            // 画像のソースURLからファイル名を取得
            const imageSrc = imageElement.src;
            const fileName = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);

            // ファイル名から回答の画像と手順を生成
            const solutionImageSrc = `../../image/詰将棋/解答/${fileName}`;
            const solutionText = getSolutionText(fileName); // 適切な回答手順を返す関数

            // 回答内容をウィンドウに挿入
            answerDetails.innerHTML = `
                <img src="${solutionImageSrc}" alt="解答画像">
                <p>${solutionText}</p>
            `;

            // 回答ウィンドウを表示
            answerWindow.style.display = 'flex';
        });
    });

    // 閉じるボタンにイベントリスナーを設定
    closeButton.addEventListener('click', () => {
        answerWindow.style.display = 'none';
        answerDetails.innerHTML = ''; // 内容をクリア
    });

    // ウィンドウ外をクリックしても閉じるように設定
    answerWindow.addEventListener('click', (event) => {
        if (event.target === answerWindow) {
            answerWindow.style.display = 'none';
            answerDetails.innerHTML = ''; // 内容をクリア
        }
    });

    /**
     * ファイル名に基づいて詰将棋の手順を返す関数
     * ユーザーの詰将棋データに合わせて内容をカスタマイズしてください。
     */
    function getSolutionText(fileName) {
        switch (fileName) {
            case '7手詰め―1.png':
                return '手順：<br>1. ☗3一飛成 ☖6二玉<br>2. ☗7一銀打 ☖同金<br>3. ☗4二龍 ☖6一玉<br>4. ☗5二龍';
            case '7手詰めー2.png':
                return '手順：<br>1. ☗4二角成 ☖同玉<br>2. ☗4一金 ☖同玉<br>3. ☗4二飛 ☖同玉<br>4. ☗3二金 ☖同玉<br>5. ☗3一角';
            case '9手詰めー1.png':
                return '手順：<br>1. ☗3四飛成 ☖同玉<br>2. ☗2四角成 ☖同玉<br>3. ☗3四金 ☖同玉<br>4. ☗2四銀 ☖同玉<br>5. ☗3三金';
            case '9手詰めー2.png':
                return '手順：<br>1. ☗6一金 ☖同玉<br>2. ☗6二飛成 ☖同玉<br>3. ☗6三金 ☖同玉<br>4. ☗6四銀 ☖同玉<br>5. ☗6五角';
            default:
                return '手順は準備中です。';
        }
    }
});