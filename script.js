document.getElementById('headlineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const platform = document.getElementById('platform').value;
    const businessName = document.getElementById('businessName').value;
    const businessDescription = document.getElementById('businessDescription').value;
    const targetAudience = document.getElementById('targetAudience').value;
    const headlineType = document.getElementById('headlineType').value;
    const tone = document.getElementById('tone').value;
    const keywords = document.getElementById('keywords').value;
    const language = document.getElementById('language').value;
    const region = document.getElementById('region').value;
    const country = document.getElementById('country').value;

    // Example headline generation logic
    const headline = `${headlineType}: ${keywords} to Captivate ${targetAudience}! ${businessName} in ${region} is ${tone} and Engaging.`;
    
    // Display the headline
    document.getElementById('headlineText').innerText = headline;
    document.getElementById('headlineOutput').style.display = 'block';
});

document.getElementById('copyButton').addEventListener('click', function() {
    const headlineText = document.getElementById('headlineText').innerText;
    navigator.clipboard.writeText(headlineText).then(() => {
        alert('Headline copied to clipboard!');
    });
});
