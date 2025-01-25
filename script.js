// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("akan-form");
  const resultDiv = document.getElementById("result");

  // Arrays for Akan names
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  // Function to calculate the day of the week
  const calculateDayOfWeek = (date) => {
    const century = Math.floor(date.getFullYear() / 100);
    const year = date.getFullYear() % 100;
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const day = date.getDate();

    // Zeller's Congruence Formula
    const dayOfWeek = Math.floor(
      (century / 4 -
        2 * century -
        1 +
        (5 * year) / 4 +
        (26 * (month + 1)) / 10 +
        day) %
        7
    );

    // Return a positive index
    return (dayOfWeek + 7) % 7;
  };

  // Form submission handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user input
    const birthdayInput = document.getElementById("birthday").value;
    const genderInput = document.getElementById("gender").value;

    // Input validation
    if (!birthdayInput || !genderInput) {
      resultDiv.textContent =
        "Please enter a valid birthday and select your gender.";
      resultDiv.style.color = "red";
      return;
    }

    const birthday = new Date(birthdayInput);

    // Check for invalid dates
    if (isNaN(birthday.getTime())) {
      resultDiv.textContent = "Invalid date. Please try again.";
      resultDiv.style.color = "red";
      return;
    }

    // Calculate the day of the week
    const dayOfWeek = calculateDayOfWeek(birthday);

    // Determine the Akan name
    let akanName;
    if (genderInput === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (genderInput === "female") {
      akanName = femaleNames[dayOfWeek];
    }

    // Display the result
    resultDiv.textContent = `Your Akan name is ${akanName}!`;
    resultDiv.style.color = "#fff";
  });
});
