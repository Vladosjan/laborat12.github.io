 // Масив слів для перекладу
   let words = [
    { word: 'Hello', translation: 'Привіт' },
    { word: 'always', translation: 'Завжди' },
    { word: 'Goodbye', translation: 'До побачення' },
    { word: 'Car', translation: 'машина' },
    { word: 'Home', translation: 'Будівля' },
    { word: 'map', translation: 'дорожня карта' },
    { word: 'House', translation: 'Будинок' },
    { word: 'ship', translation: 'корабель' },
    { word: 'Race', translation: 'гонка' },
    { word: 'great', translation: 'добре' }
];

let currentStep = 0;
let correctCount = 0;
let incorrectCount = 0;

// Перемішати слова випадковим чином
words = shuffleArray(words);

// Додати картки до контейнера
words.forEach(function (word, index) {
    $('#cards-container').append('<div class="card" data-index="' + index + '">' + word.word + '</div>');
});

// Натискання на картку
$('.card').click(function () {
    let index = $(this).data('index');
    let translation = prompt('Введіть переклад слова: ' + words[index].word);

    if (translation && translation.toLowerCase() === words[index].translation.toLowerCase()) {
        alert('Правильно!');
        correctCount++;
    } else {
        alert('Невірно. Правильний переклад: ' + words[index].translation);
        incorrectCount++;
    }
    currentStep++;
    updateProgress();
});
    // Перевірити результат
    $('#checkBtn').click(function () {
        let translation = $('#translation').val().trim().toLowerCase();
        let index = currentStep % words.length;
        if (translation === words[index].translation.toLowerCase()) {
            alert('Правильно!');
            correctCount++;
        } else {
            alert('Невірно. Правильний переклад: ' + words[index].translation);
            incorrectCount++;
        }
        currentStep++;
        updateProgress();
    });
    // Показати результат
    $('#showResultBtn').click(function () {
        let totalWords = words.length;
        let accuracy = (correctCount / totalWords) * 100;
        alert('Рівень знань мови: ' + accuracy.toFixed(2) + '%');
    });
    // Оновити прогрес
    function updateProgress() {
        let totalSteps = words.length;
        $('#progress').text('Крок ' + (currentStep % totalSteps + 1) + ' з ' + totalSteps);
        $('#score').text('Вірно: ' + correctCount + ' | Невірно: ' + incorrectCount);
    }
    // Функція для перемішування масиву
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
	
// Обробник події вибору рівня складності
    $('#difficulty').change(function () {
        let selectedDifficulty = $('#difficulty').val();
        $('#selectedDifficulty').text(selectedDifficulty);

        // Застосування стилів до заголовку залежно від рівня складності
        $('h1').removeClass().addClass(selectedDifficulty);
    });
