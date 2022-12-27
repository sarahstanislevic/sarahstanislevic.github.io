// if i is less than 26, display square
for(i=1; i<26; i++) {

// append
    $('.calendar').append('<div class="door">'+i + '</div>')
}
    // add click handler
    $('.door').click(onDoorClick);



    // switch - similar to if else
    function onDoorClick() {
        var day = $(this).text();

        switch(day) {
            case '1':
            alert('Todays Actvity: Illuminated walking trail @Harvest Moon Farm & Orchard in Lumagica, Westchester ', );
            break;

            case '2':
            alert('Todays Actvity: New York Botanical Garden Glow Light & Train Show @NYBG Bronx,NY');
            break;

            case '3':
            alert('Todays Actvity: LED Light Show @Saks Fifth Ave, Midtown');
            break;

            case '4':
            alert('Todays Actvity: Seaport District tree lighting & the Winter Wonderland Takeover, @Seaport District, Manhattan');
            break;

            case '5':
            alert('Todays Actvity: Lights Display at 12th Ave & 84th St, @Dyker Heights, Brooklyn');
            break; 

            case '6':
            alert('Todays Actvity:Todays Actvity: Amaze Light Festival @Citi Field, Flushing, Queens', );
            break;

            case '7':
            alert('Todays Actvity: Rockefeller Center Tree & Iceskating, @Midtown, Manhattan');
            break;

            case '8':
            alert('Todays Actvity: Bronx Zoo Holiday Light Show, @The Bronx');
            break;

            case '9':
            alert('Todays Actvity: Christmas Shopping & Light Display, @Hudson Yards');
            break;

            case '10':
            alert('Todays Actvity: Music themed light show @Brooklyn Botanic Garden, Brooklyn');
            break;

            case '11':
            alert('Todays Actvity: Eat Food at the Bryant Park Holiday Market, Midtown, Manhattan', );
            break;

            case '12':
            alert('Todays Actvity: Christmas Tree Light Display @Washington Square Park, Greenwich Village');
            break;

            case '13':
            alert('Todays Actvity: See the Rockettes @Radio City Music Hall, Midtown');
            break;

            case '14':
            alert('Todays Actvity: Visit the Chelsea Market, @Meatpacking Distract');
            break;

            case '15':
            alert('Todays Actvity: See the light and sound show, @SUMMIT One Vanderbilt, Manhattan ');
            break; 

            case '16':
            alert('Todays Actvity: See the lite up stars, @The Shops at Columbus Circle, Midtown West', );
            break;

            case '7':
            alert('Todays Actvity: Visit the Pulitzer Fountain & The Plaza Hotel to see animal sculptures, Midtown');
            break;

            case '18':
            alert('Todays Actvity: Take in the lights on Neighborhood Brownstones, UWS');
            break;

            case '19':
            alert('Todays Actvity: Chill out at Zuccotti Park and view the lights, @FiDi');
            break;

            case '20':
            alert('Todays Actvity: Visit the Luminaries exhibit, Brookfield Place, Battery Park City');
            break;

            case '21':
            alert('Todays Actvity: Visit the Winter Latern Festival in Queens, LI, or Staten Island', );
            break;

            case '22':
            alert('Todays Actvity: See the illuminated toy installations between 48th St – 57th St, @Fifth Avenue, Midtown');
            break;

            case '23':
            alert('Todays Actvity: Eat food at the Union Square Holiday Market, 14th st, Manhattan');
            break;

            case '24':
            alert('Merry Christmas Eve!');
            break;

            case '25':
            alert('Merry Christmas!');
            break; 

        }
    }


// Initialize and add the map
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Harvest Moon Farm & Orchard, North Salem, NY', 41.350646281599296, -73.63498051534452],
        ['Dyker Heights, Brooklyn, NY', 40.61673162543615, -74.01491],
        ['Amaze Light Festival, Flushing, NY', 40.757997909252346, -73.84590713068907],
        ['Saks Fifth Ave, Midtown, NY', 40.75881095461653, -73.97688046931093],
        ['New York Botanical Garden Glow, Bronx, NY', 40.86311456845146, -73.88014036137815],
        ['Seaport District, Manhattan', 40.70602396324339, -74.00191721690764],
        ['Rockefeller Center', 40.759292814794996, -73.97880234603359],
        ['Bronx Zoo Holiday Light Show, The Bronx, NY', 40.851211673759884, -73.87708403068848],
        ['Hudson Yards, New York, NY', 40.75452297210832, -74.00162995448743],
        ['Brooklyn Botanic Garden, Brooklyn, NY', 40.66844959612454, -73.96464126137813],


        
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h2>Harvest Moon Farm & Orchard</h2>' +
        '<h3>130 Hardscrabble Rd, North Salem, NY 10560</h3>' +
        '<p>Year-round farm with a produce stand & a bakery, plus fall apple picking & holiday light shows.</p>' + 
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Dyker Heights Light Displays</h2>' +
        '<h3>12th Ave & 84th St, Brooklyn, NY 11238</h3>' +
        '<p>Dyker Heights homes are lit up and ready to be seen! The neighborhood’s impressive light display has been a tradition for more than 30 years and spans three avenues and several streets.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Amaze Light Festival</h2>' +
        '<h3>41 Seaver Wy, Queens, NY 11368</h3>' +
        '<p>One of the country’s largest holiday light shows is now open at Citi Field in Flushing, Queens. This massive display is currently open until January and features millions of dazzling lights to walkthrough and check out.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Saks Fifth Ave Light Show</h2>' +
        '<h3>611 5th Ave, New York, NY 10022</h3>' +
        '<p>Saks Fifth Avenue never disappoints with its enormous front facade decorated in colorful lights sure to get you giddy with holiday cheer! The 13th annual light show features over 700,000 programmed LED lights and can be viewed through end of December/early January. </p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2> New York Botanical Garden Glow & Train Show</h2>' +
        '<h3>2900 Southern Blvd, The Bronx, NY 10458 10560</h3>' +
        '<p>Everyone loves dazzling lights during the winter months, and now, the NYBG is putting together an outdoor, immersive experience that is sure to satisfy! They have created a “glowing world of color” that is centered around their famous landmark, the Haupt Conservatory. Incredible installations will appear in the gardens and Reflecting Pool.</p>' + 
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Fulton Street Tree and Winter Wonderland</h2>' +
        '<h3>19 Fulton St, New York, NY 10038 11238</h3>' +
        '<p>The annual Seaport District tree is lit up on Fulton Street and it’s a beautiful place to view lights along the water. There will be tons of activities, from crafts and live music to pop-up markets to hot chocolate and mulled wine. While you’re over there, be sure to check out Watermark, which is currently hosting their “The Santa Clauses” Winter Wonderland takeover too.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Rockefeller Center Tree & Iceskating</h2>' +
        '<h3>45 Rockefeller Plaza, New York, NY 10111</h3>' +
        '<p>The most iconic light displays of the holiday season in NYC! The gorgeous Christmas tree boasts over 50,000 multi-colored lights and dazzles New Yorkers and tourists alike year after year.</p>' +
        '</div>'],

          ['<div class="info_content">' +
        '<h2>Bronx Zoo Holiday Light Show</h2>' +
        '<h3>River Entrance, 2300 Southern Blvd, The Bronx, NY 10460</h3>' +
        '<p>Covering several acres of the zoo, explore a glowing forest at this year’s Bronx Zoo Lights. See larger-than-life toads, frogs, snails, sunbirds, and more with 21 beaming lanterns.</p>' +
        '</div>']


        ['<div class="info_content">' +
        '<h2>Hudson Yards Holiday Display</h2>' +
        '<h3>30 Hudson Yards, New York, NY 10001</h3>' +
        '<p>This year, Hudson Yards brought back their stunning holiday installation called “Shine Bright.” The neighborhood is decorated in more than two million lights! Prepare to be dazzled by the shopping center’s interior decked out in shimmering string lights. Step outside to see the vessel gleaming gold alongside other holiday trees and the beautiful hot air balloon display!</p>' +
        '</div>'],
        
        ['<div class="info_content">' +
        '<h2>Brooklyn Botanic Garden Light Show</h2>' +
        '<h3>990 Washington Ave, Brooklyn, NY 11225</h3>' +
        '<p>Roam under one million sparkling lights at Brooklyn Botanic Garden’s astonishing holiday trail. Walk along the garden’s landscapes to a curated soundtrack and experience incredible light sculptures, & vibrant effects on the BBG’s landscapes that will illuminate the many trees and water features.</p>' +
        '</div>']



       
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
}

window.initMap = initMap;
