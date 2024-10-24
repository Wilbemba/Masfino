function updateTimeAndDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Formato para la hora (HH:MM:SS)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Formato para la fecha (Día de la semana, DD/MM/AAAA)
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dayOfWeek = days[now.getDay()];
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
    const year = now.getFullYear();
    const dateString = `${dayOfWeek}, ${day}/${month}/${year}`;

    // Actualizamos los elementos HTML
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Actualiza la hora y fecha cada segundo
setInterval(updateTimeAndDate, 1000);

// Llama a la función una vez al cargar la página
updateTimeAndDate();


