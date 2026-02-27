
import { DisasterType, QuizQuestion } from "../types";
import { SCENARIOS } from "../data/scenarios";

export async function generateQuizQuestions(category: DisasterType): Promise<QuizQuestion[]> {
  try {
    const pool = SCENARIOS[category] || [];
    if (pool.length === 0) throw new Error("No scenarios found for this category");

    // Shuffle and return all questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled;
  } catch (error) {
    console.error("Error fetching scenarios:", error);
    return [
      {
        situation: `A sudden ${category} has occurred nearby. You are currently in a multi-story building and can hear the alarm sounding.`,
        options: ["Run to the elevators immediately", "Stay where you are and wait for help", "Find the nearest emergency stairwell", "Call your relatives first"],
        correctIndex: 2,
        explanation: "Stairwells are structurally reinforced and avoid the risk of elevator failure during disasters.",
        optionExplanations: [
          "Elevators can fail or trap you during a disaster due to power outages.",
          "Staying put without a plan can be dangerous if the building is compromised.",
          "Stairwells are structurally reinforced and avoid the risk of elevator failure during disasters.",
          "Communication is important, but immediate safety and evacuation take priority."
        ]
      }
    ];
  }
}
