import {
  overviewDisplayTemplate,
  academicsDisplayTemplate,
  studentLifeDisplayTemplate,
  financialDisplayTemplate,
} from "../../utils";

export function fullScorecardTemplate() {
  console.log(overviewDisplayTemplate);
  return `<div class="modal__card">
  <div class="modal__card-wrapper">
    <div class="modal__section modal__section-name">
      <div class="modal__content modal__content-name">
        <div class="content__title content__title-name">
          FakeSchool
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
          class="content__heading content__heading-left"
        >
          <span class="content__heading-text">Overview</span>
        </div>
        <div class="content__heading  content__heading-active">
          <span class="content__heading-text">Academics</span>
        </div>
        <div class="content__heading">
          <span class="content__heading-text">Student Life</span>
        </div>
        <div class="content__heading content__heading-right">
          <span class="content__heading-text">Finances</span>
        </div>
      </div>
    </div>

    <div class="modal__section modal__section-facts">
      <!-- Subheading display information --> 
    ${financialDisplayTemplate()}
    </div>
  </div>
</div>
`;
}
