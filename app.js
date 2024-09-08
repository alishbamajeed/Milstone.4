// Get form elements and resume output
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Get editable resume sections
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputPhone = document.getElementById('outputPhone');
var outputEducation = document.getElementById('outputEducation');
var outputExperience = document.getElementById('outputExperience');
var outputSkills = document.getElementById('outputSkills');
// Handle form submission to generate resume
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
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
document.querySelectorAll('.editable').forEach(function (element) {
    element.addEventListener('input', function () {
        // Real-time update happens as the user types in the editable sections
        // ContentEditable automatically handles the inline editing
    });
});
