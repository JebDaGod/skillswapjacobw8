
function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }

    return skills.filter(skill => skill.category === category);
}

// Only run browser functionality when running in a browser
if (typeof document !== 'undefined') {
    const exploreButton = document.getElementById("exploreButton");

    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            alert("Skill exploration features are coming soon!");
        });
    }
}

module.exports = { filterSkillsByCategory };
