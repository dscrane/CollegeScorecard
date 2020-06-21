// SCORECARD TEMPLATES
function basicScorecardTemplate(cardData) {
  const {
    schoolId,
    imgUrl,
    adminRate,
    avgCost,
    schoolAttendance,
    schoolName,
    schoolCity,
    schoolWebsite,
    stateFips,
  } = cardData;
  return `
  <div id=${schoolId} class="gallery__card-wrapper">
        <div class="gallery__card">
          <div class="card__section card__section-img">
            <img
              class="card__content-image"
              src=${imgUrl}
            />
          </div>

          <div class="card__section card__section-name">
            <div class="card__content card__content-name">
              <div class="card__content-title card__content-title-name">
                ${schoolName}
              </div>
            </div>
          </div>

          <div class="card__section card__section-location">
            <div class="card__content card__content-location">
              <div class="card__content-data card__content-data_location">
                ${schoolCity}, ${fipsStates[stateFips]}
              </div>
            </div>
          </div>

          <div class="card__section card__section-facts">
            <div class="card__content card__content-facts">
              <div class="card__content-title card__content-title_facts">Attendance:</div>
              <div class="card__content-data card__content-data_facts">
                ${schoolAttendance}
              </div>
            </div>
            <div class="card__content card__content-facts">
              <div class="card__content-title card__content-title_facts">
                Admission Rate:
              </div>
              <div class="card__content-data card__content-data_facts">${adminRate}</div>
            </div>
            <div class="card__content card__content-facts">
              <div class="card__content-title card__content-title_facts">
                Average Cost:
              </div>
              <div class="card__content-data card__content-data_facts">${avgCost}</div>
            </div>
          </div>
          <div class="card__section card__section-website">
            <div class="card__content card__content-website">
              <div class="card__content-title card__content-title_url">Homepage:</div>
              <span class="card__content-data-website><a class="card__content-url" href="${schoolWebsite}"
                >${schoolWebsite}</a
              ></span>
            </div>
          </div>
        </div>
      </div>
`;
}

function fullScorecardTemplate(schoolId, schoolName, overviewSubsectionData) {
  return `<div id=${schoolId} class="modal__card">
  <div class="modal__card-wrapper">
    <div class="modal__section modal__section-name">
      <div class="modal__content modal__content-name">
        <div class="content__title content__title-name">
          ${schoolName}
        </div>
      </div>
    </div>

    <div class="modal__section modal__section-image">
      <div class="modal__content modal__content-image">
        <img
          class="content__image"
          src=https://images.unsplash.com/photo-1561525985-654e6a2fa04a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0
        />
      </div>
    </div>

    <div class="modal__section modal__section-headings">
      <div class="modal__content modal__content-headings">
        <div
          id="overview"
          class="content__heading content__heading-left content__heading-active"
          data-tab="0"
        >
          Overview
        </div>
        <div id="academics" class="content__heading" data-tab="1">
          Academics
        </div>
        <div id="student-life" class="content__heading" data-tab="2">
          Student Life
        </div>
        <div id="finances" class="content__heading content__heading-right" data-tab="3">
          Finances
        </div>
      </div>
    </div>

    <div class="modal__section modal__section-facts">
      <!-- Subheading display information --> 
      ${overviewSubsectionData}
    </div>
  </div>
</div>
`;
}

// END SCORECARD TEMPLATES
//
//
//
// SUBSECTION TEMPLATES

function schoolOverviewDisplayTemplate(overviewData, specialConcideratioins) {
  console.log(overviewData, specialConcideratioins);
  const {
    schoolCity,
    schoolOwnership,
    schoolReligion,
    schoolState,
    schoolType,
    schoolWebsite,
    schoolSpecialConciderations,
  } = overviewData;
  return `
  <div class="scorecard__view scorecard__view-overview">
    <div class="view__wrapper">
      <div class="view__row">
        <div class="view__item view__item-title">
          Location:
        </div>
        <div class="view__item view__item-content">
          ${schoolCity}, ${fipsStates[schoolState]}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Branches:</div>
        <div class="view__item view__item-content">3 -- Main Branch</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Type:</div>
        <div class="view__item view__item-content">
          ${schoolOwnership}, ${schoolType}
        </div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Degrees Awarded:</div>
        <div class="view__item view__item-content">Associate's, Bachelor's and Graduate Degrees</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">Religious Affiliation:</div>
        <div class="view__item view__item-content">${schoolReligion}</div>
      </div>
      <div class="view__row">
        <div class="view__item view__item-title">School Homepage:</div>
        <div class="view__item view__item-content">
          <a href="${schoolWebsite}">${schoolWebsite}</a>
        </div>
      </div>
      <div class="view__row view__row-section">
        <div class="view__item view__item-section">Special Conciderations:</div>
        <div class="view__section">
          ${specialConcideratioins}
        </div>
      </div>
    </div>
  </div>
`;
}

function schoolAcademicsDisplayTemplate(/* academicsData */) {
  return `<div class="scorecard__view scorecard__view-academics">
  <div class="view__wrapper">
    <div class="view__row">
      <div class="view__item view__item-title">
        Admission Rate:
      </div>
      <div class="view__item view__item-content">
        60%
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average SAT Scores:</div>
      <div class="view__item view__item-content">1850</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average ACT Scores:</div>
      <div class="view__item view__item-content">
        25
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Retention Rate:</div>
      <div class="view__item view__item-content">xx%</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">On-Line Only:</div>
      <div class="view__item view__item-content">No</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Completion Rate:</div>
      <div class="view__item view__item-content">75%</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Retention Rate:</div>
      <div class="view__item view__item-content">70%</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Transfer Rate:</div>
      <div class="view__item view__item-content">20%</div>
    </div>
    <div class="view__row view__row-section">
      <div class="view__item view__item-section">Popular Majors:</div>
      <div class="view__section">
        <div class="section__item">Nursing</div>
        <div class="section__item">Computer Science</div>
        <div class="section__item">English</div>
        <div class="section__item">Teaching</div>
        <div class="section__item">Pre-Law</div>
        <div class="section__item">Engineering</div>
      </div>
  </div>
</div>
`;
}

function schoolStudentLifeDisplayTemplate(/* studentLifeData */) {
  return `<div class="scorecard__view scorecard__view-student">
  <div class="view__wrapper view__wrapper-alt">
    <div class="view__column">
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">
          Size & Setting:
        </div>
        <div class="view__item view__item-content view__item-content_alt">
          Small/Rural
        </div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Average SAT Scores:</div>
        <div class="view__item view__item-content view__item-content_alt">1850</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Average ACT Scores:</div>
        <div class="view__item view__item-content view__item-content_alt">
          25
        </div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Retention Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">xx%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">On-Line Only:</div>
        <div class="view__item view__item-content view__item-content_alt">No</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Completion Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">75%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Retention Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">70%</div>
      </div>
      <div class="column__row">
        <div class="view__item view__item-title view__item-title_alt">Transfer Rate:</div>
        <div class="view__item view__item-content view__item-content_alt">20%</div>
      </div>
    </div>
    <div class="view__column view__column-section">
      <div class="column__row">
        <div class="view__item view__item-title">Demographics:</div>
      </div>
      <div class="column__row">
        <div class="view__section view__section-column">
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Percent Male:</div>
            <div class="section__item section__item-alt section__item-content">60%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Percent Female:</div>
            <div class="section__item section__item-alt section__item-content">40%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">White:</div>
            <div class="section__item section__item-alt section__item-content">60%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Black:</div>
            <div class="section__item section__item-alt section__item-content">15%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Hispanic:</div>
            <div class="section__item section__item-alt section__item-content">5%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Asian:</div>
            <div class="section__item section__item-alt section__item-content">4%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Two or More:</div>
            <div class="section__item section__item-alt section__item-content">8%</div>
          </div>
          <div class="section__row">
            <div class="section__item section__item-alt section__item-title">Other:</div>
            <div class="section__item section__item-alt section__item-content">8%</div>
          </div>       
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

function schoolFinancialDisplayTemplate(/* financialData */) {
  return `
  <div class="scorecard__view scorecard__view-overview">
  <div class="view__wrapper">
    <div class="view__row">
      <div class="view__item view__item-title">
        Tuition (in state):
      </div>
      <div class="view__item view__item-content">
        $38,000
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Tuition (out of state):</div>
      <div class="view__item view__item-content">$45,000</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Average Cost:</div>
      <div class="view__item view__item-content">
        $60,000
      </div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Federal Loan Rates:</div>
      <div class="view__item view__item-content">60%</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">Religious Affiliation:</div>
      <div class="view__item view__item-content">Not Applicable</div>
    </div>
    <div class="view__row">
      <div class="view__item view__item-title">School Homepage:</div>
      <div class="view__item view__item-content">
        <a href="#">www.fakeschoolsite.com</a>
      </div>
    </div>
    <div class="view__row view__row-section">
      <div class="view__item view__item-section">Special Conciderations:</div>
      <div class="view__section">
        <div class="section__item">Women's Only Institution</div>
        <div class="section__item">Historically Black Institution</div>
        <div class="section__item">Predominantly Black Instituion</div>
      </div>
    </div>
  </div>
</div>
  `;
}

// END SUBSECTION TEMPLATES
//
//
//
// KEY VALUE DATA

const carnegieClassification = {
  "-2": "Not applicable",
  0: "(Not classified)",
  1: "Two-year, very small",
  2: "Two-year, small",
  3: "Two-year, medium",
  4: "Two-year, large",
  5: "Two-year, very large",
  6: "Four-year, very small, primarily nonresidential",
  7: "Four-year, very small, primarily residential",
  8: "Four-year, very small, highly residential",
  9: "Four-year, small, primarily nonresidential",
  10: "Four-year, small, primarily residential",
  11: "Four-year, small, highly residential",
  12: "Four-year, medium, primarily nonresidential",
  13: "Four-year, medium, primarily residential",
  14: "Four-year, medium, highly residential",
  15: "Four-year, large, primarily nonresidential",
  16: "Four-year, large, primarily residential",
  17: "Four-year, large, highly residential",
  18: "Exclusively graduate/professional",
};

const fipsStates = {
  1: "Alabama",
  2: "Alaska",
  4: "Arizona",
  5: "Arkansas",
  6: "California",
  8: "Colorado",
  9: "Connecticut",
  10: "Delaware",
  11: "District of Columbia",
  12: "Florida",
  13: "Georgia",
  15: "Hawaii",
  16: "Idaho",
  17: "Illinois",
  18: "Indiana",
  19: "Iowa",
  20: "Kansas",
  21: "Kentucky",
  22: "Louisiana",
  23: "Maine",
  24: "Maryland",
  25: "Massachusetts",
  26: "Michigan",
  27: "Minnesota",
  28: "Mississippi",
  29: "Missouri",
  30: "Montana",
  31: "Nebraska",
  32: "Nevada",
  33: "New Hampshire",
  34: "New Jersey",
  35: "New Mexico",
  36: "New York",
  37: "North Carolina",
  38: "North Dakota",
  39: "Ohio",
  40: "Oklahoma",
  41: "Oregon",
  42: "Pennsylvania",
  44: "Rhode Island",
  45: "South Carolina",
  46: "South Dakota",
  47: "Tennessee",
  48: "Texas",
  49: "Utah",
  50: "Vermont",
  51: "Virginia",
  53: "Washington",
  54: "West Virginia",
  55: "Wisconsin",
  56: "Wyoming",
  60: "American Samoa",
  64: "Federated States of Micronesia",
  66: "Guam",
  69: "Northern Mariana Islands",
  70: "Palau",
  72: "Puerto Rico",
  78: "Virgin Islands",
};

const queryFields = {
  basicScorecard: [
    "id",
    "school.name",
    "school.school_url",
    "school.state_fips",
    "school.city",
    "latest.student.enrollment.all",
    "latest.admissions.admission_rate.overall",
    "latest.cost.attendance.academic_year",
  ],
  defaultQuery: [
    "id",
    "school.name",
    "school.school_url",
    "school.state_fips",
    "school.city",
    "school.ownership",
    "school.institutional_characteristics.level",
    "school.minority_serving.historically_black",
    "school.minority_serving.predominantly_black",
    "school.minority_serving.annh",
    "school.minority_serving.tribal",
    "school.minority_serving.hispanic",
    "school.minority_serving.nant",
  ],
  schoolOverview: [
    "id",
    "school.school_url",
    "school.state_fips",
    "school.city",
    "school.ownership",
    "school.institutional_characteristics.level",
    "school.minority_serving.historically_black",
    "school.minority_serving.predominantly_black",
    "school.minority_serving.annh",
    "school.minority_serving.tribal",
    "school.minority_serving.hispanic",
    "school.minority_serving.nant",
  ],
  schoolAcademics: [
    "id",
    "school.name",
    "latest.admissions.admission_rate.overall",
    "latest.admissions.sat_scores.average.overall",
    "latest.admissions.act_scores.midpoint.cumulative",
    "school.accreditor",
    "latest.student.retention_rate.four_year.full_time_pooled",
    "latest.academics.program_percentage.agriculture",
    "latest.academics.program_percentage.resources",
    "latest.academics.program_percentage.architecture",
    "latest.academics.program_percentage.ethnic_cultural_gender",
    "latest.academics.program_percentage.communication",
    "latest.academics.program_percentage.communications_technology",
    "latest.academics.program_percentage.computer",
    "latest.academics.program_percentage.personal_culinary",
    "latest.academics.program_percentage.education",
    "latest.academics.program_percentage.engineering",
    "latest.academics.program_percentage.engineering_technology",
    "latest.academics.program_percentage.language",
    "latest.academics.program_percentage.family_consumer_science",
    "latest.academics.program_percentage.legal",
    "latest.academics.program_percentage.english",
    "latest.academics.program_percentage.humanities",
    "latest.academics.program_percentage.library",
    "latest.academics.program_percentage.biological",
    "latest.academics.program_percentage.mathematics",
    "latest.academics.program_percentage.military",
    "latest.academics.program_percentage.multidiscipline",
    "latest.academics.program_percentage.parks_recreation_fitness",
    "latest.academics.program_percentage.philosophy_religious",
    "latest.academics.program_percentage.theology_religious_vocation",
    "latest.academics.program_percentage.physical_science",
    "latest.academics.program_percentage.science_technology",
    "latest.academics.program_percentage.psychology",
    "latest.academics.program_percentage.security_law_enforcement",
    "latest.academics.program_percentage.public_administration_social_service",
    "latest.academics.program_percentage.social_science",
    "latest.academics.program_percentage.construction",
    "latest.academics.program_percentage.mechanic_repair_technology",
    "latest.academics.program_percentage.precision_production",
    "latest.academics.program_percentage.transportation",
    "latest.academics.program_percentage.visual_performing",
    "latest.academics.program_percentage.health",
    "latest.academics.program_percentage.business_marketing",
  ],
  schoolStudentLife: [
    "id",
    "school.name",
    "student.demographics.race_ethnicity.white",
    "student.demographics.race_ethnicity.black",
    "student.demographics.race_ethnicity.hispanic",
    "student.demographics.race_ethnicity.asian",
    "student.demographics.race_ethnicity.aian",
    "student.demographics.race_ethnicity.nhpi",
    "student.demographics.race_ethnicity.two_or_more",
    "student.demographics.female",
    "student.demographics.male",
    "school.carnegie_size_setting",
  ],
  schoolFinancial: [
    "id",
    "school.name",
    "cost.tuition.in_state",
    "cost.tuition.out_of_state",
    "cost.attendance.academic_year",
    "aid.federal_loan_rate",
    "aid.median_debt.completers.overall",
    "aid.ftft_federal_loan_rate",
    "student.undergrads_with_pell_grant_or_federal_student_loan",
  ],
};

const religiousAffiliations = {
  "-1": "Not reported",
  "-2": "Not applicable",
  22: "American Evangelical Lutheran Church",
  24: "African Methodist Episcopal Zion Church",
  27: "Assemblies of God Church",
  28: "Brethren Church",
  30: "Roman Catholic",
  33: "Wisconsin Evangelical Lutheran Synod",
  34: "Christ and Missionary Alliance Church",
  35: "Christian Reformed Church",
  36: "Evangelical Congregational Church",
  37: "Evangelical Covenant Church of America",
  38: "Evangelical Free Church of America",
  39: "Evangelical Lutheran Church",
  40: "International United Pentecostal Church",
  41: "Free Will Baptist Church",
  42: "Interdenominational",
  43: "Mennonite Brethren Church",
  44: "Moravian Church",
  45: "North American Baptist",
  47: "Pentecostal Holiness Church",
  48: "Christian Churches and Churches of Christ",
  49: "Reformed Church in America",
  50: "Episcopal Church, Reformed",
  51: "African Methodist Episcopal",
  52: "American Baptist",
  53: "American Lutheran",
  54: "Baptist",
  55: "Christian Methodist Episcopal",
  57: "Church of God",
  58: "Church of Brethren",
  59: "Church of the Nazarene",
  60: "Cumberland Presbyterian",
  61: "Christian Church (Disciples of Christ)",
  64: "Free Methodist",
  65: "Friends",
  66: "Presbyterian Church (USA)",
  67: "Lutheran Church in America",
  68: "Lutheran Church - Missouri Synod",
  69: "Mennonite Church",
  71: "United Methodist",
  73: "Protestant Episcopal",
  74: "Churches of Christ",
  75: "Southern Baptist",
  76: "United Church of Christ",
  77: "Protestant, not specified",
  78: "Multiple Protestant Denomination",
  79: "Other Protestant",
  80: "Jewish",
  81: "Reformed Presbyterian Church",
  84: "United Brethren Church",
  87: "Missionary Church Inc",
  88: "Undenominational",
  89: "Wesleyan",
  91: "Greek Orthodox",
  92: "Russian Orthodox",
  93: "Unitarian Universalist",
  94: "Latter Day Saints (Mormon Church)",
  95: "Seventh Day Adventists",
  97: "The Presbyterian Church in America",
  99: "Other (none of the above)",
  100: "Original Free Will Baptist",
  101: "Ecumenical Christian",
  102: "Evangelical Christian",
  103: "Presbyterian",
  105: "General Baptist",
  106: "Muslim",
  107: "Plymouth Brethren",
};

// END KEY VALUE SECTION
//
//
//
// MOCK PHOTOS SECTION

const mockPhotos = [
  "https://images.unsplash.com/photo-1561525985-654e6a2fa04a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1577648447942-c5bdd624b8b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1561588016-0fe1e5bde1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1547573855-8486915de533?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1580068028162-4fb359f81cb1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1566292536119-00c45831a540?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1585511686939-43e83dc0134a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1561417547-4c84cab98e6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1566959621395-9200c65ba74b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1559397523-59f32c009a28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1559826500-b9603ae353c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1589129230246-1aa19d2f7519?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1571113357441-9ddf596c076a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1590454796582-63b9ad257f15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1588933945306-eff59408abf0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1575498225878-7d9a7656dbe4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1591268193431-c86baf208255?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1557409075-55d39ef624fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1586210890738-f54bc09a4699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1522211545580-794e07bf6751?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1567938637623-7b760dee6496?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1585556172862-8c9e53b57339?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1547653872-052e3539decc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1589401763799-b2e409e5bd2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1577942948749-a3dbb5c6db0a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1527643785850-c813751ec16e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1590954771283-08e124e37f17?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1554911940-05efc1892bc5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1558406505-2404216c65f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1542451156-0b0f9cc0c1e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1565572473942-19349e997900?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1562855742-bcdfa2de751d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1591202481001-06897b4bee16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1543577973-fde5ec465f1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1577801961331-d6719362d442?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1549741501-b1e583e94ee3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1588970924000-3679839efe9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1589702167849-dd0e18f8d9ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1558197464-73ae8a1fc0f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1587243021724-70caecb543b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1583528163997-30a94f1f9438?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1561482423-8bec9e825f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1570890511545-55f57c318e0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1569964253294-d57c7f6f7561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1572044643512-c0465c39cec8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1542344773-bed78065a0ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1511945256206-8f041d42dd78?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1577801961209-ab4a800e6e2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1591647772655-ddb114cfbe2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1566203658430-c55bbbaf1d41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1558689934-786848c735fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1573991289150-f974cfb9504d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1542321204-23959c19158b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1583086095254-ecf19041c013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1556206346-02882b689a77?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1572062063686-dff25d9c6d22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
  "https://images.unsplash.com/photo-1559669835-2c798d0b821d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzODE1Nn0",
];

// END MOCK PHOTOS SECTION
//
//
//
// INDEX.JS SCRIPT

const homeButton = document.querySelector("#home-button");
const searchButton = document.querySelector(".search__cta");
const loadMoreButton = document.querySelector(".more__results");

let currentPage = 0;

homeButton.addEventListener("click", () => {
  console.log("Home Button: Clicked");
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Search Button: Clicked");
  const query = "basicScorecard";
  handleResponseDisplay(query, currentPage, true);
});

loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
  const query = "basicScorecard";
  handleResponseDisplay(query, currentPage, true);
});

// END INDEX.JS SCRIPT
//
//
//
// GENERATE REQUEST

function generateScorecardQureyString(
  query,
  currentPage = null,
  isBasicQuery,
  schoolId = null
) {
  const scorecardUrl =
    "https://api.data.gov/ed/collegescorecard/v1/schools.json";
  const SCORECARDKEY = "8nR6JMFPRqJzkksBe7V4aD6wITl4MOWZvcIdgL1b";
  let params = "";
  let fields = `_fields=${queryFields[query].join()}`;
  if (isBasicQuery) {
    const searchValue = document.querySelector(".search__input").value;
    const citySearch = searchValue
      .split(",")
      .map((city) => city.replace(" ", "%20"));

    // Settings for pagination (if neccessary)
    let page = `page=${currentPage}`;
    let perPage = `per_page=${8}`;
    let searchParameter = `school.city=${citySearch}`;
    let institutionType = `school.degrees_awarded.predominant=2,3`;
    let apiKey = `api_key=${SCORECARDKEY}`;

    params = `${fields}&${searchParameter}&${page}&${perPage}&${institutionType}&${apiKey}`;
  } else {
    let searchParameter = `id=${schoolId}`;
    params = `${fields}&${searchParameter}&${SCORECARDKEY}`;
  }

  const queryString = `${scorecardUrl}?${params}`;
  console.log(queryString);
  return queryString;
  // handleApiRequest(query, params, fields, currentPage);
}

// END GENERATE REQUEST
//
//
//
// MAKE API REQUEST

async function makeScorecardApiRequest(queryString) {
  const scorecardApiResponse = await axios.get(queryString);
  return scorecardApiResponse;
}

// END MAKE API REQUEST
//
//
//
// HANDLE SCORECARD DISPLAY

function handleResponseDisplay(
  query,
  currentPage,
  isBasicQuery,
  querySpecificData = null
) {
  const queryString = generateScorecardQureyString(
    query,
    currentPage,
    isBasicQuery
  );
  if (isBasicQuery) {
    makeScorecardApiRequest(queryString).then((response) =>
      handleBasicScorecard(response, currentPage)
    );
  } else {
    makeScorecardApiRequest(queryString).then((response) =>
      handleModalScorecard(response, query, querySpecificData)
    );
  }
}

// END HANDLE SCORECARD DISPLAY
//
//
//
// HANDLE BASIC SCORECARD

function handleBasicScorecard(response, currentPage) {
  const responseMetadata = response.data.metadata;
  const cleanBasicResponse = cleanResponseData(response.data.results);
  console.log("[cleanBasicResponse]: ", cleanBasicResponse);

  const basicScorecard = handleBasicScorecardData(
    cleanBasicResponse,
    mockPhotos,
    responseMetadata
  );
  displayScorecard(basicScorecard, currentPage);
  handleScorecardCtas();
}

// END BASIC SCORECARD
//
//
//
// HANDLE MODAL SCORECARD

function handleModalScorecard(response, query, imgUrl) {
  const cleanModalResponse = cleanResponseData(response.data.results);
  console.log("[cleanModalResponse]: ", cleanModalResponse);

  const modalScorecard = handleModalScorecardData(cleanModalResponse, imgUrl);
  displayModalScorecard(modalScorecard, query);
}

// END HANDLE MODAL SCORECARD
//
//
//
// HANDLE SCORECARD RESPONSES

function handleBasicScorecardData(basicResponseData, images, responseMetadata) {
  // Set the number of pages returned from API
  const additionalPages =
    responseMetadata.total / 8 > 1 ? responseMetadata.total / 8 : 0;

  // Image placeholders to fill out the effect of the cards
  const imgUrls = images;
  // Return an array of scorecard objects with clean values and more convinient keys
  const scorecardData = basicResponseData.map((data, i) => {
    const {
      id,
      "latest.admissions.admission_rate.overall": rateOfAdmission,
      "latest.student.enrollment.all": schoolAttendance,
      "school.name": schoolName,
      "school.city": schoolCity,
      "school.school_url": schoolWebsite,
      "school.state_fips": stateFips,
      "latest.cost.attendance.academic_year": costPerYear,
    } = data;

    // Convert the formatting of the dollar and percent values
    let avgCost = formatDollarAmounts(costPerYear);
    let adminRate = formatPercentages(rateOfAdmission);

    return {
      adminRate,
      avgCost,
      schoolAttendance,
      schoolCity,
      schoolName,
      schoolWebsite,
      stateFips,
      schoolId: id,
      imgUrl: imgUrls[i],
    };
  });

  return { additionalPages, scorecardData };
}

// END HANDLE SCORECARD RESPONSES
//
//
//
// HANDLE DEFAULT MODAL RESPONSE

function handleModalScorecardData(modalResponseData, imgUrl) {
  const {
    id,
    "school.name": schoolName,
    ...overviewSubsectionData
  } = modalResponseData;

  const overviewSubsection = handleSubsectionData(
    overviewSubsectionData,
    "schoolOverview"
  );
  return {
    schoolName,
    imgUrl,
    overviewSubsection,
    schoolId: id,
  };
}

// END HANDLE DEFAULT MODAL RESPONSE
//
//
//
// HANDLE SUBSECTION RESPONSES

function handleSubsectionData(subsectionResponse, query) {
  if (query === "schoolOverview") {
    const {
      "school.school_url": schoolWebsite,
      "school.state_fips": schoolState,
      "school.city": schoolCity,
      "school.ownership": schoolOwnership,
      "school.religious_affiliation": schoolReligion,
      "school.institutional_characteristics.level": schoolType,
      ...minorityServing
    } = subsectionResponse;

    const specialConciderations = filterSpecialConciderations(minorityServing);

    return {
      schoolWebsite,
      schoolState,
      schoolCity,
      schoolOwnership,
      schoolReligion,
      schoolType,
      specialConciderations,
    };
  }
}

// END HANDLE SUBSECTION RESPONSES
//
//
//
// SCORECARD CTA SECTION

function handleScorecardCtas() {
  let scorecardCtas = document.querySelectorAll(".gallery__card-wrapper");
  scorecardCtas.forEach((cardCta) => {
    cardCta.addEventListener("click", function () {
      const imgUrl = this;
      console.log(imgUrl);
      handleOnClick(this.getAttribute("id"), imgUrl);
    });
  });
}

function handleOnClick(schoolId, imgUrl) {
  const params = schoolId;
  const query = "defaultQuery";
  handleResponseDisplay(query, params, false, imgUrl);
}

// END SCORECARD CTA SECTION
//
//
//
// DISPLAY SCORECARD

function displayScorecard(handledScorecards, currentPage) {
  const { scorecardData, additionalPages } = handledScorecards;

  if (currentPage > additionalPages - 1 || additionalPages < 0) {
    document.querySelector("#page__row-more_id").style.display = "none";
  } else {
    document.querySelector("#page__row-more_id").style.display = "flex";
  }

  console.log(scorecardData);
  const gallery = document.querySelector(".page__row-gallery");
  scorecardData.forEach((card) => {
    gallery.innerHTML = gallery.innerHTML + basicScorecardTemplate(card);
  });
}

// END DISPLAY SCORECARD
//
//
//
// DISPLAY MODAL SCORECARD

function displayModalScorecard(defaultModalData) {
  const [schoolId, schoolName, imgUrl, overviewSubsection] = defaultModalData;
  console.log(overviewSubsectionData);
  console.log(schoolId, schoolName, imgUrl);
  const pageModal = document.querySelector(".page__modal");
  pageModal.style.display = "flex";

  const defaultSubsectionDisplay = schoolOverviewDisplayTemplate(
    overviewSubsection
  );

  pageModal.innerHTML = fullScorecardTemplate(
    schoolName,
    schoolId,
    defaultSubsectionDisplay
  );
}

// END DISPLAY MODAL SCORECARD
//
//
//
// TAB HEADING CTAS

// add event listener to the document for dom elements not rendered yet
document.addEventListener("click", (e) => {
  // check if the element clicked on is a heading tab
  if (checkClass(e.target, "content__heading")) {
    // reset the styles to remove the active class from previously active tab
    resetHeadingClasses();
    // toggle the current tab to have active style
    e.target.classList.toggle("content__heading-active");
    // pass the current tab to the display function to display correct subsection template
    console.log(e.target.id);
    const params = ``;
  }
});

// test if the clicked element in the document is a tab heading
function checkClass(elem, className) {
  // return the boolean test of the class name passed to the checkClass fn
  return elem.classList.contains(className);
}

// reset the styles for the tab headings to default (non-active)
function resetHeadingClasses() {
  // get the list of elemnents that are tab headings
  const headingElems = document.querySelectorAll(".content__heading");
  // iterate through each heading
  headingElems.forEach((heading) => {
    // check if the the heading is already active
    if (heading.classList.contains("content__heading-active")) {
      // toggle the active class if it was already active for a different element
      heading.classList.toggle("content__heading-active");
    }
  });
}

// END TAB HEADING CTAS
//
//
//
// DISPLAY SUBSECTION

function displaySubsection(currentTab, scorecardData) {
  const subsectionDisplay = document.querySelector(".modal__section-facts");

  switch (currentTab) {
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolOverviewDisplayTemplate(
        scorecardData
      );
    case "schoolAcademics":
      subsectionDisplay.innerHTML = schoolAcademicsDisplayTemplate(
        scorecardData
      );
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolStudentLifeDisplayTemplate(
        scorecardData
      );
    case "schoolOverview":
      subsectionDisplay.innerHTML = schoolFinancialDisplayTemplate(
        scorecardData
      );
  }
}

// END DISPLAY SUBSECTION
//
//
//
// CLEAN SCORECARD DATA

function cleanResponseData(scorecards) {
  // Return an array of cleaned scorecard objects
  return scorecards.map((card) => {
    let schoolScorecard = {};
    // Iterate over the data from each school to reformat null values to display 'undisclosed'
    Object.keys(card).forEach((key) => {
      schoolScorecard[key] = card[key] === null ? "Undisclosed" : card[key];
    });

    return schoolScorecard;
  });
}

// END CLEAN SCORECARD DATA
//
//
//
// FORMAT NUMERIC VALUES

// Formats the integer dollar amounts to display like currencies
function formatDollarAmounts(price) {
  // Stops the format change if the cost is an undisclosed value
  if (price === "Undisclosed") {
    return price;
  }

  const currencyFormat = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return `$${currencyFormat}`;
}

// Formats the admission rate decimal value to a percentage
function formatPercentages(percent) {
  // Stops the format change if the admission rate is an undisclosed value
  if (percent === "Undisclosed") {
    return percent;
  }

  return `${(percent * 100).toFixed(1)}%`;
}

// END FORMAT NUMERIC VALUES
//
//
//
// FORMAT SCHOOL URL

function formatSchoolUrl(website) {
  const reg_exUrl = new RegExp("www.[a-zA-Z0-9-.]+.[a-zA-Z]{0}");

  // console.log(website);

  const firstThreeChrs = website.substring(0, 4);
  // console.log(firstThreeChrs);

  if (firstThreeChrs === "www.") {
    // console.log("simple Urls: ", website);
    return website;
  }
  // console.log("simple: ", reg_exUrl.exec(website));
  if (!reg_exUrl.exec(website)) {
    // console.log("simple", `www.${website}`);
    return `www.${website}`;
  } else {
    // console.log(reg_exUrl.exec(website));
    return reg_exUrl.exec(website);
  }
}

// END FORMAT SCHOOL URL
//
//
//
// FILTER SPECIAL CONCIDERATIONS

function filterSpecialConciderations(schoolData) {
  const categories = [
    "Asian American or Native American or Pacific Islander Serving Institurion",
    "Alaska Native or Native Hawaiian Serving Institution",
    "Historically Black Instituion",
    "Male Only Institution",
    "Native American (non-tribal) Institution",
    "Predominantly Black Instituion",
    "Tribal College or University",
    "Women's Only Institution",
  ];

  const specialConcideratioins = Object.keys(schoolData).map((key) => {
    if (schoolData[key] !== 0) {
      return `<div class="section__item">${categories[key]}</div>`;
    }
  });
  if (specialConcideratioins.length > 0) {
    specialConcideratioins;
  } else {
    return "<div class='section__item'>No Specific Special Conciderations</div>";
  }
}

// END FILTER SPECIAL CONCIDERATIONS
//
//
//
//

// END
