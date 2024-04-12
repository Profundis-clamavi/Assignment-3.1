
//loads the XML file
$(document).ready(function () {
    $("#loadXmlBtn").click(function () {
        $.get("project.xml", function (data) {
            $("#project").html("");
            $(data).find("management").children().each(function () {
                var xmlDoc = $(this);
                $("#project").append("<div class='roundedSquare'>" + "<h2>" +
                    xmlDoc.find("name").text() + "</h2>" +
                    xmlDoc.find("cost").text() + "<br>" +
                    xmlDoc.find("description").text() + "<br>" + "</div>");
            });

        });
    });
});


//loads the JSON file
$(document).ready(function () {
    $("#loadJsonBtn").click(function () {
        $.getJSON("team.json", function (data) {
            $("#teammembers").html("");
            $.each(data, function () {

                $.each(this, function (key, value) {

                    $("#teammembers").append(
                        "<div class='roundedSquare'>" +
                        "Position: " + value.Position + "<br>" +

                        "Name: " + value.Name + "<br>" +

                        "Salary: " + value.Salary + "<br><br>"
                        + "</div>");

                });

            });

        });
    });
});