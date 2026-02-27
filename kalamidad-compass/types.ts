
import React from 'react';

export type DisasterType = 'Flood' | 'Earthquake' | 'Typhoons' | 'Volcanic Eruptions' | 'Landslides' | 'Tsunami';

export interface QuizQuestion {
  situation: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  optionExplanations: string[];
}

export interface CategoryInfo {
  id: DisasterType;
  title: string;
  icon: React.ReactNode;
  bgImage: string;
}
