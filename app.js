document.addEventListener("DOMContentLoaded", () => {
    const pictureInput = document.getElementById("picture-upload");
    const profilePicture = document.getElementById("profile-picture");

    if (pictureInput) {
        pictureInput.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePicture.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

