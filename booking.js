document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('booking-form');
  const serviceSelect = document.getElementById('service');
  const result = document.getElementById('booking-result');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const selectedService = serviceSelect.value;

    const services = {
      'vip': 75,
      'diamond': 150,
      'overnight': 350
    };

    const fullPrice = services[selectedService];
    const deposit = fullPrice / 2;

    const formattedService = selectedService.charAt(0).toUpperCase() + selectedService.slice(1);

    result.innerHTML = `
      <div class="confirmation-box">
        <h3 class="confirmation-title">🌟 Booking Request Received</h3>
        <p>Hi <strong>${name}</strong>, thank you for choosing us for your luxury experience.</p>
        <p>Here are your booking details:</p>
        <ul>
          <li><strong>Service:</strong> ${formattedService}</li>
          <li><strong>Total Cost:</strong> $${fullPrice.toFixed(2)}</li>
          <li><strong>Deposit Due:</strong> $${deposit.toFixed(2)} via Cash App</li>
        </ul>
        <p class="payment-instructions">
          Please send your deposit to <span class="cash-app-tag">$tooflyybunni</span> on Cash App.
        </p>
        <p>After your deposit is received, a confirmation text will be sent to <strong>${phone}</strong>.</p>
        <p class="final-note">We look forward to providing you with the best booking experience possible.</p>
      </div>
    `;

    // Optional: clear form after submission
    bookingForm.reset();
  });
});
