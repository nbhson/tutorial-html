// JS: tùy biến thông báo lỗi
const email = document.querySelector('#email');
email.addEventListener('invalid', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Vui lòng nhập email hợp lệ, ví dụ: ten@gmail.com');
    } else {
        email.setCustomValidity('');
    }
});
