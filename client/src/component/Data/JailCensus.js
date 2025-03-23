import { CodeBlock, solarizedDark } from "react-code-blocks";

const CodeEditor = ({ code, theme, showLineNumbers, startingLineNumber }) => {
  theme = solarizedDark;
  code = `//Import 2019 Census D1
    cd DS0001
    use "38323-0001-Data"
   //Use syntax updates provided by census
   //Join DS0002 Reporting Unit Level Public-Use Data
    //Sort and Merge current Dataset
       sort JURISID ID GID RUNAME
   //merge m:1 JURISID GID RUNAME using "DS0002"
    cd ../DS0002
    merge m:1 JURISID GID RUNAME using "38323-0002-Data"
    //Result should have (_merge==3) to show match appeared in both
    //Run D0002 Syntax supplement to remove null entries
    //Remove duplicates
       unab vlist : _all
        sort vlist
        quietly by vlist:  gen dup = cond(_N==1,0,_n)
      list dup if dup>
      if dup>1 export excel dup using 2019_Jail_census_dups.xlsx, firstrow(varlabels)

      drop if dup>1
    //Create binary to pull STATE data
      gen WAone = 1 if STATE=="WA"
      gen CONVPER = CONV/TOTCONVSTATUS
      gen UNCONPER = UNCONV/TOTCONVSTATUS
    //Create egen and labels for totals
    //Race
    // sort COUNTY
      by COUNTY: egen N_WHITE =  total(WHITE)
      label var N_WHITE "White"
      by COUNTY: egen N_BLACK = total(BLACK)
      label var N_BLACK "Black"
      by COUNTY: egen N_ASIAN = total(ASIAN)
      label var N_ASIAN "Asian"
      by COUNTY: egen N_AIAN = total(AIAN)
      label var N_AIAN "Asian Islander"
      by COUNTY: egen N_HISP = total(HISP)
      label var N_HISP "Hispanic"
      by COUNTY: egen N_NHOPI = total(NHOPI)
      label var N_NHOPI "Native Hawaiian"
      by COUNTY: egen N_TWORACE = total(TWORACE)
      label var N_TWORACE "Two Races"
      by COUNTY: egen N_OTHERRACE = total(OTHERRACE)
      label var N_OTHERRACE "Other Race"
      by COUNTY: egen N_RACEDK = total(RACEDK)
      label var N_RACEDK "Unknown"           
      by COUNTY: egen N_RACETOTAL = total(RACETOTAL)
      label var N_RACETOTAL "Race Total"

    //Offense
        by COUNTY: egen N_FELONY = total(FELONY)
        label var N_FELONY "Felony"                
                by COUNTY: egen N_MISD = total(MISD)
        label var N_MISD "Misdemeanor"
                by COUNTY: egen N_OTHEROFF = total(OTHEROFF)
        label var N_OTHEROFF "Other Offense"                 
               by COUNTY: egen N_TOTOFF = total(TOTOFF)
        label var N_TOTOFF "Total"
       
        by COUNTY: gen N_FELONYPER = N_FELONY / N_TOTOFF
        by COUNTY: gen N_OTHEROFFPER = N_OTHEROFF / N_TOTOFF
        label var N_OTHEROFFPER " %"
        
        // Age/gender
        by COUNTY: egen N_ADULTF = total(ADULTF)
          label var N_ADULTF 
        by COUNTY: egen N_ADULTM = total(ADULTM)
          label var N_ADULTM               
        by COUNTY: egen N_JUVF = total(JUVF)
         label var N_JUVF
        by COUNTY: egen N_JUVM = total(JUVM)
          label var N_JUVM
        by COUNTY: egen N_TOTGENDER = total(TOTGENDER)
          label var N_TOTGENDER "Total Gender"

      //Convicted
        by COUNTY: egen N_CONV = total(CONV)
          label var N_CONV "Convicted"
        by COUNTY: egen N_UNCONV = total(UNCONV)
          label var N_UNCONV "Unconvicted"                 
        by COUNTY: egen N_TOTCONVSTATUS = total(TOTCONVSTATUS)
          label var N_TOTCONVSTATUS "Total"               
        by COUNTY: gen N_CONVPER = N_CONV / N_TOTCONVSTATUS
          label var N_CONVPER "%"
        by COUNTY: gen N_UNCONVPER = N_UNCONV / N_TOTCONVSTATUS
          label var N_UNCONVPER "%"   

      //Variance Checks               
        egen ROWTOTAL1 = rowtotal(N_FELONY N_MISD N_OTHEROFF)
        by COUNTY: egen CHECK1 = total(ROWTOTAL1 -N_TOTOFF)
         label var CHECK1 "Total Offense Variance"
        egen ROWTOTAL2 = rowtotal(N_CONV N_UNCONV)
        by COUNTY: egen CHECK2 = total(ROWTOTAL1 -N_TOTCONVSTATUS)
         label var CHECK2 "Total Convicted/Unconvicted Variance"
        egen ROWTOTAL3 = rowtotal(N_MISDPER N_OTHEROFFPER N_FELONYPER)
        gen CHECK3 = ROWTOTAL3 - 1
          label var CHECK3 "Percent Total Offense Variance"
        egen ROWTOTAL4 = rowtotal(N_CONVPER N_UNCONVPER)
        gen CHECK4 = ROWTOTAL4 - 1
         label var CHECK4 "Percent Total Convicted/Unconvicted Variance"
        
      //Tables
      //Convictions
        tabdisp COUNTY if WAone==1, cell(N_CONV N_CONVPER N_UNCONV N_UNCONVPER N_TOTCONVSTATUS)
        tabdisp COUNTY if WAone==1, cell(CHECK2 CHECK4)
        tabdisp COUNTY if WAone==1, cell(N_FELONY N_MISD N_OTHEROFF N_TOTOFF CHECK1)
        tabdisp COUNTY if WAone==1, cell(N_FELONYPER N_MISDPER N_OTHEROFFPER CHECK3)
        
      //Excel Export 
        export excel tabdisp COUNTY if WAone==1, cell(N_CONV N_CONVPER N_UNCONV N_UNCONVPER N_TOTCONVSTATUS)using 2019_Jail_census.xlsx, firstrow(varlabels) sheet(Race)
        collapse (sum) FELONY MISD OTHEROFF TOTOFF CONV UNCONV TOTCONVSTATUS WAone, by(COUNTY)
  `;
  return (
    <div>
      <CodeBlock
        text={code}
        language={"sass"}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={theme}
        wrapLines={false}
        codeBlock
      />
    </div>
  );
};

export default CodeEditor;
