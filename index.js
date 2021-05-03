function calender(){
    var year = document.getElementById('year').value;
    var mont = new Array();

    mont[0] =  "january";
    mont[1] =  "february";
    mont[2] =  "march";
    mont[3] =  "april";
    mont[4] =  "may";
    mont[5] =  "june";
    mont[6] =  "july";
    mont[7] =  "august";
    mont[8] =  "september";
    mont[9] =  "october";
    mont[10] =  "november";
    mont[11] = "december";

    document.write("<h1> calender - year " +year+ "</h1>");
    document.writeln("<table border = '0'  width='100%'><tr>");

    for(month = 0;month<12;month++){

        dt=new Date(year, month, 01);

        var first_day = dt.getDay();

        dt.setMonth(month+1,0);

        var last_date = dt.getDate();

        var dte=1;

        if(month==4 || month==8)
        {
            document.write("</tr><tr>");
        }

        document.write("<td>");
        document.write("<center><b>" +mont[dt.getMonth()]+ "</b></center>");

        document.write("<table border='1'><tr><td>sun</td><td>mon</td><td>tue</td><td>wed</td><td>thur</td><td>fri</td><td>sat</td></tr>");

        for(i=0;i<35;i++){
            if((i%7)==0)
            {
                document.write("</tr><tr>");
            }
            if((i >= first_day)&&(dte<=last_date))
            {
                document.write("<td>" +dte + "</td>");
                dte=dte+1;
            }
            else
            {
                document.write("<td></td>");
            }
        }
        document.write("</tr></table>");
        document.write("</td>");
    }
document.write("</tr></table>");


}