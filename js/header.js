if (localStorage.getItem("head") === null){
    var head = "<div class=\"header\">\n" +
        "        <div class=\"logo\">\n" +
        "            <a href=\"http://beer-guys.herokuapp.com/\"> <img src=\"img/logo.png\">\n" +
        "                <span id=\"logo\">Beer is good but beers are better</span>\n" +
        "            </a>\n" +
        "        </div>\n" +
        "        <div class=\"menu\">\n" +
        "            <ul>\n" +
        "                <li><a  href=\"#\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\n" +
        "                <li><a  href=\"#careers\"> careers</a></li>\n" +
        "                <li><a  href=\"#about\"> about us</a></li>\n" +
        "                <li class=\"sub-menu\"><a href=\"#brews\"> breweries <span class=\"caret\"></span></a>\n" +
        "                    <ul style=\"padding-bottom: 25px;padding-top: 25px\">\n" +
        "                        <li><a href=\"#\">How to brew</a></li>\n" +
        "                        <li><a href=\"#\">Brewing Factories</a></li>\n" +
        "                        <li><a href=\"#\">Craft Breweries </a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li class=\"sub-menu\"><a href=\"#beers\"> beers <span class=\"caret\"></span></a>\n" +
        "                    <ul style=\"padding-bottom: 25px;padding-top: 25px\">\n" +
        "                        <li><a href=\"https://ntmd.herokuapp.com/\">History of Beer</a></li>\n" +
        "                        <li><a href=\"http://hitokirikioku.herokuapp.com/festival.html\">cultural references</a></li>\n" +
        "                        <li><a href=\"#\">Nutritional values</a></li>\n" +
        "                        <li><a href=\"#\">types of beer</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li><a href=\"#contact us\"> contact us</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"menu-toggle\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\n" +
        "    </div>";
    localStorage.setItem("head", head);
}
$(".home").prepend(localStorage.getItem("head"));