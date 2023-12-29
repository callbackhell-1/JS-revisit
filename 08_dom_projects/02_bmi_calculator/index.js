const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  console.log(height, weight);
  const results = document.querySelector("#results");

  if (height <= 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please give the valid height ${height}`;
  } else if (weight <= 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please give the valid weight ${weight}`;
  } else {
    const bmi = weight / Math.pow(height / 100, 2);
    // results.innerHTML = `<span>${bmi}</span> <br>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi} <br> Underweight </span> `;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span> ${bmi} <br>  Normal Range  </span> `;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span> ${bmi} <br>  Overweight  </span> `;
    }
  }
});
