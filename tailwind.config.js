/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      // Phase 4 Design Tokens Integration
      colors: {
        // Primary - Trust, professionalism (Blue)
        primary: {
          DEFAULT: "#3B82F6",    // blue-500
          hover: "#2563EB",      // blue-600
          active: "#1D4ED8",     // blue-700
          light: "#DBEAFE",      // blue-100
          dark: "#1E40AF",       // blue-800
        },
        // Secondary - Growth, success (Emerald)
        secondary: {
          DEFAULT: "#10B981",    // emerald-500
          hover: "#059669",      // emerald-600
          active: "#047857",     // emerald-700
          light: "#D1FAE5",      // emerald-100
        },
        // Semantic colors
        semantic: {
          success: "#10B981",    // emerald-500
          warning: "#F59E0B",    // amber-500
          error: "#EF4444",      // red-500
          info: "#3B82F6",       // blue-500
        },
        // Dark mode specific
        dark: {
          "bg-primary": "#111827",    // gray-900
          "bg-secondary": "#1F2937",  // gray-800
          "bg-tertiary": "#374151",   // gray-700
          "text-primary": "#F9FAFB",  // gray-50
          "text-secondary": "#D1D5DB", // gray-300
          border: "#374151",          // gray-700
        },
      },
      
      // Typography
      fontFamily: {
        base: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        fallback: ["Rubik", "sans-serif"], // Existing project font
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "52px" }],
        "6xl": ["64px", { lineHeight: "72px" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      letterSpacing: {
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
      },
      
      // Spacing (8px grid)
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
      },
      
      // Border Radius
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      
      // Shadows
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        // Dark mode decorative glows
        "purple-glow": "0 0 40px rgba(139, 92, 246, 0.15)",
        "blue-glow": "0 0 40px rgba(59, 130, 246, 0.15)",
      },
      
      // Opacity
      opacity: {
        0: "0",
        25: "0.25",
        50: "0.50",
        75: "0.75",
        100: "1",
        glass: "0.8",
      },
      
      // Transitions
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "500ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.6, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
      
      // Z-index
      zIndex: {
        base: "0",
        dropdown: "10",
        sticky: "100",
        overlay: "500",
        modal: "1000",
        tooltip: "1500",
      },
      
      // Sizing
      minHeight: {
        touch: "44px", // WCAG AA touch target
      },
      minWidth: {
        touch: "44px", // WCAG AA touch target
      },
      
      // Background images (for gradients)
      backgroundImage: {
        "gradient-purple-pink": "linear-gradient(135deg, #F86BDF 0%, #6B6BF8 100%)",
        "gradient-blue-purple": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [],
};
