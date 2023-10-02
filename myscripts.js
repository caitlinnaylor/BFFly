
// Function to toggle the visibility of the table when at the end of the page
function toggleTableVisibility() {
	for (let i = 0; i < 3; i++) {
		const profile = document.getElementById('feed_profile');
		const profile2 = document.getElementById('feed_profile');
		const container = document.getElementById('feed_profile_scroll');
		const container2 = document.getElementById('feed_profile_scroll2');
		const clonedTable = profile.cloneNode(true);
		const clonedTable2 = profile2.cloneNode(true);

	  // Append the cloned table to the container
		container.appendChild(clonedTable);
		container2.appendChild(clonedTable2);
		container.style.display = 'block';
		container2.style.display = 'block';
	}
    
}
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

const imageSources = ['plus_btn.svg', 'tick_btn.svg'];
let currentImageIndex = 0;

function toggleImage() {
	const image = document.getElementById('plus_btn');
	currentImageIndex = (currentImageIndex + 1) % imageSources.length;
	image.src = imageSources[currentImageIndex];
}

