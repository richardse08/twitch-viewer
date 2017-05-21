   
$(document).ready(function() { 
    var twitchArr = ["SayeedBlack", "ESL_SC2", "OgamingSC2", "lirik", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]

    for (i=0; i < twitchArr.length; i++) {

        var urlBase = 'https://wind-bow.gomix.me/twitch-api'
        var urlType = '/channels';
        var urlFull = urlBase + urlType + '/' + twitchArr[i];
        var notfound = 'https://cdn.instructables.com/FTU/1BBR/FLI8MT4O/FTU1BBRFLI8MT4O.MEDIUM.jpg';

        $.getJSON(urlFull, function(data) {
            var name = data.display_name;
            var logo = data.logo;
            var game = data.game;
            var status = data.status;
            var message = data.message;
            var linker = data.url;
            
            var myhtml = "<div class='myresult'>";
                myhtml += "<div class='row'>";
                    myhtml += "<div class='col-md-1'>";    
                    myhtml += "<a href=" + linker + ">";
                    myhtml += "<img class='img-responsive' src ='" + logo + "'alt='no image found'>";
                    myhtml += "</a>";
                    myhtml += "</div>";
        
                    myhtml += "<div class='col-md-2'>";   
                    if (name == undefined) {
                    } //display nothing
                    else myhtml += "<div class ='name'>" + name + "</div>";
                    myhtml += "</div>";
                
                    if (message !== undefined) {
                        myhtml += "<div class='message'>" + message + "</div>";
                     }
                    else if (game !== null) {
                        myhtml += "<div class='col-md-2'>";
                        myhtml += "<div class='game'>" + game + "</div>";
                        myhtml += "</div>";
                        myhtml += "<div class='status'>" + status + "</div>";
                    } else myhtml += "<div class='game'>User Offline</div>";
                myhtml += "</div>"; // row close
                myhtml += "</div>"; // final div
            $(".target").append(myhtml);
        });
    } //close loop                
}); //document ready end