export const handleScorecardCta = () => {
  let scorecardCtas = document.querySelectorAll(".gallery__card-wrapper");
  scorecardCtas.forEach((cardCta) => {
    cardCta.addEventListener("click", function () {
      const imgUrl = this.children[0].firstElementChild.firstElementChild.src;
      handleOnClick(this.getAttribute("id"), imgUrl);
    });
  });
};

function handleOnClick(schoolId, imgUrl) {
  const query = "defaultQuery";
  const specs = { query, schoolId, imgUrl, isBasic: false };
  handleResponseDisplay(specs);
}
