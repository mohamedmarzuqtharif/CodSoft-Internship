document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-animation');
    const words = ['Designer', 'Developer'];
    let wordIndex = 0;
    let letterIndex = 0;

    const type = () => {
        if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 2000);
        }
    };

    const erase = () => {
        if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    };

    type();

    // Animate pie charts
    const pieCharts = document.querySelectorAll('.pie-chart');
    pieCharts.forEach(chart => {
        const percentage = chart.getAttribute('data-percentage');
        chart.style.background = conic-gradient();
    });
});

function openProject(url) {
    window.location.href = url;
}