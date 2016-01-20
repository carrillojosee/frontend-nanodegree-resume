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
console.log(work);
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
				"image1.png" ,  "image2.png"
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
			"location" : "San Luis Obispo",
			"yearsAttended" : "2012-2015",
			"major" : "Electrical Engineering", 
			"url" : "calpoly.edu"
		},
		{
			"name" : "Canada College",
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
			"title" : "JavaScript for Begineers",
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

		