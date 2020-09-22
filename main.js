function list(data) {
  var rollno = new Array();
  var count = new Array();
  var name = new Array();
  var allRows = data.split(/\r?\n|\r/);
  //document.write(allRows.length)
  for (i = 1; i <= allRows.length - 2; i++) {
    var rowcells = allRows[i].split(",");
    rollno[i] = rowcells[0];
    //document.write(rowcells[0]+","+rowcells[1]+"<br>")
    name[i] = String(rowcells[1]);
    count[i] = 0;
  }
  rollno.splice(0, 1);
  name.splice(0, 1);
  count.splice(0, 1);
  console.log(rollno);
  console.log(name);
  console.log(count);
  random(rollno, name, count);

}
function random(r, n, c) {
    var table = "<table>";
    table += "<thead><tr><th>Roll NO</th><th>Name</th><th>Marked By</th></thead><tbody>";
  var cnt = 0;
  var roll = [...r];
  var name = [...n];
  for (j = 0; j < 48; j++) {
    //document.write(roll[j]+" "+name[j]+"<br>")
    console.log(j + 1);
    table+="<tr><td>"+roll[j]+"</td><td>"+name[j]+"</td><td>"
    table+="<table font-size:5px>"
    for (i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * n.length);
      console.log(r[random], n[random], c[random]);

      if (n[random] == name[j]) {
        i = i - 1;
      } else {
        if (c[random] < 3) {
          c[random] += 1;
          table+="<tr><td>"+n[random]+"</td></tr>";
        } else {
          r.splice(random, 1);
          n.splice(random, 1);
          c.splice(random, 1);
          i = i - 1;
        }
      }
    }
    table+="</table>"
    table+="</td></tr>"
    //document.write("<br>");
  }
  //alert(cnt);
  table+="</table>"
  $("body").append(table);
}
