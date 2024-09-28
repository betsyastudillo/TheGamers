// document.querySelector('form').addEventListener('submit', function() {
//     this.classList.add('enviando'); // Agrega una clase para animaciones
// });

const checkbox = document.getElementById('validationCheckbox');
const cap = document.getElementById('captcha');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        cap.style.display = 'block';
    }else{
        cap.style.display = 'none';
    }
});