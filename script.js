// script.js

document.addEventListener("DOMContentLoaded", () => {
  const examForm = document.getElementById("examForm");
  const submitExamButton = document.getElementById("submitExam");
  const showAnswersButton = document.getElementById("showAnswers");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const timerDisplay = document.getElementById("timer");

  // Define the correct answers for multiple-choice questions
  const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "d",
    q10: "a",
    q11: "b",
    q12: "c",
    q13: "a",
    q14: "c",
    q15: "d",
    q16: "a",
    q17: "c",
    q18: "b",
    q19: "a",
    q20: "a",
    q21: "b",
    q22: "b",
    q23: "d",
    q24: "c",
    q25: "a",
    q26: "b",
    q27: "b",
    q28: "a",
    q29: "c",
    q30: "c",
    q31: "d",
    q32: "b",
    q33: "a",
    q34: "c",
    q35: "a",
    q36: "b",
    q37: "c",
    q38: "b",
    q39: "d",
    q40: "c",
    q41: "b",
    q42: "d",
    q43: "a",
    q44: "b",
    q45: "c",
    q46: "b",
    q47: "b",
    q48: "b",
    q49: "c",
    q50: "c",
    q51: "b",
  };

  // Define the correct answers for long-answer questions
  const longAnswerSolutions = {
    q2_long_answer: `
Q2. Huffman Coding for A={a/20,b/15,c/5,d/15,e/45}

1.  List initial frequencies (sorted):
    * c: 5
    * b: 15
    * d: 15
    * a: 20
    * e: 45

2.  Repeatedly combine the two nodes with the smallest frequencies:
    * Step 1: Combine 'c' (5) and 'b' (15) -> New node (cb): 20
    * Step 2: Combine 'd' (15) and (cb) (20) -> New node (dcb): 35
    * Step 3: Combine 'a' (20) and (dcb) (35) -> New node (adcb): 55
    * Step 4: Combine 'e' (45) and (adcb) (55) -> New node (eadcb): 100 (Root)

3.  Huffman Codes (example mapping 0=left, 1=right):
    * e: 0
    * a: 10
    * d: 110
    * c: 1110
    * b: 1111

4.  Optimality: Huffman coding is a greedy algorithm proven to be optimal for constructing prefix codes, minimizing the total weighted path length (total bits).
        `.trim(),

    q3a_long_answer_tree: `
Q3. Huffman and Fixed-Length Encoding:
a) Optimal Huffman code:

1.  Huffman Tree Construction Steps:
    * Initial Frequencies (sorted): d: 2, u: 2, m: 8, e: 10, s: 10, c: 11, o: 15, a: 20, t: 22
    * Combine d(2), u(2) -> (du):4
    * Combine (du):4, m:8 -> (dum):12
    * Combine e:10, s:10 -> (es):20
    * Combine (dum):12, c:11 -> (dumc):23
    * Combine o:15, (es):20 -> (oes):35
    * Combine a:20, t:22 -> (at):42
    * Combine (dumc):23, (oes):35 -> (dumcoes):58
    * Combine (at):42, (dumcoes):58 -> (ROOT):100

    Example Huffman Tree Structure (with codes, 0 for left, 1 for right):
                  (100)
                /       \\
              0(42)     1(58)
             /   \\     /    \\
           0a    1t   0(23)   1(35)
                     /    \\   /    \\
                    0c   1(12) 0o   1(20)
                        /    \\      /    \\
                       0(4)  1m    0e    1s
                      /   \\
                     0d   1u
        `.trim(),

    q3a_long_answer_memory: `
Q3a.3) Memory required with Huffman encoding:
Total characters = 10,000 (since frequencies are in 100s)

Assuming the following Huffman code lengths derived from a typical Huffman tree for these frequencies (these are examples, actual lengths depend on tree construction details):
* a: 2000 chars * 2 bits = 4000 bits (e.g., 00)
* c: 1100 chars * 3 bits = 3300 bits (e.g., 100)
* d: 200 chars * 4 bits = 800 bits (e.g., 1010)
* e: 1000 chars * 4 bits = 4000 bits (e.g., 1110)
* o: 1500 chars * 3 bits = 4500 bits (e.g., 110)
* m: 800 chars * 4 bits = 3200 bits (e.g., 1011)
* s: 1000 chars * 4 bits = 4000 bits (e.g., 1111)
* t: 2200 chars * 2 bits = 4400 bits (e.g., 01)
* u: 200 chars * 4 bits = 800 bits (e.g., 1010, could be different from 'd' if tree paths diverge)

Total memory = 4000 + 3300 + 800 + 4000 + 4500 + 3200 + 4000 + 4400 + 800 = 29000 bits
Total memory in bytes = 29000 / 8 = 3625 bytes
        `.trim(),

    q3b_long_answer_fixed_size: `
Q3b.2) File size with fixed-length encoding:
Number of unique characters = 9 (a, c, d, e, o, m, s, t, u)
Bits per character = ceil(log2(9)) = ceil(3.169) = 4 bits

Total characters = 10,000 (since frequencies are in 100s)
Total file size = 10,000 characters * 4 bits/character = 40,000 bits = 5000 bytes
        `.trim(),

    q4_long_answer: `
Q4. Shortest distance for travelling all points (Traveling Salesperson Problem)

Optimal Algorithm: For a small graph (4 nodes), brute force (checking all permutations of intermediate nodes) or Dynamic Programming (Held-Karp) can find the optimal solution.

Edges and their weights:
* A to B: 10, B to A: 5
* A to C: 6, C to A: 16
* A to D: 15, D to A: 10
* B to C: 3, C to B: 9
* B to D: 8, D to B: 10
* C to D: 12, D to C: 9

Possible Hamiltonian cycles starting and ending at A:

1.  A -> B -> C -> D -> A: 10 + 3 + 12 + 10 = 35
2.  A -> B -> D -> C -> A: 10 + 8 + 9 + 16 = 43
3.  A -> C -> B -> D -> A: 6 + 9 + 8 + 10 = 33
4.  A -> C -> D -> B -> A: 6 + 12 + 10 + 5 = 33
5.  A -> D -> B -> C -> A: 15 + 10 + 3 + 16 = 44
6.  A -> D -> C -> B -> A: 15 + 9 + 9 + 5 = 38

Shortest distance: 33
Optimal tours: A -> C -> B -> D -> A and A -> C -> D -> B -> A
        `.trim(),
  };

  // Timer variables (2 hours = 120 minutes = 7200 seconds)
  const examDurationSeconds = 120 * 60;
  let timeRemaining = examDurationSeconds;
  let timerInterval;
  let examSubmitted = false; // Flag to track submission state

  // --- Timer Functions ---
  function startTimer() {
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        handleSubmit(null, true); // Submit automatically when time runs out
        alert("Time is up! Your exam has been submitted automatically.");
      }
    }, 1000); // Update every second
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `Time Remaining: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  // --- Answer Checking Functions (for MCQs) ---
  function checkMultipleChoiceAnswers() {
    let score = 0;
    let totalMultipleChoice = 0;

    document.querySelectorAll(".question-block").forEach((qBlock) => {
      const radioInput = qBlock.querySelector('input[type="radio"]');
      if (radioInput) {
        // This block handles only multiple-choice questions
        const questionName = radioInput.name;
        const feedbackDiv = qBlock.querySelector(".answer-feedback");

        // Reset previous feedback and styling
        if (feedbackDiv) {
          feedbackDiv.textContent = "";
          feedbackDiv.classList.remove("correct", "incorrect");
          feedbackDiv.style.display = "none";
        }
        qBlock.querySelectorAll("label").forEach((label) => {
          label.style.backgroundColor = ""; // Remove background color
          label.style.borderColor = ""; // Remove border color
        });

        if (correctAnswers[questionName]) {
          totalMultipleChoice++;
          const selectedOption = document.querySelector(
            `input[name="${questionName}"]:checked`
          );
          const correctAnswerValue = correctAnswers[questionName];

          if (selectedOption) {
            // Add animation class to selected question block for visual feedback
            qBlock.classList.add("selected");
            setTimeout(() => qBlock.classList.remove("selected"), 700); // Remove after animation

            if (selectedOption.value === correctAnswerValue) {
              score++;
              if (feedbackDiv) {
                feedbackDiv.textContent = "Correct!";
                feedbackDiv.classList.add("correct");
                feedbackDiv.style.display = "block";
              }
            } else {
              if (feedbackDiv) {
                feedbackDiv.textContent = `Incorrect. Correct answer was: ${correctAnswerValue.toUpperCase()}`;
                feedbackDiv.classList.add("incorrect");
                feedbackDiv.style.display = "block";
              }
            }
          } else {
            // If no option selected for a multiple-choice question
            if (feedbackDiv) {
              feedbackDiv.textContent = `Unanswered. Correct answer was: ${correctAnswerValue.toUpperCase()}`;
              feedbackDiv.classList.add("incorrect"); // Treat as incorrect if unanswered
              feedbackDiv.style.display = "block";
            }
          }
        }
      }
    });
    return { score, totalMultipleChoice };
  }

  function displayOverallScore(score, totalQuestions) {
    scoreDisplay.textContent = `Your Score: ${score} / ${totalQuestions}`;
    scoreDisplay.classList.add("show");
  }

  // --- Show Correct Answers Function (for MCQs and Long Answers) ---
  function showCorrectAnswersLogic() {
    // Stop timer and hide it
    clearInterval(timerInterval);
    timerDisplay.style.display = "none";

    // Hide score display if it was shown
    scoreDisplay.classList.remove("show");

    // Disable buttons after showing answers
    submitExamButton.disabled = true;
    showAnswersButton.disabled = true;

    document.querySelectorAll(".question-block").forEach((qBlock) => {
      const radioInput = qBlock.querySelector('input[type="radio"]');
      const textareaInput = qBlock.querySelector("textarea");
      const feedbackDiv = qBlock.querySelector(".answer-feedback");

      // Ensure feedback div exists and reset it
      if (feedbackDiv) {
        feedbackDiv.textContent = "";
        feedbackDiv.classList.remove("correct", "incorrect");
        feedbackDiv.style.display = "none"; // Hide by default, will show for correct answers
      }

      if (radioInput) {
        // Handle Multiple Choice Questions
        const questionName = radioInput.name;
        const correctAnswerValue = correctAnswers[questionName];
        const allOptions = qBlock.querySelectorAll(
          `input[name="${questionName}"]`
        );

        allOptions.forEach((option) => {
          const label = option.closest("label");
          // Reset all option styles first
          label.style.backgroundColor = "";
          label.style.borderColor = "";
          option.checked = false; // Uncheck all user selections

          // Highlight the correct answer and mark it as checked (optional)
          if (option.value === correctAnswerValue) {
            label.style.backgroundColor = "var(--correct-answer-bg)";
            label.style.borderColor = "#28a745";
            // option.checked = true; // Optionally show the correct answer as selected
          }
          option.disabled = true; // Disable all radio buttons
        });

        if (feedbackDiv) {
          feedbackDiv.textContent = `Correct answer: ${correctAnswerValue.toUpperCase()}`;
          feedbackDiv.classList.add("correct");
          feedbackDiv.style.display = "block"; // Show feedback for MCQs
          feedbackDiv.style.animation = "none"; // Prevent re-animation if already shown
        }
      } else if (textareaInput) {
        // Handle Long Answer Questions
        const textareaName = textareaInput.name;
        if (longAnswerSolutions[textareaName]) {
          textareaInput.value = longAnswerSolutions[textareaName];
          textareaInput.readOnly = true; // Make textarea read-only

          if (feedbackDiv) {
            feedbackDiv.textContent = "Correct Answer Displayed Below:";
            feedbackDiv.classList.add("correct");
            feedbackDiv.style.display = "block"; // Show feedback for long answers
            feedbackDiv.style.animation = "none";
          }
        }
      }
    });
  }

  // --- Event Handlers ---
  examForm.addEventListener("submit", handleSubmit);
  showAnswersButton.addEventListener("click", showCorrectAnswersLogic);

  // Function to handle form submission (either by button or timer)
  function handleSubmit(event, fromTimer = false) {
    if (event) event.preventDefault(); // Prevent default form submission if triggered by button

    if (examSubmitted) return; // Prevent multiple submissions

    clearInterval(timerInterval); // Stop the timer
    submitExamButton.disabled = true; // Disable submit button after submission
    showAnswersButton.disabled = false; // Enable show answers button
    examSubmitted = true; // Set flag to true

    const { score, totalMultipleChoice } = checkMultipleChoiceAnswers();
    displayOverallScore(score, totalMultipleChoice);

    // Optionally disable all input fields after submission
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.disabled = true;
    });
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.readOnly = true;
    });

    if (fromTimer) {
      // If submitted by timer, you might want to automatically show answers
      // showCorrectAnswersLogic(); // Uncomment this line if you want answers to appear automatically on timer end.
    }
  }

  // Initialize timer when the page loads
  updateTimerDisplay(); // Display initial time
  startTimer();
});
