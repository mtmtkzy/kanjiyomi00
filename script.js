import os

output_dir = "quiz_game"
css_file_path = os.path.join(output_dir, "style.css")

# Read the current style.css content
with open(css_file_path, "r", encoding="utf-8") as f:
    css_content = f.read()

# Add new CSS rules for the choices and effects
new_css_rules = """
#choicesArea {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns */
    gap: 15px; /* Space between buttons */
    margin-top: 25px;
}

.choice-button {
    background-color: #007bff; /* Primary button color */
    color: white;
    border: none;
    padding: 15px 20px;
    font-size: 1.1em;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.3s ease;
    text-align: center;
    word-break: break-word; /* Break long text */
    min-height: 50px; /* Ensure consistent button height */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.choice-button:hover:not(:disabled) {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.choice-button:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.choice-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.choice-button.correct {
    background-color: #28a745; /* Green for correct */
    color: white;
    font-weight: bold;
    box-shadow: 0 0 10px #28a745; /* Green glow */
}

.choice-button.incorrect {
    background-color: #dc3545; /* Red for incorrect */
    color: white;
    font-weight: bold;
    box-shadow: 0 0 10px #dc3545; /* Red glow */
}

/* Styles for effects */
#effectOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark overlay */
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
}

#correctEffect {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5em;
    font-weight: bold;
    color: #ffeb3b; /* Yellow */
    text-shadow: 0 0 20px rgba(255, 235, 59, 0.8); /* Yellow glow */
    z-index: 11;
    animation: pop-in 0.5s ease-out;
}

@keyframes pop-in {
    0% {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
    }
    80% {
         transform: translate(-50%, -50%) scale(1.1);
         opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}


.hidden {
    display: none !important;
}
"""

# Append the new rules to the existing CSS content
modified_css_content = css_content + "\n" + new_css_rules

# Write the modified content back to style.css
with open(css_file_path, "w", encoding="utf-8") as f:
    f.write(modified_css_content)

print(f"'{css_file_path}' が修正されました。")
