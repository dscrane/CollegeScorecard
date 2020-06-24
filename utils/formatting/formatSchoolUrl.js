export const formatSchoolUrl = (website) => {
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
};
