# weather
City Weather app, using the open weather map API.  Search for any city in the world and 
see the current weather.

The search feature contains search suggestions based on the user input. 

While waiting for the page to load I added a spinner icon

Services used for the open weather api provider, and the city list provider, with error handlers.


# Future improvements:
 
  - Have an additional feature that would display the weather in the user's current GPS location before they performed a search, using the geolocation plugin.

  - To create the search suggestions I downloaded a json file from openweathermap containing the city list, and edited it to contain only the relevant data. However I would have preferred to not download a large file to perform this feature but would connect to an API that contained this data instead.

  - Spend more time Styling the app