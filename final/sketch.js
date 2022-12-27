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
            alert('Todays Actvity: Visit the Chelsea Market, Meatpacking Distract');
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
            alert('Todays Actvity: Chill out at Zuccotti Park and view the lights, FiDi');
            break;

            case '20':
            alert('Todays Actvity: Visit the Luminaries exhibit, Brookfield Place, Battery Park City');
            break;

            case '21':
            alert('Todays Actvity: Winter Latern Festival in Queens, LI, Staten Island', );
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
        ['Brooklyn Museum, NY', 40.671349546127146, -73.96375730105808],
        ['Central Library, Brooklyn, NY', 40.67254944015601, -73.9682162170653],
        ['Prospect Park Zoo, NY', 40.66427511834109, -73.96512605857858],
        ['Barclays Center, Brooklyn, NY', 40.68268267107631, -73.97546296241961]
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h2>Brooklyn Museum</h2>' +
        '<h3>200 Eastern Pkwy, Brooklyn, NY 11238</h3>' +
        '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + 
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Central Library</h2>' +
        '<h3>10 Grand Army Plaza, Brooklyn, NY 11238</h3>' +
        '<p>The Central Library is the main branch of the Brooklyn Public Library, located at Flatbush Avenue.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Prospect Park Zoo</h2>' +
        '<h3>450 Flatbush Ave, Brooklyn, NY 11225</h3>' +
        '<p>The Prospect Park Zoo is a 12-acre zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Barclays Center</h2>' +
        '<h3>620 Atlantic Ave, Brooklyn, NY 11217</h3>' +
        '<p>Barclays Center is a multi-purpose indoor arena in the New York City borough of Brooklyn.</p>' +
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
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}

window.initMap = initMap;
