document.addEventListener('DOMContentLoaded', () => {
    const words = ["auto", "autobus", "tramvaj" , "kokos"];
    const container = document.getElementById('game-container');

    words.forEach((word) => {
        const wordContainer = document.createElement('div');
        wordContainer.classList.add('word-container');

        for (let i = 0; i < word.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.classList.add('letter-input');
            wordContainer.appendChild(input);
        }

        container.appendChild(wordContainer);
    });

    container.addEventListener('input', (event) => {
        const target = event.target;
        if (target.classList.contains('letter-input')) {
            if (target.value.length === 1) {
                const nextInput = target.nextElementSibling;
                if (nextInput && nextInput.classList.contains('letter-input')) {
                    nextInput.focus();
                } else {
                    const nextWordContainer = target.closest('.word-container').nextElementSibling;
                    if (nextWordContainer && nextWordContainer.classList.contains('word-container')) {
                        const firstInput = nextWordContainer.querySelector('.letter-input');
                        if (firstInput) {
                            firstInput.focus();
                        }
                    }
                }
            }

            const wordContainer = target.closest('.word-container');
            const inputs = wordContainer.querySelectorAll('.letter-input');
            const wordIndex = Array.from(container.children).indexOf(wordContainer);
            const word = words[wordIndex];
            let userWord = '';
            inputs.forEach(input => userWord += input.value);

            if (word && userWord.length === word.length) {
                inputs.forEach((input, index) => {
                    if (input.value === word[index]) {
                        input.style.backgroundColor = 'green';
                    } else {
                        input.style.backgroundColor = 'darkred';
                    }
                });
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
                } else {
                    const prevWordContainer = target.closest('.word-container').previousElementSibling;
                    if (prevWordContainer && prevWordContainer.classList.contains('word-container')) {
                        const lastInput = prevWordContainer.querySelectorAll('.letter-input');
                        if (lastInput.length > 0) {
                            lastInput[lastInput.length - 1].focus();
                        }
                    }
                }
            }
        }
    });
});
