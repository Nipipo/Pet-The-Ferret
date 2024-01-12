let counter = 0;
const ferretImage = document.getElementById('ferret');
const counterElement = document.getElementById('counter');

ferretImage.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
    petFerret();
}
