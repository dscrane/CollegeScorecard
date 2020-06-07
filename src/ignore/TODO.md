Content for each schools display card
    [] name (school.name)
    [] city (from root.location.lat && root.location.lon)
    [] state (converted from school.state_fips)
    [] admission rate ({year}.admission_rate.overall)
    [] number of students ({year}.student.size)
    [] school URL (school.schoo_url)
    [] tuition


basic info section [
    "school.name",
    "school.city",
    "school.state",
    "school.school_url",
]


overview section [
    "school.ownership",
    "school.institutional_charactaristics.level",
    "school.minority_serving.historically_black",
    "school.minority_serving.predominantly_black",
    "school.minority_serving.annh",
    "school.minority_serving.tribal",
    "school.minority_serving.hispanic",
    "school.minority_serving.nant",
    "school.minority_serving.men_only",
    "school.minority_serving.women_onl"y

]

academic section [
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

]


student life section [
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

]

financial section [
    "cost.tuition.in_state",
    "cost.tuition.out_of_state",
    "cost.attendance.academic_year",
    "aid.federal_loan_rate",
    "aid.median_debt.completers.overall",
    "aid.ftft_federal_loan_rate",
    "student.undergrads_with_pell_grant_or_federal_student_loan",
]