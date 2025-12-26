# CampusSync - Quick Style Reference Guide

## 🎨 Common Class Combinations

### Input Fields with Icons
```jsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-gray-400">{/* icon */}</svg>
  </div>
  <input 
    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-700 bg-gray-50 hover:bg-white"
    placeholder="Enter text"
  />
</div>
```

### Primary Button
```jsx
<button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-semibold shadow-xl hover:shadow-2xl">
  Click Me
</button>
```

### Secondary Button
```jsx
<button className="w-full inline-flex items-center justify-center py-3.5 px-4 border-2 border-blue-600 rounded-xl text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
  Click Me
</button>
```

### Feature Card
```jsx
<div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
  <div className="flex items-center mb-3">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
      <svg className="w-5 h-5 text-white">{/* icon */}</svg>
    </div>
    <h4 className="font-bold text-blue-900 text-lg">Title</h4>
  </div>
  <p className="text-sm text-gray-700 leading-relaxed">Description</p>
</div>
```

### Dashboard Card
```jsx
<div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
      <svg className="w-6 h-6 text-white">{/* icon */}</svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800">Card Title</h3>
  </div>
  {/* Card content */}
</div>
```

### Sidebar Navigation Item
```jsx
<a className="flex items-center p-3 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white rounded-xl transition-all duration-300 group cursor-pointer transform hover:translate-x-1">
  <span className="mr-4 group-hover:scale-110 transition-transform duration-200">
    <svg className="w-5 h-5">{/* icon */}</svg>
  </span>
  <span className="font-medium">Menu Item</span>
</a>
```

### Error Alert
```jsx
<div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start">
  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
  <span>Error message here</span>
</div>
```

### Loading Spinner
```jsx
<svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
</svg>
```

### Divider with Text
```jsx
<div className="mt-8">
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300"></div>
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-4 bg-white text-gray-500 font-medium">Divider Text</span>
    </div>
  </div>
</div>
```

## 🎨 Color Schemes by Role

### Student (Blue)
- Background: `from-blue-50 to-blue-100`
- Border: `border-blue-200`
- Icon: `from-blue-600 to-blue-700`
- Text: `text-blue-900`

### Lab Management (Green)
- Background: `from-green-50 to-green-100`
- Border: `border-green-200`
- Icon: `from-green-600 to-green-700`
- Text: `text-green-900`

### Event Management (Yellow)
- Background: `from-yellow-50 to-yellow-100`
- Border: `border-yellow-200`
- Icon: `from-yellow-600 to-yellow-700`
- Text: `text-yellow-900`

### Staff Management (Purple)
- Background: `from-purple-50 to-purple-100`
- Border: `border-purple-200`
- Icon: `from-purple-600 to-purple-700`
- Text: `text-purple-900`

### Admin (Red)
- Background: `from-red-50 to-red-100`
- Border: `border-red-200`
- Icon: `from-red-600 to-red-700`
- Text: `text-red-900`

## 🔤 Typography Scale

```
text-xs     - 0.75rem (12px)
text-sm     - 0.875rem (14px)
text-base   - 1rem (16px)
text-lg     - 1.125rem (18px)
text-xl     - 1.25rem (20px)
text-2xl    - 1.5rem (24px)
text-3xl    - 1.875rem (30px)
```

## 📏 Spacing Scale

```
p-2   - 0.5rem (8px)
p-3   - 0.75rem (12px)
p-4   - 1rem (16px)
p-5   - 1.25rem (20px)
p-6   - 1.5rem (24px)
p-8   - 2rem (32px)
```

## 🎭 Animation Durations

```
duration-150  - 150ms (Quick)
duration-200  - 200ms (Standard)
duration-300  - 300ms (Smooth)
duration-500  - 500ms (Slow)
```

## 🎯 Common SVG Icons

### User Profile
```jsx
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
```

### Email
```jsx
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
```

### Lock/Password
```jsx
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
</svg>
```

### Settings
```jsx
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
```

## 💡 Pro Tips

1. **Consistent Spacing**: Always use Tailwind's spacing scale (4, 6, 8, etc.)
2. **Hover States**: Add transform and scale for interactive feedback
3. **Focus States**: Always include focus:ring for accessibility
4. **Loading States**: Show spinners for async operations
5. **Color Contrast**: Ensure text is readable on backgrounds
6. **Icons**: Use consistent icon size (w-5 h-5 for most cases)
7. **Shadows**: Use shadow hierarchy (lg → xl → 2xl)
8. **Rounded Corners**: Prefer rounded-xl for modern look
9. **Transitions**: Keep durations between 200-300ms
10. **Active States**: Add active:scale-95 for button press feedback

---

**Quick Reference Version 1.0** - For CampusSync Development Team
