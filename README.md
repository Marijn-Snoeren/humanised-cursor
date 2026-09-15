# 🖱️ The Humanised Cursor (Case Study 05)

An experimental Next.js project exploring the ethical boundary between user assistance and digital manipulation by "humanising" the cursor during a subscription cancellation flow.

## 📌 Concept
Usually, humanised tech (like chatbots) exists *separately* from the user. The cursor is different—it is the user's digital proxy; their hand inside the screen. 

This project asks: **At what point does a humanised cursor stop feeling like a fun, alive interface and start feeling like a manipulative entity taking away the user's agency?**

To test this, I built a fictional subscription cancellation form and am iterating through different levels of cursor "humanisation" (dark patterns) to measure user reactions.

## 🧪 The Proof of Concepts (POCs)
Instead of building one final product, this repository tracks 4 distinct iterations (POCs) to test different variables of manipulation:

*   **POC 1: Invisible Friction (Currently Active)** 
    Testing physical resistance. The cursor looks normal but feels "sticky" and moves slower when hovering near the cancel button.
*   **POC 2: Visual Emotion (Planned)** 
    Testing emotional guilt. The cursor changes into a character face that looks sad or cries when moving toward the cancel button.
*   **POC 3: Hesitation (Planned)** 
    Testing proactive anxiety. The cursor visibly shakes or hesitates before allowing the user to click the cancel button.
*   **POC 4: Autonomous Rebellion (Planned)** 
    Testing loss of agency. The cursor actively fights the user, pulling magnetically toward the "Keep Subscription" button.

## 🛠 Tech Stack & Architecture
*   **Framework:** Next.js (App Router)
*   **Library:** React
*   **Styling:** Tailwind CSS / CSS Modules
*   **Animation/Physics:** Framer Motion (or native CSS/JS physics)

**Technical Note on the Cursor Component:**
Because Next.js uses Server-Side Rendering (SSR) by default, the custom cursor logic (`window` event listeners, mouse coordinate tracking) is isolated within a strict `"use client"` boundary to prevent hydration errors and keep the rest of the application performant.

## 🚀 Getting Started

To run this prototype locally on your machine:

1. **Clone the repository:**
   git clone https://github.com/Marijn-Snoeren/humanised-cursor.git

2. **Navigate into the project directory:**
   cd humanised-cursor

3. **Install dependencies:**
   npm install

4. **Run the development server:**
   npm run dev

5. **Open your browser:**
   Navigate to http://localhost:3000 to view the A/B testing environment.

## 📂 Project Structure (Key Files)
*   `app/page.tsx` - The main routing page for the A/B test (Variant A vs. Variant B).
*   `components/Cursor.tsx` - The core client-side component handling the custom cursor physics and event listeners.
*   `components/CancelForm.tsx` - The fictional subscription cancellation UI.

## 🎯 Quality Criteria (LO3)
As part of the technical realization for this semester, this codebase aims to meet the following criteria:
1. **Clean Version Control:** Meaningful commit messages and clear versioning representing the iterative POC cycles.
2. **Component Boundaries:** Proper separation of Server and Client components in the Next.js App Router ecosystem.
3. **Performance:** Smooth cursor rendering (aiming for 60fps) without severe input lag, despite custom JS overrides.