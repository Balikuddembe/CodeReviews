document.addEventListener("DOMContentLoaded", function () {
  addWavyUnderline(findAllUnorderedListElements());
  displayProjects()
});

function addWavyUnderline(elements) {
  for (let item of elements)
    item.style.textDecoration = "wavy underline"
}

function displayProjects() {
  document.getElementById('projects').innerHTML = prepareProjects('Portfolio', 'SurveyForm', 'landingForm')
}

function findAllUnorderedListElements() {
  return document.querySelectorAll('.social-media-links')
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let projects = [firstProject, secondProject, thirdProject]
  let title = " "

  for (let i = 0; i < projects.length; i++) {
    const element = projects[i]
    if (element.trim().length > 20) {
      title = title + `<p>${element}</p><br>`
    }
    else {
      title = title + `<span>${element}</span><br>`
    }
  }
  return title
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









