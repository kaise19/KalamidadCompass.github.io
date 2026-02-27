
import { QuizQuestion } from '../types';

export const SCENARIOS: Record<string, QuizQuestion[]> = {
  'Earthquake': [
    {
      situation: "You are in a classroom or office on the second floor when a violent earthquake begins. The floor is shaking so hard you can barely stand. What is your immediate action?",
      options: [
        "Run for the stairs to get out of the building before it collapses.",
        "Drop to the floor, take cover under a sturdy desk, and hold on.",
        "Stand in a doorway; the frame is the strongest part of the room.",
        "Open all windows to prevent the glass from shattering due to pressure."
      ],
      correctIndex: 1,
      explanation: "\"Drop, Cover, and Hold On\" is the global standard. Most injuries occur when people try to move during the shaking.",
      optionExplanations: [
        "Stairs are often the first part of a building to fail, and running during shaking leads to falls and being hit by falling objects.",
        "\"Drop, Cover, and Hold On\" is the global standard. Most injuries occur when people try to move during the shaking.",
        "In modern buildings, doorways are no stronger than any other part of the wall and do not protect you from flying debris.",
        "Moving toward windows is dangerous; glass is likely to shatter inward and cause severe lacerations."
      ]
    },
    {
      situation: "You are on the 15th floor of a skyscraper when the building starts swaying significantly. The power goes out and the \"fire alarm\" sounds. What do you do?",
      options: [
        "Use the elevator immediately to reach the ground floor quickly.",
        "Stay where you are, away from glass, and wait for the shaking to stop.",
        "Smash a window to signal for help to people on the ground.",
        "Run to the roof to be rescued by a helicopter."
      ],
      correctIndex: 1,
      explanation: "High-rise buildings are designed to sway. Stay inside, protect your head, and do not use elevators, which may become trapped between floors.",
      optionExplanations: [
        "Elevators will likely stall or lose power, trapping you inside a shaft that may be misaligned by the quake.",
        "High-rise buildings are designed to sway. Stay inside, protect your head, and do not use elevators, which may become trapped between floors.",
        "Breaking glass creates a falling hazard for people below and can cause the wind to blow debris into your floor.",
        "Roof rescues are extremely rare in earthquakes; the stairs may be damaged, leaving you trapped at the highest point."
      ]
    },
    {
      situation: "You are driving on a highway overpass when your car starts to pull to one side and you see light poles swaying. What is the safest move?",
      options: [
        "Speed up to get off the overpass as quickly as possible.",
        "Stop immediately in the middle of the lane and exit the vehicle.",
        "Pull over to a clear area, stay in the car, and set the parking brake.",
        "Park under a large tree or bridge to protect the car from falling debris."
      ],
      correctIndex: 2,
      explanation: "The car’s suspension acts as a shock absorber. Staying inside protects you from falling power lines or signs.",
      optionExplanations: [
        "Accelerating during a quake is dangerous as the road surface may crack or buckle ahead of you.",
        "Exiting the car makes you vulnerable to being hit by other vehicles or falling debris.",
        "The car’s suspension acts as a shock absorber. Staying inside protects you from falling power lines or signs.",
        "Trees, bridges, and overpasses are hazards that can collapse onto your vehicle."
      ]
    },
    {
      situation: "You are cooking when the ground begins to shake. The stove is on and pans are sliding. What is the priority?",
      options: [
        "Grab the hot pans to prevent them from falling and starting a fire.",
        "If within one step, turn off the burner, then Drop, Cover, and Hold On.",
        "Run to the kitchen pantry and hide inside.",
        "Crawl under the refrigerator for maximum protection."
      ],
      correctIndex: 1,
      explanation: "Fire is a major secondary disaster. If you can safely turn off the heat immediately, do so, then protect yourself.",
      optionExplanations: [
        "You risk severe burns and will be unable to protect your head and neck if your hands are full.",
        "Fire is a major secondary disaster. If you can safely turn off the heat immediately, do so, then protect yourself.",
        "Pantries often have heavy canned goods on high shelves that can fall and cause head injuries.",
        "Heavy appliances like refrigerators can \"walk\" across the floor or tip over, crushing anyone underneath."
      ]
    },
    {
      situation: "You are at the cinema when a large quake hits. The crowd begins to panic and rush toward the exits. What should you do?",
      options: [
        "Join the rush to ensure you aren't the last one out.",
        "Stay in your seat, crouch low, and protect your head with your arms.",
        "Stand on top of the seats to see where the exits are clearly.",
        "Crawl under the rows of seats toward the screen."
      ],
      correctIndex: 1,
      explanation: "In crowded places, the biggest danger is often the \"stampede.\" Stay in your row until the shaking stops.",
      optionExplanations: [
        "Pushing toward exits leads to \"crush\" injuries and falls in the dark.",
        "In crowded places, the biggest danger is often the \"stampede.\" Stay in your row until the shaking stops.",
        "Standing makes you a target for falling ceiling tiles or projectors.",
        "Crawling during the shaking increases the risk of being stepped on by panicked people."
      ]
    },
    {
      situation: "The main earthquake has stopped. You are uninjured and your house seems stable. What is the most important rule for the next hour?",
      options: [
        "Go back inside to sleep or rest immediately.",
        "Be prepared for aftershocks, which can collapse already weakened structures.",
        "Turn on all the lights to check for cracks in the walls.",
        "Use your cell phone to call everyone you know and talk about the event."
      ],
      correctIndex: 1,
      explanation: "Aftershocks follow almost every large quake and can be strong enough to finish the destruction of a damaged building.",
      optionExplanations: [
        "Weakened buildings are most dangerous after the first quake.",
        "Aftershocks follow almost every large quake and can be strong enough to finish the destruction of a damaged building.",
        "Do not use matches or flip light switches until you are sure there is no gas leak (sparks can cause explosions).",
        "Keep phone lines clear for emergency services; use text messages only if necessary."
      ]
    },
    {
      situation: "You live in a hilly area. Following a massive earthquake, you hear a faint whistling sound followed by a low rumble coming from the hill. What does this indicate?",
      options: [
        "The earthquake has opened a vent for volcanic gas.",
        "An impending landslide triggered by the seismic activity.",
        "The sound of air escaping from the ground.",
        "A high-pressure water main has burst underground."
      ],
      correctIndex: 1,
      explanation: "Earthquakes often destabilize soil. A rumble from a hill is a sign of an oncoming landslide; move perpendicular to the path.",
      optionExplanations: [
        "While possible, landslides are much more common seismic triggers than new volcanic vents.",
        "Earthquakes often destabilize soil. A rumble from a hill is a sign of an oncoming landslide; move perpendicular to the path.",
        "While air does move, it rarely makes a \"rumble\" loud enough to hear from a distance like moving earth.",
        "While possible, the context of seismic activity on a slope makes a landslide the primary survival concern."
      ]
    },
    {
      situation: "A neighbor has been trapped under a heavy wardrobe for over 3 hours. You have a group of people ready to lift it off him. What is a critical medical consideration?",
      options: [
        "He will need a sugary drink immediately to boost his energy.",
        "Lifting the weight suddenly can cause \"Crush Syndrome\" (toxic shock).",
        "You should massage his legs immediately after the weight is removed.",
        "If he can wiggle his toes, he is perfectly fine and doesn't need a hospital."
      ],
      correctIndex: 1,
      explanation: "When blood flow is cut off for a long time, toxins build up in the limb. Releasing the pressure allows those toxins to rush to the heart and kidneys, which can be fatal.",
      optionExplanations: [
        "Food or drink should be avoided in case the victim needs emergency surgery.",
        "When blood flow is cut off for a long time, toxins build up in the limb. Releasing the pressure allows those toxins to rush to the heart and kidneys, which can be fatal.",
        "Massaging can accelerate the release of toxins into the central circulation.",
        "Nerve function (wiggling toes) does not mean the internal tissues or kidneys are safe from chemical damage."
      ]
    },
    {
      situation: "A victim was hit by a falling ceiling tile. They were \"knocked out\" for 30 seconds but are now awake and say they feel \"fine,\" though they are repeating the same question over and over. What should you do?",
      options: [
        "Let them go home and sleep it off.",
        "Give them an aspirin for the headache and move to the next victim.",
        "Treat this as a serious brain injury and prevent them from walking around.",
        "Splash cold water on their face to help them \"wake up.\""
      ],
      correctIndex: 2,
      explanation: "Repeating questions (perseveration) and a loss of consciousness are clear signs of a concussion or traumatic brain injury.",
      optionExplanations: [
        "Sleeping can mask a worsening \"brain bleed\" (epidural hematoma).",
        "Aspirin is a blood thinner and can make an internal brain bleed much worse.",
        "Repeating questions (perseveration) and a loss of consciousness are clear signs of a concussion or traumatic brain injury.",
        "This does nothing to help the brain and can cause unnecessary distress or aspiration."
      ]
    },
    {
      situation: "You are the first responder at a collapsed house with three victims. Who is the \"Red Tag\" (Immediate Priority)?",
      options: [
        "Victim 1: Bleeding heavily from a deep cut on the arm, but the blood is dark and oozing.",
        "Victim 2: Quiet, pale, and breathing very fast (35 breaths per minute).",
        "Victim 3: Walking around with a visibly broken wrist, crying loudly.",
        "None (You should wait for a doctor to arrive)."
      ],
      correctIndex: 1,
      explanation: "According to START triage, a respiratory rate over 30 or signs of poor perfusion (paleness/shock) makes a patient \"Red\".",
      optionExplanations: [
        "Dark, oozing blood is venous. It’s serious, but less immediate than a patient in respiratory distress or shock.",
        "According to START triage, a respiratory rate over 30 or signs of poor perfusion (paleness/shock) makes a patient \"Red\".",
        "In triage, \"the loudest is the healthiest.\" If they can walk and scream, their airway is clear and their circulation is stable.",
        "In a disaster, simple life-saving interventions (like opening an airway) must be done by the first person on the scene."
      ]
    }
  ],
  'Typhoons': [
    {
      situation: "The weather bureau has raised a Signal No. 4 warning. Your house is sturdy, but you live near a river that has flooded in the past. What is your best move?",
      options: [
        "Stay at home and board up all windows to protect your furniture.",
        "Move to the local evacuation center before the rain becomes heavy.",
        "Wait until the water reaches your doorstep before leaving.",
        "Go to the riverbank to monitor the water level yourself."
      ],
      correctIndex: 1,
      explanation: "Evacuating early is the only way to ensure safety. Once the storm hits, high winds and rising water make rescue missions nearly impossible.",
      optionExplanations: [
        "A sturdy house cannot protect you from a flash flood or a river cresting.",
        "Evacuating early is the only way to ensure safety. Once the storm hits, high winds and rising water make rescue missions nearly impossible.",
        "Waiting for water to reach your door is often too late; the current outside will be too strong to walk or drive through.",
        "This is extremely dangerous due to the risk of slipping or being caught by a sudden surge."
      ]
    },
    {
      situation: "You are inside your home and the floodwater begins to seeping in. The power is still on. What is the first thing you should do?",
      options: [
        "Use a vacuum to suck up the water as it enters.",
        "Move all your appliances to the second floor immediately.",
        "Turn off the main electrical breaker and the gas supply.",
        "Stand on a wooden chair to avoid touching the wet floor."
      ],
      correctIndex: 2,
      explanation: "Electrocution is a leading cause of death during floods. You must cut the power at the source before the water reaches the outlets.",
      optionExplanations: [
        "Using an electrical appliance (vacuum) while standing in water is an invitation for fatal electrocution.",
        "You should only move items if it is safe; turning off the power is a higher priority for life safety.",
        "Electrocution is a leading cause of death during floods. You must cut the power at the source before the water reaches the outlets.",
        "While wood is an insulator, it can become conductive if wet. It does not solve the underlying hazard of live electricity in the water."
      ]
    },
    {
      situation: "After hours of extreme wind and rain, the weather suddenly becomes calm and the sun begins to peek through. What should you do?",
      options: [
        "Go outside to survey the damage and start repairs.",
        "Stay inside and wait for a couple of hours before checking the outdoor.",
        "Drive to the store to restock on supplies while it's clear.",
        "Open all your windows to let the house dry out."
      ],
      correctIndex: 1,
      explanation: "You are likely in the eye of the typhoon. The calm is temporary, and the strongest winds (the eyewall) will return from the opposite direction shortly.",
      optionExplanations: [
        "Being caught outside when the wind returns is often more dangerous because structures have already been weakened.",
        "You are likely in the eye of the typhoon. The calm is temporary, and the strongest winds (the eyewall) will return from the opposite direction shortly.",
        "Being caught outside when the wind returns is often more dangerous because structures have already been weakened.",
        "Opening windows will allow the returning wind to enter and potentially lift the roof off your house."
      ]
    },
    {
      situation: "You are driving home when you encounter a flooded street. You can see the road on the other side, but you aren't sure how deep the water is. What do you do?",
      options: [
        "Speed up to use momentum to push through the water.",
        "Follow a larger truck, hoping they clear a path for you.",
        "Turn around and find an alternate, higher route.",
        "Drive slowly in low gear to keep the engine running."
      ],
      correctIndex: 2,
      explanation: "\"Turn around, don't drown.\" Just 12 inches of water can float most cars; 2 feet can sweep away SUVs and trucks.",
      optionExplanations: [
        "Speeding creates a \"bow wave\" that can splash into the engine's air intake, stalling it instantly.",
        "Large trucks can handle deeper water than cars, and their wake can actually swamp your vehicle.",
        "\"Turn around, don't drown.\" Just 12 inches of water can float most cars; 2 feet can sweep away SUVs and trucks.",
        "Even in low gear, you cannot see if the road beneath the water has been washed away."
      ]
    },
    {
      situation: "You are camping near a stream during a heavy rainstorm. You notice the water has become very muddy and you hear a \"roaring\" sound from upstream.",
      options: [
        "Move your tent further back from the bank by 10 feet.",
        "Pack up quickly and be ready to leave the camp.",
        "Build a small rock wall to divert the water.",
        "Check your phone for a weather update before moving."
      ],
      correctIndex: 1,
      explanation: "If you felt something unusual, pack your things and be ready to leave the camp. It might be very dangerous.",
      optionExplanations: [
        "10 feet is insufficient for the surge of a flash flood.",
        "If you felt something unusual, pack your things and be ready to leave the camp. It might be very dangerous.",
        "Human-made rock walls are useless against the force of thousands of tons of water and debris.",
        "The physical signs in front of you are more accurate than a delayed digital update."
      ]
    },
    {
      situation: "You must walk through waist-deep water to reach an evacuation boat. How should you proceed?",
      options: [
        "Walk quickly to minimize time spent in the water.",
        "Use a sturdy stick or pole to feel the ground ahead of you.",
        "Swim instead, as it is faster than walking in water.",
        "Walk barefoot so you don't lose your shoes in the mud."
      ],
      correctIndex: 1,
      explanation: "Floods wash away manhole covers and create invisible pits. A stick helps you find these before you fall in.",
      optionExplanations: [
        "Fast movement increases the risk of tripping or falling into a hole.",
        "Floods wash away manhole covers and create invisible pits. A stick helps you find these before you fall in.",
        "Swimming in floodwater is dangerous due to hidden debris and heavy contamination.",
        "Barefoot walking leads to cuts and increases the risk of Leptospirosis and other infections."
      ]
    },
    {
      situation: "The water has receded from your home. You are hungry and see some canned goods that were submerged in the floodwater.",
      options: [
        "Eat them if the cans are not dented or opened.",
        "Throw them away or thoroughly disinfect the cans before opening.",
        "Boil the cans in water for 5 minutes then eat the contents.",
        "Wipe them with a dry cloth and eat as usual."
      ],
      correctIndex: 1,
      explanation: "Floodwater is often mixed with sewage and chemicals. The outside of the can is contaminated; if not disinfected, you will transfer bacteria to the food when you open it.",
      optionExplanations: [
        "Visible cleanliness does not mean the can is free of microscopic pathogens.",
        "Floodwater is often mixed with sewage and chemicals. The outside of the can is contaminated; if not disinfected, you will transfer bacteria to the food when you open it.",
        "Boiling a sealed can is dangerous as it can cause the can to explode due to internal pressure.",
        "Visible cleanliness does not mean the can is free of microscopic pathogens."
      ]
    },
    {
      situation: "A volunteer has been wading in floodwater for 4 hours. They have no visible wounds but are worried about Leptospirosis. What is the most important immediate medical advice?",
      options: [
        "Take a hot shower and scrub the skin with soap and clean water.",
        "Drink a gallon of water to \"flush\" the bacteria out of the system.",
        "Apply a thick layer of moisturizer to seal the pores.",
        "Take a double dose of multivitamins."
      ],
      correctIndex: 0,
      explanation: "Mechanical cleaning with soap and clean water is the best way to remove the Leptospira bacteria (which is shed in animal urine) from the skin before it can enter through mucous membranes or tiny scratches.",
      optionExplanations: [
        "Mechanical cleaning with soap and clean water is the best way to remove the Leptospira bacteria (which is shed in animal urine) from the skin before it can enter through mucous membranes or tiny scratches.",
        "Drinking water does not prevent a bacterial infection that enters through the skin.",
        "Moisturizer does not kill bacteria; it may actually trap pathogens against the skin.",
        "Vitamins do not provide immediate protection against a specific bacterial exposure."
      ]
    },
    {
      situation: "A child is rescued from a roof after being exposed to wind and rain for 6 hours. They are shivering violently, their skin is pale, and they are moving slowly.",
      options: [
        "Give them a hot cup of coffee to jumpstart their heart.",
        "Rub their arms and legs vigorously to create friction heat.",
        "Remove wet clothes, wrap them in dry blankets, and provide a warm, sweet drink.",
        "Put them in a very hot bath to warm them up quickly."
      ],
      correctIndex: 2,
      explanation: "Passive rewarming (dry clothes/blankets) is safest. Warm, sweet drinks provide the calories needed to fuel the body's shivering response.",
      optionExplanations: [
        "Caffeine is a diuretic and can interfere with heart rhythms in a hypothermic patient.",
        "Vigorous rubbing can damage cold skin and may cause \"afterdrop,\" where cold blood from the limbs shocks the heart.",
        "Passive rewarming (dry clothes/blankets) is safest. Warm, sweet drinks provide the calories needed to fuel the body's shivering response.",
        "Rapid rewarming in hot water can cause the patient to go into shock as blood vessels dilate too quickly."
      ]
    },
    {
      situation: "In a crowded shelter, you have two patients: Patient A has a deep cut on the leg that is bleeding steadily. Patient B fell and hit their head, is now vomiting and very sleepy. Who is the higher priority?",
      options: [
        "Patient A, because the sight of blood indicates a higher risk of death.",
        "Patient B, because vomiting and lethargy after a head injury are signs of brain swelling.",
        "Both are equal; treat whoever is crying louder.",
        "Neither; wait for a professional doctor to arrive."
      ],
      correctIndex: 1,
      explanation: "Patient B is showing signs of \"Increased Intracranial Pressure\" (brain swelling). This is a life-threatening neurological emergency.",
      optionExplanations: [
        "Steady bleeding (venous) can usually be controlled with a simple pressure bandage. It is less immediate than a brain injury.",
        "Patient B is showing signs of \"Increased Intracranial Pressure\" (brain swelling). This is a life-threatening neurological emergency.",
        "Triage is based on medical urgency, not volume of noise.",
        "In a disaster, immediate basic care (like monitoring a head injury or stopping bleeding) can save lives before a doctor is available."
      ]
    }
  ],
  'Flood': [
    {
      situation: "The weather bureau has raised a Signal No. 4 warning. Your house is sturdy, but you live near a river that has flooded in the past. What is your best move?",
      options: [
        "Stay at home and board up all windows to protect your furniture.",
        "Move to the local evacuation center before the rain becomes heavy.",
        "Wait until the water reaches your doorstep before leaving.",
        "Go to the riverbank to monitor the water level yourself."
      ],
      correctIndex: 1,
      explanation: "Evacuating early is the only way to ensure safety. Once the storm hits, high winds and rising water make rescue missions nearly impossible.",
      optionExplanations: [
        "A sturdy house cannot protect you from a flash flood or a river cresting.",
        "Evacuating early is the only way to ensure safety. Once the storm hits, high winds and rising water make rescue missions nearly impossible.",
        "Waiting for water to reach your door is often too late; the current outside will be too strong to walk or drive through.",
        "This is extremely dangerous due to the risk of slipping or being caught by a sudden surge."
      ]
    },
    {
      situation: "You are inside your home and the floodwater begins to seeping in. The power is still on. What is the first thing you should do?",
      options: [
        "Use a vacuum to suck up the water as it enters.",
        "Move all your appliances to the second floor immediately.",
        "Turn off the main electrical breaker and the gas supply.",
        "Stand on a wooden chair to avoid touching the wet floor."
      ],
      correctIndex: 2,
      explanation: "Electrocution is a leading cause of death during floods. You must cut the power at the source before the water reaches the outlets.",
      optionExplanations: [
        "Using an electrical appliance (vacuum) while standing in water is an invitation for fatal electrocution.",
        "You should only move items if it is safe; turning off the power is a higher priority for life safety.",
        "Electrocution is a leading cause of death during floods. You must cut the power at the source before the water reaches the outlets.",
        "While wood is an insulator, it can become conductive if wet. It does not solve the underlying hazard of live electricity in the water."
      ]
    },
    {
      situation: "After hours of extreme wind and rain, the weather suddenly becomes calm and the sun begins to peek through. What should you do?",
      options: [
        "Go outside to survey the damage and start repairs.",
        "Stay inside and wait for a couple of hours before checking the outdoor.",
        "Drive to the store to restock on supplies while it's clear.",
        "Open all your windows to let the house dry out."
      ],
      correctIndex: 1,
      explanation: "You are likely in the eye of the typhoon. The calm is temporary, and the strongest winds (the eyewall) will return from the opposite direction shortly.",
      optionExplanations: [
        "Being caught outside when the wind returns is often more dangerous because structures have already been weakened.",
        "You are likely in the eye of the typhoon. The calm is temporary, and the strongest winds (the eyewall) will return from the opposite direction shortly.",
        "Being caught outside when the wind returns is often more dangerous because structures have already been weakened.",
        "Opening windows will allow the returning wind to enter and potentially lift the roof off your house."
      ]
    },
    {
      situation: "You are driving home when you encounter a flooded street. You can see the road on the other side, but you aren't sure how deep the water is. What do you do?",
      options: [
        "Speed up to use momentum to push through the water.",
        "Follow a larger truck, hoping they clear a path for you.",
        "Turn around and find an alternate, higher route.",
        "Drive slowly in low gear to keep the engine running."
      ],
      correctIndex: 2,
      explanation: "\"Turn around, don't drown.\" Just 12 inches of water can float most cars; 2 feet can sweep away SUVs and trucks.",
      optionExplanations: [
        "Speeding creates a \"bow wave\" that can splash into the engine's air intake, stalling it instantly.",
        "Large trucks can handle deeper water than cars, and their wake can actually swamp your vehicle.",
        "\"Turn around, don't drown.\" Just 12 inches of water can float most cars; 2 feet can sweep away SUVs and trucks.",
        "Even in low gear, you cannot see if the road beneath the water has been washed away."
      ]
    },
    {
      situation: "You are camping near a stream during a heavy rainstorm. You notice the water has become very muddy and you hear a \"roaring\" sound from upstream.",
      options: [
        "Move your tent further back from the bank by 10 feet.",
        "Pack up quickly and be ready to leave the camp.",
        "Build a small rock wall to divert the water.",
        "Check your phone for a weather update before moving."
      ],
      correctIndex: 1,
      explanation: "If you felt something unusual, pack your things and be ready to leave the camp. It might be very dangerous.",
      optionExplanations: [
        "10 feet is insufficient for the surge of a flash flood.",
        "If you felt something unusual, pack your things and be ready to leave the camp. It might be very dangerous.",
        "Human-made rock walls are useless against the force of thousands of tons of water and debris.",
        "The physical signs in front of you are more accurate than a delayed digital update."
      ]
    },
    {
      situation: "You must walk through waist-deep water to reach an evacuation boat. How should you proceed?",
      options: [
        "Walk quickly to minimize time spent in the water.",
        "Use a sturdy stick or pole to feel the ground ahead of you.",
        "Swim instead, as it is faster than walking in water.",
        "Walk barefoot so you don't lose your shoes in the mud."
      ],
      correctIndex: 1,
      explanation: "Floods wash away manhole covers and create invisible pits. A stick helps you find these before you fall in.",
      optionExplanations: [
        "Fast movement increases the risk of tripping or falling into a hole.",
        "Floods wash away manhole covers and create invisible pits. A stick helps you find these before you fall in.",
        "Swimming in floodwater is dangerous due to hidden debris and heavy contamination.",
        "Barefoot walking leads to cuts and increases the risk of Leptospirosis and other infections."
      ]
    },
    {
      situation: "The water has receded from your home. You are hungry and see some canned goods that were submerged in the floodwater.",
      options: [
        "Eat them if the cans are not dented or opened.",
        "Throw them away or thoroughly disinfect the cans before opening.",
        "Boil the cans in water for 5 minutes then eat the contents.",
        "Wipe them with a dry cloth and eat as usual."
      ],
      correctIndex: 1,
      explanation: "Floodwater is often mixed with sewage and chemicals. The outside of the can is contaminated; if not disinfected, you will transfer bacteria to the food when you open it.",
      optionExplanations: [
        "Visible cleanliness does not mean the can is free of microscopic pathogens.",
        "Floodwater is often mixed with sewage and chemicals. The outside of the can is contaminated; if not disinfected, you will transfer bacteria to the food when you open it.",
        "Boiling a sealed can is dangerous as it can cause the can to explode due to internal pressure.",
        "Visible cleanliness does not mean the can is free of microscopic pathogens."
      ]
    },
    {
      situation: "A volunteer has been wading in floodwater for 4 hours. They have no visible wounds but are worried about Leptospirosis. What is the most important immediate medical advice?",
      options: [
        "Take a hot shower and scrub the skin with soap and clean water.",
        "Drink a gallon of water to \"flush\" the bacteria out of the system.",
        "Apply a thick layer of moisturizer to seal the pores.",
        "Take a double dose of multivitamins."
      ],
      correctIndex: 0,
      explanation: "Mechanical cleaning with soap and clean water is the best way to remove the Leptospira bacteria (which is shed in animal urine) from the skin before it can enter through mucous membranes or tiny scratches.",
      optionExplanations: [
        "Mechanical cleaning with soap and clean water is the best way to remove the Leptospira bacteria (which is shed in animal urine) from the skin before it can enter through mucous membranes or tiny scratches.",
        "Drinking water does not prevent a bacterial infection that enters through the skin.",
        "Moisturizer does not kill bacteria; it may actually trap pathogens against the skin.",
        "Vitamins do not provide immediate protection against a specific bacterial exposure."
      ]
    },
    {
      situation: "A child is rescued from a roof after being exposed to wind and rain for 6 hours. They are shivering violently, their skin is pale, and they are moving slowly.",
      options: [
        "Give them a hot cup of coffee to jumpstart their heart.",
        "Rub their arms and legs vigorously to create friction heat.",
        "Remove wet clothes, wrap them in dry blankets, and provide a warm, sweet drink.",
        "Put them in a very hot bath to warm them up quickly."
      ],
      correctIndex: 2,
      explanation: "Passive rewarming (dry clothes/blankets) is safest. Warm, sweet drinks provide the calories needed to fuel the body's shivering response.",
      optionExplanations: [
        "Caffeine is a diuretic and can interfere with heart rhythms in a hypothermic patient.",
        "Vigorous rubbing can damage cold skin and may cause \"afterdrop,\" where cold blood from the limbs shocks the heart.",
        "Passive rewarming (dry clothes/blankets) is safest. Warm, sweet drinks provide the calories needed to fuel the body's shivering response.",
        "Rapid rewarming in hot water can cause the patient to go into shock as blood vessels dilate too quickly."
      ]
    },
    {
      situation: "In a crowded shelter, you have two patients: Patient A has a deep cut on the leg that is bleeding steadily. Patient B fell and hit their head, is now vomiting and very sleepy. Who is the higher priority?",
      options: [
        "Patient A, because the sight of blood indicates a higher risk of death.",
        "Patient B, because vomiting and lethargy after a head injury are signs of brain swelling.",
        "Both are equal; treat whoever is crying louder.",
        "Neither; wait for a professional doctor to arrive."
      ],
      correctIndex: 1,
      explanation: "Patient B is showing signs of \"Increased Intracranial Pressure\" (brain swelling). This is a life-threatening neurological emergency.",
      optionExplanations: [
        "Steady bleeding (venous) can usually be controlled with a simple pressure bandage. It is less immediate than a brain injury.",
        "Patient B is showing signs of \"Increased Intracranial Pressure\" (brain swelling). This is a life-threatening neurological emergency.",
        "Triage is based on medical urgency, not volume of noise.",
        "In a disaster, immediate basic care (like monitoring a head injury or stopping bleeding) can save lives before a doctor is available."
      ]
    }
  ],
  'Volcanic Eruptions': [
    {
      situation: "You are at home when a nearby volcano erupts. A fine, gray, gritty powder begins to fall from the sky. What is your first priority?",
      options: [
        "Just go into a nearby shed and watch the grey powder that kinda looks like snow.",
        "Stay indoors, close all windows, and seal gaps with damp towels.",
        "Get in your car and begin driving away from the volcano.",
        "Climb to the roof to have a better view of the situation."
      ],
      correctIndex: 1,
      explanation: "Volcanic ash is pulverized rock and glass. It is highly abrasive and hazardous to the lungs. Sealing the house prevents these particles from entering.",
      optionExplanations: [
        "Being outside exposes you to respiratory damage and eye irritation.",
        "Volcanic ash is pulverized rock and glass. It is highly abrasive and hazardous to the lungs. Sealing the house prevents these particles from entering.",
        "Driving during heavy ashfall is extremely dangerous. Volcanic ash will rapidly clog your car's air filter, causing the engine to stall.",
        "Roofs become extremely slippery when covered in ash, and falling is a major cause of injury during eruptions."
      ]
    },
    {
      situation: "It has been raining ash for 12 hours. You notice the ash on your roof is about 4 inches deep and it has started to rain. Why is this a major concern?",
      options: [
        "The rain will wash the ash away and solve the problem.",
        "The ash will turn into a heavy, cement-like sludge that can collapse the roof.",
        "The rain will make the ash more acidic and eat through the shingles.",
        "The ash will keep the house too warm, causing heat stroke."
      ],
      correctIndex: 1,
      explanation: "Dry ash is heavy, but wet ash is massive. It can weigh as much as water-soaked concrete, leading to sudden structural failure.",
      optionExplanations: [
        "Ash does not \"wash away\" easily; it clumps and clogs gutters, making the weight problem worse.",
        "Dry ash is heavy, but wet ash is massive. It can weigh as much as water-soaked concrete, leading to sudden structural failure.",
        "While ash can be acidic, the immediate threat to life is the structural collapse of the building.",
        "Ash does not provide significant insulation that would cause heat stroke."
      ]
    },
    {
      situation: "You are told to evacuate because a Lahar is approaching your valley. What are you looking for?",
      options: [
        "A fast-moving cloud of hot gas and ash.",
        "A wall of glowing, molten rock moving slowly.",
        "A violent mudflow of volcanic debris and water.",
        "A rain of large, glowing \"bombs\" of rock."
      ],
      correctIndex: 2,
      explanation: "A Lahar is a volcanic mudflow. It looks and acts like wet concrete and can travel dozens of miles down river valleys at high speeds.",
      optionExplanations: [
        "This describes a pyroclastic flow.",
        "This describes a lava flow.",
        "A Lahar is a volcanic mudflow. It looks and acts like wet concrete and can travel dozens of miles down river valleys at high speeds.",
        "These are \"volcanic bombs\" or tephra, which usually fall closer to the vent."
      ]
    },
    {
      situation: "You are caught in your car during an ashfall. The windshield is becoming covered in gray grit. How do you handle this?",
      options: [
        "Use your windshield wipers and fluid to keep the glass clear.",
        "Find something useful to wipe the windshield or call for help.",
        "Speed up to reach a tunnel or garage before the car stalls.",
        "Drive on the shoulder with your windows down to see better."
      ],
      correctIndex: 1,
      explanation: "Ash is abrasive. Wipers will permanently scratch and \"frost\" your windshield, blinding you. Ash also clogs air filters, which will stall your engine and leave you stranded.",
      optionExplanations: [
        "You will ruin the glass and the wiper motors.",
        "Ash is abrasive. Wipers will permanently scratch and \"frost\" your windshield, blinding you. Ash also clogs air filters, which will stall your engine and leave you stranded.",
        "Speeding in low visibility is dangerous, and the engine will likely fail from ash inhalation anyway.",
        "Opening windows allows the toxic, abrasive dust into your lungs and the car’s interior."
      ]
    },
    {
      situation: "After an eruption, you are exploring a valley or a basement near the volcano. You notice several dead birds on the ground but see no visible danger. What should you do?",
      options: [
        "Check the birds for signs of disease.",
        "Immediately move to higher ground.",
        "Put on a mask and continue exploring.",
        "Wait for the wind to pick up to cool the area down."
      ],
      correctIndex: 1,
      explanation: "This is a sign of Carbon Dioxide (CO2) or other toxic gases pooling in low areas. Since these gases are heavier than air and odorless, they displace oxygen and can suffocate you without warning.",
      optionExplanations: [
        "The birds likely died of suffocation, not disease.",
        "This is a sign of Carbon Dioxide (CO2) or other toxic gases pooling in low areas. Since these gases are heavier than air and odorless, they displace oxygen and can suffocate you without warning.",
        "Standard masks do not filter out CO2; only a self-contained breathing apparatus (SCBA) works.",
        "Waiting in a gas pocket is fatal."
      ]
    },
    {
      situation: "You see a glowing, super-heated cloud of ash and gas rushing down the volcano's slope toward you. What is your survival chance?",
      options: [
        "High, if you jump into a nearby river to cool off.",
        "High, if you run into a wooden house and lock the doors.",
        "Extremely low; your only hope is immediate evacuation before it starts.",
        "Moderate, if you lay flat on the ground and cover your face."
      ],
      correctIndex: 2,
      explanation: "Pyroclastic flows move at speeds over 100 mph and temperatures up to 1,000C/ 1,832F. They destroy everything in their path.",
      optionExplanations: [
        "You will likely be boiled or buried in the river as the flow enters the water.",
        "Wooden houses offer no protection and will be vaporized or crushed.",
        "Pyroclastic flows move at speeds over 100 mph and temperatures up to 1,000C/ 1,832F. They destroy everything in their path.",
        "Laying flat will not protect you from the heat or the force of the flow."
      ]
    },
    {
      situation: "You live on a farm 50 miles from the volcano. Ash is falling lightly. What is the most critical step for your livestock?",
      options: [
        "Keep them outside so the ash doesn't concentrate in the barn.",
        "Cover all water troughs and bring animals into a roofed shelter.",
        "Give them extra salt to help them process the ash.",
        "Shear their wool or hair so ash doesn't get trapped."
      ],
      correctIndex: 1,
      explanation: "If animals eat ash-covered grass or drink ash-filled water, they can suffer from \"Fluorine poisoning\" or fatal stomach blockages.",
      optionExplanations: [
        "Animals need protection from inhaling the ash and consuming it.",
        "If animals eat ash-covered grass or drink ash-filled water, they can suffer from \"Fluorine poisoning\" or fatal stomach blockages.",
        "Salt does not prevent the abrasive or toxic effects of volcanic ash.",
        "This is unnecessary and can cause stress; the priority is food and water purity."
      ]
    },
    {
      situation: "A victim has been outside during an ashfall and is complaining of a \"stabbing\" sensation in their eyes. What is the correct first aid?",
      options: [
        "Rub the eye firmly to push the particle to the corner.",
        "Flush the eye with large amounts of clean water or saline.",
        "Use a dry tissue to wipe the surface of the eyeball.",
        "Apply eye drops that contain \"redness relief\" chemicals."
      ],
      correctIndex: 1,
      explanation: "Ash is composed of tiny glass shards. Flushing \"floats\" the glass out.",
      optionExplanations: [
        "Rubbing will grind the glass into the cornea, causing permanent scarring.",
        "Ash is composed of tiny glass shards. Flushing \"floats\" the glass out.",
        "Wiping creates friction that scratches the eye.",
        "These drops do not remove the physical grit and can irritate an already damaged eye."
      ]
    },
    {
      situation: "An elderly person is coughing and gasping for air after breathing in ash. They are wheezing loudly. What is the immediate priority?",
      options: [
        "Have them run to build up lung capacity.",
        "Move them to a clean-air environment and keep them seated upright.",
        "Give them a glass of milk to \"coat\" the lungs.",
        "Have them breathe into a paper bag."
      ],
      correctIndex: 1,
      explanation: "Getting the patient out of the ash is the first step. Sitting upright makes it easier for the diaphragm to move.",
      optionExplanations: [
        "Exercise increases the demand for oxygen and causes them to inhale more deeply.",
        "Getting the patient out of the ash is the first step. Sitting upright makes it easier for the diaphragm to move.",
        "Milk goes into the stomach, not the lungs. It has no effect on respiratory ash.",
        "This is for hyperventilation, not for physical airway irritation or obstruction."
      ]
    },
    {
      situation: "A survivor from the \"hot zone\" has singed eyebrows, a hoarse voice, and soot around their nose and mouth. They say they feel \"okay.\" How do you triage them?",
      options: [
        "Green (Minor): They are walking and talking fine.",
        "Yellow (Delayed): Treat them after those with visible bleeding.",
        "Red (Immediate): They are at risk of sudden airway closure.",
        "Black (Deceased): There is nothing that can be done."
      ],
      correctIndex: 2,
      explanation: "Hoarseness and soot in the nose are signs of Inhalation Injury. The throat can swell shut hours after the initial burn, leading to total airway obstruction.",
      optionExplanations: [
        "Their current stability is deceptive; they are a \"ticking time bomb.\"",
        "Airway takes priority over almost all other injuries.",
        "Hoarseness and soot in the nose are signs of Inhalation Injury. The throat can swell shut hours after the initial burn, leading to total airway obstruction.",
        "With immediate medical intervention (intubation), these patients can often be saved."
      ]
    }
  ],
  'Landslides': [
    {
      situation: "You live at the base of a mountain. After three days of continuous heavy rain, you notice your front door is suddenly jamming and there are new cracks in the pavement. What does this indicate?",
      options: [
        "The house is settling normally due to the wet weather.",
        "The ground beneath the structure is shifting, indicating an imminent slide.",
        "The humidity has caused the wood in the door to swell.",
        "You should wait until the rain stops to see if the cracks close back up."
      ],
      correctIndex: 1,
      explanation: "Physical changes to structures—like sticking doors, windows, or new cracks—are \"sentinel signs\" that the slope is becoming unstable.",
      optionExplanations: [
        "While houses settle, sudden changes during heavy rain are a red flag for land movement.",
        "Physical changes to structures—like sticking doors, windows, or new cracks—are \"sentinel signs\" that the slope is becoming unstable.",
        "While wood swells, cracks in the pavement indicate a much deeper soil issue.",
        "Waiting is fatal; once a landslide starts, there is no time to evacuate."
      ]
    },
    {
      situation: "It is midnight and it has been raining for days. You hear a low, constant rumbling sound that sounds like a freight train, along with the sound of trees snapping. What is your immediate move?",
      options: [
        "Go outside with a flashlight to see where the sound is coming from.",
        "Stay in bed and cover your ears with a pillow.",
        "Wake your family and evacuate to a predetermined safe zone immediately.",
        "Call the weather bureau to ask for a status update."
      ],
      correctIndex: 2,
      explanation: "The \"freight train\" sound is the literal sound of a debris flow or landslide approaching. You have seconds to move.",
      optionExplanations: [
        "You cannot see a landslide at night, and being outside makes you vulnerable to being crushed by debris.",
        "Ignoring the sound leads to being buried while asleep.",
        "The \"freight train\" sound is the literal sound of a debris flow or landslide approaching. You have seconds to move.",
        "Real-time ground movements happen faster than a weather bureau can report them."
      ]
    },
    {
      situation: "You are hiking and see a wall of mud and rocks rushing down the slope toward you. You cannot reach high ground in time. What is your best survival posture?",
      options: [
        "Run as fast as you can straight downhill to outrun it.",
        "Lay flat on your stomach and hold your breath.",
        "Curl into a tight ball (fetal position) and protect your head.",
        "Stand behind a single, large tree for protection."
      ],
      correctIndex: 2,
      explanation: "If escape is impossible, the fetal position protects your internal organs and your head from the blunt force trauma of rocks and debris.",
      optionExplanations: [
        "Landslides move at 30–50 mph; you cannot outrun them downhill.",
        "Laying flat exposes more surface area to being crushed or suffocated by mud.",
        "If escape is impossible, the fetal position protects your internal organs and your head from the blunt force trauma of rocks and debris.",
        "Single trees are often uprooted and become part of the debris that crushes you."
      ]
    },
    {
      situation: "You live near a stream at the bottom of a canyon. During a storm, you notice the water level has suddenly dropped to almost nothing, and the water has become extremely thick with mud.",
      options: [
        "This is good news because the flood risk has decreased.",
        "A landslide has likely \"dammed\" the river upstream; move to high ground.",
        "The ground has absorbed all the water, ending the storm threat.",
        "Go upstream to see what is blocking the water."
      ],
      correctIndex: 1,
      explanation: "A sudden drop in water level during a storm means a \"debris dam\" has formed. When it breaks, a massive wall of water and mud will surge down the canyon.",
      optionExplanations: [
        "This is a false sense of security; the water is being held back and will return with much more force.",
        "A sudden drop in water level during a storm means a \"debris dam\" has formed. When it breaks, a massive wall of water and mud will surge down the canyon.",
        "This is a false sense of security; the water is being held back and will return with much more force.",
        "Walking toward the dam is moving toward the point of most certain death."
      ]
    },
    {
      situation: "You are driving on a mountain road during a storm and see small rocks and clumps of dirt falling onto the pavement from the slope above.",
      options: [
        "Slow down and stop to clear the rocks off the road.",
        "Speed up to get past the area as quickly as possible.",
        "Turn around and find an alternate route away from the slopes.",
        "Pull over and park close to the hillside to wait for the rain to stop."
      ],
      correctIndex: 2,
      explanation: "Small \"precursor\" rockfalls often happen minutes or hours before a massive slope failure.",
      optionExplanations: [
        "Stopping keeps you in the \"fall zone\" longer.",
        "Speeding is dangerous on wet roads, and you may drive right into a larger slide already blocking the road ahead.",
        "Small \"precursor\" rockfalls often happen minutes or hours before a massive slope failure.",
        "Parking next to a hill is the most dangerous place to be during a landslide event."
      ]
    },
    {
      situation: "You notice that the fence in your backyard is starting to lean, and a large tree on the hill now has a \"J-shaped\" curve at the base of its trunk.",
      options: [
        "The tree grew that way to reach more sunlight.",
        "The soil is slowly \"creeping\" downhill; the slope is unstable.",
        "The wind has permanently bent the fence and the tree.",
        "You need to water the tree more to straighten the roots."
      ],
      correctIndex: 1,
      explanation: "\"Pistol-butt\" trees (J-shaped) and leaning fences are classic indicators of slow soil movement, which can turn into a catastrophic landslide during the next rain.",
      optionExplanations: [
        "These ignore the geological reality that the top layer of soil is losing its grip on the bedrock.",
        "\"Pistol-butt\" trees (J-shaped) and leaning fences are classic indicators of slow soil movement, which can turn into a catastrophic landslide during the next rain.",
        "These ignore the geological reality that the top layer of soil is losing its grip on the bedrock.",
        "These ignore the geological reality that the top layer of soil is losing its grip on the bedrock."
      ]
    },
    {
      situation: "A landslide has hit your neighborhood. The movement has stopped. Your neighbor's house is partially buried. What should you do?",
      options: [
        "Run onto the mud to start digging with your hands.",
        "Stay away from the area and check for downed power lines.",
        "Drive your car over the mud to see if it’s solid enough to cross.",
        "Use a garden hose to wash the mud away from the buried house."
      ],
      correctIndex: 1,
      explanation: "\"Secondary slides\" are extremely common. The \"head scarp\" (the top of the slide) is often very unstable and can collapse again.",
      optionExplanations: [
        "You could be buried by a second slide or sink into the unstable mud.",
        "\"Secondary slides\" are extremely common. The \"head scarp\" (the top of the slide) is often very unstable and can collapse again.",
        "Mud remains \"liquid\" and unstable for a long time; cars will get stuck or trigger further movement.",
        "Adding more water to a landslide area makes the soil even less stable."
      ]
    },
    {
      situation: "A victim was pulled from a mudflow. They are conscious but have a firm, distended abdomen and are complaining of thirst and extreme pain. What is the likely issue?",
      options: [
        "They swallowed too much mud and are constipated.",
        "They are experiencing internal bleeding in the abdominal cavity.",
        "They have a simple \"stomach ache\" from the stress.",
        "They are dehydrated and need 3 liters of water immediately."
      ],
      correctIndex: 1,
      explanation: "A \"board-like\" or distended abdomen after trauma is a sign of massive internal bleeding.",
      optionExplanations: [
        "While they may have swallowed mud, the surgical emergency of internal bleeding takes priority.",
        "A \"board-like\" or distended abdomen after trauma is a sign of massive internal bleeding.",
        "This ignores the severity of the trauma.",
        "Never give water to a patient with a potential abdominal injury or one who may need surgery."
      ]
    },
    {
      situation: "A survivor was buried up to their chest. They are coughing up dark, gritty mud and their breathing is high-pitched whistling. What is the first aid priority?",
      options: [
        "Give them a cough drop to soothe the throat.",
        "Clear the mouth of debris and keep the patient upright to assist breathing.",
        "Lay them flat on their back and cover them with a blanket.",
        "Force them to drink milk to \"wash\" the silt down."
      ],
      correctIndex: 1,
      explanation: "Clearing the airway is the first step. Gravity (sitting upright) helps them clear the silt from their lungs more effectively than laying down.",
      optionExplanations: [
        "Cough drops do not help with physical silt obstruction in the airway.",
        "Clearing the airway is the first step. Gravity (sitting upright) helps them clear the silt from their lungs more effectively than laying down.",
        "Laying flat can cause the mud/silt in the throat to settle further into the lungs or cause choking.",
        "Liquid should never be forced into someone with an obstructed or struggling airway."
      ]
    },
    {
      situation: "You find three victims after a slide: Victim 1 is screaming. Victim 2 is unconscious and not breathing. Victim 3 has arterial bleeding. Who is the first priority?",
      options: [
        "Victim 1 (The screaming indicates extreme pain).",
        "Victim 2 (Unconscious patients are always first).",
        "Victim 3 (Arterial bleeding is a \"quick fix\" that prevents immediate death).",
        "None (Wait for a coroner)."
      ],
      correctIndex: 2,
      explanation: "In disaster triage, you fix the \"immediate killers\" that are treatable. You can stop arterial bleeding in seconds with a tourniquet.",
      optionExplanations: [
        "If they can scream, their airway and lungs are working; they are \"Yellow\" or \"Green.\"",
        "In a mass casualty event, a non-breathing patient with a severe head injury is often tagged \"Black\" because their survival chance is near zero.",
        "In disaster triage, you fix the \"immediate killers\" that are treatable. You can stop arterial bleeding in seconds with a tourniquet.",
        "Victim 3 can be saved with simple action."
      ]
    }
  ],
  'Tsunami': [
    {
      situation: "You are on a beach in a known \"Tsunami Zone\" and feel a massive earthquake that lasts nearly a minute. You look at the ocean and see nothing unusual yet. What is your best course of action?",
      options: [
        "Wait for the local authorities to trigger the tsunami sirens.",
        "Run to the water’s edge to see if the tide is starting to go out.",
        "Immediately move inland or to high ground without waiting for an official alert.",
        "Stay where you are; modern beach houses are built to withstand waves."
      ],
      correctIndex: 2,
      explanation: "In many cases, the earthquake is the only warning you will get. Large waves can arrive within minutes of the shaking.",
      optionExplanations: [
        "Sirens can fail due to power outages or technical glitches caused by the quake.",
        "If you are close enough to see the tide change, you are in the \"kill zone.\"",
        "In many cases, the earthquake is the only warning you will get. Large waves can arrive within minutes of the shaking.",
        "Most residential beach houses are made of wood or light materials and will be pulverized by the force of a tsunami."
      ]
    },
    {
      situation: "You are in a coastal city when the tsunami warning sounds. You are 5 miles from the nearest hill, and the roads are completely gridlocked. Where do you go?",
      options: [
        "Find a sturdy, reinforced concrete building and climb to at least the 3rd or 4th floor.",
        "Stay in your car and lock the doors to keep the water out.",
        "Run into a nearby basement or underground subway station to hide.",
        "Climb a large, sturdy tree near the beach."
      ],
      correctIndex: 0,
      explanation: "\"Vertical Evacuation\" is the standard protocol when horizontal evacuation is impossible. Concrete buildings (like hotels) provide the best resistance.",
      optionExplanations: [
        "\"Vertical Evacuation\" is the standard protocol when horizontal evacuation is impossible. Concrete buildings (like hotels) provide the best resistance.",
        "Cars are death traps in tsunamis; they float, roll, and are easily crushed.",
        "Basements and subways will fill with water instantly, leaving no air pockets.",
        "Trees can be uprooted by the force of the water or snapped by floating debris hitting the trunk."
      ]
    },
    {
      situation: "The ocean water suddenly disappears from the beach, exposing hundreds of meters of seafloor and flapping fish. What does this mean?",
      options: [
        "The earthquake caused a permanent shift in the sea level.",
        "A tsunami is imminent; the water is being sucked out to form the crest of the wave.",
        "It is safe to go out and collect shells because the tide is \"extra low.\"",
        "The \"eye\" of the tsunami has passed and the danger is over."
      ],
      correctIndex: 1,
      explanation: "This is a classic \"drawback.\" It is a physical sign that a massive wave is about to strike within seconds or minutes.",
      optionExplanations: [
        "While the land can shift, the sudden retreat of water is a temporary hydrodynamic event preceding a wave.",
        "This is a classic \"drawback.\" It is a physical sign that a massive wave is about to strike within seconds or minutes.",
        "This is a fatal mistake; people who go out to the seafloor are caught when the wave returns at high speed.",
        "Tsunamis do not have \"eyes\" like typhoons; the drawback is an early-stage warning, not the end."
      ]
    },
    {
      situation: "You are the captain of a small fishing boat currently docked in a narrow harbor when you receive a tsunami alert. You have 15 minutes. What do you do?",
      options: [
        "Tie the boat with extra-strong ropes to the pier.",
        "Speed the boat out into the deep ocean (100+ meters deep).",
        "Abandon the boat and run to high ground on foot.",
        "Stay on the boat but put on a life jacket."
      ],
      correctIndex: 2,
      explanation: "For a boat in a harbor, 15 minutes is usually not enough time to reach the safety of deep water. The harbor will become a \"washing machine\" of debris. Saving yourself is the priority.",
      optionExplanations: [
        "Ropes will snap, or the pier itself will be destroyed.",
        "If you are in shallow water when the wave hits, the boat will likely capsize or be thrown inland.",
        "For a boat in a harbor, 15 minutes is usually not enough time to reach the safety of deep water. The harbor will become a \"washing machine\" of debris. Saving yourself is the priority.",
        "Staying on the boat in a harbor during a tsunami is almost always fatal due to the violent currents and debris."
      ]
    },
    {
      situation: "The first wave has hit, destroyed the beach front, and receded. The water is calm again. What is the safest move?",
      options: [
        "Go down to the beach to see if anyone needs help.",
        "Start cleaning up your property before the mud dries.",
        "Remain on high ground; more waves are likely coming.",
        "Drive away immediately while the roads are temporarily clear."
      ],
      correctIndex: 2,
      explanation: "A tsunami is a \"wave train,\" not a single wave. The waves can be spaced 5 minutes to an hour apart, and the first one is rarely the largest.",
      optionExplanations: [
        "You will likely be caught by the second or third wave.",
        "Cleaning can wait. The danger period usually lasts 12–24 hours.",
        "A tsunami is a \"wave train,\" not a single wave. The waves can be spaced 5 minutes to an hour apart, and the first one is rarely the largest.",
        "Roads are likely damaged or blocked by debris from the first wave, and driving puts you at risk of being trapped in your car."
      ]
    },
    {
      situation: "You are 2 kilometers inland, standing next to a large river that flows into the sea. You see a wall of water moving up the river toward you. What is this?",
      options: [
        "A normal tidal change.",
        "A \"Tsunami Bore,\" and you are in immediate danger.",
        "A flash flood from a mountain dam.",
        "An optical illusion caused by the earthquake."
      ],
      correctIndex: 1,
      explanation: "Tsunamis travel much further inland via rivers. These \"bores\" can move faster than the wave on the coast and overflow riverbanks.",
      optionExplanations: [
        "Tides do not move as a visible \"wall\" of water.",
        "Tsunamis travel much further inland via rivers. These \"bores\" can move faster than the wave on the coast and overflow riverbanks.",
        "While it looks like a flash flood, the timing with a coastal event confirms it is a tsunami.",
        "This is a real, physical threat; ignoring it leads to being swept away."
      ]
    },
    {
      situation: "If you are swept up by the water and cannot reach a building, what is your primary goal to survive the current?",
      options: [
        "Try to swim against the current toward the shore.",
        "Dive deep underwater to avoid the debris on the surface.",
        "Grab onto a large floating object and use it as a raft.",
        "Take off your clothes to reduce drag in the water."
      ],
      correctIndex: 2,
      explanation: "You cannot outswim a tsunami. A raft (door, roof, tree) keeps you above water and acts as a shield against other floating objects.",
      optionExplanations: [
        "The current is far stronger than any human swimmer; you will only exhaust yourself.",
        "Debris is everywhere, not just the surface. Staying underwater increases the risk of drowning or being pinned against an obstacle.",
        "You cannot outswim a tsunami. A raft (door, roof, tree) keeps you above water and acts as a shield against other floating objects.",
        "Clothing can actually provide a small amount of protection against scrapes from debris and helps prevent hypothermia."
      ]
    },
    {
      situation: "A victim is rescued from the tsunami debris. They are breathing but \"gurgling,\" and you see pink, frothy foam coming from their mouth. What is the priority?",
      options: [
        "Give them water to drink to dilute the salt in their throat.",
        "Keep them flat on their back and wait for a doctor.",
        "Position them in the \"Recovery Position\" (on their side) and monitor their airway.",
        "Perform the Heimlich maneuver to get the water out."
      ],
      correctIndex: 2,
      explanation: "The side-lying position allows fluid and vomit to drain out rather than being re-inhaled. Pink foam is a sign of lung damage (pulmonary edema).",
      optionExplanations: [
        "Giving fluids to someone with a compromised airway can cause them to choke or aspirate more liquid.",
        "Lying flat on the back can cause the tongue or vomit to block the airway.",
        "The side-lying position allows fluid and vomit to drain out rather than being re-inhaled. Pink foam is a sign of lung damage (pulmonary edema).",
        "The Heimlich maneuver is for solid objects (food/toys) blocking the throat, not for fluid in the lungs."
      ]
    },
    {
      situation: "A survivor has a deep gash on their leg from a piece of floating debris. The wound is filled with muddy tsunami water. How should you treat it?",
      options: [
        "Leave the mud inside to help the blood clot.",
        "Pour alcohol or bleach directly into the open wound.",
        "Wash the wound with the cleanest water available and soap.",
        "Cover it with a plastic bag to keep the air out."
      ],
      correctIndex: 2,
      explanation: "Debris-filled water contains dangerous bacteria. Removing the \"mechanical\" dirt with clean water and soap is the best way to prevent sepsis.",
      optionExplanations: [
        "Mud and dirt introduce bacteria and prevent proper healing, leading to severe infection or gangrene.",
        "Pure bleach or high-concentration alcohol damages the healthy tissue inside the wound, which actually delays healing.",
        "Debris-filled water contains dangerous bacteria. Removing the \"mechanical\" dirt with clean water and soap is the best way to prevent sepsis.",
        "Covering a dirty wound with plastic creates a \"greenhouse\" for anaerobic bacteria to grow."
      ]
    },
    {
      situation: "A victim was in the water for 45 minutes. They are shivering uncontrollably and their speech is slurred. What should you do?",
      options: [
        "Give them a cigarette to stimulate their heart rate.",
        "Gently remove wet clothes and wrap them in dry blankets.",
        "Have them run in place to generate body heat.",
        "Place them directly in front of a high-heat fire."
      ],
      correctIndex: 1,
      explanation: "Passive rewarming is the safest. Sudden movements or intense heat can cause \"afterdrop,\" where cold blood from the limbs shocks the heart.",
      optionExplanations: [
        "Nicotine constricts blood vessels, which can worsen the body's ability to regulate temperature.",
        "Passive rewarming is the safest. Sudden movements or intense heat can cause \"afterdrop,\" where cold blood from the limbs shocks the heart.",
        "A person with hypothermia often has an unstable heart rhythm; intense physical exercise could trigger cardiac arrest.",
        "Extreme heat can cause burns (since their skin may be numb) and can lead to \"rewarming shock.\""
      ]
    }
  ]
};
