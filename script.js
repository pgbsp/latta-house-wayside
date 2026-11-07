const audioButton = document.getElementById("audioButton");
const narration = document.getElementById("narration");

if (audioButton && narration) {
    const speechSupported =
        "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

    if (!speechSupported) {
        audioButton.disabled = true;
        audioButton.title = "Audio narration is not supported in this browser.";
    } else {
        audioButton.addEventListener("click", () => {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                return;
            }

            const speech = new SpeechSynthesisUtterance(narration.textContent.trim());
            speech.rate = 0.95;
            speech.pitch = 1;
            speech.volume = 1;
            window.speechSynthesis.speak(speech);
        });
    }
}

window.addEventListener("load", () => {
    const panel = document.querySelector(".panel");

    if (panel && typeof panel.animate === "function") {
        panel.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 1200, fill: "forwards" }
        );
    }
});

