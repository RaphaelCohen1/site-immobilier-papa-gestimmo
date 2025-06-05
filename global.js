function moveIndicator(index) {
            const indicator = document.querySelector(".active-indicator");
            const buttons = document.querySelectorAll(".toggle-button");
            
indicator.style.left = `calc(${index * 33.3}% + 5px)`;
            
            buttons.forEach(btn => btn.classList.remove("active"));
            buttons[index].classList.add("active");
}
//selecteur type de transaction: location...
document.querySelectorAll('.input-select').forEach(select => {
    select.addEventListener('focus', function () {
        this.style.borderColor = '#007bff';
    });

    select.addEventListener('blur', function () {
        this.style.borderColor = '#ccc';
    });
});
