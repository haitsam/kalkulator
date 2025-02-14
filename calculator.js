// Mendapatkan elemen display
const display = document.getElementById("display");

// Mendapatkan semua tombol
const buttons = document.querySelectorAll(".buttons button");

// Variabel untuk menyimpan ekspresi matematika
let currentExpression = "";

// Menambahkan event listener ke setiap tombol
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Jika tombol adalah "C", hapus layar
    if (value === "C") {
      currentExpression = "";
      display.value = "";
    } 
    // Jika tombol adalah "=", hitung hasil
    else if (value === "=") {
      try {
        // Evaluasi ekspresi matematika
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = result.toString(); // Menyimpan hasil untuk kalkulasi berikutnya
      } catch (error) {
        display.value = "Error";
        currentExpression = "";
      }
    } 
    // Jika tombol lain, tambahkan ke ekspresi
    else {
      currentExpression += value;
      display.value = currentExpression;
    }
  });
});
