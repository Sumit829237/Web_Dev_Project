// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inputForm');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from form fields
        const field1Value = document.getElementById('field1').value;
        const field2Value = document.getElementById('field2').value;
        const field3Value = document.getElementById('field3').value;

        // Create new paragraph elements
        const resultParagraph1 = document.createElement('p');
        const resultParagraph2 = document.createElement('p');
        const resultParagraph3 = document.createElement('p');

        // Set text content and style for each paragraph
        resultParagraph1.textContent = field1Value;
        resultParagraph1.style.color = '#3498db';

        resultParagraph2.textContent = field2Value;
        resultParagraph2.style.color = '#e74c3c';

        resultParagraph3.textContent = field3Value;
        resultParagraph3.style.color = '#2ecc71';

        // Append paragraphs to the results div
        resultsDiv.appendChild(resultParagraph1);
        resultsDiv.appendChild(resultParagraph2);
        resultsDiv.appendChild(resultParagraph3);

        // Clear form fields
        form.reset();
    });
});
