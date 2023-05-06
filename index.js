"use strict";

//container
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const downloadButton = document.querySelector(".download");
const username = document.querySelector(".name");
const job = document.querySelector(".job");
const about = document.querySelector(".about");
const social = document.querySelector(".social");
const phone = document.querySelector(".phone");
const imageContainer = document.querySelector(".img");
const box = document.querySelector(".box");
const back = document.querySelector(".back");

//Form
const inputName = document.querySelector(".input-name");
const inputNiche = document.querySelector(".input-niche");
const inputHandle = document.querySelector(".input-handle");
const inputPhone = document.querySelector(".input-phone");
const submit = document.querySelector(".submit");
const textArea = document.querySelector(".text");
const imageInput = document.getElementById("image");
var uploadedImage = "";

const generate = function () {
	if (
		inputName.value &&
		inputNiche.value &&
		inputHandle.value &&
		inputPhone.value
	) {
		username.textContent = `${inputName.value.toUpperCase()}`;
		job.textContent = `${inputNiche.value}`;
		about.textContent = `${textArea.value}`;
		social.textContent = `${inputHandle.value}`;
		phone.textContent = `${inputPhone.value}`;

		container.style.display = "none";
		downloadButton.style.display = "block";
		container2.style.display = "block";
		back.style.display = "block";
	}
};

//doesn't work with background-image
// imageInput.onchange = function () {
// 	imageContainer.src = URL.createObjectURL(imageInput.files[0]);
// };

imageInput.addEventListener("change", function () {
	const reader = new FileReader();
	reader.addEventListener("load", () => {
		uploadedImage = reader.result;
		imageContainer.style.backgroundImage = `url(${uploadedImage})`;
	});
	reader.readAsDataURL(this.files[0]);
});

//submit button
submit.addEventListener("click", generate);

//download button

downloadButton.addEventListener("click", function () {
	// Use HTML2Canvas to capture the contents of the container as a PNG image
	html2canvas(box, { scale: 3 }).then(function (canvas) {
		// Create a download link for the PNG image
		const link = document.createElement("a");
		link.download = "image.png";
		link.href = canvas.toDataURL("image/png");

		// Click the download link to initiate the download
		link.click();
	});
});

//Back
back.addEventListener("click", function () {
	container.style.display = "block";
	downloadButton.style.display = "none";
	container2.style.display = "none";
	back.style.display = "none";
});
