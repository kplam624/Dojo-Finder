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

var parents = sb_data.map(sb_data => sb_data.parents);
console.log(parents);

var labels = sb_data.map(sb_data => sb_data.labels);
console.log(labels);

var values = sb_data.map(sb_data => sb_data.locals);
console.log(values);




var data = [
{
  "type":"sunburst",
  "labels":labels,
  "parents":parents,
  "values":values,
   "leaf": {"opacity": 0.4},
   "marker": {"line": {"width": 2}},
   "branchvalues": 'total'
 }];


console.log(sb_data)
console.log(data)


var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
  width: 600,
  height: 600
};


Plotly.newPlot('myDiv', data, layout)

myPlot = document.getElementById("myDiv");