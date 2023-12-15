    let counterId = 1;
    let totalCount = 0;

    document.addEventListener("DOMContentLoaded", function () {
        const counterNumberInput = document.getElementById("counter-number");
        counterNumberInput.value = 1;
        function createCounter() {
        }
    });

    function createCounter() {
        const counterContainer = document.getElementById("counters-container");
        const counterDiv = document.createElement("div");
        counterDiv.className = "counter";
        counterDiv.id = "counter-" + counterId;
        const stepValue = document.querySelector("input[type='text']").value;

        counterDiv.innerHTML = 
        `    
            <div>
                <div style=" display: flex;">
                    <h2 style="margin-left: 200px;" > Counter: <span id="count-${counterId}">0</span></h2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h3 style="border: 2px dashed rgb(193, 193, 193);">step : ${stepValue}</h3>&nbsp;&nbsp; 
                    <div style="margin-top: 25px;"> <button style="padding: 0px 5px"> Update </button></div>
                </div>
                <div style="margin-top: 30px">
                    <button style="padding: 3px 15px" onclick="incrementCounter(${counterId})">+</button>
                    <button style="padding: 3px 15px" onclick="resetCounter(${counterId})">0</button>
                    <button style="padding: 3px 15px" onclick="decrementCounter(${counterId})">-</button>
                    <button style="padding: 3px 15px" onclick="deleteCounter(${counterId})">X</button>
                </div>
            </div>
        `;

        counterContainer.appendChild(counterDiv);

        // Increment the counterId for the next counter
        counterId++;

        // Update the total count
        updateTotalCount();
    }

    function incrementCounter(id) {
        const countElement = document.getElementById("count-" + id);
        countElement.textContent = parseInt(countElement.textContent) + 1;

        // Update the total count
        updateTotalCount();
    }

    function resetCounter(id) {
        const countElement = document.getElementById("count-" + id);
        countElement.textContent = 0;

        // Update the total count
        updateTotalCount();
    }

    function decrementCounter(id) {
        const countElement = document.getElementById("count-" + id);
        const currentCount = parseInt(countElement.textContent);

        countElement.textContent = currentCount - 1;

        // Update the total count
        updateTotalCount();
    }

    function deleteCounter(id) {
        const counterElement = document.getElementById("counter-" + id);
        counterElement.remove();

        // Update the total count
        updateTotalCount();
    }

    function updateTotalCount() {
        // Calculate the total count by summing up the count of each counter
        totalCount = 0;
        document.querySelectorAll('.counter span').forEach(element => {
            totalCount += parseInt(element.textContent);
        });

        // Display the total count
        document.getElementById('total-count').textContent = totalCount;
    }