// JavaScript for tab switching
document.addEventListener('DOMContentLoaded', function() {
    const planOptions = document.querySelectorAll('.plan-option');
    const planContents = document.querySelectorAll('.plan-content');

    planOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptions.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContents.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSection = document.querySelector('.expandable-section');
    const expandableContent = document.querySelector('.expandable-content');

    expandableSection.addEventListener('click', function() {
        expandableContent.style.display = expandableContent.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtn = document.getElementById('founder15-book-now');
    const founder15ScheduleEmbed = document.getElementById('founder15-schedule-embed');
    const founder15PackageDetails = document.getElementById('founder15-package-details');
    const founder15BackToFeatures = document.getElementById('founder15-back-to-features');

    founder15BookNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbed.style.display = 'block';
        founder15PackageDetails.style.display = 'none';
        founder15BackToFeatures.style.display = 'block';
    });

    founder15BackToFeatures.addEventListener('click', function() {
        founder15ScheduleEmbed.style.display = 'none';
        founder15PackageDetails.style.display = 'block';
        founder15BackToFeatures.style.display = 'none';
    });

    const growthBookNowBtn = document.getElementById('growth-book-now');
    const growthScheduleEmbed = document.getElementById('growth-schedule-embed');
    const growthPackageDetails = document.getElementById('growth-package-details');
    const growthBackToFeatures = document.getElementById('growth-back-to-features');

    growthBookNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbed.style.display = 'block';
        growthPackageDetails.style.display = 'none';
        growthBackToFeatures.style.display = 'block';
    });

    growthBackToFeatures.addEventListener('click', function() {
        growthScheduleEmbed.style.display = 'none';
        growthPackageDetails.style.display = 'block';
        growthBackToFeatures.style.display = 'none';
    });

    const accelerateBookNowBtn = document.getElementById('accelerate-book-now');
    const accelerateScheduleEmbed = document.getElementById('accelerate-schedule-embed');
    const acceleratePackageDetails = document.getElementById('accelerate-package-details');
    const accelerateBackToFeatures = document.getElementById('accelerate-back-to-features');

    accelerateBookNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbed.style.display = 'block';
        acceleratePackageDetails.style.display = 'none';
        accelerateBackToFeatures.style.display = 'block';
    });

    accelerateBackToFeatures.addEventListener('click', function() {
        accelerateScheduleEmbed.style.display = 'none';
        acceleratePackageDetails.style.display = 'block';
        accelerateBackToFeatures.style.display = 'none';
    });
});
