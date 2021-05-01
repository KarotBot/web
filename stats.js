$.ajax({
    url: 'https://stats.karot.xyz',
    type: "GET",
    dataType: "json",
    success : function(data) {
        console.log('Hello there! :D');
        document.getElementById("guilds").innerHTML = data.guilds + " Guilds"
        document.getElementById("users").innerHTML = data.users + " Users"
    }
   });