# 💱 Currency Converter App

A modern, responsive currency conversion app built with React, TypeScript, and Redux. Convert currencies instantly using real-time exchange rates.

## ✨ What This App Does

- **Convert currencies** with up-to-date exchange rates
- **Browse 146+ currencies** from around the world
- **See beautiful flag representations** for each currency
- **Switch between light and dark themes** based on your preference
- **Use it on any device** - mobile, tablet, or desktop

## 🚀 Live Demo

[Coming soon!]

## 🛠️ Tech Stack & Why I Chose Them

### Frontend Framework
- **React 18** - Because it's reliable & well-supported
- **TypeScript** - Adds type safety and catches bugs 

### State Management
- **Redux Toolkit** - Used for state management and because I had to :)
- **Redux Thunks** - For handling async funcs (API calls) 

### Styling
- **Tailwind CSS** - Rapid development with utility classes, plus easy responsive design
- **Custom CSS Variables** - For dynamic theming that actually works consistently

### Routing
- **React Router DOM** - Clean routing between pages

### API Integration
- **Axios** - HTTP client with better error handling than fetch
- **FloatRates API** - Free, reliable currency exchange API 

### Icons & Visual Elements
- **Phosphor Icons** - Beautiful, consistent icon set
- **FlagsAPI.io** - High-quality flag images for all currencies

## 🏗️ Technical Implementation

### Component Structure Philosophy
I built this with **reusability** and **maintainability** in mind:
- **Small, focused components** - Each component has a single responsibility
- **Props-based configuration** - Components are flexible and reusable
- **Consistent styling patterns** - Using CSS variables and theme classes

### Theme System Approach

**CSS Variables + data-theme attribute** approach:
   - Works consistently across all components
   - Persists in localStorage
   - No flash of wrong theme on page load
   - Easy to maintain and extend


#### Core Components
- **Dropdown**: Accessible currency selection with labels and placeholders
- **InputField**: Smart amount input with validation and error display
- **Button**: Flexible button component with variants and states
- **ResultCard**: Rich conversion result display with rate information
- **ErrorMessage**: Contextual error messages with visual indicators

## 🎨 Design Decisions

### Color Palette
I chose a **purple-ish** theme after doing some research on Dribbble:
- **Primary Purple** - Professional yet friendly
- **Neutral Grays** - For text and backgrounds
- **Semantic Colors** - Red for errors, amber for warnings

### Responsive Design
- **Mobile-first approach** - Start with mobile, enhance for larger screens
- **Flexible grid system** - Adapts from 2 columns on mobile to 5 on desktop
- **Touch-friendly interactions** - Buttons and inputs sized for mobile use

### User Experience Features
- **Input validation** - Prevents invalid amounts (like 098 or 008 or negative numbers)
- **Loading states** - Clear feedback during API calls
- **Error handling** - Helpful messages when things go wrong
- **Pagination** - Browse through 146+ currencies without overwhelming the interface

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd currency_app

# Install dependencies
npm install

# Start development server
npm run dev
```

### API Used
- **Exchange rates**: `https://www.floatrates.com/daily/{base}.json`
- **Flag images**: `https://flagsapi.com/`


## 💭 What I Learned Building This

- **State management complexity**
- **Theme system challenges** 


---

Built with ❤️ using modern web stack. Happy converting! 💱✨
