let counter = 0;
const ferretImage = document.getElementById('ferret');
const counterElement = document.getElementById('counter');

ferretImage.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
    petFerret();
});

function petFerret() {
    const popOutValue = 1.2; 
    const originalTransform = 'none';

    // Moans
    const popOutTransform = `scale(${popOutValue})`;
    ferretImage.style.transform = popOutTransform;

    // u go back when qwq
    setTimeout(() => {
        ferretImage.style.transform = originalTransform;
    }, 100); 
}
