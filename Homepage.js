async function getCoordinates()
{
    var city = document.getElementById("city").value;
    const api_url = 'https://api.opencagedata.com/geocode/v1/json?q='+city+'&key=54c402a5300d4371b1b15f0128864a4f&language=tr&pretty=1';
    const response = await fetch(api_url);
    const data2 = await response.json();
    const {results} = data2;
    const object_values=Object.values(results);             
    var coordinates= object_values[0]; 
    const {geometry}= coordinates;
    const {lat,lng}= coordinates.geometry;
    var latitude_output = lat;
    var longtitude_output = lng;
    document.getElementById('latitude_output').textContent = latitude_output;
    document.getElementById('longtitude_output').textContent = longtitude_output; 
    document.getElementById("longtitude_output").style.display = 'none';
    document.getElementById("latitude_output").style.display = 'none';
    document.getElementById("latitude").value = latitude_output;
    document.getElementById("longtitude").value = longtitude_output;
} 
function clean_latitude(){
  document.getElementById("latitude").value = ""
}  
function clean_longtitude(){
  document.getElementById("longtitude").value = ""
}  

var array_ALLSKY_SFC_SW_DWN=[]; 
var array_CLRSKY_SFC_SW_DWN =[];
var array_ALLSKY_KT =[]; 
var array_CLRSKY_SFC_SW_DNI=[];
var array_CLRSKY_SFC_SW_DIFF=[];
var array_CLRSKY_SRF_ALB= [];
var array_ALLSKY_SFC_SW_DNI=[];
var array_ALLSKY_SFC_SW_DIFF=[];
var array_ALLSKY_SRF_ALB=[];

var global_Arr_0=[];  
var global_Arr_1 =[];
var global_Arr_2 =[]; 
var global_Arr_3 =[]; 
var global_Arr_4 =[];
var global_Arr_5 =[];
var global_Arr_6 =[];
var global_Arr_7 =[];
var global_Arr_8 =[];
var global_Arr_time = [];
var array_result = [];  

const months = [" ", "January", "February","March","April", "May", "June", "July","August","September","October","November","December"];


async function getData_ALLSKY_KT()  //All Sky Insolation Clearness Index
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;

    const api_url_1st_parameter = 'https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_KT&format=json&header=true';
    const response = await fetch(api_url_1st_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_KT}= properties.parameter;
    array_ALLSKY_KT =Object.values(ALLSKY_KT);  
    for (var i = 0; i < 12; i++) 
    global_Arr_0.push((array_ALLSKY_KT[i]));                         
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_KT[0],array_ALLSKY_KT[1],array_ALLSKY_KT[2],array_ALLSKY_KT[3],array_ALLSKY_KT[4],array_ALLSKY_KT[5],array_ALLSKY_KT[6],array_ALLSKY_KT[7],array_ALLSKY_KT[8],array_ALLSKY_KT[9],array_ALLSKY_KT[10],array_ALLSKY_KT[11]];
    var barColors = ["red", "skyblue","brown","orange","purple","lime","goldenrod","aqua","beige","cadetblue","green","blue"];   
        new Chart("All Sky Insolation Clearness Index:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Insolation Clearness Index:"
            }
          }
        });       
} 
async function getData_CLRSKY_SFC_SW_DWN() //Clear Sky Surface Shortwave Downward Irradiance
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_2nd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=CLRSKY_SFC_SW_DWN&format=json&header=true'; 
    const response = await fetch(api_url_2nd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{CLRSKY_SFC_SW_DWN}= properties.parameter;
    array_CLRSKY_SFC_SW_DWN=Object.values(CLRSKY_SFC_SW_DWN); 
    for (var i = 0; i < 12; i++) 
    global_Arr_1.push(array_CLRSKY_SFC_SW_DWN[i]);   
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_CLRSKY_SFC_SW_DWN[0],array_CLRSKY_SFC_SW_DWN[1],array_CLRSKY_SFC_SW_DWN[2],array_CLRSKY_SFC_SW_DWN[3],array_CLRSKY_SFC_SW_DWN[4],array_CLRSKY_SFC_SW_DWN[5],array_CLRSKY_SFC_SW_DWN[6],array_CLRSKY_SFC_SW_DWN[7],array_CLRSKY_SFC_SW_DWN[8],array_CLRSKY_SFC_SW_DWN[9],array_CLRSKY_SFC_SW_DWN[10],array_CLRSKY_SFC_SW_DWN[11]];
    var barColors = ["indigo", "green","bisque","orange","brown","lime","purple","darkred","beige","mediumpurple","deeppink","darksalmon"];
        new Chart("Clear Sky Surface Shortwave Downward Irradiance:", {
          width:600,
          height:600,
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Clear Sky Surface Shortwave Downward Irradiance:"
            }
          }
        });           
} 
async function getData_ALLSKY_SFC_SW_DWN() //All Sky Surface Shortwave Downward Irradiance
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_SFC_SW_DWN&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_SFC_SW_DWN}= properties.parameter;
    array_ALLSKY_SFC_SW_DWN=Object.values(ALLSKY_SFC_SW_DWN); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_2.push(array_ALLSKY_SFC_SW_DWN[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_SFC_SW_DWN[0],array_ALLSKY_SFC_SW_DWN[1],array_ALLSKY_SFC_SW_DWN[2],array_ALLSKY_SFC_SW_DWN[3],array_ALLSKY_SFC_SW_DWN[4],array_ALLSKY_SFC_SW_DWN[5],array_ALLSKY_SFC_SW_DWN[6],array_ALLSKY_SFC_SW_DWN[7],array_ALLSKY_SFC_SW_DWN[8],array_ALLSKY_SFC_SW_DWN[9],array_ALLSKY_SFC_SW_DWN[10],array_ALLSKY_SFC_SW_DWN[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("All Sky Surface Shortwave Downward Irradiance:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Surface Shortwave Downward Irradiance:"
            }
          }
        });          
}  
async function getData_CLRSKY_SFC_SW_DNI() //Clear Sky Shortwawe Direct Normal Irradiance
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=CLRSKY_SFC_SW_DNI&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{CLRSKY_SFC_SW_DNI}= properties.parameter;
    array_CLRSKY_SFC_SW_DNI=Object.values(CLRSKY_SFC_SW_DNI); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_3.push(array_CLRSKY_SFC_SW_DNI[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_CLRSKY_SFC_SW_DNI[0],array_CLRSKY_SFC_SW_DNI[1],array_CLRSKY_SFC_SW_DNI[2],array_CLRSKY_SFC_SW_DNI[3],array_CLRSKY_SFC_SW_DNI[4],array_CLRSKY_SFC_SW_DNI[5],array_CLRSKY_SFC_SW_DNI[6],array_CLRSKY_SFC_SW_DNI[7],array_CLRSKY_SFC_SW_DNI[8],array_CLRSKY_SFC_SW_DNI[9],array_CLRSKY_SFC_SW_DNI[10],array_CLRSKY_SFC_SW_DNI[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("Clear Sky Shortwawe Direct Normal Irradiance:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Clear Sky Shortwawe Direct Normal Irradiance:"
            }
          }
        });          
}  
async function getData_CLRSKY_SFC_SW_DIFF() // Clear Sky Shortwawe Diffusion Irradiance
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=CLRSKY_SFC_SW_DIFF&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{CLRSKY_SFC_SW_DIFF}= properties.parameter;
    array_CLRSKY_SFC_SW_DIFF=Object.values(CLRSKY_SFC_SW_DIFF); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_4.push(array_CLRSKY_SFC_SW_DIFF[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_CLRSKY_SFC_SW_DIFF[0],array_CLRSKY_SFC_SW_DIFF[1],array_CLRSKY_SFC_SW_DIFF[2],array_CLRSKY_SFC_SW_DIFF[3],array_CLRSKY_SFC_SW_DIFF[4],array_CLRSKY_SFC_SW_DIFF[5],array_CLRSKY_SFC_SW_DIFF[6],array_CLRSKY_SFC_SW_DIFF[7],array_CLRSKY_SFC_SW_DIFF[8],array_CLRSKY_SFC_SW_DIFF[9],array_CLRSKY_SFC_SW_DIFF[10],array_CLRSKY_SFC_SW_DIFF[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("Clear Sky Shortwawe Diffusion Irradiance:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Clear Sky Shortwawe Diffusion Irradiance:"
            }
          }
        });          
}  
async function getData_CLRSKY_SRF_ALB() // Clear Sky Surface Albedo
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=CLRSKY_SRF_ALB&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{CLRSKY_SRF_ALB}= properties.parameter;
    array_CLRSKY_SRF_ALB=Object.values(CLRSKY_SRF_ALB); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_5.push(array_CLRSKY_SRF_ALB[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_CLRSKY_SRF_ALB[0],array_CLRSKY_SRF_ALB[1],array_CLRSKY_SRF_ALB[2],array_CLRSKY_SRF_ALB[3],array_CLRSKY_SRF_ALB[4],array_CLRSKY_SRF_ALB[5],array_CLRSKY_SRF_ALB[6],array_CLRSKY_SRF_ALB[7],array_CLRSKY_SRF_ALB[8],array_CLRSKY_SRF_ALB[9],array_CLRSKY_SRF_ALB[10],array_CLRSKY_SRF_ALB[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("Clear Sky Surface Albedo:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Clear Sky Surface Albedo:"
            }
          }
        });          
} 

async function getData_ALLSKY_SFC_SW_DNI() // All Sky Direct Normal Irradiance 
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_SFC_SW_DNI&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_SFC_SW_DNI}= properties.parameter;
    array_ALLSKY_SFC_SW_DNI=Object.values(ALLSKY_SFC_SW_DNI); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_6.push(array_ALLSKY_SFC_SW_DNI[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_SFC_SW_DNI[0],array_ALLSKY_SFC_SW_DNI[1],array_ALLSKY_SFC_SW_DNI[2],array_ALLSKY_SFC_SW_DNI[3],array_ALLSKY_SFC_SW_DNI[4],array_ALLSKY_SFC_SW_DNI[5],array_ALLSKY_SFC_SW_DNI[6],array_ALLSKY_SFC_SW_DNI[7],array_ALLSKY_SFC_SW_DNI[8],array_ALLSKY_SFC_SW_DNI[9],array_ALLSKY_SFC_SW_DNI[10],array_ALLSKY_SFC_SW_DNI[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("All Sky Direct Normal Irradiance:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Direct Normal Irradiance:"
            }
          }
        });          
} 

async function getData_ALLSKY_SFC_SW_DIFF() // All Sky Shortwawe Diffusion
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_SFC_SW_DIFF&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_SFC_SW_DIFF}= properties.parameter;
    array_ALLSKY_SFC_SW_DIFF=Object.values(ALLSKY_SFC_SW_DIFF); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_7.push(array_ALLSKY_SFC_SW_DIFF[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_SFC_SW_DIFF[0],array_ALLSKY_SFC_SW_DIFF[1],array_ALLSKY_SFC_SW_DIFF[2],array_ALLSKY_SFC_SW_DIFF[3],array_ALLSKY_SFC_SW_DIFF[4],array_ALLSKY_SFC_SW_DIFF[5],array_ALLSKY_SFC_SW_DIFF[6],array_ALLSKY_SFC_SW_DIFF[7],array_ALLSKY_SFC_SW_DIFF[8],array_ALLSKY_SFC_SW_DIFF[9],array_ALLSKY_SFC_SW_DIFF[10],array_ALLSKY_SFC_SW_DIFF[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("All Sky Shortwawe Diffusion:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Shortwawe Diffusion:"
            }
          }
        });          
} 

async function getData_ALLSKY_SRF_ALB() // All Sky Albedo
{
    var latitude =  document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_SRF_ALB&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_SRF_ALB}= properties.parameter;
    array_ALLSKY_SRF_ALB=Object.values(ALLSKY_SRF_ALB); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_8.push(array_ALLSKY_SRF_ALB[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_SRF_ALB[0],array_ALLSKY_SRF_ALB[1],array_ALLSKY_SRF_ALB[2],array_ALLSKY_SRF_ALB[3],array_ALLSKY_SRF_ALB[4],array_ALLSKY_SRF_ALB[5],array_ALLSKY_SRF_ALB[6],array_ALLSKY_SRF_ALB[7],array_ALLSKY_SRF_ALB[8],array_ALLSKY_SRF_ALB[9],array_ALLSKY_SRF_ALB[10],array_ALLSKY_SRF_ALB[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("All Sky Albedo:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Albedo:"
            }
          }
        });          
} 
async function sun_rise() {
  var time;
  
  for(var i=0;i<12;i++){
        
    var m = i+1;
    if (m < 9) 
    {
      m = "0"+m;
    }
  var ending_date = document.getElementById("ending_date").value;
  var latitude =  document.getElementById("latitude").value;
  var longitude = document.getElementById("longtitude").value; 
  const api_url = "https://api.sunrise-sunset.org/json?lat="+latitude+"&lng="+longitude+"&date="+ending_date+"-"+m+"-15&formatted=0";
  const response = await fetch(api_url);
  const veri = await response.json(); 
  const{results} = veri;
  const{day_length}= veri.results;
  time = day_length / 3600;
  global_Arr_time.push(time);
  }
  console.log(global_Arr_time);
  
  
}


function calculate()
{
  var latitude = document.getElementById("latitude").value;
   var z= parseInt(latitude);
 
   var t_angle = document.getElementById("t_angle").value;
   var t = parseInt(t_angle);
   if (t<0 || t>90 ) {
    alert("Tilt Angle must be between 0 to 90 degree.Calculation failed...");
}
    for(var i=0;i<12;i++){
        
        var m = i+1;
        var h= 0;
        if (m < 7) {
          h = [((m-1) * (7.67)) - 16.87]
        }
        else
        {
          h = 16.87 - ((m-7) * 7.67)
        }
        var k=(z-h)*Math.PI/180
        var x=(k-t)*Math.PI/180
        var g_direct_clear= global_Arr_3[i] * (Math.cos(x)) ;
        var g_diffuse_clear = global_Arr_6[i] * (1+Math.cos(t)/2); // CLRSKY_SFC_SW_DIFF * (1+cos⁡(x))/2
        var g_reflected_clear = global_Arr_1[i] * global_Arr_5[i] * (1-Math.cos(t)/2);
        var g_direct_all_sky = global_Arr_6[i] * (Math.cos(x)) ;
        var g_diffise_all_sky = global_Arr_7[i] * (1+Math.cos(t)/2);
        var g_reflected_all_sky = global_Arr_2[i] * global_Arr_8[i] * (1-Math.cos(t)/2);
        var a = g_direct_clear+ g_diffuse_clear + g_reflected_clear;
        var b = g_direct_all_sky + g_diffise_all_sky + g_reflected_all_sky;
        var y = global_Arr_0[i];
        var final_result= ((a*y)+ ((1-y) * b )) * global_Arr_time[i] / 24;
        var final_result_2D= Math.round(final_result * 100) / 100

        array_result.push(final_result_2D);    
        var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];
        var yValues = [array_result[0],array_result[1],array_result[2],array_result[3],array_result[4],array_result[5],array_result[6],array_result[7],array_result[8],array_result[9],array_result[10],array_result[11]];
        var barColors = ["red", "green","blue","orange","brown","lime","purple","aqua","beige","cadetblue","brown","yellow"];
        
        new Chart("results", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "RESULTS"
            }
          }
        });
}  
}






