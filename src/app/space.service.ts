import { Injectable } from '@angular/core';
import { Space } from './space.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  testSpace = Space[''] = [
    {
      question: 'List the planets in order from closest to farthest',
      answer: [
        { option: 'Mercury, Venus, Earth, Mars, Neptune, Jupiter, Saturn, Uranus', correct: false },
        { option: 'Mercury, Earth, Venus, Mars, Jupiter, Saturn, Uranus, Neptune', correct: false },
        { option: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, Uranus', correct: false },
        { option: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune', correct: true }

      ]
    },
    {
      question: 'Mercury is the...',
      answer: [
        { option: 'Smallest planet in our Solar System', correct: true },
        { option: 'Hottest planet in our Solar System', correct: false },
        { option: 'Closest planet in our Solar System', correct: false },
        { option: 'All of the Above', correct: false }
      ]
    },
    {
      question: 'Jupiter, Saturn, Uranus, and Neptune are commonly known as...',
      answer: [
        { option: 'The 4 Giants', correct: true },
        { option: 'The Beasts', correct: false },
        { option: 'The Gas Giants', correct: false },
        { option: 'The O.G\'s', correct: false }
      ]
    },
    {
      question: 'What is one thing that all the 4 outer planets have in common',
      answer: [
        { option: 'They have rings', correct: false },
        { option: 'They have rings and are made of gas', correct: false },
        { option: 'They are made of gas', correct: true },
        { option: 'Neither have rings, nor they are made of gas', correct: false }
      ]
    },
    {
      question: 'The "brightest" planet in the sky is...',
      answer: [
        { option: 'Mars', correct: false },
        { option: 'Venus', correct: true },
        { option: 'Mercury', correct: false },
        { option: 'Jupiter', correct: false }

      ]
    },
    {
      question: 'Mount Olympus is so big, it could cover up which US state?',
      answer: [
        { option: 'Missouri', correct: false },
        { option: 'Texas', correct: true },
        { option: 'California', correct: false },
        { option: 'Florida', correct: false }

      ]
    },
    {
      question: 'What 3 main elements are the Gas Giants composed of?',
      answer: [
        { option: 'Helium, Hydrogen, and Methane', correct: true },
        { option: 'Oxygen, Carbon Dioxide, and Helium', correct: false },
        { option: 'Hydrogen, Oxygen, and Helium', correct: false },
        { option: 'Sulfuric Acid, Methane, and Hydrogen', correct: false }

      ]
    },
    {
      question: 'A frozen chunk of ice dust "Dirty Snowman" whose orbit around the sun is very elliptical is called',
      answer: [
        { option: 'Planet', correct: false },
        { option: 'Asteroid', correct: false },
        { option: 'Comet', correct: false },
        { option: 'Meteor', correct: true }
      ]
    },
    {
      question: 'The 5th planet in Our Solar System',
      answer: [
        { option: 'Earth', correct: false },
        { option: 'Jupiter', correct: true },
        { option: 'Mars', correct: false },
        { option: 'Venus', correct: false }

      ]
    },
    {
      question: 'Venus is named after the goddess of...',
      answer: [
        { option: 'Babylon', correct: false },
        { option: 'Rome', correct: true },
        { option: 'Greece', correct: false },
        { option: 'Egypt', correct: false }

      ]
    },

  ]

  constructor() { }

  getQuestions() {
    return this.testSpace;
  }
}
