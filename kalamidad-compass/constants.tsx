
import React from 'react';
import { Waves, Activity, Wind, Flame, Mountain, Droplets, TriangleAlert } from 'lucide-react';
import { CategoryInfo, DisasterType } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Flood',
    title: 'FLOOD',
    bgImage: 'https://www.care.org/wp-content/uploads/2024/10/Bangladesh-Hero.jpeg',
    icon: <Droplets className="w-8 h-8" />
  },
  {
    id: 'Earthquake',
    title: 'EARTHQUAKE',
    bgImage: 'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25332741/GettyImages_2031349416.jpg?quality=90&strip=all&crop=16.67%2C0%2C66.66%2C100&w=2400',
    icon: <TriangleAlert className="w-8 h-8" />
  },
  {
    id: 'Typhoons',
    title: 'TYPHOONS',
    bgImage: 'https://static01.nyt.com/images/2023/01/03/multimedia/03xp-philippine-floods-2-c468/03xp-philippine-floods-2-c468-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    icon: <Wind className="w-8 h-8" />
  },
  {
    id: 'Volcanic Eruptions',
    title: 'VOLCANIC ERUPTIONS',
    bgImage: 'https://www.cdc.gov/volcanoes/media/images/2024/04/volcano-crater-with-lava-flow.jpg',
    icon: <Flame className="w-8 h-8" />
  },
  {
    id: 'Landslides',
    title: 'LANDSLIDES',
    bgImage: 'https://media.licdn.com/dms/image/v2/D4D12AQEMHhdfnoWnJA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680375976698?e=2147483647&v=beta&t=nm7iXLUKoZZ-iZny_m7gPmAa1_WOLSJz5-93231YhbI',
    icon: <Mountain className="w-8 h-8" />
  },
  {
    id: 'Tsunami',
    title: 'TSUNAMI',
    bgImage: 'https://static01.nyt.com/images/2011/03/12/world/12japan-cnd-span4/12japan-cnd-span4-blog480.jpg',
    icon: <Waves className="w-8 h-8" />
  }
];

export const DISASTER_FACTS: Record<DisasterType, { 
  facts: { section: string; content: string }[], 
  references: { title: string; url: string }[] 
}> = {
  'Earthquake': {
    facts: [
      { section: 'Overview', content: 'The Philippines experiences ~13,000 earthquakes/year. Situated in the "Ring of Fire," it has seen three M8+ quakes since 1900.' },
      { section: 'Recent Impact (2025)', content: 'A 6.9-magnitude quake near Cebu on Sep 30, 2025, killed 68 and displaced 77,000 people. Over 13,500 aftershocks followed.' },
      { section: 'The "Big One"', content: 'A 7.2 quake on the West Valley Fault could cause 48,000 fatalities and $48B in losses in Metro Manila.' }
    ],
    references: [
      { title: 'LA Times: What Makes an Earthquake Deadly', url: 'https://www.latimes.com/science/story/2023-02-07/what-makes-an-earthquake-deadly-these-are-the-things-that-matter' },
      { title: 'Volcano Discovery: PH Earthquakes', url: 'https://www.volcanodiscovery.com/earthquakes/philippines.html' },
      { title: 'Global News: PH Earthquake Aftermath', url: 'https://globalnews.ca/news/11458990/philippines-earthquake-aftermath-death-toll/' },
      { title: 'World Bank: Metro Manila Seismic Resilience', url: 'https://blogs.worldbank.org/en/sustainablecities/seismic-resilience-metro-manila-accessing-healthcare-after-catastrophic' }
    ]
  },
  'Typhoons': {
    facts: [
      { section: 'Climate Risk', content: 'The Philippines averages 20 typhoons/year. Climate change is intensifying these storms, increasing rainfall and wind speeds.' },
      { section: 'Recent Season (2025)', content: 'Typhoon Fung-wong hit with 185km/h winds. Total damages in Jan 2025 reached PHP 15.6 billion for agriculture and housing.' },
      { section: 'Economic Toll', content: 'Annual losses are ~1.2% of GDP ($5.64B in 2024). Typhoons displace hundreds of thousands into evacuation centers yearly.' }
    ],
    references: [
      { title: 'ReliefWeb: 24/25 Typhoon Situation Report', url: 'https://reliefweb.int/report/philippines/wfp-philippines-202425-typhoon-season-situation-report-8-21-january-2025' },
      { title: 'ADB: Impact of Typhoons on PH Economy', url: 'https://www.adb.org/publications/impact-typhoons-philippines' },
      { title: 'Global Humanitarian Overview 2025', url: 'https://humanitarianaction.info/document/global-humanitarian-overview-2025/article/philippines' }
    ]
  },
  'Flood': {
    facts: [
      { section: 'Scale of Crisis', content: 'Approximately 176,000 individuals are affected by floods annually. Urban areas are most vulnerable due to poor drainage.' },
      { section: 'Root Causes', content: 'Monsoons, deforestation, and corruption in flood control projects (PHP 111B scandal in 2025) exacerbate the danger.' },
      { section: 'Mindanao Event', content: 'In Jan 2024, floods displaced 354,000 people in Mindanao. Economic damage from 1978-2018 reached PHP 180 billion.' }
    ],
    references: [
      { title: 'ThinkLandscape: PH Nature-based Solutions', url: 'https://thinklandscape.globallandscapesforum.org/99278/philippines-floods-nature-based-solutions/' },
      { title: 'ReliefWeb: PH Floods and Landslides Jan 2024', url: 'https://reliefweb.int/disaster/ls-2024-000003-phl' },
      { title: 'Context: Flood Control Project Failures', url: 'https://www.context.news/climate-risks/how-flood-control-projects-fail-the-poor-in-the-philippines' }
    ]
  },
  'Volcanic Eruptions': {
    facts: [
      { section: 'Pinatubo (1991)', content: 'The 2nd largest eruption of the 20th century. Ejected 10km³ of material and cooled global temperatures by ~0.4°C for 3 years.' },
      { section: 'Taal (2020)', content: 'Spewed ash 14km high, forcing 1 million evacuations. Damage to agriculture and livestock reached PHP 577 million.' },
      { section: 'Dangers', content: 'Eruptions cause pyroclastic flows, ashfall (which collapses roofs), and lahars (destructive mudflows) that persist for years.' }
    ],
    references: [
      { title: 'USGS: Pinatubo 1991 Impacts', url: 'https://volcanoes.usgs.gov/volcanic_ash/pinatubo_1991.html' },
      { title: 'NASA: Ash-Damaged Taal Island', url: 'https://science.nasa.gov/earth/earth-observatory/an-ash-damaged-island-in-the-philippines-146444/' },
      { title: 'Pitt Climate Center: Eruption Consequences', url: 'https://www.climatecenter.pitt.edu/news/massive-eruption-philippines-devastating-consequences-and-potential-climatic-impact' }
    ]
  },
  'Landslides': {
    facts: [
      { section: 'Contributing Factors', content: 'Steep terrain and weathering volcanic rocks combined with deforestation weaken natural soil support.' },
      { section: 'High Risk Zones', content: 'Cordillera (CAR), Bicol, and Eastern Visayas are primary risk areas. Rainfall intensity has increased by 50% in some islands.' },
      { section: 'Maco Disaster (2024)', content: 'A Feb 2024 landslide in Davao de Oro caused 93 fatalities and buried entire communities under saturated soil.' }
    ],
    references: [
      { title: 'EcoFlow: Landslide Prevention PH', url: 'https://www.ecoflow.com/ph/blog/landslide-prevention-philippines' },
      { title: 'Climate Centre: Rainfall Intensity Study', url: 'https://www.climatecentre.org/13385/study-philippine-island-risks-more-deadly-landslides-with-rainfall-now-around-50-more-intense/' },
      { title: 'PBS: Tropical Storm Displacement', url: 'https://www.pbs.org/newshour/world/tropical-storm-leaves-8-dead-thousands-displaced-in-philippines-after-flooding-and-landslide' }
    ]
  },
  'Tsunami': {
    facts: [
      { section: 'Historical Threat', content: '21 tsunamis recorded since 1749. The 1976 Moro Gulf event produced 9m waves, killing over 3,000 people.' },
      { section: 'Preparation', content: 'Phivolcs established a detection network after the 2004 Indian Ocean tsunami to provide early warnings to coastal residents.' },
      { section: 'Tsunami Mitigation', content: 'The Tsunami Risk Mitigation Program produces hazard maps and evacuation models to save lives in at-risk coastal areas.' }
    ],
    references: [
      { title: 'PHIVOLCS: Introduction to Tsunami', url: 'https://www.phivolcs.dost.gov.ph/introduction-to-tsunami/' },
      { title: 'Rappler: Asian Tsunami Impact', url: 'https://www.rappler.com/environment/disasters/79053-2004-asian-tsunami-helped-philippines/' },
      { title: 'Think Hazard: PH Tsunami Profile', url: 'https://thinkhazard.org/en/report/196-philippines/TS' }
    ]
  }
};
