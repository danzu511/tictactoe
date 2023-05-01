import { createAlert } from "./UI/createAlert.js";
export function showAlert(text) {
    const alert = createAlert(text);
    document.body.appendChild(alert);
  
    setTimeout(() => {
      alert.style.transition = "opacity 1.5s ease-in-out";
      alert.style.opacity = "0";
      setTimeout(() => {
        alert.remove();
      }, 1000);
    }, 0);
  }
  