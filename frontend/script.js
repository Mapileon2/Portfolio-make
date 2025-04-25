async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}: ${error}`);
    return null;
  }
}

async function updateTestimonials() {
  const testimonialsData = await fetchData('http://localhost:3000/testimonials');
  if (testimonialsData) {
    const testimonialsSection = document.getElementById('testimonials');
    const testimonialsContainer = testimonialsSection.querySelector('.grid');

    // Clear existing testimonials
    testimonialsContainer.innerHTML = '';

    testimonialsData.forEach(testimonial => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('bg-blue-50', 'p-8', 'rounded-2xl', 'shadow-lg', 'relative', 'dark:bg-gray-700');
      let innerHTML = `
        <div class="absolute -top-6 -left-6">
          <div class="kodama"></div>
        </div>
        <div class="mb-4">
          <span class="text-yellow-500">★ ★ ★ ★ ★</span>
        </div>
        <p class="text-gray-700 italic mb-6 dark:text-gray-300">
          ${testimonial.text}
        </p>
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
               alt="${testimonial.author}"
               class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-600">
          <div>
            <h4 class="font-bold text-gray-800 dark:text-gray-200">${testimonial.author}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.title}</h4>
          </div>
        </div>
      `;
      testimonialDiv.innerHTML = innerHTML;
      testimonialsContainer.appendChild(testimonialDiv);
    });
  }
}

async function updateContact() {
  const contactData = await fetchData('http://localhost:3000/contact');
  if (contactData) {
    const contactSection = document.getElementById('contact');
    contactSection.querySelector('.fa-envelope').parentNode.nextSibling.textContent = contactData.email;
    contactSection.querySelector('.fa-phone').parentNode.nextSibling.textContent = contactData.phone;
    contactSection.querySelector('.fa-map-marker-alt').parentNode.nextSibling.textContent = contactData.location;
  }
}

async function updateProjects() {
  const projects = await fetchData('http://localhost:3000/projects');
  if (projects) {
    const projectsSection = document.getElementById('projects');
    const projectsContainer = projectsSection.querySelector('.grid');

    // Clear existing projects
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project-book');
      let innerHTML = `
        <div class="relative h-full">
          <div class="book-inner bg-white rounded-xl shadow-xl overflow-hidden h-full dark:bg-gray-800">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                 alt="Onboarding Project"
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="ghibli-font text-2xl text-gray-800 mb-2 dark:text-gray-200">${project.title}</h3>
              <p class="text-gray-600 mb-4 dark:text-gray-400">${project.description}</p>
              <div class="flex items-center mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${project.tags.join(', ')}</span>
              </div>
              <div class="flex justify-between items-center">
                <div>
                  <span class="text-yellow-500">★ ★ ★ ★ ★</span>
                  <p class="text-sm text-gray-600 dark:text-gray-400">${project.result}</p>
                </div>
                <a href="${project.storyLink}" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  Read Story <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="book-spine"></div>
        </div>
      `;
      projectDiv.innerHTML = innerHTML;
      projectsContainer.appendChild(projectDiv);
    });
  }
}

async function updateSkills() {
  const skillsData = await fetchData('http://localhost:3000/skills');
  if (skillsData) {
    const skillsSection = document.getElementById('skills');
    const skillsContainer = skillsSection.querySelector('.grid');

    // Clear existing skills
    skillsContainer.innerHTML = '';

    skillsData.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('bg-white', 'p-6', 'rounded-2xl', 'shadow-lg', 'dark:bg-gray-800');
      let innerHTML = `
        <div class="flex justify-center mb-6">
          <div class="bg-blue-100 p-4 rounded-full dark:bg-gray-700">
            <i class="fas fa-chess-queen text-3xl text-blue-600 dark:text-blue-300"></i>
          </div>
        </div>
        <h3 class="ghibli-font text-2xl text-center mb-4 text-gray-800 dark:text-gray-200">${category.category}</h3>
        <div class="space-y-4">
      `;
      category.skills.forEach(skill => {
        innerHTML += `
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${skill.name}</span>
              <span class="text-sm text-gray-500">${skill.percentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div class="bg-blue-600 h-2 rounded-full" style="width: ${skill.percentage}%; background-color: #FFD700;"></div>
            </div>
          </div>
        `;
      });
      innerHTML += '</div>';
      categoryDiv.innerHTML = innerHTML;
      skillsContainer.appendChild(categoryDiv);
    });
  }
}

async function updateTestimonials() {
  const testimonialsData = await fetchData('http://localhost:3000/testimonials');
  if (testimonialsData) {
    const testimonialsSection = document.getElementById('testimonials');
    const testimonialsContainer = testimonialsSection.querySelector('.grid');

    // Clear existing testimonials
    testimonialsContainer.innerHTML = '';

    testimonialsData.forEach(testimonial => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('bg-blue-50', 'p-8', 'rounded-2xl', 'shadow-lg', 'relative', 'dark:bg-gray-700');
      let innerHTML = `
        <div class="absolute -top-6 -left-6">
          <div class="kodama"></div>
        </div>
        <div class="mb-4">
          <span class="text-yellow-500">★ ★ ★ ★ ★</span>
        </div>
        <p class="text-gray-700 italic mb-6 dark:text-gray-300">
          ${testimonial.text}
        </p>
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
               alt="${testimonial.author}"
               class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-600">
          <div>
            <h4 class="font-bold text-gray-800 dark:text-gray-200">${testimonial.author}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.title}</h4>
          </div>
        </div>
      `;
      testimonialDiv.innerHTML = innerHTML;
      testimonialsContainer.appendChild(testimonialDiv);
    });
  }
}

async function updateContact() {
    const contactData = await fetchData('http://localhost:3000/contact');
    if (contactData) {
        document.querySelector('#contact .fa-envelope').parentNode.nextSibling.textContent = contactData.email;
        document.querySelector('#contact .fa-phone').parentNode.nextSibling.textContent = contactData.phone;
        document.querySelector('#contact .fa-map-marker-alt').parentNode.nextSibling.textContent = contactData.location;
    }
}

// Call the functions to update the content
updateProjects();
updateSkills();
updateTestimonials();
updateContact();
