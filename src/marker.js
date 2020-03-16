
const mapboxgl = require("mapbox-gl");

const markerMaker = (icon, coords) => {
    let links = {
        pin: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/220/round-pushpin_1f4cd.png",
        hotel: "http://i.imgur.com/D9574Cu.png",
        restaurant: "http://i.imgur.com/cqR6pUI.png",
        activity: "http://i.imgur.com/WbMOfMl.png"
    } 

    console.log(links[icon])

    const marker = document.createElement("div")
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${links[icon]})`;
    return new mapboxgl.Marker(marker).setLngLat(coords);
}

module.exports = markerMaker;
