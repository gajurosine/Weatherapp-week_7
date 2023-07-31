async function getWeatherData(location) {

    const apiKey = 'YOUR_API_KEY'; 
  

    const geocodingURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
    const geocodingResponse = await fetch(geocodingURL);
    const geocodingData = await geocodingResponse.json();
    console.log('Geocoding Response:', geocodingData);
  
    if (geocodingData.length === 0) {
      throw new Error('location not found.');
    }
  
    const latitude = geocodingData[0].lat;
    const longitude = geocodingData[0].lon;
    console.log('latitude:', latitude, 'longitude:', longitude);
  
 
    const weatherURL = `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${latitude}&lon=${longitude}&date=2023-07-31&appid=${apiKey}`;
    const response = await fetch(weatherURL);
  
    if (!response.ok) {
      throw new Error('network response was not ok');
    }
  
    const weatherData = await response.json();
    console.log('Weather Data:', weatherData);
    return weatherData;
  }
  


