# assignment-nodejs-api

This project provides a single endpoint:

GET /price

This endpoint returns the current price of Lithium-ion Battery mentioned on metal.com. The price is scraped from the webpage using the cheerio library.

The code for the /price endpoint is located in the routes/price.js file. When a GET request is made to this endpoint, the function defined in this file is executed.

The function first uses the axios library to make a GET request to the webpage. If the request is successful, the HTML response is passed to the cheerio library for parsing. The function then selects the element that contains the current price and extracts its text content.

If any errors occur during the scraping process or the webpage is unavailable, the function returns an error message with the appropriate status code.
