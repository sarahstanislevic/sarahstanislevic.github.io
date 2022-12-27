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
        ['Bryant Park Winter Village', 40.75408726750916, -73.98367083068877],
        ['Radio City Music Hall, Midtown', 40.759227801528134, -73.97880234603359],
        ['Washington Square Park, Greenwich Village', 40.730786238410325, -73.99737491534452],
        ['Chelsea Market,', 40.743122408505805, -74.00605806931092],
        ['SUMMIT One Vanderbilt', 40.75341419302138, -73.97870318465547],
        ['Pulitzer Fountain & The Plaza Hotel, Midtown', 40.76467348290213, -73.97366621534454],
        ['Fifth Avenue, Midtown', 40.75350933628704, -73.98104438853086],
        ['Zuccotti Park', 40.70988298745567, -74.011262],
        ['Brookfield Place', 40.712879407367424, -74.01527387819604],
        ['Winter Lantern Festival, Queens, NY', 40.74812874470595, -73.7221346460336],
        ['73rd Street, UES', 40.77002783854908, -73.95874563287431],
        ['Santaland, Union Square', 40.751578743164174, -73.98909610000001],
        ['Hudson Yards, New York, NY', 40.754449826930674, -74.00237024418067],
        ['Brooklyn Botanic Garden, Brooklyn, NY', 40.66880763550689, -73.96446960218861],
        ['The Shops at Columbus Circle', 40.768857346388785, -73.98312745800453],

        
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h2>Harvest Moon Farm & Orchard</h2>' +
        '<h3>130 Hardscrabble Rd, North Salem, NY 10560</h3>' +
        '<p>This gorgeous illuminated walking trail located about an hour outside of NYC features over 750,000 LED lights that are perfect for your next Instagram post! There are different areas scattered around the Harvest Moon Farm & Orchard including Sparkling light, Into the Wonderland, Magical Trees, A great Celebration, Treats and Sweet, and Beyond the Forest!</p>' + 
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
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Bryant Park Winter Village & Holiday Market</h2>' +
        '<h3>42nd Street and, 6th Ave, New York, NY 10018</h3>' +
        '<p>It’s no secret that we love the Bryant Park Holiday Market and Winter Village, and they have a bunch of lights that makes it even more festive. Plus, what could be better than looking at some holiday lights while shopping for presents, or even ice skating for free? There’s so much to do!</p>' +
        '</div>'],
        
         ['<div class="info_content">' +
        '<h2>Radio City Music Hall</h2>' +
        '<h3>45 Rockefeller Plaza, New York, NY 10111</h3>' +
        '<p>Radio City Music Hall is an iconic NYC venue, especially during the holiday season when The Rockettes famously take it over for a month! Now that they’re back on show, we suggest checking them out, along with their gorgeous Christmas tree that sits on the roof of the building.</p>' +
        '</div>'],

          ['<div class="info_content">' +
        '<h2>Washington Square Park Tree</h2>' +
        '<h3>Washington Square, New York, NY 10012</h3>' +
        '<p>Being situated right under the Washington Square Arch, the angle of this incredible illumination is one of our favorites in all of NYC!</p>' + 
        '</div>'],

           ['<div class="info_content">' +
        '<h2>Chelsea Market</h2>' +
        '<h3>75 9th Ave, New York, NY 10011</h3>' +
        '<p>Walk under multi-colored mylar fringe and ornaments when you visit Chelsea Market. You’ll find dazzling lights along the exterior of the market and decorative presents, lit up Christmas trees, and shiny ornaments on the inside.</p>' +
        '</div>'],

          ['<div class="info_content">' +
        '<h2>SUMMIT One Vanderbilt Light and Sound Show</h2>' +
        '<h3>45 E 42nd St, New York, NY 10017</h3>' +
        '<p>Experience a gasp-worthy light and sound show “AIR at Night” at the world’s most immersive observatory, SUMMIT One Vanderbilt.</p>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h2>Pulitzer Fountain & The Plaza Hotel</h2>' +
        '<h3>764 Central Park S, New York, NY 10019</h3>' +
        '<p>Right across from The Plaza Hotel and east entrance to Central Park, see 32 animal sculptures leap, jump, and skate around the Pulitzer Fountain that’s been decked out in 5,000 feet of lights! The arctic display is made up of 24 floating icebergs and a skating rink! </p>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h2>Illuminated Toy Installations on 5th Ave</h2>' +
        '<h3>5th Ave between 48th St – 57th St, New York, NY</h3>' +
        '<p>The beloved illuminated toy installations are back on Fifth Ave again this year along with an initiative called “Fifth Avenue for All.” Visitors are able to see their favorite childhood toys like teddy bears and jack-in-the-boxes reincarnated in glistening lights! The lights are up now, but are able to being explored even more on select Sundays, when the whole street will be blocked off.</p>' + 
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Tree Light Display at Zuccotti Park</h2>' +
        '<h3>New York, NY 10006</h3>' +
        '<p>Admire thousands of lights on every branch of every tree in Zuccotti Park for a wowing display of holiday cheer.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Brookfield Place Luminaries Exhibit & Iceskating</h2>' +
        '<h3>230 Vesey St, New York, NY 10281</h3>' +
        '<p>The Luminaries exhibit has returned to Brookfield Place and it’s a colorful wonderland. Located in the Winter Garden, head over to make a holiday wish. With every wish, $1 will be donated to City Harvest.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Winter Lantern Festival at Queens County Farm Museum</h2>' +
        '<h3>73-50 Little Neck Pkwy, Queens, NY 11004</h3>' +
        '<p>Created as a way for visitors to experience and learn about the culture and craftsmanship of traditional Chinese lantern festivals, three incredible Winter Lantern Festival events are available this season across Queens Staten Island, and Long Island. Enter into a whimsical world of light and be awed by thousands of handmade glowing lantern figures.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Lights on 73rd Street</h2>' +
        '<h3>New York, NY 10021</h3>' +
        '<p>This street on the Upper East Side is lined with tons of twinkling trees. Take a lovely stroll through the neighborhood and try to find more gorgeously festive decorations throughout!</p>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h2>Santaland at Macys Herald Square</h2>' +
        '<h3>151 W 34th St., New York, NY 10001</h3>' +
        '<p>The famed Macys store mounts a 13,000-square-foot North Pole Christmas village complete with live elves, an enchanted forest featuring animatronic toys, and a train display. At the end, of course, you get to visit with the one true Santa.</p>' +
        '</div>'],

          ['<div class="info_content">' +
        '<h2>Light Display at Hidson Yards</h2>' +
        '<h3>New York, NY 10001</h3>' +
        '<p>This year, Hudson Yards brought back their stunning holiday installation called “Shine Bright.” The neighborhood is decorated in more than two million lights! Prepare to be dazzled by the shopping center’s interior decked out in shimmering string lights. Step outside to see the vessel gleaming gold alongside other holiday trees and the beautiful hot air balloon display!</p>'+
       '</div>'],

        ['<div class="info_content">' +
        '<h2>Brooklyn Botanic Garden Light Show</h2>' +
        '<h3>990 Washington Ave, Brooklyn, NY 11225</h3>' +
        '<p>Roam under one million sparkling lights at Brooklyn Botanic Garden’s astonishing holiday trail. Walk along the garden’s landscapes to a curated soundtrack and experience incredible light sculptures, & vibrant effects on the BBG’s landscapes that will illuminate the many trees and water features.</p>' +
        '</div>'],

        ['<div class="info_content">' +
        '<h2>Lights at The Shops at Columbus Circle</h2>' +
        '<h3>10 Columbus Circle, New York, NY 10019</h3>' +
        '<p>The 14-foot stars have reappeared at The Shops at Columbus Circle and they even dance! Starting at 5 p.m. daily the stars light up in synchronization with holiday music during the Holiday Under the Stars Show at every half hour until 11:00 p.m. These stars will illuminate until January 3rd.</p>' +
        '</div>'],


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
