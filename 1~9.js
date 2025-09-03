document.addEventListener('DOMContentLoaded', () => {
    // 「回答を見る」ボタン(h2)を全て取得
    const answerButtons = document.querySelectorAll('.check-answer');
    // モーダルウィンドウや閉じるボタン、詳細欄を取得
    const answerWindow = document.getElementById('answerWindow');
    const closeButton = document.querySelector('.close-button');
    const answerDetails = document.getElementById('answerDetails');

    // ボタンごとにイベントリスナー
    answerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // クリックしたh2の親.containerを取得
            const container = event.target.closest('.container');
            // container内のimg要素を取得
            const imageElement = container.querySelector('img');
            // ファイル名だけ取得
            const imageSrc = imageElement.getAttribute('src');
            const fileName = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);

            // ファイル名から手順を取得
            const solutionText = getSolutionText(fileName);

            // 詳細ウィンドウに内容をセット
            answerDetails.innerHTML = `
                <img src="${fileName}" alt="解答画像">
                <p>${solutionText}</p>
            `;

            // モーダルを表示
            answerWindow.style.display = 'flex';
        });
    });

    // 閉じるボタン
    closeButton.addEventListener('click', () => {
        answerWindow.style.display = 'none';
        answerDetails.innerHTML = '';
    });

    // ウィンドウ外クリックでも閉じる
    answerWindow.addEventListener('click', (event) => {
        if (event.target === answerWindow) {
            answerWindow.style.display = 'none';
            answerDetails.innerHTML = '';
        }
    });

    // ファイル名から手順
    function getSolutionText(fileName) {
        switch (fileName) {
            case '7-1.png':
                return '手順：<br>1. ☗3一飛成 ☖6二玉<br>2. ☗7一銀打 ☖同金<br>3. ☗4二龍 ☖6一玉<br>4. ☗5二龍';
            case '7-2.png':
                return '手順：<br>1. ☗4二角成 ☖同玉<br>2. ☗4一金 ☖同玉<br>3. ☗4二飛 ☖同玉<br>4. ☗3二金 ☖同玉<br>5. ☗3一角';
            case '9-1.png':
                return '手順：<br>1. ☗3四飛成 ☖同玉<br>2. ☗2四角成 ☖同玉<br>3. ☗3四金 ☖同玉<br>4. ☗2四銀 ☖同玉<br>5. ☗3三金';
            case '9-2.png':
                return '手順：<br>1. ☗6一金 ☖同玉<br>2. ☗6二飛成 ☖同玉<br>3. ☗6三金 ☖同玉<br>4. ☗6四銀 ☖同玉<br>5. ☗6五角';
            default:
                return '手順は準備中です。';
        }
    }
});
