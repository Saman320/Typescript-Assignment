//Written by: Saman Siddiqui
//Date: 18-2-2024



const usernames: string[] = ['admin', 'Ahmed', 'Ali', 'Saad', 'Farhad'];


usernames.forEach(username) => {

  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
