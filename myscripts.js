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

//Edit button for text areas 
function toggleAboutMeEditable() {
    const editableTextarea = document.getElementById('about_me');

    if (editableTextarea.getAttribute('readonly') === null) {
        editableTextarea.setAttribute('readonly', 'readonly');
        document.getElementById('edit2').textContent = 'EDIT';
    } else {
        editableTextarea.removeAttribute('readonly');
        editableTextarea.focus();
        document.getElementById('edit2').textContent = 'SAVE';
    }
}

function toggleNameAgeEditable() {
    const editableTextarea = document.getElementById('name_age');

    if (editableTextarea.getAttribute('readonly') === null) {
        editableTextarea.setAttribute('readonly', 'readonly');
        document.getElementById('edit1').textContent = 'EDIT';
    } else {
        editableTextarea.removeAttribute('readonly');
        editableTextarea.focus();
        document.getElementById('edit1').textContent = 'SAVE';
    }
}

function toggleThoughtEditable() {
    const editableTextarea = document.getElementById('thought');
	alert("hi");

    if (editableTextarea.getAttribute('readonly') === null) {
        editableTextarea.setAttribute('readonly', 'readonly');
        document.getElementById('edit3').textContent = 'EDIT';
    } else {
        editableTextarea.removeAttribute('readonly');
        editableTextarea.focus();
        document.getElementById('edit3').textContent = 'SAVE';
    }
}

function toggleKeyInfoEditable(keyinfo) {
    const editableTextarea = document.getElementById(keyinfo);

    if (editableTextarea.getAttribute('readonly') === null) {
        editableTextarea.setAttribute('readonly', 'readonly');
    } else {
        editableTextarea.removeAttribute('readonly');
        editableTextarea.focus();
    }
}

