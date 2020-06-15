import axios from "axios";
import { SCORECARDKEY } from "../../../../documentation/ignore/keys";

// Define the fields for the basic basicScorecard
const fields = [
  "id",
  "school.name",
  "school.school_url",
  "school.state_fips",
  "school.city",
  "latest.student.enrollment.all",
  "latest.admissions.admission_rate.overall",
  "latest.cost.attendance.academic_year",
];

// Create the URL to fetch from the collegeScorecard API
const scorecardUrl = "https://api.data.gov/ed/collegescorecard/v1/schools.json";
