// Get form elements and resume output
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Get editable resume sections
const outputName = document.getElementById('outputName') as HTMLSpanElement;
const outputEmail = document.getElementById('outputEmail') as HTMLSpanElement;
const outputPhone = document.getElementById('outputPhone') as HTMLSpanElement;
const outputEducation = document.getElementById('outputEducation') as HTMLParagraphElement;
const outputExperience = document.getElementById('outputExperience') as HTMLParagraphElement;
const outputSkills = document.getElementById('outputSkills') as HTMLParagraphElement;

// Handle form submission to generate resume
resumeForm.addEventListener('submit', function(event: Event) {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Populate the resume fields
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhone.textContent = phone;
  outputEducation.textContent = education;
  outputExperience.textContent = experience;
  outputSkills.textContent = skills;

  // Display resume
  resumeOutput.style.display = 'block';
});

// Automatically save changes as user types in editable sections
document.querySelectorAll('.editable').forEach((element) => {
  element.addEventListener('input', () => {
    // Real-time update happens as the user types in the editable sections
    // ContentEditable automatically handles the inline editing
  });
});
