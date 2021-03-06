import apiConfig from '../config/apiConfig.js';
import { MakeRequest } from './MakeRequest.js';

export const wordsCallback = (position) => {
    if (typeof(position) !== "object" && !position.coords && !position.coords.latitude && !position.coords.longitude) {
        return false;
    }

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = "https://api.what3words.com/v3/convert-to-3wa?coordinates=" + latitude + "%2C" + longitude + "&key=" + apiConfig.what3words.accessKey;
    MakeRequest(url).then((response) => {
        const words = JSON.parse(response.responseText).words;
        const searchString = words.replace(/\./g, '-');
        const imageURL = "https://api.unsplash.com/search/photos?query=" + searchString + "&client_id=" + apiConfig.unsplash.accessKey;
        MakeRequest(imageURL).then((response) => {
            const images = JSON.parse(response.responseText);
            let imageURL;
            if (images.results[0]) {
                imageURL = images.results[0].urls.regular;
            } else {
                imageURL = "No image found! Sorry :(";
            }
            window.setImageState(imageURL);
        }).catch((error) => {
            console.log(error);
            return false;
        })
    }).catch((error) => {
        console.log(error);
        return false;
    });
};