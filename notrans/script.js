        // document.write("<center><font size=+3 style='color: black;'>");
        var day = new Date();
        var hr = day.getHours();
        if (hr >= 0 && hr < 12) {
            document.getElementById("wish").innerHTML = "Good Morning!";
        } else if (hr == 12) {
            document.getElementById("wish").innerHTML = "Good Noon!"
        } else if (hr >= 12 && hr <= 17) {
            document.getElementById("wish").innerHTML = "Good Afternoon!";
        } else {
            document.getElementById("wish").innerHTML = "Good Evening!";
        }
      



        document.getElementById("myBtn").addEventListener("click", function() {
            location.replace("../transactions/index.html")
          });

