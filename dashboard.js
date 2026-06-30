// ===============================
// Dashboard JS
// ===============================

// Elements
const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

const profileBtn = document.querySelector(".profile");
const profileMenu = document.querySelector(".rightbar");

const logoutBtn = document.querySelector(".logout");

const addTrans = document.querySelector(".transact");
const transPage = document.querySelector(".add-container");
const overView = document.querySelector(".overview");
const recent = document.querySelector(".recent");
// ===============================
// Sidebar Toggle
// ===============================

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("inactive");
});

// ===============================
// Profile Menu
// ===============================

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle("inactive");
});

// Close profile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    profileMenu.classList.add("inactive");
  }
});
recent.addEventListener("click", () => {
  overView.scrollIntoView({
    behavior: "smooth",
  });

  overView.classList.add("highlight");

  setTimeout(() => {
    overView.classList.remove("highlight");
  }, 1500);
});

// ===============================
// Logout
// ===============================

logoutBtn.addEventListener("click", () => {
  const answer = confirm("Do you want to logout?");

  if (answer) {
    window.location.href = "login.html";
  }
});

// ===============================
// Open / Close Add Transaction Popup
// ===============================

addTrans.addEventListener("click", () => {
  transPage.classList.toggle("inactive");
});
