//Written by: Saman Siddiqui
// Date: 19-2-24


const current_users: string[] = ['ahmed', 'haider', 'pari', 'fari', 'zihan'];


const new_users: string[] = ['ahmed', 'haider', 'danish', 'Salman', 'usman'];


for (let new_user of new_users) {
  
  const lowercase_new_user = new_user.toLowerCase();
  
  
  if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
    
      console.log(`The username '${new_user}' is not available. Please choose a different username.`);
  } else {
    
      console.log(`The username '${new_user}' is available.`);
  }
}
