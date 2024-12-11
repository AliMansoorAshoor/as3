document.addEventListener('DOMContentLoaded', () => {
  fetch('https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100')
    .then(response => response.json())
    .then(data => {
      const records = data.records;
      const tableBody = document.getElementById('data-table-body');
      records.forEach((record, index) => {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        indexCell.textContent = index + 1;
        const yearCell = document.createElement('td');
        yearCell.textContent = record.fields.year;
        const semesterCell = document.createElement('td');
        semesterCell.textContent = record.fields.semester;
        const programCell = document.createElement('td');
        programCell.textContent = record.fields.the_programs;
        const nationalityCell = document.createElement('td');
        nationalityCell.textContent = record.fields.nationality;
        const collegesCell = document.createElement('td');
        collegesCell.textContent = record.fields.colleges;
        const numberOfStudentsCell = document.createElement('td');
        numberOfStudentsCell.textContent = record.fields.number_of_students;
        row.appendChild(indexCell);
        row.appendChild(yearCell);
        row.appendChild(semesterCell);
        row.appendChild(programCell);
        row.appendChild(nationalityCell);
        row.appendChild(collegesCell);
        row.appendChild(numberOfStudentsCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
