document.addEventListener('DOMContentLoaded', () => {
    const checkAnswerButton = document.querySelector('.check-answer-1');
    const closeButton = document.querySelector('.close-button-1');
    const answerContainer = document.querySelector('.answer-container-1');

    // ページ読み込み時に回答コンテナを非表示にする
    answerContainer.style.display = 'none';

    // 回答を見るボタンをクリックしたときの処理
    checkAnswerButton.addEventListener('click', () => {
        answerContainer.style.display = 'flex';
    });

    // 閉じるボタンをクリックしたときの処理
    closeButton.addEventListener('click', () => {
        answerContainer.style.display = 'none';
    });
});
