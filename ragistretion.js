document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const address2 = document.getElementById('address2').value || "N/A";

    alert(`Registration Complete!\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nAddress Line 2: ${address2}`);
});