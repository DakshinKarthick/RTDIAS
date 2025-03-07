document.addEventListener('DOMContentLoaded', function() {
    // Initialize Charts
    initFrequencyChart();
    initAreasChart();
    initPredictionChart();

    // Handle Date Range
    document.querySelector('.apply-btn').addEventListener('click', function() {
        const fromDate = document.getElementById('date-from').value;
        const toDate = document.getElementById('date-to').value;
        updateCharts(fromDate, toDate);
    });

    // Handle Export Buttons
    document.querySelector('.export-btn.pdf').addEventListener('click', exportPDF);
    document.querySelector('.export-btn.csv').addEventListener('click', exportCSV);
});

function initFrequencyChart() {
    const ctx = document.getElementById('frequencyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Disaster Frequency',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(67, 97, 238, 0.5)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initAreasChart() {
    const ctx = document.getElementById('areasChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Asia', 'Americas', 'Europe', 'Africa', 'Oceania'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    '#4361ee',
                    '#3f37c9',
                    '#4cc9f0',
                    '#f72585',
                    '#4895ef'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initPredictionChart() {
    const ctx = document.getElementById('predictionChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Predicted Risk Level',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: '#4361ee',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function updateCharts(fromDate, toDate) {
    // Update charts based on date range
    console.log(`Updating charts for range: ${fromDate} to ${toDate}`);
}

function exportPDF() {
    console.log('Exporting PDF...');
    // Implement PDF export functionality
}

function exportCSV() {
    console.log('Exporting CSV...');
    // Implement CSV export functionality
}