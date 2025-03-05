document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("qr-input");
    const generateBtn = document.getElementById("generate-btn");
    const qrContainer = document.getElementById("qr-container");
    const qrImage = document.getElementById("qr-image");
    const downloadBtn = document.getElementById("download-btn");

    let qr = null; // Store the QR instance

    generateBtn.addEventListener("click", function () {
        let inputValue = inputField.value.trim();

        if (inputValue === "") {
            alert("Please enter text or a URL");
            return;
        }

        // Clear existing QR code
        qrContainer.innerHTML = "";

        // Generate QR Code
        qr = new QRCode(qrContainer, {
            text: inputValue,
            width: 150,
            height: 150
        });

        // Convert QR Code to Image
        setTimeout(() => {
            let canvas = qrContainer.querySelector("canvas");
            if (canvas) {
                qrImage.src = canvas.toDataURL("image/png");
                qrImage.style.display = "block";
                downloadBtn.style.display = "block";
            }
        }, 100);
    });

    // Download QR Code
    downloadBtn.addEventListener("click", function () {
        let link = document.createElement("a");
        link.href = qrImage.src;
        link.download = "qr-code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
