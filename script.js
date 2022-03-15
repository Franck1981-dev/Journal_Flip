$(function() {
    $('.page-next').hover(
        function() {
            $(this).stop().animate({ width: 150, height: 150 }, 500);
        },
        function() {
            $(this).stop().animate({ width: 50, height: 50 }, 500);
        }
    );
})

$(function() {
    $('.page-back').hover(
        function() {
            $(this).stop().animate({ width: 150, height: 150 }, 500);
        },
        function() {
            $(this).stop().animate({ width: 50, height: 50 }, 500);
        }
    );
})

function date() {
    //Initialisation
    var datetext = '';
    var heuretext = '';

    var date = new Date();

    // Récupération du jour de la semaine (chaine)
    var jour_actuel = date.getDay();
    var chaine_jour = Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    var jour_semaine = chaine_jour[jour_actuel];

    // Mise en forme du jour
    if (date.getDate() <= 9)
        var jour = '0' + date.getDate();
    else
        var jour = date.getDate();

    // Mise en forme du mois
    var mois_actuel = date.getMonth();
    var chaine_mois = Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    var mois = chaine_mois[mois_actuel];

    // Construction des chaines finales date
    datetext += jour_semaine + ' ' + jour + ' ' + mois + ' ' + date.getFullYear();

    // Affichage de la date
    document.getElementById('date').innerHTML = datetext;
}