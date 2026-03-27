# Neon Glass Design System

This design system is focused on a **Soft, Modern, and Neon Glass** aesthetic. It uses translucent backgrounds with high-blur effects (Glassmorphism) combined with vibrant neon accents and glow effects.

## Core Principles

### 1. Glassmorphism
- **Background**: Translucent background (e.g., `rgba(255, 255, 255, 0.05)` for dark mode).
- **Blur**: High `backdrop-filter: blur(20px)` for a soft, frosted-glass effect.
- **Border**: Thin, sublte borders with a white-to-transparent gradient or low opacity (e.g., `rgba(255, 255, 255, 0.1)`).
- **Shadow**: Deep, soft outer shadows to create depth.

### 2. Neon Accents
- **Colors**: Vibrant neon colors such as:
    - Cyan: `#00f3ff`
    - Magenta: `#ff00e5`
    - Lime: `#aaff00`
    - Neon Blue: `#4466ff`
- **Glow Effects**: Use `box-shadow` or `drop-shadow` with a blur of 10-20px to create a soft glow around interactive elements.
- **Inner Glows**: Use small, vibrant gradients or shadows to give components life.

### 3. Typography
- **Modern & Soft**: Preference for rounded, clean sans-serif fonts such as **Inter**, **Outfit**, or **SF Pro**.
- **Hierarchy**: Use strong, neon-colored titles for focus.

### 4. Interactive Elements
- **Hover**: Increase background opacity or shift neon glow intensity.
- **Micro-transitions**: Use smooth 0.3s transitions for all scale, color, and shadow changes.

## Global CSS Guidelines

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-magenta: #ff00e5;
  --neon-blue: #4466ff;
  --bg-dark: #0a0a0c;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
}
```

## Component Snippets (Styled Components)

### Glass Card
```javascript
const GlassCard = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;
```

### Neon Button
```javascript
const NeonButton = styled.button`
  background: transparent;
  color: var(--neon-cyan);
  border: 1px solid var(--neon-cyan);
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
  text-shadow: 0 0 5px rgba(0, 243, 255, 0.5);
  
  &:hover {
    background: var(--neon-cyan);
    color: #000;
    box-shadow: 0 0 20px var(--neon-cyan);
  }
`;
```
