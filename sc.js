let timeLeft = 10;  // Timer dimulai dari 10 detik
        const timerElement = document.getElementById('timer');
        const amountElement = document.getElementById('amount');

        // Fungsi untuk menghitung mundur
        const countdown = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                // Jika waktu habis, tampilkan pesan menakutkan
                timerElement.innerHTML = "WAKTU HABIS!";
                document.getElementById("message").innerHTML = "<h1>ERROR: DATA TELAH HILANG!</h1><p>Data pribadi kamu telah terhapus secara permanen. Tidak ada yang bisa diselamatkan!</p><p>Tebusan tidak dibayar tepat waktu...</p>";
            } else {
                timerElement.innerHTML = timeLeft;
            }
            timeLeft -= 1;
        }, 1000);

        // Mengubah teks setelah 5 detik untuk menambah ketegangan
        setTimeout(function() {
            document.getElementById("message").innerHTML = `
                <h1>WARNING: Your device is compromised!</h1>
                <p>Your phone has been hacked. You have been compromised.</p>
                <h2>Timer: <span id="timer">10</span> seconds remaining...</h2>
                <p>Pay the ransom of <span id="amount">Rp 2.000.000</span> or your data will be lost forever!</p>
            `;
        }, 5000);

        // Menambahkan efek suara menakutkan setelah 5 detik
        setTimeout(function() {
            const audio = new Audio('scary-sound.mp3');
            audio.play();
        }, 5000);