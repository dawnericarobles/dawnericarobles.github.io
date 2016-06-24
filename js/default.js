
$(document).ready(function() {

  $("#Ltoggle").click(function(){
		$("#hdrNav").toggleClass("slide");
 	});


  // if (window.location.href.indexOf("videos") > -1) {
  // 	console.log("found video on link");
  // }
  

//this is to avoid the error.. making sure to ONLY do this on default page
if (window.location.href.indexOf("default") > -1) { 
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  	imgHolder.className = "imgDisplay";
  	// console.log("IN MOBILE!");
  }
}

//if it is mobile, then allow scrolling and lessen the spaces
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var divs = ["#videos", "#breeds", "#contact", "#about"];
	for (var i = 0; i < divs.length; i++) {
		$(divs[i]).css("display", "block");
		$(divs[i]).css("padding-top", "2em");
		//console.log(divs[i]);
	}
	$("#ftrSpace").css("display", "none");
	$("iframe").attr("width", "85%");
	$("iframe").attr("height", "80%");	
	$("iframe").css("margin-top", "1em");
	$(".imgDisplay").css("margin-top", "6.25em");	
} else {

	$("#aVideos").click(VidPage);
	$("#aBreeds").click(BrdPage);
	$("#aContact").click(ContPage);
	$("#aAbout").click(AbtPage);

	$("iframe").attr("width", "400");
	$("iframe").attr("height", "450");
}



//resizing of the iframe for diff screens
$(window).resize(function() {
    $("iframe").height($("#middle").height());
});

  
// ~POPULATE DROPDOWN ON PAGE LOAD~
  	var tmpVideolists = [];
  	tmpVideolists.push("Bulldogs vs Plastic Bag");
  	tmpVideolists.push("Chowchow learning how to swim");
  	tmpVideolists.push("Savage corgi attack");
  	tmpVideolists.push("Husky fighting a balloon");
  	tmpVideolists.push("I won't let you get drunk!");
  	tmpVideolists.push("Bob Marley the Pug");
  	tmpVideolists.push("F-r-i-e-n-d-s");
  	tmpVideolists.push("Pug Panda Panda ");
  	tmpVideolists.push("Me whenever I see a dog");
  	tmpVideolists.push("Alaskan Malamutes imitates baby crawling");

  	for (var i = 0; i < tmpVideolists.length; i++) {
		var tempVid = tmpVideolists[i];
		$('#ddVideos').append($("<option></option>").attr("value",i+1).text(tempVid));
	}


	var dogBreeds = ["Alaskan Malamute", "Siberian Husky", "Samoyed", "Shiba Inu", "Pitbull", "Bulldog"];
	dogBreeds.push("Saint Bernard", "Chow-chow", "Golden Retriever", "Finnish Spitz", "German Shepherd");
	dogBreeds.push("Pug", "Pomeranian", "Corgi", "Shih Tzu", "White Terrier");

	for (var i = 0; i < dogBreeds.length; i++) {
		var tempBreed = dogBreeds[i];
		$('#dog-type').append($("<option></option>").attr("value",i+1).text(tempBreed));
	}
// ~END POPULATE DROPDOWN ON PAGE LOAD~

	$("input[type='radio']").on('change', function() {
		var selrdoBtn = $("input[name='rdoBtn']:checked").val();
		if(selrdoBtn == "other"){
			$("#txtOther").show();
		} else {
			$("#txtOther").hide();
		}
	});
	


	$("#ddVideos").change(displayVideo);
	$("#dog-type").change(displayInfo);


	function displayVideo() {
		var video = $("#ddVideos").val(); //get the selected val on change

		if (video != "0") {
			$("#vid1").attr("class","imgDisplay");
		}


		if (video == "1") {  //change it appropriate iframe src
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fawvvhouse%2Fvideos%2F516961521840889%2F&show_text=0");
		} 
		else if (video == "2") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAwwstation%2Fvideos%2F1761859490699692%2F&show_text=0");
		} 
		else if (video == "3") {  
			$("#vid1").attr("src","https://www.youtube.com/embed/gHh1oogfdO8");
		} 
		else if (video == "4") { 
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fawsmanimals%2Fvideos%2F705110626295493%2F&show_text=0");
		} 
		else if (video == "5") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fboompanotdotcom%2Fvideos%2Fvb.710790405624453%2F712519555451538%2F%3Ftype%3D3&show_text=0");
		} 
		else if (video == "6") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F1048382168579942%2F&show_text=0");
		} 
		else if (video == "7") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F947413032010190%2F&show_text=0");
		} 
		else if (video == "8") { 
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F1085139598237532%2F&show_text=0");
		} 
		else if (video == "9") { 
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBuzzFeedAnimals%2Fvideos%2F1232887433399916%2F&show_text=0");
		} 
		else if (video == "10") { 
			$("#vid1").attr("src","https://www.youtube.com/embed/g-OFG1ABav8");
		} 
		else {
			$("#vid1").attr("src","");
			$("#vid1").attr("class","imgHidden");
		}

		event.preventDefault();
	}


	function displayInfo() {
		var breed = $("#dog-type").val(); //get the selected val on change
		var tempBreed = "../Final_Project/images/breeds2/puppy";
		tempBreed = tempBreed + breed + ".jpg";
		var tmpDesc1 = "";
		var tmpDesc = "";

		if (breed != "0") {
			$("#imgDog").attr("src", tempBreed);
			$("#p1").text("It's likely no surprise to dog owners, but growing research suggests that man's best friend often acts more human than canine.");
		} else {
			$("#imgDog").attr("src", "../images/bg.png");
		}


		if (breed == "1") {
			tmpDesc = "The coat of the Alaskan Malamute is a double coat. The undercoat has an oily and woolly texture and can be as thick as two inches."
			tmpDesc += "The outer guard coat is coarse and stands off the body—longer at the withers but not more than one inch off the sides of the body. " 
			tmpDesc += "Ears are small in proportion to the head and stand firmly erect when at attention. The Alaskan Malamute is a heavy dog, "
			tmpDesc += "with a more formidable nature and structure than the Siberian Husky, which is bred for speed. The Alaskan Malamute is bred for power and endurance, " 
			tmpDesc += "which is its original function and what the standard of the breed requires of Alaskan Malamute breeders."
			tmpDesc += "<br><br>The usual colors are various shades of gray and white, sable and white, black and white, seal and white, red and white, or solid white."
			tmpDesc += "There are a wide range of markings in the breed including face markings, blazes, a splash at the nape of the neck, and a collar or half collar. "
			tmpDesc += "In terms of color variants, some Malamutes exhibit a dark grey to buff-colored undertone around their trimmings and white areas, presenting with a "
			tmpDesc += "color-linked gene known as 'Agouti'. The eyes of the Alaskan Malamute are almond-shaped and are varied shades of brown; however," 
			tmpDesc += "the darker eye is preferred. The physical build of the Malamute is compact and strong with substance, bone and snowshoe feet. "

			$("#p1").text("The Alaskan Malamute originally bred for hauling heavy freight because of their strength and endurance, and later a sled dog.");
			$("#p2").html(tmpDesc);
		}
		else if (breed == "2") {
			tmpDesc = "A Siberian Husky's coat is thicker than that of most other dog breeds, comprising two layers: a dense undercoat and a longer topcoat of short, straight guard hairs. "
			tmpDesc += "It protects the dogs effectively against harsh Arctic winters, but the coat also reflects heat in the summer. It is able to withstand temperatures as low as −50 to "
			tmpDesc += "−60 °C (−58 to −76 °F). The undercoat is often absent during shedding. Their thick coats require weekly grooming. "
			tmpDesc += "<br><br>The Siberian Husky's eyes as  &quot;an almond shape, moderately spaced and set slightly obliquely.&quot;  The breed standard is that eyes may be brown or blue; The parti-color does not affect the vision of the dog."
			tmpDesc += "<br><br>The Husky howls rather than barks. They have been described as escape artists, which can include digging under, chewing through, or even jumping over fences."
			tmpDesc += "Because the Siberian Husky had been raised in a family setting by the Chukchi and not left to fend for themselves they could be trusted with children. "
			$("#p1").text("The Siberian Husky is a medium size working dog breed that originated in north-eastern Siberia. The breed belongs to the Spitz genetic family.  It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings. ");
			$("#p2").html(tmpDesc);
		}
		else if (breed == "3") {
			tmpDesc = "Samoyed eyes are usually black or brown and are almond in shape. Blue or other color eyes can occur but are not allowed in the show ring. It is in the &quot;brown and black section&quot; in its family, the Spitz family."
			tmpDesc += "Samoyeds have a dense, double layer coat. The topcoat contains long, coarse, and straight guard hairs, which appear white but have a hint of silver coloring. "
			tmpDesc += "This top layer keeps the undercoat relatively clean and free of debris. The under layer, or undercoat, consists of a dense, soft, and short fur that keeps the dog warm. "
			tmpDesc += "The undercoat typically sheds heavily once or twice a year, and this seasonal process is sometimes referred to as &quot;blowing coat&quot; . This does not mean the Samoyed will "
			tmpDesc += "shed only during that time however; fine hairs (versus the dense clumps shed during seasonal shedding) will be shed all year round, and have a tendency to stick to cloth "
			tmpDesc += "and float in the air. The standard Samoyed may come in a mixture of biscuit and white coloring, although pure white and all biscuit dogs are common. Males typically have "
			tmpDesc += "larger ruffs than females. While this breed is sometimes touted as &quot;hypoallergenic&quot;, this is generally not the case. While the breed may produce less allergens, reactions are still possible. "
			$("#p1").text("The Samoyed is a breed of dog that takes its name from the Samoyedic peoples of Siberia. These nomadic reindeer herders bred the fluffy white dogs to help with the herding, and to pull sleds when they moved.");
			$("#p2").html(tmpDesc);
		}
		else if (breed == "4") {
			tmpDesc = "Inu is the Japanese word for dog, but the origin of the prefix &quot;Shiba&quot; is less clear. The word shiba means &quot;brushwood&quot; in Japanese, and refers to a type of tree or shrub whose leaves turn red in the fall. "
			tmpDesc += " This leads some to believe that the Shiba was named with this in mind, either because the dogs were used to hunt in wild shrubs, or because the most common color of the Shiba Inu is a red color similar to that of the shrubs. "
			tmpDesc += " However, in an old Nagano dialect, the word shiba also had the meaning of &quot;small&quot;, thus this might be a reference to the dog's diminutive stature. Therefore, the Shiba Inu is sometimes translated as &quot;Little Brushwood Dog&quot;."
			tmpDesc += "<br><br>Shibas tend to exhibit an independent nature and sometimes show dog aggression. This is more prevalent between female Shibas and is influenced by the breed's strong prey drive. The Shiba Inu is best in a home without other small dogs "
			tmpDesc += " or young children, but consistent obedience training and early socialization can make all the difference. The breed also interacts fairly well with cats. "
			tmpDesc += "<br><br>The Shiba is a relatively fastidious breed and feels the need to maintain itself in a clean state. They can often be seen licking their paws and legs, much like a cat. "
			tmpDesc += " They generally go out of their way to keep their coats clean. Because of their fastidious and proud nature, Shiba puppies are easy to housebreak and in many cases will housebreak themselves. "
			tmpDesc += " Having their owner simply place them outside after meal times and naps is generally enough to teach the Shiba the appropriate method of toileting. "
			$("#p1").text("A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.  It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament and smaller size than other Japanese dog breeds.");
			$("#p2").html(tmpDesc);
		}
		else if (breed == "5") {
			tmpDesc1 = "The term pit bull is often used loosely to describe dogs with similar physical characteristics, and the morphological (physical) variation amongst &quot;bully breed&quot; dogs makes it difficult for anyone, even experts, to visually identify them as distinct from &quot;non-pit bulls&quot;";
			tmpDesc1 += "While mixed breed dogs are often labeled as &quot;pit bulls&quot; if they have certain physical characteristics such as a square shaped head or bulky body type, visual identification of mixed breed dogs is not recommended by the scholarly community.";
			tmpDesc = "<span>MYTH: Pit Bulls are all inherently vicious</span>.";
			tmpDesc += "<br><span>Reality</span>: This is a stereotype that is biased toward generalizing and condemning an entire breed based on the actions of a few bad people. The truth is that each dog should be evaluated by his own merits and not by his breed. A corollary truth is that there truly are no bad dogs, only bad people. ";
			tmpDesc += "In his essay Troublemakers, Malcolm Gladwell discusses what Pit Bull stereotypes can teach us about the wrongness of racial profiling of both humans and dogs.";
			tmpDesc += "Pit bulls have been the target of breed-specific legislation for years despite evidence claiming such laws do not diminish the number of overall dog attacks. Support for these laws is based on the <u>misconception</u> that pit bulls are more dangerous and prone to aggression than other dog breeds.";
			$("#p1").html(tmpDesc1);
			$("#p2").html(tmpDesc);
		}
		else {
			tmpDesc = "Dogs can read facial expressions, communicate jealousy, display empathy, and even watch TV, studies have shown. They've picked up these people&ndash;like traits during their evolution from wolves to domesticated pets, which occurred between 11,000 and 16,000 years ago, experts say.";
			tmpDesc += "<br><br>In particular, &quot;paying attention to us, getting along with us, [and] tolerating us&quot; has led to particular characteristics that often mirror ours, says Laurie Santos, director of the Yale Comparative Cognition Laboratory. ";

			$("#p1").text("It's likely no surprise to dog owners, but growing research suggests that man's best friend often acts more human than canine. ");
			$("#p2").html(tmpDesc);
		}


		

		// console.log(tempBreed);
		event.preventDefault();
	}



	function VidPage() {
	  pageNone();
	  $("#videos").show();
	  $("#breeds").hide();
	  $("#contact").hide();
	  $("#about").hide();
	  //event.preventDefault();
	}

	function BrdPage() {
	  pageNone();
  	  $("#videos").hide();
	  $("#breeds").show();
	  $("#contact").hide();
	  $("#about").hide();
	  //event.preventDefault();
	}

	function ContPage() {
	  pageNone();
  	  $("#videos").hide();
	  $("#breeds").hide();
	  $("#contact").show();
	  $("#about").hide();
	  //event.preventDefault();
	}

	function AbtPage() {
	  pageNone();
  	  $(".spacer").css("height", "5em");
  	  $("#videos").hide();
	  $("#breeds").hide();
	  $("#contact").hide();
	  $("#about").show();
	  //event.preventDefault();
	}

	function pageNone() {
		$("#blankx").css("display", "block");
		$("#blankx").css("height", "3.75em");
		$("#index-Page").css("display", "none");
		$(".css-carousel").css("display", "none");
		$("#ftrSpace").css("height", "4em");

	}

});


