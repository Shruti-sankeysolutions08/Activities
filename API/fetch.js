async function fetchDataAndRenderTable() {
    try {

        const response = await fetch('https://randomuser.me/api/?results=10');

    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        const data = await response.json();
        
        const tableBody = document.querySelector('#data-table tbody');
    
        tableBody.innerHTML = '';

        
        data.results.forEach(item => {
            const row = document.createElement('tr');

    
            const cell1 = document.createElement('td');
            cell1.textContent = `${item.name.first} ${item.name.last}`;
            row.appendChild(cell1);

            const cell2 = document.createElement('td');
            cell2.textContent = item.email;
            row.appendChild(cell2);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.onload = fetchDataAndRenderTable;

