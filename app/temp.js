const fetch = require('node-fetch');

async function temp(){
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
    console.log(dist_name)
    console.log(dist_count)
}
temp()