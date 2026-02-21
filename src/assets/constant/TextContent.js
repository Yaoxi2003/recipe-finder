// ===== HOMEPAGE CONTENT =====
import {Icons, CardImages} from '../images/Img'

const iconSet = Icons.features
const cardImg = CardImages
const {veg, noodle} = Icons.functional

export const HomePage = {
  hero: {
    title: 'Fast meals, zero fuss',
    description: 'Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.',
  },


  about: {
    title: 'Meals ready in minutes',
    benefits: [
      { 
        img: iconSet.faster,
        title: 'Find Meals Faster',
        description: 'Discover the perfect recipe with smart filters for prep and cook times, taking the guesswork out of your schedule.',
      },
      {
        img: iconSet.food,
        title: 'Reduce the burden of choice',
        description: 'Find recipes based on your diet and pantry in minutes. Stop overthinking dinner and start cooking',
      },
      {
        img: iconSet.egg,
        title: 'Reduce Food Waste',
        description: "Cook with what's in your fridge. Turn leftovers into meals to save money and reduce food waste",
      },
    ],
  },

  features: {
    title: 'AI-powered recipe recommendations',
    description: 'Our intelligent Chef suggests meals based on the ingredients you already have, reducing waste and saving you time.',
  },
  cta: {
    title: 'Ready to cook smarter?',
    description: 'Discover recipes that work around your ingredients and lifestyle',
    highlights: [
      {
        title: 'Quick & Easy',
        description: 'For busy users, students, or tired cooks.',
        cardImg: cardImg.card1
      },
      {
        title: 'Dietary preferences',
        description: 'Filter recipes that match your health goals',
        cardImg: cardImg.card2,
        icon: veg
      },
      {
        title: 'Precision Timing',
        description: 'Filter by duration to find perfect meals that match your availability',
        cardImg: cardImg.card3,
        icon: noodle
      },
    ],
  },
};

// ===== AI CHEF CONTENT =====
export const AiChefPage = {
  hero: {
    title: 'AI Chef - Meal Generator',
    description: 'Just tell us what you\'ve got — our AI turns your ingredients into delicious, personalized recipes in seconds. Whether you\'re working with leftovers or planning a meal, it finds dishes that fit your dietary needs, cooking style, and taste preferences.',
  },

  inputSection: {
    label: 'Enter your ingredients on hands',
  },
  cta: {
    title: 'Ready for a recipe?',
    description: 'Enter at least 6 ingredients to get started. Not feeling the first option? Just hit "Get a Recipe" again for a new suggestion! Remember — these are just smart ideas, not strict instructions. Feel free to tweak the recipe to suit your taste!',
  },
};

// ===== COMBINED EXPORT =====
export const TextContent = {
  HomePage,
  AiChefPage,
};

export default TextContent;