document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const lengthSlider = document.getElementById("lengthSlider");
    const lengthValue = document.getElementById("lengthValue");
    const passwordField = document.getElementById("password");

    // Update password length display
    lengthSlider.addEventListener("input", function () {
        lengthValue.textContent = lengthSlider.value;
    });

    // Generate Password
    generateBtn.addEventListener("click", function () {
        const length = lengthSlider.value;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        passwordField.value = password;
    });

    // Copy Password
    copyBtn.addEventListener("click", function () {
        if (passwordField.value === "") {
            alert("Generate a password first!");
            return;
        }
        navigator.clipboard.writeText(passwordField.value)
            .then(() => alert("Password copied to clipboard!"))
            .catch(err => console.error("Failed to copy: ", err));
    });
});
