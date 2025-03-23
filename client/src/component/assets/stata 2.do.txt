/*------------------------------------------------------------------------------
1) 	Prepare path and initiate log file
	a. Update Path Location
	b. Check to see if log file exists
	c. Create log file to document results.
	
------------------------------------------------------------------------------*/
 
	*1. Update Stata Path Location
		*Stata path defaults to server drive. 
		*This is the path where source document will be pulled and where they will be exported. If source document or user updates update path. 
 cd "*******************************************************" 

	*1. Check to see if log file exists if not, create file and save
if fileexists("City_.log") == 0{
	log using "City_.log"
	}
	*1c. Create log file to document results.
	else {
	log using "City_.log", replace
	}

/*==============================================================================
2)	Obtain Source file
	a. Clear contents and go to file path
	b. Import source file
	c. Update file path to save future .dta
------------------------------------------------------------------------------*/
	*2a. Clear stata contents and go to file path
clear 


	*b. Import source file - if source moves or is update the path location, name of the sheet it is pulling from or cellrange. It will automatically create variables based on excel headers.
import excel "**********************") cellrange(A1:Y29653) firstrow //****:Removed for confidentiality 


	*c. Update file path to save future .dta
*cd "City" \
/*------------------------------------------------------------------------------
3) *Pull year data and place into new variable 
-------------------------------------------------------------------------------*/
gen ArrestYear = year(***) //****:Removed for confidentiality 

tab ArrestYear

/*------------------------------------------------------------------------------
4) Remove Duplicates: To ensure all data entries are unique, this goes throughout 
*all entries and counts each entry's variable output with other lines. 
------------------------------------------------------------------------------*/
unab vlist : _all
sort `vlist'
quietly by `vlist':  gen dup = cond(_N==1,0,_n)
list dup if dup>1


/*------------------------------------------------------------------------------
5) Export duplicates into an excel file if dup>1 and drop from database 
	a. If the duplicate count is greater than 1, this means that there is a duplicate 
	b. Drop Duplicates for analysis
	c. Save database without duplicates
------------------------------------------------------------------------------*/
	*a. If the duplicate count is greater than 1, this means that there is a duplicate 
egen duptot = total(dup)

	if duptot == 0 {
		disp "No Duplicates Found"
	}	
		else {
			if fileexists("City__Analysis.xlsx") == 0 {
			export excel dup *** if dup>1 using City__Analysis.xlsx, firstrow(varlabels) sheet(Duplicates) //****:Removed for confidentiality 

			}
			else if fileexists("City__Analysis.xlsx") == 1 {
			export excel dup *** if dup>1 using City__Analysis.xlsx, firstrow(varlabels) sheet(Duplicates, replace)  //****:Removed for confidentiality 

		}
}

	*b. Drop Duplicates for analysis
drop duptot
keep if dup <2
drop dup

	*c. Save database without duplicates
save "City_db.dta",replace

/*-------------------------------------------------------------------
6)	Create PersonID for to isolate and consolidate Person/Cases and merge with original document 
	a. Remove all columns except PersonID
	b. Contracting will match duplicate cases and present in freq - drop freq as all unique PersonID's are isolated
	c. Generate ID by row location
	d. Export Person ID to excel 
	e. Save PersonID database 
	f. Merge PersonID database with original document to provide updated row ID
	g. Drop Identifying information and sort by ID/Date of arrest
--------------------------------------------------------------------*/
	*a. Remove all columns except PersonID
contract (*******) //****:Removed for confidentiality 

	*b. Contracting will match duplicate cases and present in freq - drop freq as all unique PersonID's are isolated
drop _freq

	*c. Generate ID by row location
gen PersonID = _n

	*d. Export Person ID to excel 
export excel ***** using City__Analysis.xlsx, firstrow(varlabels) sheet(PersonID, replace) //****:Removed for confidentiality 

	*e. Save PersonID database 
save "City_ID_db.dta",replace

	*f. Merge PersonID database with original document to provide updated row ID
merge 1:m  ***** using "City_db.dta" //****:Removed for confidentiality 
	
	*g. Drop Identifying information and sort by ID/Date of arrest
drop ****
sort PersonID ***//****:Removed for confidentiality 

/*------------------------------------------------------------------------------
7) Create Gender variable and binary variables with lables for logistic data analysis:
	a. Create gender new variable 
	b. Create corresponding binary variable and label for data analysis.
	**Variables renamed for confidentiality**
------------------------------------------------------------------------------*/
	*a. Create gender new variable 
gen Gender =.

replace Gender = 1 if gender =="Male" | gender == "MALE"
replace Gender = 2 if gender =="Female" | gender == "FEMALE"
replace Gender = 3 if gender =="Unknown" | gender == "UNKNOWN"

tab Gender

label variable Gender "Gender"
label define Gender_labels ///
1 "Male" ///
2 "Female" ///
3 "Unknown" ///

	*b. Create corresponding binary variable and label for data analysis.
label values Gender Gender_labels
tab Gender, generate(Gender_binary)
rename Gender_binary1 Male
rename Gender_binary2 Female
rename Gender_binary3 Unknown

/*-------------------------------------------------------------------------------
8) Race:
	a. Create race new variable 
	b. Create corresponding binary variable and label for data analysis.
*-------------------------------------------------------------------------------*/
	*a. Create race new variable 

gen Race =.

replace Race = 1 if race =="White or Caucasian" 
replace Race = 2 if race =="Asian" 
replace Race = 3 if race =="American Indian or Alaskan Native" 
replace Race = 4 if race =="Black or African American" 
replace Race = 5 if race =="Unknown" 

tab Race

label variable Race "Race not including ethnicity"
label define Race_labels ///
1 "White" ///
2 "Asian" ///
3 "Indigenous" ///
4 "Black" ///
5 "Unknown" ///

	*b Create corresponding binary variable and label for data analysis.
label values Race Race_labels
tab Race, generate(Race_binary)
rename Race_binary1 White
rename Race_binary2 Asian
rename Race_binary3 Indigenous
rename Race_binary4 Black
rename Race_binary5 Unknown_Race


/*------------------------------------------------------------------------------
9) Ethnicity
	a. Create Ethnicity new variable 
	b. Create corresponding binary variable and label for data analysis.
*------------------------------------------------------------------------------*/
	*a.Create Ethnicity new variable 
gen Ethnicity =.
replace Ethnicity = 1 if ethnicity == "Non-Hispanic"
replace Ethnicity = 2 if ethnicity == "Unknown"
replace Ethnicity = 3 if ethnicity == "Hispanic"

label variable Ethnicity "Ethnicity"
label define Ethnicity_labels ///
1 "Non-Hispanic" ///
2 "Unknown" ///
3 "Hispanic" ///

	*b. Create corresponding binary variable and label for data analysis.
label values Ethnicity Ethnicity_labels
tab Ethnicity, generate(Ethnicity_binary)
rename Ethnicity_binary1 Non_Hispanic_Ethnicity
rename Ethnicity_binary2 Unknown_Ethnicity
rename Ethnicity_binary3 Hispanic_Ethnicity

/*------------------------------------------------------------------------------
10) Generate variable if prerelease/pretrial 
	Already a binary variable so no additional steps are needed
------------------------------------------------------------------------------*/

gen Conditionsgiven =.
replace Conditionsgiven = 0 if conditionname =="None"
replace Conditionsgiven = 1 if conditionname !=""
tab Conditionsgiven
label define Binary_labels ///
0 "No" ///
1 "Yes" ///

label values Conditionsgiven Binary_labels


/*------------------------------------------------------------------------------
11) Generate variable if complied to pretrial conditions given
	a. Create Variable
	b. Create binary variable
------------------------------------------------------------------------------*/
	*a. Create Variable
gen ConditionsComplyvar =.
replace ConditionsComplyvar= 2 if compliance=="No"
replace ConditionsComplyvar= 1 if compliance=="Yes"
replace ConditionsComplyvar= 3 if compliance !="Yes" & compliance !="No"

label variable ConditionsComplyvar "Complied with Conditions?"
label define ConditionsComply_labels ///
2 "No" ///
1 "Yes" ///
3 "Unknown" ///

label values ConditionsComply ConditionsComply_labels


	*b. Create binary variable
tab ConditionsComplyvar, generate(ConditionsComply_binary)
rename ConditionsComply_binary2 Comply_Yes
rename ConditionsComply_binary1 Comply_No
rename ConditionsComply_binary3 Comply_Unknown

tab ConditionsComply

/*------------------------------------------------------------------------------
12) Creating Binarry variables
------------------------------------------------------------------------------*/

	*a. Binary Variable for FTA
gen FTAvar =.
replace FTAvar = 0 if fta =="No"
replace FTAvar = 1 if fta =="Yes"
label values FTA Binary_labels
tab FTA

tab FTAvar, generate(FTA_binary)
rename FTA_binary1 FTA_No
rename FTA_binary2 FTA_Yes


	*b. Binary variable for reoff
gen reoffensevar =.
replace reoffensevar = 0 if reoff =="No"
replace reoffensevar = 1 if reoff =="Yes"
label values reoffensevar Binary_labels
tab reoffensevar

tab reoffensevar, generate(reoffense_binary)
rename reoffense_binary1 reoffense_No
rename reoffense_binary2 reoffense_Yes

	*c. Binary Variable for accept
gen acceptance =.
replace acceptance = 0 if accept=="No"
replace acceptance = 1 if accept=="Yes"
label values acceptance Binary_labels
tab acceptance
/*------------------------------------------------------------------------------
13) a. Generate pretrial service variable
	b. Create Binaries of each type of pretrial release 
	c. Create Binary of receiving pretrial service i.e. separating escape v.jail alternative
	d. Name of pretrial service is inconsistently applied and not updated for this analysis
	e. Export Crime by ID analysis results into excel 
	f. Save database
*-----------------------------------------------------------------------------*/

	*a. Generate pretrial service variable 
gen Pretrial_Services =.

	*b. Create Binaries of each type of pretrial release
replace Pretrial = 1 if pts =="PTS01" | pts ==""
replace Pretrial = 2 if pts =="PTS02"
replace Pretrial = 3 if pts =="PTS03"
replace Pretrial = 4 if pts =="PTS04"
replace Pretrial = 6 if pts =="PTS05"
replace Pretrial = 5 if pts =="PTS06"
replace Pretrial = 7 if pts =="PTS07"
replace Pretrial = 8 if pts =="PTS08" 
replace Pretrial = 9 if pts =="PTS09"
replace Pretrial = 10 if pts =="PTS10"
replace Pretrial = 11 if pts =="PTS11"
replace Pretrial = 12 if pts =="PTS12"
replace Pretrial = 13 if pts =="PTS13"

*Update to include OPS/SPU data
replace Pretrial_Services = 3 if PTSname != "None" & (Pretrial==1)


label variable Pretrial_Services "Pretrial Services"
label define Pretrial_Services_labels ///
1 "pts 1" ///
2 "pts2" ///
3 "pts3" ///
4 "pts4" ///
5 "pts5" ///
6 "pts6" ///
7 "pts7" ///
8 "pts8" ///
9 "pts9" ///
10 "pts10" ///
11 "pts11" ///
12 "pts12" ///
13 "pts13" ///

label values Pretrial_Services Pretrial_Services_labels

tab Pretrial_Services, generate(Pretrial_Service_Binary)

rename Pretrial_Service_Binary1  PTS01
rename Pretrial_Service_Binary2  PTS02
rename Pretrial_Service_Binary3  PTS03
rename Pretrial_Service_Binary4  PTS04
rename Pretrial_Service_Binary5  PTS05
rename Pretrial_Service_Binary6  PTS06
rename Pretrial_Service_Binary7  PTS07
rename Pretrial_Service_Binary8  PTS08
rename Pretrial_Service_Binary9  PTS09
rename Pretrial_Service_Binary10 PTS10
rename Pretrial_Service_Binary11 PTS11
rename Pretrial_Service_Binary12 PTS12
rename Pretrial_Service_Binary13 PTS13

	*c. Create Binary of receiving pretrial service i.e. separting escape v.jail alternative
gen ReceivedPTS =. 
replace ReceivedPTS = 0 if  PTS01==1 | PTS02==1 |  PTS03== 1 | PTS04== 1 | PTS05 == 1| PTS06== 1 | PTS07== 1 |  PTS08== 1
replace ReceivedPTS = 1 if PTS09==1 | PTS10==1 |PTS11==1  | PTS12==1 |PTS13==1
label values ReceivedPTS Binary_labels

tab ReceivedPTS, generate(ReceivedPTS_Binary)
rename ReceivedPTS_Binary1  PTS_No
rename ReceivedPTS_Binary2  PTS_Yes

	*d. Drop Name 
drop name


	*e. Export Crime by ID analysis results into excel 
	
export excel ****** using City__Analysis.xlsx, firstrow(varlabels) sheet(byPrsn.CaseID, replace) ****:Removed for confidentiality 


	*f. Save database
save "City_ByDefendant_db.dta",replace 

/*------------------------------------------------------------------------------
 The format of the document has crimes broken by a semicolon delimiter on the same row. The bifurcates each charge and class to sum the total charge instances per person/case for further characteristic analysis
  
14. Bifurcate Charg and Classification
	a.Create variable that trims values
	b.Create new variables by for each delimited values
	c.Loop through each variable and remove number and paren and place updated value in new variable
	d.Drop temporary variables
	e.Create unique identifier to reorganize data table
	f.Reorganize data table - // Matching numbers demonstrate the same arrest defendant, case number, and date of arrest with the 
	charge variable showing what number the charge is from the arrest. 
		I.e. Person ID 5 case 2A0730958 it has 2 rows of ClassChargeID 11 and Charge values of 1 and 2 for thoseseperate rows. 
		This means that for the Defendant was arrested for the same case but had 2 different charges.
		This variable will be replaced by a total charge count in 15g.
	g.Creat max count of charges per person per case 
	h.Create variable/binary variables stratifying by number of charges 
	i.Drop temporary variables
*-----------------------------------------------------------------------------*/

*Classification
	*a.Create variable that trims values
gen CleanClass = trim(ChargeTypeandClassification)

	*b.Create new variables by for each delimited values
split CleanClass, p(";")
list CleanClass

	*c.Loop through each variable and remove number and paren and place updated value in new variable
 foreach v of varlist CleanClass*{
	egen Reclass`v'= ends(`v'), trim last p() 
}		 

list Reclass*

*ChargeOffense
	*a.Create variable that trims values
gen CleanCharge = trim(Chargeoffense)

	*b.Create new variables by for each delimited values
split CleanCharge, p(";")
list CleanCharge

	*c.Loop through each variable and remove number and paren and place updated value in new variable
 
foreach v of varlist CleanCharge*{
	egen Reclass`v'= ends(`v'), trim tail p(")") 
}		 
list Reclass*

	*d.Drop temporary variables
drop ReclassCleanCharge ReclassCleanClass

	*e. Create unique identifer to reorganize data
gen ClassChargeID = _n 

	*f. Reorganize Data table
reshape long ReclassCleanCharge ReclassCleanClass, i(ClassChargeID) j(ChargeCountperClass)
keep if ReclassCleanClass !=""

	*g.Create max count of charges per person per case 
bysort PersonID CaseNumber: egen MaxCharges= max(ChargeCountperClass)
	
	*h.Create variable/binary variables stratefying by number of charges 
gen ChargeTotalperCase =.
replace ChargeTotalperCase = 1 if MaxCharges ==1
replace ChargeTotalperCase = 2 if MaxCharges >1 & MaxCharges<=4
replace ChargeTotalperCase = 3 if MaxCharges >=5 & MaxCharges<=8
replace ChargeTotalperCase = 4 if MaxCharges >=9
	
label variable ChargeTotalperCase "Total Charge Count Per Person/Case"
label define ChargeTotalperCase_labels ///
1 "char1" ///
2 "char2" ///
3 "char3" ///
4 "char4" ///

label values chartotal chartotal_labels

tab chartotal, generate(chartotal_Binary)

rename chartotal_Binary1  char1
rename chartotal_Binary2  char2
rename chartotal_Binary3  char3
rename chartotal_Binary4  char4

	*i. Drop temporary variables
drop CleanClass*
drop CleanCharge*
drop Chargeoffense
drop ChargeTypeandClassification
drop _merge

/*------------------------------------------------------------------------------
 15. Create Binary Variables for Classification
	a. Create Misdemeanor Variable and Binary Variables
	b. Save dataset
	c. Export Values
*-----------------------------------------------------------------------------*/

	*a. Create Misd Variable and Binary Variables
gen Misd =.
replace Misd = 1 if ReclassCleanClass =="Gross"
replace Misd = 2 if ReclassCleanClass =="Simple"
replace Misd = 3 if ReclassCleanClass =="NULL"

tab Misd

label variable Misd "Misd Class"
label define Misd_labels ///
1 "Gross" ///
2 "Simple" ///
3 "Null" ///

label values Misd Misd_labels

tab Misd, generate(Misd_Binary)

rename Misd_Binary1  Misd_Gross
rename Misd_Binary2  Misd_Simple
rename Misd_Binary3  Misd_Null

	*b. Export
export excel ***** using City__Analysis.xlsx, firstrow(varlabels) sheet(byCharge, replace) ****:Removed for confidentiality 
	
	*16c. Save Dataset
save "City_ByCharge_db.dta",replace 
/*------------------------------------------------------------------------------
16. Adjust to be by Person/Case and remove charge duplicates
	a. Keep relevant variables
	b. Remove dupliates
	c. Look for missing variable to ensure completeness before statistical analysis
	d. describe all variables 
//-------------------------------------------------------------------------------*/
	*a. Keep relevant variables
keep ****

	*b. Remove dupliates
unab vlist : _all
sort `vlist'
quietly by `vlist':  gen dup = cond(_N==1,0,_n)
list dup if dup>1
keep if dup <2
drop dup

	*c. Look for missing variable to ensure completeness before statistical analysis
misstable sum

	*d. describe all variables 
describe
log close
/*------------------------------------------------------------------------------
17. Generate Summary/Descriptive Statistical Analysis 
*-----------------------------------------------------------------------------*/
//Create tables of Total Characteristic statistics with percentage and freq 

cd "Support"
log using "City__Results.log", replace


collect clear
table (ArrestYear) (***), statistic(percent) statistic(freq) missing name(a) //****:Removed for confidentiality 



//Create intersectional tables focusing on pretrial services
table (***) (***\ )(***), statistic(percent) statistic(freq) missing name(table1)//****:Removed for confidentiality 


//Export tables to excel
//Summary/Descriptive Stats
collect export City__Analysis_statstotal.xlsx, name(a) sheet(****) replace //****:Removed for confidentiality 


//Intersectional tables focusing on pretrial services
collect export City__Analysis_statsdesc.xlsx, name(table1) sheet(****) replace //****:Removed for confidentiality 


/*------------------------------------------------------------------------------
18. Regression analysis: logistic Model
-----------------------------------*/
eststo clear

//5 years
eststo: quietly logistic****// ****:Removed for confidentiality 

esttab using "5-Year Logisistic Coefficients", rtf replace beta z con label nobase nogaps title("5-Year Logisistic Coefficients") addn("s")

*------------------------------------------------------------------------------
19) 
/*Close Log*/
-------------------------------------------------------------------------------*/
save "City_StataStats.dta",replace 
log close 