









let url = "https://en.wikipedia.org/w/api.php?action=parse&page=2020_coronavirus_pandemic_in_India&prop=text&format=json&origin=*";

let arr = Array();
let strr = "";
let jsondata;
let div;
let charval;
let fstrnum;
let index_temp;
var actCases;

window.onload = function(){

   

  
    
     visitwiki();
     
    
}
 async function visitwiki(){
   
   try {
    const req = await fetch(url);
    const json = await req.json();
    
    
    charval = json.parse.text['*'];
    
    let start = charval.search('<span class="nowrap">2020 coronavirus pandemic in India by state and union territory</span>');
    let end = charval.search('<th colspan="2">Total');
    let tend = charval.search('<tr class="sortbottom" style="text-align:center;">');
    let stre = Array();

    var o = end;
    var t = 0;
    while(o < tend){
        stre[t] = charval[o];
        
        o++;
        t++;
    }
   var fstrt = stre.join("");
   var regext = /(<([^>]+)>)/ig;
   fstrt = fstrt.replace(regext," ");
   console.log("fstrt: "+fstrt);
   let fstrnumt_regx = /\d+/g;
   let fstrnumt = fstrt.match(fstrnumt_regx);
   console.log("########################## "+fstrnumt);
   var v =0;
   var b = 0;
   let totStr = "";
   var a="", d="", r="", t="";
    while(v<4)
    {
        if(v==0){
            a = fstrnumt[v].toString();
        }else if(v==1){
            d = fstrnumt[v].toString();
        }else if(v==2){
            r = fstrnumt[v].toString();
        }else if(v==3){
            t = fstrnumt[v].toString();
        }
        v++;
    }
    totStr = "Total cases in India: "+"Active cases: "+a+", Deaths: "+d+", Recoveries: "+r+", Total cases: "+t+", <strong style='color: rgb(15, 202, 108);'> Hover or tap on the map for state-wise report</strong>.";
    document.getElementById("totCases").innerHTML = totStr;

    let str = Array();
    var i = start+136+64+64+64;
    var j = 0;
    while(i < end){
        str[j] = charval[i];
        
        i++;
        j++;
    }
   var fstr = str.join("");
   var regex = /(<([^>]+)>)/ig;
   

   fstr = fstr.replace(regex, " ");
   let fstrnum_regx = /\d+/g;
 fstrnum = fstr.match(fstrnum_regx);
  
  console.log("########################## "+fstrnum[61]);
   

} catch (e) {
    console.error(e);

}

}

function handleError(err){
console.warn(err);
}



function getcoviddata(ind){
    
   
var index = ind;

arr.length = 0;
console.log("index: "+index);
 if(ind != 11){
console.log(fstrnum);
var i = 0;
while(fstrnum[i]<28)
{
    var j = 0;
    
    if(index == fstrnum[i]){
        console.log(fstrnum[i]);
        var k = i+1;
        while(j<4){
            arr[j] = fstrnum[k];
            console.log("fstrnum[k]"+fstrnum[k]);
            k++;
            j++;
        }
        break;
    }
    console.log("i: "+i);
    console.log("i fstrnum val: "+fstrnum[i]);
    i=i+5;
   
}
 }else{
    console.log(fstrnum);
var i = 0;
while(fstrnum[i]<28)
{
    var j = 0;
    
    if(index == fstrnum[i]){
        console.log(fstrnum[i]);
        var k = i+1;
        while(j<4){
            if(j==4){j++;continue;}
            else{arr[j] = fstrnum[k];
                console.log("fstrnum[k]"+fstrnum[k]);
                k++;
                j++;}
            
        }
        break;
    }
    var l = 4;
    var m = 66;
    while(l<8)
    {
        arr[l] = fstrnum[m];
        l++;
        m++;
    }
    console.log("i: "+i);
    console.log("i fstrnum val: "+fstrnum[i]);
    i=i+5;
 }}

console.log("arr: "+arr[0]);

let resultDiv = document.getElementById("resultDiv");

if(index!=11)
{strr = "Active Cases: "+arr[0]+", Deaths: "+arr[1]+", Recoveries: "+arr[2]+", Total Cases: "+arr[3];}
else {strr = "J&K [ "+"Active Cases: "+arr[0]+", Deaths: "+arr[1]+", Recoveries: "+arr[2]+", Total Cases: "+arr[3]+"]"+
"Ladhak [ "+"Active Cases: "+arr[4]+", Deaths: "+arr[5]+", Recoveries: "+arr[6]+", Total Cases: "+arr[7]+" ]";}
console.log(strr);


}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({content:function (){return strr;}  });   
});


