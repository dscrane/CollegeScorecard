export const calculatePopularMajors = (schoolMajors) => {
  const filteredMajors = Object.keys(schoolMajors).filter(
    (major) => schoolMajors[major] > 0.01
  );
  const popularMajors = filteredMajors.map((major) => {
    const majorName = major.split(".").pop();
    const formattedMajorName = majorName.includes("_")
      ? majorName.replace(/_/g, " ")
      : majorName;
    return `<div class="section__item">${formattedMajorName.toLocaleUpperCase()}</div>`;
  });

  return popularMajors.slice(0, 6).join("");
};
