// ===============================
// Add Transaction
// ===============================

const nameIn = document.getElementById("name");
const amountIn = document.getElementById("amount");
const categoryIn = document.getElementById("category");
const typeIn = document.getElementsByName("type");
const dateIn = document.getElementById("date");
const addBtn = document.getElementById("addBtn");

const transTab = document.getElementById("Transaction-add-tab");

const incomeCard = document.querySelector(".income");
const expenseCard = document.querySelector(".expense");
const balanceCard = document.querySelector(".balance");
const monthCard = document.querySelector(".month");
let totalIncome = 0;
let totalExpense = 0;

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button Clicked");
  const name = nameIn.value.trim();
  const amount = amountIn.value.trim();
  const category = categoryIn.value;
  const date = dateIn.value;

  let type = "";

  for (const radio of typeIn) {
    if (radio.checked) {
      type = radio.value;
      break;
    }
  }

  if (
    name === "" ||
    amount === "" ||
    category === "" ||
    type === "" ||
    date === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

  const amountValue = Number(amount);

  // Update totals
  if (type === "Income") {
    totalIncome += amountValue;
  } else {
    totalExpense += amountValue;
  }

  incomeCard.textContent = `₹${totalIncome}`;
  expenseCard.textContent = `₹${totalExpense}`;
  balanceCard.textContent = `₹${totalIncome - totalExpense}`;
  monthCard.textContent = `₹${totalExpense}`;

  // Create table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>₹${amountValue}</td>
    <td>${category}</td>
    <td>${type}</td>
    <td>${date}</td>
    <td>
      <button type="button" class="deleteBtn">🗑 Remove</button>
    </td>
  `;

  transTab.appendChild(row);

  // Delete transaction
  const deleteBtn = row.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", () => {
    if (type === "Income") {
      totalIncome -= amountValue;
    } else {
      totalExpense -= amountValue;
    }

    incomeCard.textContent = `₹${totalIncome}`;
    expenseCard.textContent = `₹${totalExpense}`;
    balanceCard.textContent = `₹${totalIncome - totalExpense}`;

    row.remove();
  });

  // Clear form
  nameIn.value = "";
  amountIn.value = "";
  categoryIn.selectedIndex = 0;
  dateIn.value = "";

  for (const radio of typeIn) {
    radio.checked = false;
  }

  // Close popup
  transPage.classList.add("inactive");
  console.log("Last line in add.js");
});
