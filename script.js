document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Get the container div
            const container = document.getElementById('content-container');

            // Iterate through items and populate styled divs
            data.items.forEach(item => {
                // Create a div element for the item
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item-container');

                // Create divs for each property of the item
                const yearDiv = document.createElement('div');
                yearDiv.classList.add('item-year');
                yearDiv.innerHTML = `<p>${item.year}<p>`;

                const nameDiv = document.createElement('div');
                nameDiv.classList.add('item-name');
                nameDiv.innerHTML = `<p>${item.name}</p>`;

                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('item-category');
                categoryDiv.innerHTML = `<p>${item.category}</p>`;

                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add('item-description');
                descriptionDiv.innerHTML = `<p>${item.description}</p>`;

                const linkDiv = document.createElement('div');
                linkDiv.classList.add('item-link');
                linkDiv.innerHTML = `<a href="${item.link}" target="_blank">🔗</a>`;

                // Append property divs to the item div
                itemDiv.appendChild(yearDiv);
                itemDiv.appendChild(nameDiv);
                itemDiv.appendChild(categoryDiv);
                itemDiv.appendChild(descriptionDiv);
                itemDiv.appendChild(linkDiv);

                // Append the item div to the container
                container.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
