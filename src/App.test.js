import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { imageSource } from './components/Image.js';
import { getLocation } from './components/GetLocationButton.js';
import apiConfig from './config/apiConfig.js';
import { getBarLocation } from './components/SearchBar.js'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("should include the apiConfig object", () => {
    expect(apiConfig).toBeDefined();
    expect(apiConfig.what3words).toBeDefined();
    expect(apiConfig.unsplash).toBeDefined();
    expect(apiConfig.what3words.accessKey).toBeDefined();
    expect(apiConfig.unsplash.accessKey).toBeDefined();
    expect(apiConfig.googleGeocode.accessKey).toBeDefined();
    expect(typeof(apiConfig.what3words.accessKey)).toEqual("string");
    expect(typeof(apiConfig.unsplash.accessKey)).toEqual("string");
    expect(typeof(apiConfig.googleGeocode.accessKey)).toEqual("string");
});

it("should check the image string for \"unsplash\"", () => {
    expect(imageSource("unsplash")).toEqual(<img alt="Your Location" src="unsplash"/>);
    expect(imageSource("Bliss")).toEqual(<p>Bliss</p>);
});

it("should return false if navigator.geolocation.getCurrentLocation is falsy", () => {
    expect(getLocation()).toBeFalsy();
});

it("should return false if the search bar doesn't pass a string", () => {
    expect(getBarLocation()).toBeFalsy();
    expect(getBarLocation(32)).toBeFalsy();
    expect(getBarLocation(() => {return true})).toBeFalsy();
    expect(getBarLocation(null)).toBeFalsy();
    expect(getBarLocation(true)).toBeFalsy();
});