document.addEventListener('DOMContentLoaded', () => {
  fetch('https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100')
    .then(response => response.json())
    .then(data => {
      const records = data.records;
      const tableBody = document.getElementById('data-table-body');
      records.forEach(record => {
        const row = document.createElement('tr');
        const nationalityCell = document.createElement('td');
        nationalityCell.textContent = record.fields.nationality;
        const countCell = document.createElement('td');
        countCell.textContent = record.fields.count;
        row.appendChild(nationalityCell);
        row.appendChild(countCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
