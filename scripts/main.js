document.addEventListener('DOMContentLoaded', () => {
    const wordsData = [
        { word: "divabara", heading: "Název podniku na česnečku v Jičíně" },
        { word: "devet     ", heading: "Kolik festivalů a koncertů jsme viděli? (slovem, zbytek volných políček odmezerníkuj)" },
        { word: "switch", heading: "První bar, kam jsme spolu šli" },
        { word: "trikrat", heading: "Kolikrát jsme byli spolu na kapele Divokej Bill?" },
        { word: "florbal", heading: "Kterou sportovní událost jsme jako první pozorovali naživo?" },
        { word: "hyperion", heading: "Název poslední horský dráhy v Energylandii, kterou jsme nestihli navštívit" },
        { word: "malinovyprosecco", heading: "Drink s vosou na slunkách" },
        { word: "sedmdesat", heading: "Délka našeho prvního letu v minutách" },
        { word: "nacucanyruksaci", heading: "Název našeho sdružení (měl z toho bejt i nápis na mikinách" },
        { word: "ctyri", heading: "Kolik nocí jsme celkem strávili na chaloupce v Josefáči?" },
        { word: "skardu", heading: "Od které známé osobnosti byl klobouk kterej jsme si vyměňovali? (jeho umělecký jméno)" },
        { word: "bryle", heading: "Co jsem ztratil na kánoích v Krumlově" },
        { word: "trech", heading: "V kolika různých autech jsem tě vezl?" }
    ];

    const container = document.getElementById('game-container');
    let currentWordIndex = 0;

    function displayWord(index) {
        container.innerHTML = ''; // Clear the container
        const { word, heading } = wordsData[index];
        
        const headingElement = document.createElement('h2');
        headingElement.textContent = heading;
        container.appendChild(headingElement);

        const wordContainer = document.createElement('div');
        wordContainer.classList.add('word-container', 'fade-in');

        for (let i = 0; i < word.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.classList.add('letter-input');
            wordContainer.appendChild(input);
        }

        container.appendChild(wordContainer);

        // Focus the first input box
        const firstInput = wordContainer.querySelector('.letter-input');
        if (firstInput) {
            firstInput.focus();
        }
    }

    displayWord(currentWordIndex);

    container.addEventListener('input', (event) => {
        const target = event.target;
        if (target.classList.contains('letter-input')) {
            if (target.value.length === 1) {
                const nextInput = target.nextElementSibling;
                if (nextInput && nextInput.classList.contains('letter-input')) {
                    nextInput.focus();
                }
            }

            const wordContainer = target.closest('.word-container');
            const inputs = wordContainer.querySelectorAll('.letter-input');
            const { word } = wordsData[currentWordIndex];
            let userWord = '';
            inputs.forEach(input => userWord += input.value.toLowerCase());

            if (word && userWord.length === word.length) {
                let correct = true;
                inputs.forEach((input, index) => {

                    if (input.value.toLowerCase() === word[index].toLowerCase()) {
                        input.style.backgroundColor = '#b2fab4'; // Pastel green
                    } else {
                        input.style.backgroundColor = '#f4cccc'; // Pastel red
                        correct = false;
                    }
                });

                if (correct) {
                    container.classList.add('fade-out');
                    setTimeout(() => {
                        container.classList.remove('fade-out');
                        currentWordIndex++;
                        if (currentWordIndex < wordsData.length) {
                            displayWord(currentWordIndex);
                        } else {
                            container.innerHTML = 
                            '<h2>Je to doma, už to skoro máš v kapse </h2><p>Teď na úkol, snad ti na to zbyla ještě nějaká energie. Měl jsem kvanta vymyšlenejch úkolů, ale dlouho jsem nemohl najít způsob, jak je všecky spojit dohromady. Ale už jsem zjistil co maj společnýho - POŠLI MI SNAP (jakýhokoli charakteru) ze kterýho mi zaručeně odpadne čelist. To co to bude, jak to bude vypadat a zda zvolíš formát fotky nebo videa nechám na tobě a jestli to i bez nápovědy pochopim že ses dostala až na konec, tak dostaneš svoji výhru. </p>';
                        }
                    }, 1000); // Adjust the timeout to match the CSS animation duration
                }
            } else {
                inputs.forEach(input => input.style.backgroundColor = '');
            }
        }
    });

    container.addEventListener('keydown', (event) => {
        const target = event.target;
        if (target.classList.contains('letter-input') && event.key === 'Backspace') {
            if (target.value === '') {
                const prevInput = target.previousElementSibling;
                if (prevInput && prevInput.classList.contains('letter-input')) {
                    prevInput.focus();
                }
            }
        }
    });
    const showPopupButton = document.getElementById('showPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');
    const content = document.getElementById('content');
    const predefinedIds = [172, 190, 208, 226, 244, 262, 280];

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
        content.classList.add('blurred');
    });
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none'; 
        content.classList.remove('blurred');
            if (challengeCompleted) {
                location.reload();
            }
    });
    const dancerEmoji = String.fromCodePoint(0x1F483);
    const devilEmoji = String.fromCodePoint(0x1F608);
    const laughEmoji = String.fromCodePoint(0x1F605);
});