export async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;
    console.log(`User's IP: ${ip}`); // logs the user's IP address to the console
    return ip
  }
  