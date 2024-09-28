const checkbox = document.getElementById('validationCheckbox');
const cap = document.getElementById('captcha');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        cap.style.display = 'block';
    }else{
        cap.style.display = 'none';
        
    }
});

window.onload = function() {
    document.getElementById('submitButton').disabled = true;
}

