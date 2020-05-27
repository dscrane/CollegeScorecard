// State FIPs codes
const stateFips = {
  1: "Alabama",
  2: "Alaska",
  4: "Arizona",
  5: "Arkansas",
  6: "California",
  8: "Colorado",
  9: "Connecticut",
  10: "	Delaware",
  11: "	District of Columbia",
  12: "	Florida",
  13: "	Georgia",
  15: "	Hawaii",
  16: "	Idaho",
  17: "	Illinois",
  18: "	Indiana",
  19: "	Iowa",
  20: "	Kansas",
  21: "	Kentucky",
  22: "	Louisiana",
  23: "	Maine",
  24: "	Maryland",
  25: "	Massachusetts",
  26: "	Michigan",
  27: "	Minnesota",
  28: "	Mississippi",
  29: "	Missouri",
  30: "	Montana",
  31: "	Nebraska",
  32: "	Nevada",
  33: "	New Hampshire",
  34: "	New Jersey",
  35: "	New Mexico",
  36: "	New York",
  37: "	North Carolina",
  38: "	North Dakota",
  39: "	Ohio",
  40: "	Oklahoma",
  41: "	Oregon",
  42: "	Pennsylvania",
  44: "	Rhode Island",
  45: "	South Carolina",
  46: "	South Dakota",
  47: "	Tennessee",
  48: "	Texas",
  49: "	Utah",
  50: "	Vermont",
  51: "	Virginia",
  53: "	Washington",
  54: "	West Virginia",
  55: "	Wisconsin",
  56: "	Wyoming",
  60: "	American Samoa",
  64: "	Federated States of Micronesia",
  66: "	Guam",
  69: "	Northern Mariana Islands",
  70: "	Palau",
  72: "	Puerto Rico",
  78: "	Virgin Islands",
};

// IPEDS Region Codes
const IPEDSCodes = {
  1: "New England",
  2: "Mid East",
  3: "Great Lakes",
  4: "Plains",
  5: "Southeast",
  6: "Southwest",
  7: "Rocky Mountains",
  8: "Far West",
  9: "Outlying Areas",
};

/* Content for each schools display card
    [] name (school.name)
    [] city (from root.location.lat && root.location.lon)
    [] state (converted from school.state_fips)
    [] admission rate ({year}.admission_rate.overall)
    [] number of students ({year}.student.size)
    [] Public/Private (school.ownership)
    [] school URL (school.schoo_url)
    [] ethinic make up ()
    [] testing numbers
        [] SAT 
          {} cumulative 75th_percentile SAT 
            [
              admissions.sat_scores.75th_percentile.critical_reading, admissions.sat_scores.75th_percentile.math,admissions.sat_scores.75th_percentile.writing,
            ]
          {} cumulative midpoint SAT
            [
              admissions.sat_scores.midpoint.critical_reading,admissions.sat_scores.midpoint.math,admissions.sat_scores.midpoint.writing,
            ]
          {} cumulative 25th_percentile SAT 
            [
              admissions.sat_scores.25th_percentile.criticl_reading,admissions.sat_scores.25th_percentile.math,admissions.sat_scores.25th_percentile.writing,
            ]
        [] ACT 
          {} admissions.act_scores.75th_percentile.cumulative
          {} admissions.act_scores.midpoint.cumulative
          {} admissions.act_scores.25th_percentile.cumulative)
    [] tuition

*/
