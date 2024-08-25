const phrases = [
    "Ciao topina!",
    "Non te lo aspettavi vero?",
    "Volevo scriverti un pensierino per il tuo compleanno, ma dovevo farlo a modo mio.",
    "È indescribile quello che mi fai provare e quello che mi sento di fare per te.",
    "Non mi sarei mai aspettato di incontrare una persona così",
    "Premurosa",
    "Genuina",
    "Matura",
    "e bella come una principessa!",
    "Ti ringrazio di essermi stata accanto quando ne avevo bisogno e di aver sempre creduto in me.",
    "Ti ringrazio di esserti sempre preoccupata di me prima di tutto e tutti.",
    "e ti ringrazio di farmi sentire spensierato come lo ero da piccino.",
    "Buon compleanno topina."
];

let index = 0;
const typedText = document.getElementById('typed-text');
const nextBtn = document.getElementById('next-btn');

function typePhrase(phrase) {
    typedText.textContent = ''; // Resetta il contenuto
    let charIndex = 0;
    
    function typeNextChar() {
        if (charIndex < phrase.length) {
            typedText.textContent += phrase[charIndex];
            charIndex++;
            setTimeout(typeNextChar, 50); // Intervallo tra caratteri
        } else {
            typedText.style.borderRight = '3px solid white'; // Mostra il cursore
        }
    }

    typedText.style.borderRight = 'none'; // Nasconde il cursore durante la digitazione
    typeNextChar();
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % phrases.length;
    typePhrase(phrases[index]);
});

// Inizia con la prima frase
typePhrase(phrases[index]);
