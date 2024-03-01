const apiKey = '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';

async function calculateTimeComplexity() {
  try {
    const codeInput = document.getElementById('codeInput').value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        prompt: `Analyze the following code and provide a detailed explanation of its time complexity in Big O notation. Also, discuss potential optimizations that might improve its efficiency:\n${codeInput}`,
        max_tokens: 150, // Adjust token limit if needed
        temperature: 0.2, // Reduce randomness for analytical responses
      })
    });

    const data = await response.json();
    displayResult(data.choices[0].text);

  } catch (error) {
    console.error('Error analyzing code with OpenAI API:', error);
  }
}

function displayResult(responseText) {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<strong>OpenAI Analysis:</strong> ' + responseText;
}
