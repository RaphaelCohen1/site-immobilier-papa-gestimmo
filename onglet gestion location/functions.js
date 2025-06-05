// Script pour gérer les interactions de l'interface
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des onglets
    const tabs = document.querySelectorAll('.form-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Gestion des cases à cocher
    const checks = document.querySelectorAll('.form-check');
    checks.forEach(check => {
        check.addEventListener('click', function() {
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                this.innerHTML = '✓';
            } else {
                this.innerHTML = '';
            }
        });
    });
});