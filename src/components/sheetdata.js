

  let victims = ["09","90"]; 
  let i = 0;
  


fetch('https://sheet.best/api/sheets/aab1b969-26ab-455d-95c8-46fa54203fe6')
  .then(response => response.json())
  .then(data => victims.push(data)
    
  )
  .catch(error => {
    console.error(error);
  });

for(i = 0 ; i < victims.length ; i ++) {
  console.log(victims[i]);
}

