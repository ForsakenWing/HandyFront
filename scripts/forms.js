(function () {
    emailjs.init('jRbmQrEBmttvca9mu');
})();

function openQouteForm() {
    let form = document.getElementById("QouteFormContainerOuter");
    document.body.style.overflowY = "hidden";
    form.style.display = "flex";
}

function closeQouteForm() {
    let form = document.getElementById("QouteFormContainerOuter");
    document.body.style.overflowY = "unset";
    form.style.display = "none";
}

const form = document.getElementById('contact-form');
window.onload = function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_b0n5sbp', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        form.classList.add("hide");
        let successfulMsg = document.getElementById("successful-msg");
        successfulMsg.classList.add("show")
        document.body.style.overflowY = "unset";
        setTimeout(() => {
            closeQouteForm();
            successfulMsg.classList.remove("show");
            form.classList.remove("hide");
        }, 2000)
    });
}



