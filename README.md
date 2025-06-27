# Solar Quotation Generator

This project is a modern React application for generating personalized rooftop solar quotations. It features a multi-step form, dynamic pricing logic, PDF generation, and a visually appealing UI using Tailwind CSS.

Main Logics and Features

1. **Welcome Screen**
- Animated background video for a modern look.
- Brief introduction and call-to-action button to start the quotation process.

2. **Multi-Step Quotation Form**
- Built with React functional components and `react-hook-form` for robust form state management and validation.
- **Sections include:**
  - Customer Information (name, address, town, state)
  - Project Details (monthly bill, annual bill, recommended setup size)
  - System Configuration (panel type, number of setups, capacity selection)
  - Structure Size (predefined or custom sizes)
  - Cost Breakdown (structure, wire, other costs, GST)
- **Dynamic logic:**
  - Capacity options and pricing are generated based on the number of setups and user input.
  - Annual bill and recommended kWp are calculated from monthly bill and units consumed.
  - Pricing is dynamically calculated using a pricing data table and can be customized by the user.
  - Custom structure size fields appear when "Custom" is selected.

3. **Pricing Calculation**
- Pricing is based on a predefined table for different kWp setups.
- Supports single and multiple setups, with logic to sum up pricing for combinations.
- GST, subsidy, and final cost are all calculated and displayed in real time.
- Users can override the total cost for custom quotations.

4. **PDF Generation & Preview**
- Uses `jsPDF` and `jspdf-autotable` to generate a multi-page, professional PDF quotation.
- PDF includes:
  - Cover page with background image and customer details
  - Proposal letter and system specifications table
  - Pricing and ROI tables
  - Terms, conditions, and contact details
- All images are converted to base64 for embedding in the PDF.
- Users can preview the quotation and download the PDF.

 5. **UI/UX Enhancements**
- Built with Tailwind CSS for rapid, responsive design.
- Custom colors (e.g., `antiquewhite`, `cyan`) and font (`Playfair Display`) are configured in `tailwind.config.js`.
- All text, including headings and labels, uses the Playfair Display font for a premium look.
- Animated transitions and section reveals using `framer-motion`.
- Button and field styles are consistent and accessible.

6. **Configuration & Tooling**
- **Vite** for fast development and build.
- **Tailwind CSS** with custom theme extensions for color and font.
- **ESLint** for code quality.
- **@tailwindcss/forms** for better form styling.

 File Structure Overview
- `src/components/` — All main UI and logic components (form, preview, PDF, etc.)
- `src/assets/` — Images and video assets for branding and animation
- `tailwind.config.js` — Tailwind theme customizations
- `index.html` — Loads Google Fonts and sets up the app

 How to Run
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open the app in your browser and follow the steps to generate a solar quotation.

---

**This project demonstrates advanced React patterns, dynamic form logic, PDF generation, and custom UI theming for a real-world business use case.**
