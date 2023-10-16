const ruleContainer = document.querySelector('.rule-container');
const ruleBtn = document.querySelector('.rule-btn');
const closeRule = document.querySelector('.close-rule');
const closeRule2 = document.querySelector('.close-rule2');
const rule = () => {
  if (ruleContainer.classList.toggle('active')) {
    ruleContainer.classList.toggle('is-active');
  } else {
    ruleContainer.classList.toggle('is-active');
  }
};

ruleBtn.addEventListener('click', rule);
closeRule.addEventListener('click', rule);
closeRule2.addEventListener('click', rule);