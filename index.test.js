import { jest } from '@jest/globals';

document.body.innerHTML = `
  <div class="container">
    <div class="search-box">
      <input type="text" />
      <button>Search</button>
    </div>
    <div class="weather-box">
      <img src="" alt="weather icon" />
      <div class="temperature"></div>
      <div class="description"></div>
    </div>
    <div class="weather-details">
      <div class="humidity"><span></span></div>
      <div class="wind"><span></span></div>
    </div>
    <div class="not-found"></div>
  </div>
`;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ }),
  })
);

describe('Weather App', () => {

});
