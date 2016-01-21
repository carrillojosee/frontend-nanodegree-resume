/*
This is empty on purpose! Your code to build the resume will go here.
 */



var work =
{
	"jobs" :
	[
		{
			"employer" : "DST Controls",
			"title" : "Project Engineer",
			"location" : "Benicia, CA",
			"datesWorked" : "2015 to Present",
			"description" : "Programmer, PI Integrator, IDK"
		}

	]


};
//console.log(work);
var projects =
{
	"project" :
	[
		{
			"title" : "PGE Flow Limit Tool",
			"datesWorked" : "2015",
			"description" : "FLT in addition to the SLIC tool is" + 
					"used to provide help to engineers on site and "+
					"provide them the necessary information needed for"+ 
					"any outages or recent/present/future work",
			"images" : 
			[
				"images/fry.jpg" ,  "images/fry.jpg"
			]
		},
		{
			"title" : "PGE Flow Limit Tool",
			"datesWorked" : "2015",
			"description" : "FLT in addition to the SLIC tool is" + 
					"used to provide help to engineers on site and "+
					"provide them the necessary information needed for"+ 
					"any outages or recent/present/future work",
			"images" : 
			[
				"images/fry.jpg" ,  "images/fry.jpg"
			]
		}
	]
};

var bio =
{
	"name" : "Jose Carrillo",
	"role"  : "Project Engineer",
	"contactInfo" :
	 {
	 	"mobile" : "323-973-8804",
	 	"email" : "jcarrillo@dstcontrols.com",
	 	"github" : "carrillojosee",
	 	"twitter" : "none",
	 	"blog" : "none",
	 	"location" : "Pleasant Hill, CA"
	},
	"welcomeMessage" : "Hello there give me a job",
	"pictureURL" : "images/fry.jpg",
	"skills" :
	[
		"java", "c++", "programmer", "plays lots of video games"
	]
}

var education =
{
	"schools" :
	 [
	 	 {
			"name" : "California Polytechnic State University SLO",
			"degree" : "Bachelor's of Science in EE",
			"location" : "San Luis Obispo",
			"yearsAttended" : "2012-2015",
			"major" : "Electrical Engineering", 
			"url" : "calpoly.edu"
		},
		{
			"name" : "Canada College",
			"degree" : "Associate's of Science in Engineering",
			"location" : "Redwood City, CA",
			"yearsAttended" : "2008-2012",
			"major" : "Engineering", 
			"url" :  "canadacollege.edu"
		} 
	]
	,
	"onlineCourses" : 
	[
		{
			"title" : "JavaScript for Beginners",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "www.udacity.com/courser/ud804"
		}

	]
}

//var name = "Jose Carrillo";
var formattedName = HTMLheaderName.replace( "%data%", bio.name);
//var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace( "%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + 
					formattedGithub + formattedBlog + formattedLocation;
$("#topContacts").append(formattedContacts);


//var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
//$("#header").append(formattedEmail);

var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);



if(bio.skills.length > 0 )
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}


for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	var formattedWork = formattedDates + formattedWorkLocation + formattedDescription;
	$(".work-entry:last").append(formattedWork);
}

/*
$(document).click(function (loc)
{
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
} ); */

//var name = "Jose Carrillo";
function inName(name)
{
 	var finalName = name;
    // Your code goes here!
    //console.log(finalName.toLocaleUpperCase);

    var first  = finalName.slice(0, finalName.indexOf(' '));
    var last = finalName.slice(finalName.indexOf(' ') );
    first = first.toLocaleLowerCase();
   // first[0] = finalName[0].toLocaleUpperCase();
  
    first = first.slice(0,1).toLocaleUpperCase() + first.slice(1);
    //console.log(first);
    last = last.toLocaleUpperCase();
    //console.log(last);
    // Don't delete this line!
    //return first+last;
    return first + last;
}

$("#main").append(internationalizeButton);



projects.display = function()
{
	for(proj in projects.project)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		 $(".project-entry:last").append(formattedProjTitle);

		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[proj].datesWorked);
		 $(".project-entry:last").append(formattedProjDates);

		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		$(".project-entry:last").append(formattedProjDescription);

	
		
		
		if( projects.project[proj].images.length > 0 )
		{
			for( image in projects.project[proj].images)
			{
			 	var formattedProjImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
			 	$(".project-entry:last").append(formattedProjImage);

			}
		}

	}
}
projects.display();

education.display = function()
{

	for( school in education.schools )
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].yearsAttended);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		var formattedSchool = formattedName+formattedDegree+formattedDates+
				formattedLocation+formattedMajor;
		$(".education-entry:last").append(formattedSchool);

	}
	$(".education-entry:last").append(HTMLonlineClasses);

	for( onlineCourse in education.onlineCourses)
	{
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

		var formattedOnlineCourse =formattedTitle+formattedSchool+formattedDates+formattedURL ;
		$(".education-entry:last").append(formattedOnlineCourse);
	}
}


education.display();

$("#mapDiv").append(googleMap);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + 
					formattedGithub + formattedBlog + formattedLocation;
$("#footerContacts").append(formattedContacts);