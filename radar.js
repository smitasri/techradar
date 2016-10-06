function init() {
 // $('#title').text(document.title);  
	   
	   
	var title;
	

 
var data_file = "radardata.csv" ; 

// Quadrant Names
// Make changes here alos if change quadrant name in input csv 
var quad1 = "Techniques" ; 
var quad2 = "Tools"; 
var quad3 = "Platforms" ;
var quad4 = "Languages" ;




	 //  alert(data_file);
	   ////////////
var h = 1000;
var w = 1200;

 ///////////////
 
 //This is the title for your window tab, and your Radar
document.title = "Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.




var h = 1000;
var w = 1200;

var radar_data;
var data = [];




// create PC dynamically here and insert in radar data based on no of items in  quadrents
// Add circle type in which point lies like adopt ,assess ...


function calculatepc(maxrad,quadrant)
{
	//var pcarr=[];
	
	
	var mint1=10;
	var maxt1=80;

	var minr1=20;
	var maxr1=90;
	
	
	var mint2=100;
	var maxt2=170;
	
	var minr2=110;
	var maxr2=190;
	
	
	var mint3=190;
	var maxt3=260;
	
	var minr3=220;
	var maxr3=280;
	
	var mint4=285;
	var maxt4=350;
	
	var minr4=320;
	var maxr4=380;
	
	
	var  r;
	var  theta;
	
 // for(var i=0;i<noofpoints;i++)
	//  {
	if(quadrant ==1) // Tools
		{
		  theta = Math.floor(Math.random() * (maxt1 - mint1 + 1)) + mint1;
		//  window.console.log("theta"+theta);

		}
		else if(quadrant ==2) // Techniques
		{
		  theta = Math.floor(Math.random() * (maxt2 - mint2 + 1)) + mint2;
		//  window.console.log("theta"+theta);

		}
		else if(quadrant ==3) // Platforms 
		{
		  theta = Math.floor(Math.random() * (maxt3 - mint3 + 1)) + mint3;
		 // window.console.log("theta"+theta);

		}
		else if(quadrant ==4) // Languages
		{
		  theta = Math.floor(Math.random() * (maxt4 - mint4 + 1)) + mint4;
		//  window.console.log("theta"+theta);

		}
  if(maxrad == 100)//Adopt
	{
	  r  = Math.floor(Math.random() * (maxr1 - minr1 + 1)) + minr1;
	 // window.console.log("r "+r);
	}else if(maxrad == 200) // Trial
	{
	  r  = Math.floor(Math.random() * (maxr2 - minr2 + 1)) + minr2;
	//  window.console.log("r "+r);
	}else if(maxrad == 300) // Assess
	{
	  r  = Math.floor(Math.random() * (maxr3 - minr3 + 1)) + minr3;
	 // window.console.log("r "+r);
	}else if(maxrad == 400) // Hold
	{
	  r  = Math.floor(Math.random() * (maxr4 - minr4 + 1)) + minr4;
	 // window.console.log("r "+r);
	}
	
	
  var pc = {r:r,t:theta};
 // pcarr[i] = pc ; 
  

	//  }
	// add in pcarray r and theta
  window.console.log("PC :::::::::::::::"+ JSON.stringify( pc));
//return pcarr;
return pc;
}

///////////////



//function readdata()
//{ 
///////////




 ///////////////

		d3.csv(data_file, function(error, data1){
             
			
		 data = data1;
			 
			 
             console.log(data.length);
			 ////write logic to create radardata
	var Row;
 var Cellvalue ;
    var j=0;
	var h = 1000;
	var w = 1200;
						
	var techniquesitems = [];		
	var toolsitems = [];	
	var platformsitems = [];
	var langitems = [];

// var pcarr = calculatepc(rowlen,100,1);	
 var polarcoord;		 
			for (var i=0; i<data.length; i++)
			
				{ 	 Row = data[i];
		
		
		   Cellvalue  = data[i].Quadrant; //      Row.getElementsByTagName("TD")[0].childNodes[0].value;
		 //    alert(Cellvalue);
			 
			 if( (new String((Cellvalue).valueOf())) == ( new String(quad1).valueOf()))
			 {
			   // alert(Cellvalue);
				var ringvalue = data[i].Ring; //Row.getElementsByTagName("TD")[2].childNodes[0].value;
				//var color = "green";
			//	alert(ringvalue);
				switch(ringvalue) {
					case "Adopt":
					//	alert("in technique and Adopt ring");
						polarcoord = calculatepc(100,2);
						
					//	alert(JSON.stringify(polarcoord));
						break;
					case "Trial":
						
						polarcoord = calculatepc(200,2);
					//	alert(polarcoord);
						break;
					case "Assess":
					//	alert(ringvalue);
							polarcoord = calculatepc(300,2);
						//	alert(polarcoord);
						break;
					case "Hold":
					//	alert(ringvalue);
						polarcoord = calculatepc(400,2);
					//	alert(polarcoord);
						break;
					
				}
				//quad1json = quad1data(Row.getElementsByTagName("TD")[1].childNodes[0].value,Row.getElementsByTagName("TD")[2].childNodes[0].value);
				// alert(Row.getElementsByTagName("TD")[1].childNodes[0].value + "ZZZZZZZZ" + Row.getElementsByTagName("TD")[2].childNodes[0].value);
				 
			//	window.console.log(polarcoord);
							//	 alert(data[i].Items);
				 techniquesitems.push({"name": data[i].Items, pc:polarcoord,"movement:": 'c'});

				 
				 
			 }else if ( (new String((Cellvalue).valueOf())) == ( new String(quad2).valueOf()))
			 {
				//quad1json = quad1data(Row.getElementsByTagName("TD")[1].childNodes[0].value,Row.getElementsByTagName("TD")[2].childNodes[0].value);
				// alert(Row.getElementsByTagName("TD")[1].childNodes[0].value + "ZZZZZZZZ" + Row.getElementsByTagName("TD")[2].childNodes[0].value);
				 var ringvalue =  data[i].Ring;
				//var color = "green";
 
				switch(ringvalue) {
					case "Adopt":
				//		alert(ringvalue);
						polarcoord = calculatepc(100,1);
						break;
					case "Trial":
					//	alert(ringvalue);
						polarcoord = calculatepc(200,1);
						break;
					case "Assess":
					//	alert(ringvalue);
							polarcoord = calculatepc(300,1);
						break;
					case "Hold":
					//	alert(ringvalue);
						polarcoord = calculatepc(400,1);
						break;
					
				}

				 toolsitems.push({"name": data[i].Items, pc:polarcoord,"movement:": 'c'});

				 
				 
			 }
			 else if ( (new String((Cellvalue).valueOf())) == ( new String(quad3).valueOf()))
			 {
				//quad1json = quad1data(Row.getElementsByTagName("TD")[1].childNodes[0].value,Row.getElementsByTagName("TD")[2].childNodes[0].value);
				// alert(Row.getElementsByTagName("TD")[1].childNodes[0].value + "ZZZZZZZZ" + Row.getElementsByTagName("TD")[2].childNodes[0].value);
				  var ringvalue =  data[i].Ring;
					switch(ringvalue) {
					case "Adopt":
					//	alert(ringvalue);
						polarcoord = calculatepc(100,3);
						break;
					case "Trial":
					//	alert(ringvalue);
						polarcoord = calculatepc(200,3);
						break;
					case "Assess":
					//	alert(ringvalue);
							polarcoord = calculatepc(300,3);
						break;
					case "Hold":
						//alert(ringvalue);
						polarcoord = calculatepc(400,3);
						break;
					
				}
				//console.log(polarcoord);
				 platformsitems.push({"name": data[i].Items, pc:polarcoord,"movement:": 'c'});

				 
				 
			 } else if ( (new String((Cellvalue).valueOf())) == ( new String(quad4).valueOf()))
			 {
				//quad1json = quad1data(Row.getElementsByTagName("TD")[1].childNodes[0].value,Row.getElementsByTagName("TD")[2].childNodes[0].value);
				// alert(Row.getElementsByTagName("TD")[1].childNodes[0].value + "ZZZZZZZZ" + Row.getElementsByTagName("TD")[2].childNodes[0].value);
				 
				var ringvalue =  data[i].Ring;
					switch(ringvalue) {
					case "Adopt":
				//		alert(ringvalue);
						polarcoord = calculatepc(100,4);
						break;
					case "Trial":
					//	alert(ringvalue);
						polarcoord = calculatepc(200,4);
						break;
					case "Assess":
						//alert(ringvalue);
							polarcoord = calculatepc(300,4);
						break;
					case "Hold":
						//alert(ringvalue);
						polarcoord = calculatepc(400,4);
						break;
					
				}
				 langitems.push({"name": data[i].Items, pc:polarcoord,"movement:": 'c'});

		 
			 }
			 
			  
		
	}
			 
		
	
	var quad1data = "[{\"quadrant\":\""+quad2+"\",\"left\":45,\"top\":18,\"color\":\"#8FA227\",\"items\":";
	//var quad1data = "[ {"quadrant": "Techniques","left" : 45,"top" : 18,"color" : "#8FA227","items" : ";
	
	var newdata1 = quad1data +JSON.stringify(techniquesitems) + "}" ;
	// alert("items 1 : " +newdata1);

	// check if items are not existing for any platform		
    var left = parseInt(w,10)-200+30;	
	var quad2data =",{\"quadrant\":\""+quad1+"\",\"left\":1030,\"top\":18,\"color\":\"#587486\",\"items\":";
	var newdata2 = quad2data +JSON.stringify(toolsitems) + "}" ;
	var top = parseInt(h)/2 + 18;
	var quad3data =",{\"quadrant\":\""+quad3+"\",\"left\":45,\"top\":"+ "518" +",\"color\":\"#DC6F1D\",\"items\":";
	var newdata3 = quad3data +JSON.stringify(platformsitems) + "}" ;
		//	if(!isNaN(newdata3))
	//alert("items 3 : " +newdata3);
	var quad4data =",{\"quadrant\":\""+quad4+"\",\"left\":"+ "1030" +",\"top\":"+ "518"+ ",\"color\":\"#B70062\",\"items\":";
	
	var newdata4 = quad4data +JSON.stringify(langitems) + "}]" ;
	//	if(!isNaN(newdata4))
	//alert("items 4 : " +newdata4);
	var finaldata= newdata1+  newdata2 +  newdata3 + newdata4  ;
	// alert("FINALDATA" + finaldata);
	 
	 
	console.log( finaldata);
	//radar_data = finaldata;
	radar_data = JSON.parse(finaldata);
	/*radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Incremental data warehousing", "pc":{"r":250,"t":165},"movement":"c"},    
            {"name":"Events for messages - CQRS", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Measure Pipeline disruptions", "pc":{"r":280,"t":110},"movement":"c"}, 
            {"name":"Continuous Experimentation", "pc":{"r":230,"t":110},"movement":"c"},
            {"name":"SaaS for non-core systems", "pc":{"r":170,"t":150},"movement":"c"},   
            {"name":"Pair Programming", "pc":{"r":130,"t":170},"movement":"c"}, 
            {"name":"iOS Accessibility", "pc":{"r":170,"t":110},"movement":"c"},
            {"name":"Single Page App", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
            {"name":"iOS Adaptivity", "pc":{"r":180,"t":105},"movement":"c"},   
            {"name":"Build Pipelines", "pc":{"r":180,"t":100},"movement":"c"},   
            {"name":"Data Informed Decion Making", "pc":{"r":130,"t":110},"movement":"c"},
            {"name":"Polygot Programming", "pc":{"r":180,"t":170},"movement":"c"},
             {"name":"Isolated dev envs", "pc":{"r":180,"t":125},"movement":"c"},  
            {"name":"Edge Services", "pc":{"r":130,"t":160},"movement":"c"}, 
            {"name":"Clean Code", "pc":{"r":130,"t":120},"movement":"c"},
            {"name":"Valuable, cheap tests", "pc":{"r":130,"t":150},"movement":"c"},
            {"name":"Sacrificial Architecture", "pc":{"r":80,"t":100},"movement":"c"},   
            {"name":"Sensible defaults", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Dependency Injection", "pc":{"r":80,"t":130},"movement":"c"},   
            {"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

		{ "name": 'Docker', pc: { r: 170, t: 19 }, movement: 't' },
		{ "name": 'bind',    pc: { r: 150, t: 69 },    movement: 'c' },
	{ "name": 'Appium',    pc: { r: 110, t: 70 },    movement: 'c',    domain: 'mobile, front-end' }, 
	{ "name": 'Android Studio',    pc: { r: 180, t: 66 },    movement: 'c',    domain: 'mobile, dev' },
	{ "name": 'Responsive Android',    pc: { r: 150, t: 14 },    movement: 'c' },
	{ "name": 'AutoLayout - iOS',    pc: { r: 180, t: 55 },    movement: 'c',    domain: '' },
	{ "name": 'Kiwi - iOS unit test',    pc: { r: 120, t: 14 },    movement: 'c',    domain: '' },
	{ "name": 'BEM',    pc: { r: 160, t: 60 },    movement: 'c',    domain: 'front-end' },
	{ "name": 'Crashlytics',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'mobile' },
    { "name": 'Git',    pc: { r: 130, t: 73 },    movement: 'c' },

  { "name": 'Ansible',    pc: { r: 280, t: 74 },    movement: 'c' },  
  { "name": 'Hip Chat',    pc: { r: 280, t: 78 },    movement: 'c' },
  { "name": 'Trello',    pc: { r: 260, t: 75 },    movement: 'c' },
  { "name": 'JDBI ^',    pc: { r: 80, t: 56 },    movement: 'c' },
  { "name": 'AppManager ^',    pc: { r: 360, t: 82 },    movement: 'c' },
  { "name": 'Hibernate ^',    pc: { r: 380, t: 56 },    movement: 'c' },
  { "name": 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' }, 
  { "name": 'Subversion',    pc: { r: 330, t: 18 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"OpenId Connect", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},
            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            {"name":"RHEL 7", "pc":{"r":170,"t":215},"movement":"c"},      

            {"name":"App containers", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"Google Cloud Data Flow", "pc":{"r":275,"t":260},"movement":"t"},
            { name: 'Postgres as NoSQL',              pc: { r: 220, t: 255 },              movement: 'c' },
            {"name":"AWS 2014 Innovations", "pc":{"r":270,"t":195},"movement":"c"},
            {"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
            { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
            { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
            {"name":"Google App Engine", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Google as corporate platform", "pc":{"r":290,"t":200},"movement":"c"},   


            {"name":"Google Play - (alpha/beta builds)", "pc":{"r":30,"t":225},"movement":"c"},
            {"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            {"name":"AWS", "pc":{"r":90,"t":250},"movement":"c"},   
            { name: 'BigIP v11',              pc: { r: 50, t: 257 },              movement: 'c' },



            {"name":"Ruby On Rails", "pc":{"r":390,"t":215},"movement":"c"},
            {"name":"Everest", "pc":{"r":390,"t":185},"movement":"c"},   
            {"name":"Magnolia CMS", "pc":{"r":390,"t":235},"movement":"c"},   
            {"name":"Java EE - the Bad Parts", "pc":{"r":390,"t":245},"movement":"c"},   
            {"name":"MS SqlServer", "pc":{"r":390,"t":190},"movement":"c"},
            {"name":"RHEL 5", "pc":{"r":370,"t":195},"movement":"c"}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'CDI', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'Jersey', pc: { r: 60, t: 310 },  movement: 'c' },

            { name: 'Guice', pc: { r: 60, t: 278 },  movement: 'c' },
            { name: 'RxJava', pc: { r: 150, t: 298 },              movement: 'c',  domain: 'template' },          

            {"name":"Java 8", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the good parts ^", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"Serverside Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Coffeescript", "pc":{"r":270,"t":282},"movement":"c"},
            {"name":"Functional Reactive Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },
            { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
            {"name":"Web Objects", "pc":{"r":390,"t":290},"movement":"c"},
            {"name":"ASP Classic", "pc":{"r":375,"t":330},"movement":"c"},
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
*/
var techradartitle ;




 //$('#title').text(techradartitle); 
  
 var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')

// arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});

//quadrant lines -- vertical
radar.add(pv.Line)
        .data([(h/2-radar_arcs[radar_arcs.length-1].r),h-(h/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

//quadrant lines -- horizontal 
radar.add(pv.Line)
        .data([(w/2-radar_arcs[radar_arcs.length-1].r),w-(w/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .bottom(h/2)
        .left(function(d) {return d;})       
        .strokeStyle("#bbb");


// blips
// var total_index=1;
// for (var i = 0; i < radar_data.length; i++) {
//     radar.add(pv.Dot)       
//     .def("active", false)
//     .data(radar_data[i].items)
//     .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
//     .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
//                         //console.log("name:" + d.name + ", x:" + x); 
//                         return x;})
//     .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
//                           //console.log("name:" + d.name + ", y:" + y); 
//                           return y;})
//     .title(function(d) { return d.name;})		 
//     .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
//     .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
//     .angle(Math.PI)  // 180 degrees in radians !
//     .strokeStyle(radar_data[i].color)
//     .fillStyle(radar_data[i].color)
//     .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
//     .anchor("center")
//         .add(pv.Label)
//         .text(function(d) {return total_index++;}) 
//         .textBaseline("middle")
//         .textStyle("white");            
// }


//Quadrant Ledgends
var radar_quadrant_ctr=1;
var quadrantFontSize = 18;
var headingFontSize = 14;
var stageHeadingCount = 0;
var lastRadius = 0;
var lastQuadrant='';
var spacer = 6;
var fontSize = 10;
var total_index = 1;


//alert("SSSSSSSSSSSSSSS   "+radar_data.length);

//TODO: Super fragile: re-order the items, by radius, in order to logically group by the rings.
for (var i = 0; i < radar_data.length; i++) {
    //adjust top by the number of headings.
    if (lastQuadrant != radar_data[i].quadrant) {
        radar.add(pv.Label)         
            .left( radar_data[i].left )         
            .top( radar_data[i].top )  
            .text(  radar_data[i].quadrant )		 
            .strokeStyle( radar_data[i].color )
            .fillStyle( radar_data[i].color )                    
            .font(quadrantFontSize + "px sans-serif");
         
        lastQuadrant = radar_data[i].quadrant;

    }

    // group items by stage based on how far they are from each arc
    var itemsByStage = _.groupBy(radar_data[i].items, function(item) {
      for(var arc_i = 0; arc_i < radar_arcs.length; arc_i++) {
        if (item.pc.r < radar_arcs[arc_i].r)
        {
          return arc_i;
        }
      }
      return 0;
    });
    
    var offsetIndex = 0;
    for (var stageIdx in _(itemsByStage).keys()) {

        if (stageIdx > 0) {
            offsetIndex = offsetIndex + itemsByStage[stageIdx-1].length + 1; 
            console.log("offsetIndex = " + itemsByStage[stageIdx-1].length, offsetIndex );
        }

        radar.add(pv.Label)         
            .left( radar_data[i].left + headingFontSize )
            .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
            .text( radar_arcs[stageIdx].name)
            .strokeStyle( '#cccccc' )
            .fillStyle( '#cccccc')                    
            .font(headingFontSize + "px Courier New");

    radar.add(pv.Label)             
        .left( radar_data[i].left )         
        .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
        .strokeStyle( radar_data[i].color )
        .fillStyle( radar_data[i].color )                    
        .add( pv.Dot )            
            .def("i", radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + spacer  + (offsetIndex * fontSize) )
            .data(itemsByStage[stageIdx])            
            .top( function() { return ( this.i() + (this.index * fontSize) );} )   
            .shape( function(d) {return (d.movement === 't' ? "triangle" : "circle");})                 
            .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
            .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
            .size(fontSize) 
            .angle(45)            
            .anchor("right")                
                .add(pv.Label)                
                .text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

    radar.add(pv.Dot)       
      .def("active", false)
      .data(itemsByStage[stageIdx])
      .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
      .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
                          //console.log("name:" + d.name + ", x:" + x); 
                          return x;})
      .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                            //console.log("name:" + d.name + ", y:" + y); 
                            return y;})
      .title(function(d) { return d.name;})		 
      .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
      .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
      .angle(Math.PI)  // 180 degrees in radians !
      .strokeStyle(radar_data[i].color)
      .fillStyle(radar_data[i].color)
      .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
      .anchor("center")
          .add(pv.Label)
          .text(function(d) {return total_index++;}) 
          .textBaseline("middle")
          .textStyle("white");            


    }
}      
       
 radar.anchor('radar');
 radar.render();
});


 
 
 ////////////////////
   
 var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')

// arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});

//quadrant lines -- vertical
radar.add(pv.Line)
        .data([(h/2-radar_arcs[radar_arcs.length-1].r),h-(h/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

//quadrant lines -- horizontal 
radar.add(pv.Line)
        .data([(w/2-radar_arcs[radar_arcs.length-1].r),w-(w/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .bottom(h/2)
        .left(function(d) {return d;})       
        .strokeStyle("#bbb");


// blips
// var total_index=1;
// for (var i = 0; i < radar_data.length; i++) {
//     radar.add(pv.Dot)       
//     .def("active", false)
//     .data(radar_data[i].items)
//     .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
//     .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
//                         //console.log("name:" + d.name + ", x:" + x); 
//                         return x;})
//     .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
//                           //console.log("name:" + d.name + ", y:" + y); 
//                           return y;})
//     .title(function(d) { return d.name;})		 
//     .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
//     .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
//     .angle(Math.PI)  // 180 degrees in radians !
//     .strokeStyle(radar_data[i].color)
//     .fillStyle(radar_data[i].color)
//     .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
//     .anchor("center")
//         .add(pv.Label)
//         .text(function(d) {return total_index++;}) 
//         .textBaseline("middle")
//         .textStyle("white");            
// }


//Quadrant Ledgends
var radar_quadrant_ctr=1;
var quadrantFontSize = 18;
var headingFontSize = 14;
var stageHeadingCount = 0;
var lastRadius = 0;
var lastQuadrant='';
var spacer = 6;
var fontSize = 10;
var total_index = 1;


//alert("SSSSSSSSSSSSSSS   "+radar_data.length);

//TODO: Super fragile: re-order the items, by radius, in order to logically group by the rings.
for (var i = 0; i < radar_data.length; i++) {
    //adjust top by the number of headings.
    if (lastQuadrant != radar_data[i].quadrant) {
        radar.add(pv.Label)         
            .left( radar_data[i].left )         
            .top( radar_data[i].top )  
            .text(  radar_data[i].quadrant )		 
            .strokeStyle( radar_data[i].color )
            .fillStyle( radar_data[i].color )                    
            .font(quadrantFontSize + "px sans-serif");
         
        lastQuadrant = radar_data[i].quadrant;

    }

    // group items by stage based on how far they are from each arc
    var itemsByStage = _.groupBy(radar_data[i].items, function(item) {
      for(var arc_i = 0; arc_i < radar_arcs.length; arc_i++) {
        if (item.pc.r < radar_arcs[arc_i].r)
        {
          return arc_i;
        }
      }
      return 0;
    });
    
    var offsetIndex = 0;
    for (var stageIdx in _(itemsByStage).keys()) {

        if (stageIdx > 0) {
            offsetIndex = offsetIndex + itemsByStage[stageIdx-1].length + 1; 
            console.log("offsetIndex = " + itemsByStage[stageIdx-1].length, offsetIndex );
        }

        radar.add(pv.Label)         
            .left( radar_data[i].left + headingFontSize )
            .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
            .text( radar_arcs[stageIdx].name)
            .strokeStyle( '#cccccc' )
            .fillStyle( '#cccccc')                    
            .font(headingFontSize + "px Courier New");

    radar.add(pv.Label)             
        .left( radar_data[i].left )         
        .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
        .strokeStyle( radar_data[i].color )
        .fillStyle( radar_data[i].color )                    
        .add( pv.Dot )            
            .def("i", radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + spacer  + (offsetIndex * fontSize) )
            .data(itemsByStage[stageIdx])            
            .top( function() { return ( this.i() + (this.index * fontSize) );} )   
            .shape( function(d) {return (d.movement === 't' ? "triangle" : "circle");})                 
            .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
            .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
            .size(fontSize) 
            .angle(45)            
            .anchor("right")                
                .add(pv.Label)                
                .text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

    radar.add(pv.Dot)       
      .def("active", false)
      .data(itemsByStage[stageIdx])
      .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
      .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
                          //console.log("name:" + d.name + ", x:" + x); 
                          return x;})
      .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                            //console.log("name:" + d.name + ", y:" + y); 
                            return y;})
      .title(function(d) { return d.name;})		 
      .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
      .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
      .angle(Math.PI)  // 180 degrees in radians !
      .strokeStyle(radar_data[i].color)
      .fillStyle(radar_data[i].color)
      .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
      .anchor("center")
          .add(pv.Label)
          .text(function(d) {return total_index++;}) 
          .textBaseline("middle")
          .textStyle("white");            


    }
}      
       
 radar.anchor('radar');
 radar.render();
     
  };
