const textContainer = document.getElementById('typing-text');

// Lines of text with class names for colorful effects
let textLines = [
    { text: "Welcome To", class: "line-1" },
    { text: "DigiTech Creation", class: "line-2"},
    { text: "Discover the best services and good quality we offer!", class: "line-3" }
];

let lineIndex = 0;
let charIndex = 0;

function typeText() {
    if (lineIndex < textLines.length) {
        if (charIndex === 0) {
            // Add a new span for the current line with the specified class
            const newSpan = document.createElement("span");
            newSpan.className = textLines[lineIndex].class;
            textContainer.appendChild(newSpan);
            console.log(newSpan.className);
        }
        const currentSpan = textContainer.lastChild;
        currentSpan.textContent += textLines[lineIndex].text[charIndex];
        charIndex++;
     

        if (charIndex < textLines[lineIndex].text.length) {
            setTimeout(typeText, 60); // Typing speed
        } else {
            // Move to the next line
            charIndex = 0;
            lineIndex++;
            if (lineIndex < textLines.length) {
                textContainer.appendChild(document.createElement("br")); // Line break
                setTimeout(typeText, 50); // Delay before typing the next line
            }else{
                setTimeout(resetText, 7000)
            }
            
        }
        
        
        
    }
}

function resetText(){
    textContainer.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
}

setInterval(typeText, 1000);
