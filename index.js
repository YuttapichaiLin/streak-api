// create pipeline with stages
const axios = require('axios').default;
const { URLSearchParams } = require('url');

const encodedParams = new URLSearchParams();
encodedParams.set('name', 'Edusmith Pipeline');
encodedParams.set('teamWide', 'true');
encodedParams.set('stageNames', [ "Lead", "Contacted", "Pitched", "Demo", "Negotiating", "Close-lost", "Close-won" ]);
encodedParams.set('teamKey', 'agxzfm1haWxmb29nYWVyEQsSBFRlYW0YgIDmsY7hyAgM');

const options = {
  method: 'PUT',
  url: 'https://www.streak.com/api/v1/pipelines',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic MmM0MDFlNmIzNDFjNDg3OTgxMTE5NTE2MmQ5YTkxOTk6'
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

