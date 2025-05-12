// Event Handling Section
document.addEventListener('DOMContentLoaded', () => {
    // Click Button
    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', () => {
        clickButton.textContent = 'Clicked!';
        setTimeout(() => {
            clickButton.textContent = 'Click Me!';
        }, 1000);
    });

    // Hover Button
    const hoverButton = document.getElementById('hoverButton');
    hoverButton.addEventListener('mouseenter', () => {
        hoverButton.style.backgroundColor = '#e74c3c';
    });
    hoverButton.addEventListener('mouseleave', () => {
        hoverButton.style.backgroundColor = '#3498db';
    });

    // Secret Button (Double Click)
    const secretButton = document.getElementById('secretButton');
    let clickCount = 0;
    secretButton.addEventListener('dblclick', () => {
        secretButton.textContent = 'Secret Message: You found me!';
        secretButton.style.backgroundColor = '#2ecc71';
        setTimeout(() => {
            secretButton.textContent = 'Try Double Clicking Me!';
            secretButton.style.backgroundColor = '#3498db';
        }, 2000);
    });

    // Keypress Detection
    const keyDisplay = document.getElementById('keyDisplay');
    document.addEventListener('keydown', (e) => {
        keyDisplay.textContent = e.key;
        keyDisplay.style.color = getRandomColor();
    });

    // Color Changer Button
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', () => {
        colorButton.style.backgroundColor = getRandomColor();
    });

    // Image Gallery
    const galleryImages = document.querySelectorAll('.gallery-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    });

    // Initialize gallery
    showImage(currentImageIndex);

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        input.style.borderColor = '#e74c3c';
    }

    function hideError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.style.display = 'none';
        input.style.borderColor = '#ddd';
    }

    // Real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
        } else {
            hideError(nameInput);
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
        } else {
            hideError(emailInput);
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters long');
        } else {
            hideError(passwordInput);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }

        if (emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }

        if (passwordInput.value && passwordInput.value.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters long');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});

// Helper function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
