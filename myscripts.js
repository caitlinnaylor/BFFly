// Function to check if the user has reached the end of the page
function isAtPageEnd() {
    const content = document.getElementById('content');
    const table = document.getElementById('feed_profile_scroll');
    const contentHeight = content.offsetHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // You can adjust this threshold as needed
    const threshold = 100; // Adjust this value as needed

    return contentHeight - (scrollTop + windowHeight) < threshold;
}

// Function to toggle the visibility of the table when at the end of the page
function toggleTableVisibility() {
    const table = document.getElementById('feed_profile_scroll');
    if (isAtPageEnd()) {
        table.style.display = 'block';
    } else {
        table.style.display = 'none';
    }
}

// Attach a scroll event listener to the window
window.addEventListener('scroll', toggleTableVisibility);

// Initial check when the page loads
window.addEventListener('load', toggleTableVisibility);
