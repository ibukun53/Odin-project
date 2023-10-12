const ruleContainer = document.querySelector('.rule-container');
const ruleBtn = document.querySelector('.rule-btn');
const closeRule = document.querySelector('.close-rule');
const closePg = document.querySelector('.rule-image');
const rule = () => {
  if (ruleContainer.classList.toggle('active')) {
    ruleContainer.classList.toggle('is-active');
  } else {
    ruleContainer.classList.toggle('is-active');
  }
};
ruleBtn.addEventListener('click', rule);

closeRule.addEventListener('click', rule);
closePg.addEventListener('click', rule);