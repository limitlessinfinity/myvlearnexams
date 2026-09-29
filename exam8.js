// exam8.js - Auto-injecting Flashcard Practice App for Exam 8

(function() {
  const flashcardsData = [
    { word: "입금하다 (deposit)", nounVerb: "돈을 넣다, 예금하다 (deposit)", synonym: "돈을 넣다, 예금하다 (deposit)", antonym: "출금하다, 돈을 찾다, 뽑다 (withdraw)" },
    { word: "주다 (give)", nounVerb: "드리다 (give)", synonym: "드리다 (give)", antonym: "받다, 따다, 취득하다, receive" },
    { word: "지키다 (keep, observe, follow)", nounVerb: "(규율이) 엄격하다 (strict)", synonym: "준수하다, 따르다 (observe), 엄격하다 (strict)", antonym: "어기다 (break), 위반하다 (violate)" },
    { word: "환영하다 (welcome)", nounVerb: "환영하다 (welcome)", synonym: "환영하다 (welcome)", antonym: "느슨하다 (loose)" },
    { word: "(환영회를) 개최하다 (hold)", nounVerb: "(환영회를) 개최하다 (hold)", synonym: "열다 (hold)", antonym: "환송하다 (farewell)" },
    { word: "(비료를) 주다 (give, scatter)", nounVerb: "(비료를) 주다 (give, scatter)", synonym: "뿌리다 (scatter)", antonym: "제거하다 (erase, cancel)" },
    { word: "체류하다 (stay)", nounVerb: "체류하다 (stay)", synonym: "머무르다, 묵다 (stay)", antonym: "부수다, 파괴하다 (distroy)" },
    { word: "옮기다 (transfer, carry)", nounVerb: "(거푸집을) 설치하다 (install)", synonym: "나르다, 운반하다 (carry)", antonym: "퇴근하다 (leave from work)" },
    { word: "(건물을) 짓다 (build, construct)", nounVerb: "(건물을) 짓다 (build, construct)", synonym: "세우다 (install, build), 건설하다 (construct)", antonym: "해지하다, 파기하다 (cancel)" },
    { word: "출근하다 (go to work)", nounVerb: "출근하다 (go to work)", synonym: "회사에 가다 (go to work)", antonym: "줍다 (pick up)" },
    // --- Image 2 ---
    { word: "(월급을) 타다 (get, receive)", nounVerb: "(월급을) 타다 (get, receive)", synonym: "받다 (get, receive)", antonym: "주다 (give)" },
    { word: "(차에) 타다 (ride)", nounVerb: "(차에) 타다 (ride)", synonym: "오르다 (ride)", antonym: "내리다 (drop off)" },
    { word: "(한국어를) 배우다 (learn, study)", nounVerb: "(한국어를) 배우다 (learn, study)", synonym: "공부하다 (study)", antonym: "시작하다 (start)" },
    // --- Image 3 ---
    { word: "(직원을) 고용하다 (hire)", nounVerb: "(직원을) 고용하다 (hire)", synonym: "채용하다, 뽑다 (hire)", antonym: "해고하다, 자르다 (fire)" },
    { word: "(가구를) 만들다 (manufacture)", nounVerb: "(가구를) 만들다 (manufacture)", synonym: "제작하다, 생산하다 (manufacture)", antonym: "부수다 (distroy)" },
    // --- Image 4 ---
    { word: "부여하다 (give, assign)", nounVerb: "부여하다 (give, assign)", synonym: "할당하다 (assign), 주다 (give)", antonym: "획득하다 (acquire)" },
    { word: "아끼다 (save)", nounVerb: "아끼다 (save)", synonym: "절약하다 (save, economize)", antonym: "낭비하다 (waste)" }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    // Check or create container for Exam 8 practice
    let container = document.getElementById('exam8-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'exam8-container';
      container.style.cssText = 'max-width: 650px; margin: 30px auto; font-family: Arial, sans-serif; text-align: center; padding: 25px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eaeaea;';
      document.body.appendChild(container);
    }

    let currentIndex = 0;
    let isFlipped = false;

    function render() {
      const card = flashcardsData[currentIndex];
      container.innerHTML = `
        <h2 style="color: #2c3e50; margin-bottom: 5px;">Exam 8: Vocabulary Flashcards</h2>
        <p style="color: #7f8c8d; font-size: 14px; margin-bottom: 20px;">Practice Card ${currentIndex + 1} of ${flashcardsData.length}</p>
        
        <div id="flashcard-box" style="background: ${isFlipped ? '#f8f9fa' : '#ffffff'}; border: 2px solid ${isFlipped ? '#3498db' : '#cbd5e1'}; border-radius: 10px; padding: 35px 20px; min-height: 160px; cursor: pointer; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: all 0.2s ease-in-out;">
          <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #95a5a6; margin-bottom: 8px;">${isFlipped ? 'Details, Synonyms & Antonyms' : 'Korean Word'}</span>
          <h3 style="font-size: 22px; color: #2c3e50; margin: 0 0 10px 0;">${isFlipped ? card.word : card.word}</h3>
          
          ${isFlipped ? `
            <hr style="width: 50%; border: 0; border-top: 1px solid #ddd; margin: 10px 0;">
            <p style="font-size: 15px; color: #34495e; margin: 4px 0;"><strong>Noun/Verb Used:</strong> ${card.nounVerb}</p>
            <p style="font-size: 15px; color: #27ae60; margin: 4px 0;"><strong>Synonym:</strong> ${card.synonym}</p>
            <p style="font-size: 15px; color: #c0392b; margin: 4px 0;"><strong>Antonym:</strong> ${card.antonym}</p>
          ` : `
            <p style="font-size: 13px; color: #b2bec3; margin-top: 10px;">Click card or press 'Flip' to view synonyms & antonyms</p>
          `}
        </div>

        <div style="margin-top: 25px; display: flex; justify-content: space-between; align-items: center;">
          <button id="prev-btn" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px;">← Previous</button>
          <button id="flip-btn" style="padding: 10px 25px; background: #f39c12; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px;">Flip Card 🔄</button>
          <button id="next-btn" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px;">Next →</button>
        </div>
      `;

      // Event Listeners
      document.getElementById('flashcard-box').onclick = () => {
        isFlipped = !isFlipped;
        render();
      };
      document.getElementById('flip-btn').onclick = (e) => {
        e.stopPropagation();
        isFlipped = !isFlipped;
        render();
      };
      document.getElementById('prev-btn').onclick = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
          currentIndex--;
          isFlipped = false;
          render();
        }
      };
      document.getElementById('next-btn').onclick = (e) => {
        e.stopPropagation();
        if (currentIndex < flashcardsData.length - 1) {
          currentIndex++;
          isFlipped = false;
          render();
        }
      };
    }

    render();
  });
})();
