"use-strict";
//Counter
const display = document.querySelector(".cnt");
const count = document.querySelectorAll(".count");
let interval = 4000;

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
	// Check if the display section is in the viewport
	if (entries[0].isIntersecting) {
		// Start the counting
		count.forEach((valueDisplay) => {
			let startValue = 0;
			let endValue = parseInt(valueDisplay.getAttribute("data-val"));
			let duration = Math.floor(interval / endValue);
			let counter = setInterval(function () {
				startValue += 1;
				valueDisplay.textContent = `${startValue}k+`;
				if (startValue == endValue) {
					clearInterval(counter);
				}
			}, duration);
		});

		// Stop observing the display section
		observer.disconnect();
	}
});

// Start observing the display section
observer.observe(display);

//NAVIGATION BAR
const sidebar = document.querySelector(".side-bar");
const menu = document.getElementById("menu");
document.querySelector(".barLink").addEventListener("click", function () {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
		sidebar.style.opacity = "1";
		sidebar.style.width = "50%";
		menu.classList.toggle("active");
	} else {
		sidebar.classList.add("sidebarHidden");
		menu.classList.toggle("active");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
});

const menu_items = document.querySelectorAll(".linkk");

function close() {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
	} else {
		sidebar.classList.add("sidebarHidden");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		menu.classList.toggle("active");
		close();
	});
});

// document.querySelector(".header").addEventListener("click", function () {
// 	menu.classList.toggle("active");
// 	close();
// });

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".header-text", {
	delay: 300,
	distance: "40px",
	origin: "left",
});

ScrollReveal().reveal(".hero-img", {
	delay: 200,
	origin: "bottom",
});

ScrollReveal().reveal(".about p, .use p", {
	delay: 200,
	origin: "bottom",
	interval: 100,
	rotate: { x: 1000 },
});

ScrollReveal().reveal("video", {
	delay: 10,
	origin: "left",
});

ScrollReveal().reveal(".contact a", {
	delay: 100,
	origin: "bottom",
	interval: 200,
});
