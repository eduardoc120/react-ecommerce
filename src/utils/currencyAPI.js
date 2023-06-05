const currencyAPI = async () => {
    // const BASE_URL = 'http://api.exchangeratesapi.io/v1/';
    // const ENDPOINT = 'latest';
    // const ACCESS_KEY = 'f5d95941d6f0a2a3495eb6bdc06b60db';
    // const API_URL = BASE_URL + ENDPOINT + '?access_key=' + ACCESS_KEY;

    // const res = await fetch(API_URL);
    // const data = await res.json();

    // const usdToGbp = data.rates.GBP / data.rates.USD;
    // const usdToEur = 1 / data.rates.USD;

    return { GBP: 0.72, EUR: 0.84};
};

export default currencyAPI;