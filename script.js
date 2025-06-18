document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const orderButtons = document.querySelectorAll('.card-button');
    const orderForm = document.getElementById('orderForm');
    const submitBtn = document.getElementById('submitBtn');
    const inputs = document.querySelectorAll('.modal-form input');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    function checkForm() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const agree = document.getElementById('agree').checked;
        
        submitBtn.disabled = !(name && phone && agree);
    }
    
    inputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });
    
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        alert('Ваш заказ принят! Мы свяжемся с вами в ближайшее время.');
        orderForm.reset();
    });
});