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

    result.innerHTML = `
      <h3>Luxury Booking Request Confirmed</h3>
      <p>Thank you, <strong>${name}</strong>. To finalize your booking:</p>
      <ul>
        <li>Service: <strong>${selectedService.toUpperCase()}</strong></li>
        <li>Total: <strong>$${fullPrice}</strong></li>
        <li>Required Deposit: <strong>$${deposit} via Cash App</strong></li>
      </ul>
      <p>Send your deposit to: <span style="color: #ffd700; font-weight: bold;">$tooflyybunni</span></p>
      <p>Once payment is received, you’ll receive a confirmation text at <strong>${phone}</strong>.</p>
    `;
  });
});
