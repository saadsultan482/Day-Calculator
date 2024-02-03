document.getElementById('dayCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
    var totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('result').innerHTML = 'Total days: ' + totalDays;
 });