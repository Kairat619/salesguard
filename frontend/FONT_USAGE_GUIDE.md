# Font Usage Guide

## Available Fonts in Your Project

### Google Fonts Added:
- **Noto Sans** - Clean, modern sans-serif
- **Noto Serif** - Classic, readable serif
- **Inter** - Technical, minimalist sans-serif (existing)
- **Barlow Condensed** - Bold, impactful sans-serif (existing)

## Tailwind CSS Classes

### Noto Sans Variants:
```html
<!-- Light weight -->
<p class="font-noto-sans font-light">Light Noto Sans</p>

<!-- Regular weight -->
<p class="font-noto-sans">Regular Noto Sans</p>

<!-- Medium weight -->
<p class="font-noto-sans font-medium">Medium Noto Sans</p>

<!-- Semibold weight -->
<p class="font-noto-sans font-semibold">Semibold Noto Sans</p>

<!-- Bold weight -->
<p class="font-noto-sans font-bold">Bold Noto Sans</p>
```

### Noto Serif Variants:
```html
<!-- Light weight -->
<p class="font-noto-serif font-light">Light Noto Serif</p>

<!-- Regular weight -->
<p class="font-noto-serif">Regular Noto Serif</p>

<!-- Medium weight -->
<p class="font-noto-serif font-medium">Medium Noto Serif</p>

<!-- Semibold weight -->
<p class="font-noto-serif font-semibold">Semibold Noto Serif</p>

<!-- Bold weight -->
<p class="font-noto-serif font-bold">Bold Noto Serif</p>
```

### Existing Fonts:
```html
<!-- Inter (default) -->
<p class="font-inter">Inter Font</p>

<!-- Barlow Condensed -->
<p class="font-barlow">Barlow Condensed</p>
```

## Recommended Usage

### For Headings:
```html
<h1 class="font-noto-sans font-bold text-4xl">Main Heading</h1>
<h2 class="font-noto-serif font-semibold text-2xl">Subheading</h2>
```

### For Body Text:
```html
<p class="font-noto-sans text-base">Body paragraph text</p>
```

### For Quotes/Emphasis:
```html
<blockquote class="font-noto-serif italic text-lg">Quote text</blockquote>
```

### For Technical UI:
```html
<button class="font-inter text-sm">Button</button>
```

## CSS Custom Properties (if needed)

You can also use the fonts directly in CSS:

```css
.custom-text {
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
}

.custom-serif {
  font-family: 'Noto Serif', serif;
  font-weight: 400;
}
```

## Font Weights Available

- **300** - Light (font-light)
- **400** - Regular (default)
- **500** - Medium (font-medium)
- **600** - Semibold (font-semibold)
- **700** - Bold (font-bold)

## Performance Notes

- All fonts are loaded with `display=swap` for optimal loading
- Only the weights specified are loaded (300-700)
- Fonts are cached by browsers after first load
- Consider font-display strategies for better perceived performance