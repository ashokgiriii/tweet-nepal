


//  finding username
const input = document.querySelector(".input-username")
const usernameContainer = document.querySelector('.searched-username-container')

input.addEventListener("input", function (event) {
    if (input.value.trim() === "") {
        // Clear the inner HTML of the container
        usernameContainer.innerHTML = "";
        return; // Exit the function early
    }

    axios.get(`/username/${input.value}`)
        .then(function (data) {
            let usernames = "";
            data.data.forEach(function (elem) {
                const userPhoto = elem.userPhoto ? elem.userPhoto : '/images/nouser.webp';
                usernames += `<div class="searched-username">
                <a href="/${elem.username}" class="holds-id-of-username"></a>
                    <img src="${userPhoto}" alt="" class="searched-user-image">
                    <div>
                        <p class="searched-user-username">@${elem.username}</p>
                        <p class="searched-user-name">${elem.name}</p>
                    </div>
                </div>`;
            });
            // Update the UI with the usernames
            usernameContainer.innerHTML = usernames;
        })
        .catch(function (error) {
            console.error("Error fetching usernames:", error);
        });
});








// hide unhide the form 
const formContainer = document.querySelector("#form-container");
const createPostButton = document.querySelector(".create-post-button");
const updateProfilePictureButton = document.querySelector("#update-profile-picture-button");
const editProfileButton = document.querySelector("#edit-profile-button");
const formCloseButton = document.querySelectorAll(".close-form");
const commentFormButton = document.querySelectorAll(".comment-form-button");
const commentForm = document.querySelectorAll(".comment-form");
const searchContainerButton = document.querySelector(".search-container-button");
const searchContainer = document.querySelector(".search-container");
const popup = document.querySelector("#left-side div.pop-up")
const shareIcon = document.querySelectorAll('.share-icon');
const viewNotes = document.querySelectorAll(".view-notes")
const closeNote = document.querySelectorAll("i.cancel")
const closeSeachContainer = document.querySelectorAll(".search-container")


closeNote.forEach((each) => {
    each.addEventListener("click", () => {
        document.querySelector("#right-side").classList.remove("active")
        closeSeachContainer.forEach((each) => {
            each.classList.remove("active")
        })
    })

})

viewNotes.forEach((each) => {
    each.addEventListener("click", () => {

        document.querySelector("#right-side").classList.toggle("active")
    })
})



// Function to close all forms and searched container
const closeAllForms = () => {
    formContainer.children[0].classList.remove("active");
    formContainer.children[1].classList.remove("active");
    formContainer.children[2].classList.remove("active");
    commentForm.forEach((eachform) => {
        eachform.classList.remove("active");
    })
    searchContainer.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")
    document.querySelector("#right-side").classList.remove("active")
    document.querySelector(".menu-button").classList.toggle("ri-menu-line")


};

// Event listener for 'esc' keypress event
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeAllForms();
        popup.classList.remove("active");
        shareIcon.forEach((share) => {
            share.classList.remove("active");
        })
        document.querySelector("#left-side").classList.remove("active")

        document.querySelector("#right-side").classList.remove("active")

    }
});




// Event listeners for opening forms
createPostButton.addEventListener("click", () => {
    closeAllForms();
    formContainer.children[0].classList.add("active");
    popup.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")
    document.querySelector("#right-side").classList.remove("active")



});

updateProfilePictureButton.addEventListener("click", () => {
    closeAllForms();
    formContainer.children[1].classList.add("active");
    popup.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")
    document.querySelector("#right-side").classList.remove("active")



});

editProfileButton.addEventListener("click", () => {
    closeAllForms();
    formContainer.children[2].classList.add("active");
    popup.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")

    document.querySelector("#right-side").classList.remove("active")


});


// commentFormButton.forEach((eachButton) => {
//     closeAllForms()
//     eachButton.addEventListener("click", () => {
//         closeAllForms()
//         eachButton.parentElement.querySelector("form").classList.add("active");
//     });
// })

searchContainerButton.addEventListener("click", () => {
    closeAllForms();
    searchContainer.classList.toggle("active");
    popup.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")

    document.querySelector("#right-side").classList.remove("active")


});

// Event listeners for closing forms
formCloseButton.forEach((each) => {
    each.addEventListener("click", closeAllForms);
    popup.classList.remove("active");
    shareIcon.forEach((share) => {
        share.classList.remove("active");
    })
    document.querySelector("#left-side").classList.remove("active")
    document.querySelector("#right-side").classList.remove("active")


});






// for viewing the image before submitting
function previewImage(event) {
    const preview = document.querySelectorAll('.preview');
    const file = event.target.files[0];


    // Check if a file is selected
    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            preview.forEach((eachPrev) => {
                eachPrev.src = reader.result;
                eachPrev.removeAttribute('hidden'); // Remove the hidden attribute

            })
        }

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, clear the preview and hide the image
        preview.forEach((eachPrev) => {
            eachPrev.src = "";
            eachPrev.setAttribute('hidden', 'true'); // Add the hidden attribute
        })
    }
}



// for increasing the height of text area comment white typing
// JavaScript to adjust textarea height based on content length
const textarea = document.querySelectorAll('.commentTextArea');


textarea.forEach((eachPrev) => {
    eachPrev.addEventListener('input', function () {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = this.scrollHeight + 'px'; // Set height to content height
    });
})