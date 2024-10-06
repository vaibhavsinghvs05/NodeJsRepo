const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = "https://timesofindia.indiatimes.com/";
const companyName = {};

async function getHtml(req, res) {
    const { data: html } = await axios.get(url);
    console.log(html);
    return res.json("data", html);
}

getHtml().then((res) => {
    const $ = cheerio.load(res);
    const companyName = 'Samsung';

    const foundCompany = $('*').filter((index, element) => {
        return $(element).text().includes(companyName);
    });

    if(foundCompany.length > 0){
        foundCompany.each((index, element) => {
            console.log($(element).text())
        });
    } else {
        console.log("Company Name Not Found");
    }

});
