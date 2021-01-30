// var data = [
// {
//   "type": "sunburst", 
//   "labels": labels["Strikes", "Punching", "Kicking", "Other Strikes", 
//             "Grappling", "Throwing", "Joint Lock", "Pinning Tech",
//             "Boxing", "Wing CHun", "Karate",
//             "Taekwondo", "Capoeira", "Savate",
//             "Lethwei", "Muay Thai", "Kung Fu", "Silat", "Kalaripayattu",
//             "Hapkido", "Judo", "Sumo", "Wrestling", "Aikido",
//             "Judo","Jujutsu", "Brazillian jiu-jitsu", "Sambo", "Catch Wrestling", 
//             "Judo", "Wrestling", "Aikido",
//                                                                     ],
//   "parents": ["", "Strikes", "Strikes", "Strikes",
//              "", "Grappling", "Grappling", "Grappling",
//              "Punching", "Punching", "Punching", 
//              "Kicking", "Kicking","Kicking", 
//              "Other Strikes", "Other Strikes","Other Strikes","Other Strikes","Other Strikes",
//              "Throwing","Throwing","Throwing","Throwing","Throwing",
//              "Joint Lock","Joint Lock","Joint Lock","Joint Lock","Joint Lock",
//              "Pinning Tech", "Pinning Tech","Pinning Tech"           
//             ],
//   "values":  [10000, 1000, 1000, 1000, 
//               10000, 1000, 1000, 1000,    
//               5,5,5,5,
//               10,10,10,5,
//               5,5,5,15,
//               285,223,198,149,
//               121,119,82,59,
//               52,44,44,42, ],
//     "leaf": {"opacity": 0.4},
//     "marker": {"line": {"width": 2}},
//     "branchvalues": 'total'
// }];

// // data2 = sb_data.labels
// console.log(data2)

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


Plotly.newPlot('myDiv', data, layout)


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
  