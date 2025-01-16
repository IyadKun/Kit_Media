// Story data
const stories = {
  warrior: {
    title: "Warrior & Dragon",
    background: "sound/warrior&dragon_theme.mp3",
    perfectEndingImage: "videos/perfect-ending1.mp4",
    normalEndingImage: "videos/normal-ending1.mp4",
    questions: [
      {
        type: "image",
        src: "videos/warrior&dragon2.mp4", // Introduction 1
        alt: "Warrior & Dragon 2",
      },
      {
        type: "image",
        src: "videos/warrior&dragon3.mp4", // Introduction 2
        alt: "Warrior & Dragon 3",
      },
      {
        type: "image",
        src: "videos/warrior&dragon4.mp4", // Introduction 3
        alt: "Warrior & Dragon 4",
      },
      {
        type: "question",
        question: "Apa itu algoritma?",
        options: [
          "Satu siri tindakan urutan tertentu.",
          "Satu jenis bahasa pengaturcaraan.",
          "Satu bentuk carta alir.",
          "Satu jenis ralat dalam pengaturcaraan.",
        ],
        answer: "Satu siri tindakan urutan tertentu.",
      },
      {
        type: "question",
        question: "Apa itu pseudokod?",
        options: [
          "Bahasa pengaturcaraan yang kompleks",
          "Satu jenis carta alir",
          "Langkah algoritma menggunakan ayat ringkas",
          "Ralat dalam algoritma",
        ],
        answer: "Langkah algoritma menggunakan ayat ringkas",
      },
      {
        type: "question",
        question: "Apakah tujuan carta alir?",
        options: [
          "Menyemak ralat dalam algoritma.",
          "Mengira output algoritma.",
          "Mewakili algoritma menggunakan simbol grafik.",
          "Menulis kod dalam bahasa pengaturcaraan.",
        ],
        answer: "Mewakili algoritma menggunakan simbol grafik.",
      },
      {
        type: "question",
        question: "Apakah jenis struktur kawalan yang mempunyai satu pilihan sahaja?",
        options: [
          "Pilihan Tunggal.",
          "Dwipilihan.",
          "Pelbagai Pilihan.",
          "Gelung.",
        ],
        answer: "Pilihan Tunggal.",
      },
      {
        type: "question",
        question: "Apakah yang dimaksudkan dengan ralat logik?",
        options: [
          "Kesalahan dalam sintaks kod.",
          "Kesilapan yang menyebabkan output salah.",
          "Ralat yang berlaku semasa program dijalankan.",
          "Kesalahan dalam pengiraan.",
        ],
        answer: "Kesilapan yang menyebabkan output salah.",
      },
      {
        type: "question",
        question: "Apakah langkah pertama dalam menghasilkan pseudokod?",
        options: [
          "Menentukan output.",
          "Menulis kod",
          "Membuat carta alir.",
          "Mengenal pasti masalah",
        ],
        answer: "Mengenal pasti masalah",
      },
      {
        type: "question",
        question: "Apakah yang dimaksudkan dengan gelung 'FOR'?",
        options: [
          "Menjalankan langkah tanpa had",
          "Menjalankan langkah berdasarkan bilangan yang diberikan.",
          "Menjalankan langkah selagi syarat benar.",
          "Menjalankan langkah sehingga syarat dipenuhi.",
        ],
        answer: "Menjalankan langkah berdasarkan bilangan yang diberikan.",
      },
    ],
  },
  explorer: {
    title: "Oyen The Clever Cat and The Forest Monster",
    background: "sound/oyen-monster.mp3",
    perfectEndingImage: "videos/perfect-ending2.mp4",
    normalEndingImage: "videos/normal-ending2.mp4",
    questions: [
      {
        type: "image",
        src: "videos/oyen-monster2.mp4", // Introduction 2
        alt: "oyen-monster2",
      },
      {
        type: "image",
        src: "videos/oyen-monster3.mp4", // Introduction 3
        alt: "oyen-monster3",
      },
      {
        type: "image",
        src: "videos/oyen-monster4.mp4", // Introduction 4
        alt: "oyen-monster4",
      },
      {
        type: "image",
        src: "videos/oyen-monster5.mp4", // Introduction 5
        alt: "oyen-monster5",
      },
      {
        type: "image",
        src: "videos/oyen-monster6.mp4", // Introduction 6
        alt: "oyen-monster6",
      },
	       
      {
        type: "question",
        question: "Apa itu algoritma?",
        options: [
          "Satu siri tindakan urutan tertentu.",
          "Satu jenis bahasa pengaturcaraan.",
          "Satu bentuk carta alir.",
          "Satu jenis ralat dalam pengaturcaraan.",
        ],
        answer: "Satu siri tindakan urutan tertentu.",
      },
      {
        type: "question",
        question: "Apa itu pseudokod?",
        options: [
          "Bahasa pengaturcaraan yang kompleks",
          "Satu jenis carta alir",
          "Langkah algoritma menggunakan ayat ringkas",
          "Ralat dalam algoritma",
        ],
        answer: "Langkah algoritma menggunakan ayat ringkas",
      },
      {
        type: "question",
        question: "Apakah tujuan carta alir?",
        options: [
          "Menyemak ralat dalam algoritma.",
          "Mengira output algoritma.",
          "Mewakili algoritma menggunakan simbol grafik.",
          "Menulis kod dalam bahasa pengaturcaraan.",
        ],
        answer: "Mewakili algoritma menggunakan simbol grafik.",
      },
      {
        type: "question",
        question: "Apakah jenis struktur kawalan yang mempunyai satu pilihan sahaja?",
        options: [
          "Pilihan Tunggal.",
          "Dwipilihan.",
          "Pelbagai Pilihan.",
          "Gelung.",
        ],
        answer: "Pilihan Tunggal.",
      },
      {
        type: "question",
        question: "Apakah yang dimaksudkan dengan ralat logik?",
        options: [
          "Kesalahan dalam sintaks kod.",
          "Kesilapan yang menyebabkan output salah.",
          "Ralat yang berlaku semasa program dijalankan.",
          "Kesalahan dalam pengiraan.",
        ],
        answer: "Kesilapan yang menyebabkan output salah.",
      },
      {
        type: "question",
        question: "Apakah langkah pertama dalam menghasilkan pseudokod?",
        options: [
          "Menentukan output",
          "Menulis kod",
          "Membuat carta alir.",
          "Mengenal pasti masalah",
        ],
        answer: "Mengenal pasti masalah",
      },
      {
        type: "question",
        question: "Apakah yang dimaksudkan dengan gelung 'FOR'?",
        options: [
          "Menjalankan langkah tanpa had",
          "Menjalankan langkah berdasarkan bilangan yang diberikan.",
          "Menjalankan langkah selagi syarat benar.",
          "Menjalankan langkah sehingga syarat dipenuhi.",
        ],
        answer: "Menjalankan langkah berdasarkan bilangan yang diberikan.",
      },
	   {
        type: "image",
        src: "videos/oyen-monster7.mp4", // Introduction 6
        alt: "oyen-monster7",
      },
	        {
        type: "image",
        src: "videos/oyen-monster8.mp4", // Introduction 6
        alt: "oyen-monster8",
      },
    ],
  },
};

let selectedStory = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Array to store user answers

// Select a story
function selectStory(storyKey) {
  selectedStory = stories[storyKey];
  if (!selectedStory) {
    alert("Story not found. Please try again.");
    return;
  }
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = []; // Reset user answers when a new story is selected

  // Set story title
  document.getElementById("story-title").textContent = selectedStory.title;

  // Play background music
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.src = selectedStory.background;
  backgroundMusic.loop = true;
  backgroundMusic.play();

  // Load the first question or slide
  loadQuestion();
  showSection("quiz-section");
}

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  const item = selectedStory.questions[currentQuestionIndex];

  // Ensure the container is ready for new content
  quizContainer.classList.remove("active");
  setTimeout(() => {
    // Render content based on the question type
    if (item.type === "image") {
      quizContainer.innerHTML = `
	  <video controls style="width: 100%; height: auto;">
        <source src="${item.src}" alt="${item.alt} type="video/mp4" >
	</videos>     
	 `;
    } else if (item.type === "question") {
      quizContainer.innerHTML = `
        <p>${item.question}</p>
        <div>
          ${item.options
            .map(
              (option, index) =>
                `<label><input type="radio" name="q${currentQuestionIndex}" value="${option}"> ${option}</label><br>`
            )
            .join("")}
        </div>
      `;
    }
    quizContainer.classList.add("active");

    // Update the progress bar
    const progressBar = document.getElementById("quiz-progress-bar");
    const totalQuestions = selectedStory.questions.filter(
      (question) => question.type === "question"
    ).length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.value = progress;

    // Show next or submit button
    if (currentQuestionIndex < selectedStory.questions.length - 1) {
      document.getElementById("next-question").style.display = "inline-block";
      document.getElementById("submit-quiz").style.display = "none";
    } else {
      document.getElementById("next-question").style.display = "none";
      document.getElementById("submit-quiz").style.display = "inline-block";
    }
  }, 200);
}

// Proceed to the next question
// Proceed to the next question
function nextQuestion() {
  const item = selectedStory.questions[currentQuestionIndex];
  
  // If the current question type is "question" (i.e., it requires an answer)
  if (item.type === "question") {
    const selectedOption = document.querySelector(
      `input[name="q${currentQuestionIndex}"]:checked`
    );

    // If no option is selected, show an alert and return early
    if (!selectedOption) {
      alert("Please select an answer before proceeding.");
      return; // Prevent moving to the next question
    }

    // Store the selected answer and log it for debugging
    userAnswers[currentQuestionIndex] = selectedOption.value;
    console.log(`Selected Answer for Question ${currentQuestionIndex}: ${userAnswers[currentQuestionIndex]}`);

    // If an option is selected, check if it's correct and update the score
    if (selectedOption.value === item.answer) {
      score++;
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedStory.questions.length) {
    loadQuestion();
  }
}


// Define sound effect for clapping
const soundeffect = new Audio();

// Evaluate quiz and display result
function evaluateQuiz() {
  // Capture the selected answer for the last question
  const lastQuestion = selectedStory.questions[currentQuestionIndex];
  
  if (lastQuestion.type === "question") {
    const selectedOption = document.querySelector(
      `input[name="q${currentQuestionIndex}"]:checked`
    );

    // If no option is selected for the last question, alert the user
    if (!selectedOption) {
      alert("Please select an answer before submitting the quiz.");
      return; // Prevent evaluation without answering the last question
    }

    // Store the selected answer
    userAnswers[currentQuestionIndex] = selectedOption.value;

    // Update score for the last question
    if (selectedOption.value === lastQuestion.answer) {
      score++;
    }
  }

  const totalQuestions = selectedStory.questions.filter(
    (question) => question.type === "question"
  ).length;

  let resultHTML = '';
  let incorrectQuestionsHTML = '';

  // Check each question to see if the answer is correct
  for (let i = 0; i < selectedStory.questions.length; i++) {
    const question = selectedStory.questions[i];
    const userAnswer = userAnswers[i];

    if (question.type === "question") {
      if (userAnswer !== question.answer) {
        incorrectQuestionsHTML += `
          <strong>Question ${i + 1}: ${question.question}</strong><br>
          Your Answer: <span style="color:red;">${userAnswer}</span><br>
          Correct Answer: <span style="color:green;">${question.answer}</span><br><br>
        `;
      }
    }
  }

  if (incorrectQuestionsHTML) {
    resultHTML = `
      <h2>Good Effort!</h2>
      <p>You scored ${score} out of ${totalQuestions}.</p>
      <video controls style="width: 100%; height: auto;">
        <source src="${selectedStory.normalEndingImage}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h3>Incorrect Answers:</h3>
      <div>${incorrectQuestionsHTML}</div>
      <p>Try again to unlock the perfect ending!</p>
      <button onclick="goHome()" style="margin-top: 20px;">Home</button>
    `;
  } else {
    resultHTML = `
      <h2>🎉 Perfect Score! 🎉</h2>
      <p>You answered all questions correctly and achieved the perfect ending!</p>
      <video controls style="width: 100%; height: auto;">
        <source src="${selectedStory.perfectEndingImage}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <button onclick="goHome()" style="margin-top: 20px;">Home</button>
    `;
  }

  // Display the result
  const resultSection = document.getElementById("result");
  resultSection.innerHTML = resultHTML;

  // Play the clapping sound if necessary
  soundeffect.src = incorrectQuestionsHTML ? "sound/Clapping-hand.mp3" : "sound/crowd-cheer.mp3";
  soundeffect.play();

  // Pause background music
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.volume=0.05;
  backgroundMusic.pause();

  // Show the result section
  showSection("result");
}


// Display the active section
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Go Home function to return to story selection
function goHome() {
  showSection("story-selection"); // Replace with the ID of your home/story selection section
  const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume=0.05;
  backgroundMusic.pause();
  backgroundMusic.src = ""; // Reset the background music
}