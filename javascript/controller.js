$(document).ready(function () {
    setInterval(getTime, 1000);
    setInterval(showEpochValue, 1000);  
    function getTime(){
        $("#time-display").html(showTime());
    } 

 
    $("#time-display").click(function () {
        $("#time-display").html(changeTimeUnit());
    });

    $("button").click(function () {
        $("button").each(function (i) {
            $('#list').append(
                $('<li>').append(
                    $('<span>').attr('class', 'tab').append(showTime())
                ));
        });
    });

    function showEpochValue() {
        let epoche = $("#epoch").val(Number(Date.now().toString()));
        return epoche;

    }
    $("#epoch").html(showEpochValue().val());

    $(function () {
        $("#draggable").draggable();
    });

});