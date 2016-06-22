// translations
var endMessageFrame   = 'You have now completed this lesson';
var endMessageiPlayer = 'Select next lesson from course menu';
var endMessageiPlayerClose = 'You have now completed this lesson. Close it, please.';
var prerequisitesMessageiPlayer = 'Please finish lessons in order.';
var prerequisitesLinkedAssessmentMessageiPlayer = 'Please finish all lessons first before taking the %linked%!';
var exitButtonAlt     = 'Close';
var nextLessonButtonAlt = 'Launch next lesson';
var endMessageAssessment = 'Click to start the %linked%';
var congratulationLinkedAssessmentHeader = 'Risk Assessment';
var congratulationLinkedSurveyHeader = 'Survey';
var noOfScreens = 15;
var loadBookmarkText = 'Would you like to go to the last bookmarked screen in this lesson?';
var currentLessonNo = 5;
	var isLastLesson = true;
		
	var goodAnswers          = [ 'MjA3MTU=','MjA3MTg=','MjA3MjU=','MjA3Mjk=','MjA3MzE=','MjA3Mzc=','MjA3NDE=','MjA3NDM=','MjA3NDY=','MjA3NTA=','MjA3NTQ=','MjA3NjE=','MjA3NjQ=','MjA3NjY=','MjA3NzM=','MjA3NzU=','MjA3Nzk=','MjA3ODI=','MjA3ODc=','MjA3OTE=','MjA3OTQ=','MjA4MDA=','MjA4MDI=','MjA4MDY=','MjA4MTE=','MjA4MTU=','MjA4MTk=','MjA4MjQ=','MjA4MjY=','MjA4MzI=','MjA4MzQ=','MjA4Mzk=','MjA4NDU=','MjA4NDc=','MjA4NTA=','MjA4NTc=','MjA4NjA=','MjA4NjU=','MjA4Njc=','MjA4NzM=','MjA4NzY=','MjA4Nzg=','MjA4ODM=','MjA4ODY=','MjA4OTA=','MjA4OTY=','MjA5MDA=','MjA5MDI=','MjA5MDg=','MjA5MTA=' ];
	var congratulationHeader = 'Congratulations';
	var congratulationText   = 'You have successfully completed this course and scored %score%% in your test.';
    var congratulationLinkedAssessmentText   = 'You\'ve successfully passed the test. You now need to complete this %linked%.';
	var sorryHeader          = 'Sorry';
	var sorryText            = 'You failed to pass this Test. You scored %score%% and the pass rate is %required_score%%. <br /><br />';
	
	// #17390 - Change message on final test attempt summary
	var sorryMessage	 = 'Please revisit any sections of the course you are unsure about before re-taking this test.';
	var sorryFinalMessage	 = 'Please speak to your Team Leader/Line Manager about re-taking this test.';
	// END Change message on final test attempt summary

	var endButtonCertLabel	 = 'Save/Print the Certificate';
	var endButtonCertDesc	 = 'Click to save or print your certificate.';
	var endButtonRetakeLabel = 'RETAKE';
	var endButtonRetakeDesc = 'Please click the Retake button when you are ready to retake the test.';
	var missingAnswerWarning = 'You need to choose your answer first!';
	
	var nr_questions_for_display = 15;
	var show_answer 			 = 0;
	var pass_rate 			 	 = 80;
	var random_select 			 = 1;
    var maxTestAttempts			 = 2; // unlimited if 0
	var currentTestAttempt		 = 1;
	var questionStack 			 = new Array();

	// question data
	questions = [ 
		{
	id : 6819,
	text : 'Face fits are a legal requirement, they:',
	required : 0,
	answers		 : [
		{ text: 'Give you an idea if a mask is suitable for a job.', id: 20714 },
		{ text: 'Assess fit by determining degree of seal leakage whilst person is wearing a mask.', id: 20715 },
		{ text: 'Do not tell you anything.', id: 20716 },
		{ text: 'They give the wearer more confident of PPE.', id: 20717 }
	]
},
{
	id : 6820,
	text : 'What year was the general use of all asbestos banned?',
	required : 0,
	answers		 : [
		{ text: '1999', id: 20718 },
		{ text: '1980', id: 20719 },
		{ text: '2009', id: 20720 },
		{ text: '1995', id: 20721 }
	]
},
{
	id : 6821,
	text : 'The Control of Asbestos Regulations 2012 apply to: ',
	required : 0,
	answers		 : [
		{ text: 'Only spray coating', id: 20722 },
		{ text: 'Only large contracts over £20,000', id: 20723 },
		{ text: 'Only notifiable contracts', id: 20724 },
		{ text: ' All work with Asbestos', id: 20725 }
	]
},
{
	id : 6822,
	text : 'Who is responsible for identifying asbestos materials in their buildings?',
	required : 0,
	answers		 : [
		{ text: 'You', id: 20726 },
		{ text: 'Your manager', id: 20727 },
		{ text: 'Anyone', id: 20728 },
		{ text: 'Person who owns or manages the premises', id: 20729 }
	]
},
{
	id : 6823,
	text : 'The principle effect of asbestos fibres are on the:',
	required : 0,
	answers		 : [
		{ text: 'Liver', id: 20730 },
		{ text: 'Lungs', id: 20731 },
		{ text: 'Brain', id: 20732 },
		{ text: 'Stomach', id: 20733 }
	]
},
{
	id : 6824,
	text : 'The correct name for Blue asbestos is:',
	required : 0,
	answers		 : [
		{ text: 'Actinolite', id: 20734 },
		{ text: 'Anthophyllite', id: 20735 },
		{ text: 'Tremolite', id: 20736 },
		{ text: 'Crocidolite', id: 20737 }
	]
},
{
	id : 6825,
	text : 'Which of the following is classed in the \"serpentine\" group of asbestos? ',
	required : 0,
	answers		 : [
		{ text: 'Actinolite', id: 20738 },
		{ text: 'Tremolite', id: 20739 },
		{ text: 'Anthophyllite', id: 20740 },
		{ text: 'Chrysotile', id: 20741 }
	]
},
{
	id : 6826,
	text : 'How can we reduce exposure to asbestos diseases?',
	required : 0,
	answers		 : [
		{ text: 'Close windows and doors.', id: 20742 },
		{ text: ' Reduce exposure as far as reasonably practicable.', id: 20743 },
		{ text: 'Wear overalls.', id: 20744 },
		{ text: 'Smoke only menthol cigarettes.', id: 20745 }
	]
},
{
	id : 6827,
	text : 'Asbestos may also be found in:',
	required : 0,
	answers		 : [
		{ text: 'Toilet cisterns', id: 20746 },
		{ text: 'Car windscreens', id: 20747 },
		{ text: 'Modern door handles', id: 20748 },
		{ text: 'UPVC Panels', id: 20749 }
	]
},
{
	id : 6828,
	text : 'If you are exposed to asbestos and you smoke, are you at an increased risk of developing lung cancer?',
	required : 0,
	answers		 : [
		{ text: 'Yes', id: 20750 },
		{ text: 'No', id: 20751 },
		{ text: 'No difference', id: 20752 },
		{ text: 'Only when exposed to fibres above 0.1 fpm/m3', id: 20753 }
	]
},
{
	id : 6829,
	text : 'The highest levels of airborne asbestos fibres are likely to arise from disturbing or uncontrolled removal of:',
	required : 0,
	answers		 : [
		{ text: 'Pipe lagging', id: 20754 },
		{ text: 'Toilet cisterns', id: 20755 },
		{ text: 'Cement', id: 20756 },
		{ text: 'Putties', id: 20757 }
	]
},
{
	id : 6830,
	text : 'Asbestos should not be found in buildings built:',
	required : 0,
	answers		 : [
		{ text: 'Before 1979', id: 20758 },
		{ text: 'After 1979', id: 20759 },
		{ text: 'Before 1989', id: 20760 },
		{ text: 'After 2000', id: 20761 }
	]
},
{
	id : 6831,
	text : 'Asbestos Insulating Board (AIB) was most widely used as:',
	required : 0,
	answers		 : [
		{ text: 'Roofing sheets', id: 20762 },
		{ text: 'Electrical flash guards', id: 20763 },
		{ text: 'Ceiling tiles', id: 20764 },
		{ text: 'Floor boarding', id: 20765 }
	]
},
{
	id : 6832,
	text : 'Crocidolite is the correct name for',
	required : 0,
	answers		 : [
		{ text: 'Blue asbestos', id: 20766 },
		{ text: 'Brown asbestos', id: 20767 },
		{ text: 'Grey asbestos', id: 20768 },
		{ text: 'White asbestos', id: 20769 }
	]
},
{
	id : 6833,
	text : 'The highest levels of airborne asbestos fibres are likely to arise from disturbing or uncontrolled removal of:',
	required : 0,
	answers		 : [
		{ text: 'Pipe lagging', id: 20770 },
		{ text: 'Asbestos insulating board', id: 20771 },
		{ text: 'Asbestos rope', id: 20772 },
		{ text: 'Sprayed coatings', id: 20773 }
	]
},
{
	id : 6834,
	text : 'According to HSE figures how many people in the UK are dying from asbestos-related diseases each year?',
	required : 0,
	answers		 : [
		{ text: '2,000', id: 20774 },
		{ text: '4,500', id: 20775 },
		{ text: '7,000', id: 20776 },
		{ text: '8,000', id: 20777 }
	]
},
{
	id : 6835,
	text : 'Asbestos is a natural fibre which is extracted from?',
	required : 0,
	answers		 : [
		{ text: 'Plant', id: 20778 },
		{ text: 'Rock', id: 20779 },
		{ text: 'Plastic', id: 20780 },
		{ text: 'Solvent', id: 20781 }
	]
},
{
	id : 6836,
	text : 'The lowest levels of airborne asbestos fibres are likely to arise from disturbing or uncontrolled removal of:',
	required : 0,
	answers		 : [
		{ text: 'Floor tiles', id: 20782 },
		{ text: 'Sectional pipe lagging', id: 20783 },
		{ text: 'Asbestos cement guttering', id: 20784 },
		{ text: 'Ceiling tiles', id: 20785 }
	]
},
{
	id : 6837,
	text : 'How many common types of asbestos were available?',
	required : 0,
	answers		 : [
		{ text: '2', id: 20786 },
		{ text: '3', id: 20787 },
		{ text: '5', id: 20788 },
		{ text: '6', id: 20789 }
	]
},
{
	id : 6838,
	text : 'In a building some materials that are suspected to contain asbestos can be positively identified:',
	required : 0,
	answers		 : [
		{ text: 'By comparing the materials to pictures in HSE guidance', id: 20790 },
		{ text: 'By taking a sample and having it analysed', id: 20791 },
		{ text: 'By using a handheld asbestos analyser', id: 20792 },
		{ text: 'By background air monitoring', id: 20793 }
	]
},
{
	id : 6839,
	text : 'Asbestos can also be found in:',
	required : 0,
	answers		 : [
		{ text: 'Toilet cisterns', id: 20794 },
		{ text: 'Car windscreens', id: 20795 },
		{ text: 'Modern door handles', id: 20796 },
		{ text: 'UPVC panels', id: 20797 }
	]
},
{
	id : 6840,
	text : 'Someone who smokes and is significantly exposed to asbestos is',
	required : 0,
	answers		 : [
		{ text: '2 times more likely to contract lung cancer', id: 20798 },
		{ text: '5 times more likely to contract lung cancer', id: 20799 },
		{ text: '53 times more likely to contract lung cancer', id: 20800 },
		{ text: '103 times more likely to contract lung cancer', id: 20801 }
	]
},
{
	id : 6841,
	text : 'How can you prevent an asbestos-related disease?',
	required : 0,
	answers		 : [
		{ text: 'By reducing your exposure to asbestos fibres', id: 20802 },
		{ text: 'By closing doors and breathing asbestos fibres over a short period of time', id: 20803 },
		{ text: 'By wearing overalls', id: 20804 },
		{ text: 'By increasing the amount you smoke', id: 20805 }
	]
},
{
	id : 6842,
	text : 'Could a single exposure to asbestos give rise to an asbestos related disease?',
	required : 0,
	answers		 : [
		{ text: 'Possibly, but all exposures to asbestos should be avoided.', id: 20806 },
		{ text: 'Not at all, you would need many exposures at high concentrations to get an asbestos-related disease.', id: 20807 },
		{ text: 'Providing I don\'t smoke and work with asbestos.', id: 20808 },
		{ text: 'Only if I eat it.', id: 20809 }
	]
},
{
	id : 6843,
	text : 'What is the typical asbestos content of asbestos cement sheets?',
	required : 0,
	answers		 : [
		{ text: '2 - 5%', id: 20810 },
		{ text: '10 - 15%', id: 20811 },
		{ text: '20 - 40%', id: 20812 },
		{ text: '50 - 70%', id: 20813 }
	]
},
{
	id : 6844,
	text : 'What is the scientific name for white asbestos?',
	required : 0,
	answers		 : [
		{ text: 'Amosite', id: 20814 },
		{ text: 'Chrysotile', id: 20815 },
		{ text: 'Crocidolite', id: 20816 },
		{ text: 'Actinolite', id: 20817 }
	]
},
{
	id : 6845,
	text : 'Which habit can increase the likelihood of contracting an asbestos related disease?',
	required : 0,
	answers		 : [
		{ text: 'Overeating', id: 20818 },
		{ text: 'Smoking', id: 20819 },
		{ text: 'Little to no exercise', id: 20820 },
		{ text: 'Worrying', id: 20821 }
	]
},
{
	id : 6846,
	text : 'How can you get an asbestos related disease?',
	required : 0,
	answers		 : [
		{ text: 'Not wearing gloves', id: 20822 },
		{ text: 'Working at heights', id: 20823 },
		{ text: 'Breathing in asbestos fibres', id: 20824 },
		{ text: 'Incorrectly identifying the type of asbestos', id: 20825 }
	]
},
{
	id : 6847,
	text : 'Asbestos is considered dangerous because it:',
	required : 0,
	answers		 : [
		{ text: 'Contains fibres which are harmful to the lungs.', id: 20826 },
		{ text: 'Can be poisonous if swallowed.', id: 20827 },
		{ text: 'Gives off fumes.', id: 20828 },
		{ text: 'Causes chemical burns.', id: 20829 }
	]
},
{
	id : 6848,
	text : 'Asbestosis is a disease that causes:',
	required : 0,
	answers		 : [
		{ text: 'Cancer in the lungs', id: 20830 },
		{ text: 'Heart disease', id: 20831 },
		{ text: 'Scarring of the lung tissue', id: 20832 },
		{ text: 'Throat cancer', id: 20833 }
	]
},
{
	id : 6849,
	text : 'Unprotected exposure to asbestos can lead to:',
	required : 0,
	answers		 : [
		{ text: 'Mesothelioma', id: 20834 },
		{ text: 'Mouth ulcers', id: 20835 },
		{ text: 'Bone cancer', id: 20836 },
		{ text: 'Common cold', id: 20837 }
	]
},
{
	id : 6850,
	text : 'Which disease can asbestos cause?',
	required : 0,
	answers		 : [
		{ text: 'Dermatiti', id: 20838 },
		{ text: 'Mesothelioma', id: 20839 },
		{ text: 'Psoriasis', id: 20840 },
		{ text: 'Pneumoconiosis', id: 20841 }
	]
},
{
	id : 6851,
	text : 'The risk of contracting lung cancer when exposed to asbestos AND smoking:',
	required : 0,
	answers		 : [
		{ text: 'Reduces the chances of getting lung cancer', id: 20842 },
		{ text: 'Has no effect', id: 20843 },
		{ text: 'Doubles your chances of getting lung cancer', id: 20844 },
		{ text: 'Is greatly increased by over 50 times', id: 20845 }
	]
},
{
	id : 6852,
	text : 'Mesothelioma mainly affects which body organ?',
	required : 0,
	answers		 : [
		{ text: 'Heart', id: 20846 },
		{ text: 'Lungs', id: 20847 },
		{ text: 'Skin', id: 20848 },
		{ text: 'Bowels', id: 20849 }
	]
},
{
	id : 6853,
	text : 'Exposure to asbestos fibres is BEST prevented by:',
	required : 0,
	answers		 : [
		{ text: 'Not disturbing asbestos', id: 20850 },
		{ text: 'Removing asbestos wet', id: 20851 },
		{ text: 'Using RPE', id: 20852 },
		{ text: 'Using Class \'H\' vacuum cleaners', id: 20853 }
	]
},
{
	id : 6854,
	text : 'Generally asbestos related diseases can take up to?',
	required : 0,
	answers		 : [
		{ text: '5 - 10 years to develop', id: 20854 },
		{ text: '10 - 15 years to develop', id: 20855 },
		{ text: '15 - 20 years to develop', id: 20856 },
		{ text: '15 - 60 years to develop', id: 20857 }
	]
},
{
	id : 6855,
	text : 'Who does the Control of Asbestos Regulations apply to?',
	required : 0,
	answers		 : [
		{ text: 'Employers only', id: 20858 },
		{ text: 'Employees only', id: 20859 },
		{ text: 'Employers and employees', id: 20860 },
		{ text: 'Client only', id: 20861 }
	]
},
{
	id : 6856,
	text : 'The Control of Asbestos Regulations apply to:',
	required : 0,
	answers		 : [
		{ text: 'Only spray coating', id: 20862 },
		{ text: 'Only large contracts over £20,000', id: 20863 },
		{ text: 'Only notifiable contracts', id: 20864 },
		{ text: 'All work with asbestos', id: 20865 }
	]
},
{
	id : 6857,
	text : 'What is risk?',
	required : 0,
	answers		 : [
		{ text: 'Risk is only identified once a completed risk assessment form is completed.', id: 20866 },
		{ text: 'Risk is the chance, high or low, of somebody being harmed by the hazard, and how serious the harm could be.', id: 20867 },
		{ text: 'Risk is the ratio of Harm vs Injury.', id: 20868 },
		{ text: 'Risk is what is identified once an accident report is completed.', id: 20869 }
	]
},
{
	id : 6858,
	text : 'What is a hazard?',
	required : 0,
	answers		 : [
		{ text: 'A type of injury that can be avoided', id: 20870 },
		{ text: 'Only identified when a risk assessment form has been completed', id: 20871 },
		{ text: 'A hazard is an action that can be undertaken to remove the need for a risk assessment.', id: 20872 },
		{ text: 'A hazard is anything that may cause harm e.g. chemicals, electricity, working from ladders, noise etc.', id: 20873 }
	]
},
{
	id : 6859,
	text : 'How often does training needs for individuals need to be reviewed?',
	required : 0,
	answers		 : [
		{ text: 'Just before being sent on refresher training', id: 20874 },
		{ text: 'Twice yearly because legislation requires it', id: 20875 },
		{ text: 'Anytime the job changes or different work practices are introduced', id: 20876 },
		{ text: 'Reviews are performed by the training provider and are not an employers’ responsibility.', id: 20877 }
	]
},
{
	id : 6860,
	text : 'A new worker joins your company and you wish to check the validity of the training certificate. What is the best method of achieving this?',
	required : 0,
	answers		 : [
		{ text: 'Contact the certifcate issuing body and ask them to verify the validity of the certificate.', id: 20878 },
		{ text: 'Contact the local Environment Agency and ask them to verify the validity of the certificate.', id: 20879 },
		{ text: 'Contact the HSE, and ask them to verify the validity of the certificate.', id: 20880 },
		{ text: 'Contact CSCS and ask them to verify the validity of the certificate.', id: 20881 }
	]
},
{
	id : 6861,
	text : 'It is a requirement of the Control of Asbestos Regulations 2012, that Employers should:',
	required : 0,
	answers		 : [
		{ text: 'Expose employees to asbestos.', id: 20882 },
		{ text: 'Prevent exposure to asbestos to their employees.', id: 20883 },
		{ text: 'Do nothing with regard to asbestos as that is the down to the HSE.', id: 20884 },
		{ text: 'Ask the employees to ignore the dangers of asbestos.', id: 20885 }
	]
},
{
	id : 6862,
	text : 'Contaminated PPE, clothing, towels etc. must never be:',
	required : 0,
	answers		 : [
		{ text: 'Taken home.', id: 20886 },
		{ text: 'Sent to a specialist laundry.', id: 20887 },
		{ text: 'Treated as asbestos waste.', id: 20888 },
		{ text: 'Double bagged.', id: 20889 }
	]
},
{
	id : 6863,
	text : 'When required, who is resposible with issuing a worker with personal protective equipment?',
	required : 0,
	answers		 : [
		{ text: 'The employer', id: 20890 },
		{ text: 'Yourself', id: 20891 },
		{ text: 'The hire company', id: 20892 },
		{ text: 'Borrow the equipment off a colleague', id: 20893 }
	]
},
{
	id : 6864,
	text : 'What is PPE an abbreviation for?',
	required : 0,
	answers		 : [
		{ text: 'Personal Protect Equipment', id: 20894 },
		{ text: 'Protect Personnel Equipment', id: 20895 },
		{ text: 'Personal Protective Equipment', id: 20896 },
		{ text: 'Persons Protective Equipment', id: 20897 }
	]
},
{
	id : 6865,
	text : 'You have accidently damaged some suspect ACM&#39;s, what would be the best course of action?',
	required : 0,
	answers		 : [
		{ text: 'Sweep it up and say nothing.', id: 20898 },
		{ text: 'Carry on working and inform your employer after the job has finished.', id: 20899 },
		{ text: 'Stop work, isolate the area, decontaminate in necessary and inform your employer.', id: 20900 },
		{ text: 'Use the nearest vacuum cleaner to clean up and say nothing.', id: 20901 }
	]
},
{
	id : 6866,
	text : 'You suspect a building element to contain asbestos, what should you do?',
	required : 0,
	answers		 : [
		{ text: 'Stop work and consult the asbestos register.', id: 20902 },
		{ text: 'Assume it to not contain asbestos and carry on.', id: 20903 },
		{ text: 'Work on it carefully, keeping it wet.', id: 20904 },
		{ text: 'All of the above.', id: 20905 }
	]
},
{
	id : 6867,
	text : 'You are asked to carry out some work on a 1970&#39;s non domestic building, what is the document you need to ask to see before starting work?',
	required : 0,
	answers		 : [
		{ text: 'Building plans and specification', id: 20906 },
		{ text: 'F10 notifcation', id: 20907 },
		{ text: 'Asbestos Management Plan / Asbestos Register', id: 20908 },
		{ text: 'Location of the Canteen and Smoking area', id: 20909 }
	]
},
{
	id : 6868,
	text : 'You have been contaminated with what you suspect to be asbestos, what would be the best course of action?',
	required : 0,
	answers		 : [
		{ text: 'Decontaminate in accordance with the company procedures.', id: 20910 },
		{ text: 'Brush it off carefully and carry on working.', id: 20911 },
		{ text: 'Finish the job and wash the work clothing at home.', id: 20912 },
		{ text: 'Vacuum yourself down, with a domestic vacuum, report the problem and leave the site.', id: 20913 }
	]
}
	];
	
var i18n = {
"_GiveupButton": "Giveup",
"_GiveupHelpText": "<h1>HELP</h1> It looks like you are unable to find the other items. We have highlighted these for you. Please continue by clicking on the \'X\' at the top right corner of this box and then proceed by clicking all the highlighted areas.",
"_HotspotClose": "close",
"_HotspotEndWindowText": "<h1>Great</h1>You find \'em all. Click next to continue.",
"_ClickOnTheImage": "Click on the image to view.",
"_ThisLessonCovers": "This lesson covers:",
"_Summary": "Summary:",
"_ClickIfAgree": "Click if you agree.",
"_ClickIfCorrect": "Click if this is true.",
"_IAgree": "I agree",
"_ClickOnCheckboxes": "Click on the checkboxes beside the correct statements.",
"_ClickOnWordBelow": "Click on each word below for more information.",
"_CorrectAnswer": "Correct.",
"_IncorrectAnswer": "Incorrect."
};