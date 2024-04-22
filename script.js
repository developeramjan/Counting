const setDateElement = document.getElementById('set-date');
const timeElapsed = document.getElementById('time-elapsed');

// Set your desired date here (format: YYYY-MM-DD)
const targetDate = new Date("2023-10-13"); // Replace with your target date

function calculateTimeElapsed() {
  const now = new Date();
  const diffInMs = now - targetDate;

  // Check if target date is in the future
  if (diffInMs < 0) {
    timeElapsed.textContent = "Target date is in the future.";
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Format the time string
  const timeString = `${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes > 1 ? 's' : ''}, ${seconds} second${seconds > 1 ? 's' : ''}`;

  timeElapsed.textContent =`${timeString}`;
}

// Update time every second
setInterval(calculateTimeElapsed, 1000);

// Display the set date (for reference)
setDateElement.textContent = targetDate.toLocaleDateString();
