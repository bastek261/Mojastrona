<script>
    // Ustaw datę i godzinę najbliższego meczu (format: YYYY-MM-DDTHH:MM:SS)
    const nextMatchDate = new Date("2024-09-15T17:30:00"); // Przykład daty

    function updateCountdown() {
        const now = new Date();
        const timeDifference = nextMatchDate - now;

        if (timeDifference <= 0) {
            document.getElementById('timer').innerHTML = "Mecz już się rozpoczął!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    // Aktualizuj licznik co 1 sekundę
    setInterval(updateCountdown, 1000);

    // Inicjalna aktualizacja
    updateCountdown();
</script>
