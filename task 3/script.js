document.getElementById("tempRange").addEventListener("input", function () {
    let value = this.value;
    document.getElementById("tempValue").textContent = value + "°C";
    updateTempStatus(value); // Update status dynamically on slider change
});

function convertTemp() {
    let temp = parseFloat(document.getElementById("tempRange").value);
    let unit = document.getElementById("unit").value;
    let result;

    // Convert Temperature
    if (unit === "fahrenheit") {
        result = (temp * 9/5) + 32 + "°F";
    } else if (unit === "kelvin") {
        result = (temp + 273.15) + "K";
    } else {
        result = temp + "°C";
    }

    // Update UI
    document.getElementById("result").textContent = "Result: " + result;
    updateTempStatus(temp); // Update status based on temp
}

// Function to Update Temperature Status
function updateTempStatus(temp) {
    let statusElement = document.getElementById("tempStatus");

    if (temp > 30) {
        statusElement.textContent = "High Temperature!";
        statusElement.className = "status high";
    } else if (temp < 15) {
        statusElement.textContent = "Low Temperature!";
        statusElement.className = "status low";
    } else {
        statusElement.textContent = "🌡 Normal Temperature";
        statusElement.className = "status normal";
    }
}
