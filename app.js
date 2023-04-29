const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

app.get("/price", async (req, res) => {
    try {
        const { data } = await axios.get("https://www.metal.com/Lithium-ion-Battery/202303240001");
        const $ = cheerio.load(data);
        const selector = `#__next > div > div.main___1ft3R.detail___2oeiJ > div.left___wCEQV > div:nth-child(3) > div.metalsContent___3T_m3 > div.priceContent___3lf_D > div > div:nth-child(1)`
        const priceValueSelector = $(selector).text().split(":")[1].trim();
        res.json({ priceValueSelector });
    } catch (error) {
        res.json({ error: error.message });
    }
}
);

module.exports = app;
