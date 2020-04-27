function load_contents()
{
   drawSummary();
   draw_gender();
   
    dist();
}
async function dist()
{
    var response =await  fetch("https://us-central1-covid19-odisha.cloudfunctions.net/getDist");
    data_dist =await  response.json();
    var dist_name=[];
    var dist_count=[];
    var j=0;
    for(var i=0; i<data_dist.length;i++)
    {
        
        if(data_dist[i].data>0)
        { 
            dist_name[j]=data_dist[i].name;
            dist_count[j]=data_dist[i].data;
            j++;
        }

    }
    var ctx = document.getElementById('draw_dist').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dist_name,
                    datasets: [{
                        label: 'District WIse Case',
                        data: dist_count,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 0, 0, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
}


async function draw_gender()
{   var response =await  fetch("https://us-central1-covid19-odisha.cloudfunctions.net/getGender");
    data_gender =await  response.json();
    //console.log(data_gender);
    var gender = document.getElementById('gender').getContext('2d');
    
    var gender_data = {
        labels: [
            "Male ",
            "Female "
        ],
        datasets: [
            {
                data: [data_gender[0].male,data_gender[0].female],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 2
            }]
    };
     
    var chartOptions = {
     // rotation: -Math.PI,
      cutoutPercentage: 80,
     // circumference: Math.PI,
      legend: {
        position: 'top'
      },
      animation: {
        animateRotate: true,
        animateScale: true
      }
    };
    var pieChart = new Chart(gender, {
        type: 'doughnut',
        data: gender_data,
        options: chartOptions
      });
}


var data;
async function drawSummary()
{
  var response =await  fetch("https://us-central1-covid19-odisha.cloudfunctions.net/getNumbers");
   data =await  response.json();
  //console.log(data);
      var date=[];
      var confirm=[];
      var active=[];
      var recov=[];
      var dec=[];

      for(var i=0;i<data.length;i++){
          date[i]=data[i].date;
          confirm[i]=data[i].confirmed;
          active[i] = data[i].active;
          recov[i] = data[i].recovered;
          dec[i] = data[i].deceased;
      }
      
      //console.log(confirm);
var ovr = document.getElementById('trend').getContext('2d');
var myChart = new Chart(ovr, {
    type: 'line',
    data: {
        labels: date,
        datasets: [{
            label: 'Confirmed',
            data: confirm,
            borderColor: "#FF4500",
            fill: false
        },
        {
            label: 'Acrive',
            data: active,
            borderColor: '#0000FF',
            fill: false
        },
        {
            label: "Recovered",
            data: recov,
            borderColor: '#008000',
            fill: false
        },
        {
            label: "Deceased",
            data: dec,
            borderColor: '#FF0000',
            fill: false
        }
    ],
        
        borderColor: ['rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'

      ]

    },
    options: {
      legend:{
        display:true
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: true,
                    max:120
                },
                gridLines:{
                  display:false
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: false
                },
                gridLines:{
                  display:true
                }
            }]
        }
    }
});

var ctx = document.getElementById('chart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: date,
              datasets: [{
                  //label: 'Confirmed',
                  data: confirm,
                  borderColor: "#FF4500",
                  fill: false
              }],
              
              borderColor: ['rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'

            ]
    
          },
          options: {
            legend:{
              display:false
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false,
                          max:120
                      },
                      gridLines:{
                        display:false
                      }
                  }],
                  xAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false
                      },
                      gridLines:{
                        display:false
                      }
                  }]
              }
          }
      });
      var cty = document.getElementById('chart-act').getContext('2d');
      var myChart = new Chart(cty, {
          type: 'line',
          data: {
              labels: date,
              datasets: [{
                  //label: 'Confirmed',
                  data: active,
                  borderColor: '#0000FF',
                  fill: false
              }], 
              
              borderColor: ['rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'

            ]
    
          },
          options: {
            legend:{
              display:false
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false,
                          max:120
                      },
                      gridLines:{
                        display:false
                      }
                  }],
                  xAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false
                      },
                      gridLines:{
                        display:false
                      }
                  }]
              }
          }
      });
      var ctz = document.getElementById('chart-recov').getContext('2d');
      var myChart = new Chart(ctz, {
          type: 'line',
          data: {
              labels: date,
              datasets: [{
                  // label: 'Recovered',
                  data: recov,
                  borderColor: '#008000',
                  fill: false
              }], 
              
              borderColor: ['rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'

            ]
    
          },
          options: {
            legend:{
              display:false
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false,
                          max:120
                      },
                      gridLines:{
                        display:false
                      }
                  }],
                  xAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false
                      },
                      gridLines:{
                        display:false
                      }
                  }]
              }
          }
      });
      var cta = document.getElementById('chart-dec').getContext('2d');
      var myChart = new Chart(cta, {
          type: 'line',
          data: {
              labels: date,
              datasets: [{
                  // label: 'Recovered',
                  data: dec,
                  borderColor: '#FF0000',
                  fill: false
              }], 
              
              borderColor: ['rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'

            ]
    
          },
          options: {
            legend:{
              display:false
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false,
                          max:120
                      },
                      gridLines:{
                        display:false
                      }
                  }],
                  xAxes: [{
                      ticks: {
                          beginAtZero: true,
                          display: false
                      },
                      gridLines:{
                        display:false
                      }
                  }]
              }
          }
      });
}
