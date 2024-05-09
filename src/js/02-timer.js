//flatpickr library
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//notiflix library
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datetimePicker = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const daysDisplay = document.querySelector('span[data-days]');
const hoursDisplay = document.querySelector('span[data-hours]');
const minutesDisplay = document.querySelector('span[data-minutes]');
const secondsDisplay = document.querySelector('span[data-seconds]');

btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = Date.now();

    if (selectedDate < currentDate) {
      // If the user selects a date from the past, show window.alert() with the text "Please choose a date in the future"
      Notify.failure('Please choose a date in the future');
      btn.disabled = true;
      return;
    } else {
      // If the user has selected a valid date (in the future), the "Start" button becomes active.
      btn.disabled = false;

      // Begin Countdown
      let timerID = null;

      // Countdown Function
      function onHandleCountdown() {
        // When you click the "Start" button, the countdown to the selected date starts from the time of clicking.
        btn.disabled = true;
        datetimePicker.disabled = true;

        //   run every 1000 ms (1 second)
        timerID = setInterval(() => {
          const currentTime = Date.now();

          // clear timer
          if (selectedDate < currentTime) {
            clearInterval(timerID);
            datetimePicker.disabled = false;
            return;
          }

          const timeDifference = selectedDate - currentTime;

          const { days, hours, minutes, seconds } = convertMs(timeDifference);

          daysDisplay.textContent = addLeadingZero(days);
          hoursDisplay.textContent = addLeadingZero(hours);
          minutesDisplay.textContent = addLeadingZero(minutes);
          secondsDisplay.textContent = addLeadingZero(seconds);
        }, 1000);
      }
      btn.addEventListener('click', onHandleCountdown);
    }
  },
};

// Create flatpickr
flatpickr('#datetime-picker', options);

// -----------------------------------------------------------------
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
