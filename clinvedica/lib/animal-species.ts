export type AnimalSpeciesGroup = {
  name: string;
  strains: string[];
};

export const animalSpeciesGroups: AnimalSpeciesGroup[] = [
  {
    name: 'Mice',
    strains: ['Swiss Albino', 'C57', 'BALB/c'],
  },
  {
    name: 'Rat',
    strains: ['SD Rat', 'Wistar Rat'],
  },
  {
    name: 'Rabbit',
    strains: ['New Zealand White'],
  },
  {
    name: 'Guinea Pig',
    strains: ['Guinea Pig'],
  },
  {
    name: 'Dog',
    strains: ['Beagle'],
  },
  {
    name: 'Hamster',
    strains: ['Hamster'],
  },
  {
    name: 'Livestock',
    strains: ['Sheep', 'Goat'],
  },
  {
    name: 'Birds',
    strains: ['Pigeon', 'Chicken', 'and many more'],
  },
];
