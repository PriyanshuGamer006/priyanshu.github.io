// document.getElementById('studentForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = {
//         name: document.getElementById('name').value,
//         fatherName: document.getElementById('fatherName').value,
//         grandfatherName: document.getElementById('grandfatherName').value,
//         nukh: document.getElementById('nukh').value,
//         class: document.getElementById('class').value,
//         totalMarks: document.getElementById('totalMarks').value,
//         marksObtained: document.getElementById('marksObtained').value
//     };
    
//     fetch('/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('response').innerText = 'Data saved successfully!';
//     })
//     .catch(error => {
//         document.getElementById('response').innerText = 'Error saving data.';
//     });
// });

// // FOR IMAGE SLIDER
// const sliderWrapper = document.querySelector('.slider-wrapper');
// const sliderImages = document.querySelectorAll('.slider-image');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// let currentIndex = 0;

// prevButton.addEventListener('click', () => {
//   currentIndex--;
//   updateSlider();
// });

// nextButton.addEventListener('click', () => {
//   currentIndex++;
//   updateSlider();
// });

// function updateSlider() {
//   sliderImages.forEach((image, index) => {
//     image.classList.toggle('active', index === currentIndex);
//   });
//   sliderWrapper.style.transform = `translateX(${currentIndex * -100}%)`;
// }


console.log("Hello World I am made by - Priyanshu Khatri");
document.addEventListener("DOMContentLoaded", function() {
  alert("This page is coded by Priyanshu Khatri");
}