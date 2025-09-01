document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? 'Dunkel deaktivieren' : 'Dunkel aktivieren';
});