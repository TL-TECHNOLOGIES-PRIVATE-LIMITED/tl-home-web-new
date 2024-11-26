// cookie consent 


document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const rejectCookies = document.getElementById("rejectCookies");
    
    // Show cookie consent popup only if not already accepted or rejected
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieConsent.classList.remove("d-none");
    }
    
    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.classList.add("d-none");
    });
    
    rejectCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "false");
        cookieConsent.classList.add("d-none");
    });
});

