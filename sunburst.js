var myPlot = document.getElementById('myDiv'),
    hoverInfo = document.getElementById('hoverinfo');


var parent = sb_data.map(sb_data => sb_data.parents);
// console.log(parents);

var label = sb_data.map(sb_data => sb_data.labels);
console.log(label);

var value = sb_data.map(sb_data => sb_data.locals);
// console.log(values);

var st_texts = sb_data.map(sb_data => sb_data.style_info);
// console.log(st_texts);

var data = [
{
  "type":"sunburst",
  "labels":label,
  "parents":parent,
  "values":value,
  "hovertext":st_texts,
  "textbelow":st_texts,
  "hoverinfo":"label+value",

   "leaf": {"opacity": 0.4},
   "marker": {"line": {"width": 2}},
   "branchvalues": 'total'
 }];


//  console.log(sb_data)
// console.log(data)

// var data2 = [
//   {

// "labels":labels,
//   "parents":parents,
//   "values":st_texts,
// }];



var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
  width: 600,
  height: 600
};


Plotly.newPlot('starburst', data, layout)


//console.log(data2)
myPlot 
      .on("plotly_hover", function(data) {
        //  console.log(data2);
        var infoText = data.points.map(function(d) {
          // return d.hovertext;
          // console.log(d.labels);
          return (
            "<b>Style: </b>" +
            d.label +
            "<br> <b>Parent: </b>" +
            d.parent +
            "<br><b>Description: </b>" +
             //d.meta +
            //  "<br><b>DescriptionIBU: </b>" +
            //  d.customdata +
            // "<br><br>" +
            d.hovertext
                    );
        });
        
        hoverInfo.innerHTML = infoText.join("<br/>");
      })
      .on("plotly_unhover", function(data) {
        hoverInfo.innerHTML = "";
      });
  