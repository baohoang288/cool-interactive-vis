// js/main.js
d3.csv('data/Artists.csv').then(artists => {
    console.log('Artists sample:', artists.slice(0, 3));
    console.log('Artist columns:', Object.keys(artists[0]));
    console.log('Gender breakdown:',
        d3.rollup(artists, v => v.length, d => d.Gender)
    );
});

d3.csv('data/Artworks.csv').then(artworks => {
    console.log('Artworks sample:', artworks.slice(0, 3));
    console.log('Artworks columns:', Object.keys(artworks[0]));
    console.log('Year range:', d3.extent(artworks, d => +d.Date).filter(d => d));
});