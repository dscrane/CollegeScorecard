export const formatSchoolUrl = (website) => {
  const reg_exUrl = new RegExp("www.[a-zA-Z0-9-.]+[a-zA-Z]");

  // console.log(website);

  const startsWithWWW = website.substring(0, 4);
  const startsWithHTTP = website.substring(0, 7);
  const startsWithHTTPS = website.substring(0, 8);
  let formattedWebsite = "";

  if (startsWithWWW === "www.") {
    formattedWebsite = website;
    // console.log("[startsWithWWW]: ", formattedWebsite);
    const simpleWebsite = reg_exUrl.exec(formattedWebsite)["0"];
    return simpleWebsite.toLowerCase();
  } else if (startsWithHTTP === "http://") {
    formattedWebsite = website.slice(7);
    if (!formattedWebsite.includes("www.")) {
      formattedWebsite = `www.${formattedWebsite}`;
    }
    // console.log("[startsWithHTTP]", formattedWebsite);
  } else if (startsWithHTTPS === "https://") {
    formattedWebsite = website.slice(8);
    if (!formattedWebsite.includes("www.")) {
      formattedWebsite = `www.${formattedWebsite}`;
    }
    // console.log("[startsWithHTTPS]", formattedWebsite);
  } else {
    formattedWebsite = `www.${website}`;
    // console.log("[firstFourLetters]: ", formattedWebsite);
  }

  // console.log("[simpleUrl]: ", reg_exUrl.exec(formattedWebsite));
  const simpleWebsite = reg_exUrl.exec(formattedWebsite)["0"];
  return simpleWebsite.toLowerCase();
};
