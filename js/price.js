const allPlans = {
  malayalam: {
    group: [
      { title: "Group Class", price: "₹ 2,999", features: ["10 student/batch", "1 Hr Live Class", "Recorded Classes Available", "24/7 Available"], button: "Contact Us" },
      { title: "Weekend Group Class", price: "₹ 3,999", features: ["3 Student / Batch", "4 Months", "1 Hr Live Class", "Recorded Classes Available", "24/7 Available"], button: "Contact Us" }
    ],
    individual: [
      { title: "Individual Class", price: "₹ 8,999", features: ["30 Days (1 Hr Daily)", "1 Hr Live Class", "Recorded Classes Available", "24/7 Availability"], button: "Contact Us", popular: true },
      { title: "Weekend Class (Individual)", price: "₹ 8,999", features: ["4 Months (Total 30 Hr)", "1 Hr Live Class", "Recorded Classes Available"], button: "Contact Us" }
    ]
  },
  english: {
    group: [
      { title: "Basic Plan( Group )", price: "₹ 2,999", features: ["5 student/batch", "60 Days", "1 Hr Live Class", "Recorded Classes Available", "24/7 Available"], button: "Contact Us" },
      { title: "Premium Plan ( Group )", price: "₹ 4,999", features: ["5 Student / Batch", "1 Hr Live Class", "Recorded Classes Available", "24/7 Available"], button: "Contact Us" }
    ],
    individual: [
      { title: "Basic Plan( Individual )", price: "₹ 7,999", features: ["60 Days", "1 Hr Live Class", "Recorded Classes Available", "24/7 Available"], button: "Contact Us" },
      { title: "Premium Plan (Individual)", price: "₹ 11,999", features: ["60 Days", "1 Hr Live Class", "Recorded Classes Available"], button: "Contact Us", popular: true }
    ]
  }
  
};

function renderSectionPlans(section, type) {
  const plans = allPlans[section][type];
  for (let i = 0; i < 2; i++) {
    const plan = plans[i];
    const card = document.getElementById(`${section}-card${i+1}`);
    card.innerHTML = `
      ${plan.popular ? '<span>Most Popular</span>' : ''}
      <h2>${plan.title}</h2>
      <div class="price">${plan.price}</div>
      <ul class="features">
        ${plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>
      <a href="contact.html" class="btn btn-primary">${plan.button}</a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.planToggle').forEach(toggle => {
    const section = toggle.dataset.section;
    // Default: show group
    toggle.checked = false;
    renderSectionPlans(section, 'group');
    toggle.addEventListener('change', function() {
      renderSectionPlans(section, toggle.checked ? 'individual' : 'group');
    });
    });
});