//Program is written by Saman Siddiqui
// Date: 19-2-24
//This program use function describe_city


function describe_city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  

  describe_city('Karachi', 'Pakistan');
  describe_city('Makkah', 'Saudia Arabia');
  describe_city('Dubai');