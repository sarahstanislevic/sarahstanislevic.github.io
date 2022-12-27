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
          // The location of Uluru
          const uluru = { lat: -25.344, lng: 131.031 };
          // The map, centered at Uluru
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
          });
          // The marker, positioned at Uluru
          const marker = new google.maps.Marker({
            position: uluru,
            map: map,
          });
        }

        window.initMap = initMap;

 