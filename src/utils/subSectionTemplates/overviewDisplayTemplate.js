export function overviewDisplayTemplate(/* overviewData */) {
  return `<div class="modal__content modal__content-facts">
  <div class="facts__wrapper">
    <div class="facts__row">
      <div class="facts__text facts__text-title">
        Location:
      </div>
      <div class="facts__text facts__text-content">
        Boston, MA
      </div>
    </div>
    <div class="facts__row">
      <div class="facts__text facts__text-title">Branches:</div>
      <div class="facts__text facts__text-content">3 -- Main Branch</div>
    </div>
    <div class="facts__row">
      <div class="facts__text facts__text-title">School Type:</div>
      <div class="facts__text facts__text-content">
        Public 4 Year
      </div>
    </div>
    <div class="facts__row">
      <div class="facts__text facts__text-title">Degrees Awarded:</div>
      <div class="facts__text facts__text-content">Associate's, Bachelor's and Graduate Degrees</div>
    </div>
    <div class="facts__row">
      <div class="facts__text facts__text-title">Religious Affiliation:</div>
      <div class="facts__text facts__text-content">Not Applicable</div>
    </div>
    <div class="facts__row">
        <div class="facts__text facts__text-title">School Homepage:</div>
        <div class="facts__text facts__text-content">
          <a href="#">www.fakeschoolsite.com</a>
        </div>
      </div>
    <div class="facts__row facts__row-special">
      <div class="facts__text facts__text-title_special">Special Conciderations:</div>
      <div class="special__display">
        <div class="special__text special-content">Women's Only Institution</div>
        <div class="special__text special-content">Historically Black Institution</div>
        <div class="special__text special-content">Predominantly Black Instituion</div>
      </div>
  </div>
</div>
`;
}
