var data = [
{
  "type": "sunburst",
  "labels": ["Strikes", "Punching", "Kicking", "Other Strikes", 
            "Grappling", "Throwing", "Joint Lock", "Pinning Tech",
            "Boxing", "Wing CHun", "Karate",
            "Taekwondo", "Capoeira", "Savate",
            "Lethwei", "Muay Thai", "Kung Fu", "Silat", "Kalaripayattu",
            "Hapkido", "Judo", "Sumo", "Wrestling", "Aikido",
            "Judo","Jujutsu", "Brazillian jiu-jitsu", "Sambo", "Catch Wrestling", 
            "Judo", "Wrestling", "Aikido",
                                                                    ],
  "parents": ["", "Strikes", "Strikes", "Strikes",
             "", "Grappling", "Grappling", "Grappling",
             "Punching", "Punching", "Punching", 
             "Kicking", "Kicking","Kicking", 
             "Other Strikes", "Other Strikes","Other Strikes","Other Strikes","Other Strikes",
             "Throwing","Throwing","Throwing","Throwing","Throwing",
             "Joint Lock","Joint Lock","Joint Lock","Joint Lock","Joint Lock",
             "Pinning Tech", "Pinning Tech","Pinning Tech"           
            ],
  "values":  [100, 20, 20, 20, 
              100, 20, 20, 20,    
              1,10,1,1,
              1,1,1,1,
              1,1,1,1,
              1,10,1,1,
              1,1,1,1,
              1,10,1,1, ],
    "leaf": {"opacity": 0.4},
    "marker": {"line": {"width": 2}},
    "branchvalues": 'total'
}];

var layout = {
  "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
  width: 600,
  height: 600
};


Plotly.newPlot('myDiv', data, layout)

myPlot = document.getElementById("myDiv");