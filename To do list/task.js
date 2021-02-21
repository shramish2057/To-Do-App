    $(".list").on("keyup", function (e) {
        if (e.keyCode == 13 && $(".list").val() != "") {
            var things = $("<div class='things'></div>").text($(".list").val());
            var remove = $("<i class='fas fa-trash-alt'></i>").click(function () {
                var a = $(this).parent();
                a.fadeOut(function () {
                    a.remove();
                });
            });

            var tick = $("<i class='fas fa-check-circle'></i>").click(function () {
                var a = $(this).parent();
                a.fadeOut(function () {
                    $(".comptasks").append(a);
                    a.fadeIn();
                });
                $(this).remove();
            });

            var reset = $("<i class='fas fa-redo'></i>").click(function () {
                var a = $(this).parent();
                a.fadeOut(function () {
                    $(".remtasks").append(a);
                    a.fadeIn();
                });
                $(this).remove();
            });

            things.append(remove, tick);
            $(".remtasks").append(things);
            $(".list").val("");


        }
    });