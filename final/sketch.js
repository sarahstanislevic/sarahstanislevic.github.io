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
            alert('Todays Actvity:');
            break;

            case '11':
            alert('Todays Actvity:', );
            break;

            case '12':
            alert('Todays Actvity:');
            break;

            case '13':
            alert('Todays Actvity:');
            break;

            case '14':
            alert('Todays Actvity:');
            break;

            case '15':
            alert('Todays Actvity:');
            break; 

            case '16':
            alert('Helloooooooo', );
            break;

            case '7':
            alert('He');
            break;

            case '18':
            alert('He');
            break;

            case '19':
            alert('He');
            break;

            case '20':
            alert('He');
            break;

            case '21':
            alert('Helloooooooo', );
            break;

            case '22':
            alert('He');
            break;

            case '23':
            alert('He');
            break;

            case '24':
            alert('He');
            break;

            case '25':
            alert('He');
            break; 

        }
    }


 