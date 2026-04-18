FA S T N A T I O N A L U N I V E R S I T Y

BS F i n a n ci a l Tech n ol ogy Progra m

**Dynamic Financial Product Discovery**

**Platform**

A Comprehensive React-Based Web Programming Assignment Course Instructor: Arsalan Khan

Lecturer, Department of Computing

FAST University, Islamabad Campus

Course: Web Programming

**Table of Contents**

1. Assignment Overview and Objectives

1.1 Core Learning Outcomes

1.2 Domain Context: Why FinTech? 

2. Core Concept and Requirements

2.1 Financial Product Data Model

2.2 Mandatory Financial Attributes

3. Required Pages and Features

3.1 Home Page

3.2 Product Listing Page

3.3 Product Detail Page

3.4 User Financial Profile Page

4. Mandatory FinTech Logic Layer

4.1 User Financial Profile System

4.2 Recommendation Engine Logic

4.3 Portfolio Management System

4.4 API Integration and Data Transformation

5. Technical Requirements

5.1 React Components and Architecture

5.2 State Management Requirements

5.3 Routing and Navigation

5.4 Animation and Interaction Requirements

5.5 Styling Constraints

6. Additional Challenges and Extensions

7. GitHub and Deployment Requirements

8. Grading Rubric

9. Viva Question Bank

10. Hidden Twists and Live Modifications

11. Submission Requirements

12. Academic Integrity and AI Policy

13. Appendix: Sample Data Structure

1. Assignment Overview and Objectives **1. Assignment Overview and Objectives**

This assignment requires you to build a Dynamic Financial Product Discovery Platform using React. This is not a generic e-commerce clone. You are dealing with financial instruments, risk assessment, expected returns, and user decision-making. Your system must reflect how real users explore financial products — not just view them. 

Think along the lines of investment apps, digital banking dashboards, or robo-advisors — but simplified and built your own way with genuine financial logic at its core. 

Critical Warning: This Assignment is AI-Resistant Most AI-generated React applications look clean, use hooks correctly, but have zero domain logic. This assignment specifically forces you to implement: Data modeling with financial reasoning

Decision rules based on user profiles

State reasoning that connects user input to output Live adaptability during evaluation

If your logic is shallow, it will collapse during the viva. You must understand every line of code you write. 

**1.1 Core Learning Outcomes**

Upon successful completion of this assignment, you will be able to: 1. Architect React Applications: Design and implement a multi-page React application with proper component hierarchy and state management. 

2. Implement Domain Logic: Translate real-world financial concepts into working code, including risk assessment and recommendation algorithms. 

4

1. Assignment Overview and Objectives 3. Manage Complex State: Use Context API and useState effectively for global state management across multiple components. 

4. Transform External Data: Fetch data from APIs and systematically transform it to fit domain requirements. 

5. Create Dynamic Routing: Implement React Router with dynamic routes for product details. 

6. Build Interactive Forms: Create controlled forms that influence application behavior through state changes. 

7. Apply Conditional Rendering: Show different UI based on user state, profile, and selections. 

8. Implement Filtering Logic: Create multi-criteria filtering systems that combine multiple conditions. 

**1.2 Domain Context: Why FinTech? **

Financial Technology \(FinTech\) represents one of the fastest-growing sectors in software development. Understanding how to model financial products, assess risk, and provide recommendations is a valuable skill that goes far beyond basic web development. 

In this assignment, you will work with:

Savings Accounts — Low risk, predictable returns, high liquidity Mutual Funds — Pooled investments with varying risk profiles Stocks — Equity investments with higher volatility Insurance Plans — Risk protection products with different coverage levels Crypto Assets — Digital assets with high volatility Each product type has distinct characteristics that must be modeled accurately in your application. 

5

2. Core Concept and Requirements **2. Core Concept and Requirements**

**2.1 Financial Product Data Model**

Instead of generic "products" with titles and prices, your system must handle financial instruments with specific attributes. This is where most AI-generated solutions fail — they treat financial products as generic e-commerce items. 

Financial Product Definition

A financial product is an instrument that allows individuals to manage, invest, or protect their money. Each product has quantifiable attributes like expected return, risk level, liquidity, and time horizon that determine its suitability for different investor profiles. 

**2.2 Mandatory Financial Attributes**

Every financial product in your system MUST have the following attributes. Skipping any of these makes your system immediately invalid:

6

2. Core Concept and Requirements Table 1 Required Financial Product Attributes

Attribute

Type

Description

Example Values

id

string/number

Unique identifier

"sav-001", "mf-102" 

name

string

Product name

"High-Yield Savings" 

savings, 

investment, 

category

enum

Product type

insurance, crypto

expectedRetu

number

Annual return percentage

3.5, 8.2, 12.5

rn

riskLevel

enum

Risk classification

low, medium, high

How easily can funds be

liquidity

enum

easy, moderate, locked

accessed

Recommended 

investment

timeHorizon

enum

short, medium, long

duration

minInvestmen

number

Minimum amount required

1000, 50000

t

description

string

Detailed product description

Product details... 

Data Consistency Requirement

Your data must be internally consistent. A "low risk" product cannot have a 25%

expected return. A "locked" liquidity product should not be suitable for "short" time horizons. Your data model must reflect real-world financial logic. 

7

3. Required Pages and Features

**3. Required Pages and Features**

Your application must implement the following pages with specific functionality. Each page serves a distinct purpose in the user journey. 

**3.1 Home Page**

The Home Page serves as the entry point and must provide: Platform Overview: A clear explanation of what the platform does and how it helps users discover financial products. 

Featured Products Section: Display 3-5 featured financial products with key highlights \(name, category, expected return, risk level\). 

Category Navigation: Visual cards or buttons for each product category \(Savings, Investment, Insurance, Crypto\) that filter products when clicked. 

Call-to-Action: Prominent button to create a financial profile for personalized recommendations. 

Quick Stats: Display platform statistics \(total products, categories, etc.\) — these can be static or calculated from your data. 

Implementation Note

The featured products should be dynamically selected based on criteria you define \(e.g., highest return in each category, lowest risk options, etc.\). Do NOT hardcode the same products every time. 

**3.2 Product Listing Page**

The Product Listing Page must display all products with comprehensive filtering capabilities: 8

3. Required Pages and Features

**Required Filters \(ALL must be implemented\):**

1. Risk Level Filter: Multi-select checkbox or dropdown for low, medium, high risk 2. Return Range Filter: Slider or input fields for minimum and maximum expected return percentage

3. Category Filter: Multi-select for product categories 4. Liquidity Filter: Select for easy, moderate, or locked liquidity 5. Time Horizon Filter: Select for short, medium, or long term 6. Minimum Investment Filter: Input field to filter by affordable products **Product Card Display Requirements:**

Product name and category badge

Expected return prominently displayed with % symbol Risk level with color coding \(green for low, yellow for medium, red for high\) Liquidity indicator

Minimum investment amount

"View Details" button linking to product detail page

"Add to Portfolio" button with state feedback 9

3. Required Pages and Features

**Filtering Logic Requirements:**

Filter Combination Logic

// Filters must work together with AND logic

// A product passes if it satisfies ALL active filters passed = 

\(riskFilter.length === 0 || riskFilter.includes\(product.riskLevel\)\) && \(product.expectedReturn >= minReturn && product.expectedReturn <= maxReturn\) 

&& 

\(categoryFilter.length === 0 || categoryFilter.includes\(product.category\)\) 

&& 

\(liquidityFilter === 'all' || product.liquidity === liquidityFilter\) && \(timeHorizonFilter === 'all' || product.timeHorizon === timeHorizonFilter\) 

&& 

\(product.minInvestment <= userBudget\)

**3.3 Product Detail Page \(Dynamic Route\)**

The Product Detail Page must be accessible via a dynamic route \(e.g., /product/:id \) and display:

Complete Product Information: All attributes from the data model Financial Attribute Explanations: Clear explanations of what each metric means Decision Insight Section: A dynamically generated section that explains who this product is suitable for based on its attributes

Risk Visualization: Visual representation of risk level \(progress bar, gauge, or similar\) Return Projection Calculator: Simple calculator where users can input an investment amount and see projected returns over different time periods Comparison Feature: Option to compare with another product \(at least 2 products side by side\)

Add to Portfolio Button: With clear feedback on action 10

3. Required Pages and Features

Decision Insight Generation Logic

// This must be dynamically generated, not hardcoded function generateDecisionInsight\(product\) \{

const insights = \[\]; 



if \(product.riskLevel === 'low'\) \{

insights.push\("Suitable for conservative investors prioritizing capital preservation."\); 

\} else if \(product.riskLevel === 'high'\) \{

insights.push\("Best for aggressive investors comfortable with significant volatility."\); 

\}



if \(product.liquidity === 'locked'\) \{

insights.push\("Requires commitment; early withdrawal may incur penalties."\); 

\}



if \(product.timeHorizon === 'long'\) \{

insights.push\("Optimal when held for 5\+ years to maximize returns."\); 

\}



return insights.join\(" "\); 

\}

**3.4 User Financial Profile Page**

This is the most critical page for demonstrating your understanding of financial logic. The profile form must collect:

11

3. Required Pages and Features

**Required Form Fields:**

Table 2 User Financial Profile Form Fields

Impact on

Field

Type

Options/Validation

Recommendations

Conservative, 

Moderate, 

Filters products by risk

Risk Tolerance

Radio/Select

Aggressive

level

Investment

Short \(1-2 years\), Medium \(3-5

Matches products with

Radio/Select

Horizon

years\), Long \(5\+ years\)

suitable time horizon

Monthly

Filters 

products 

by

Investment

Number Input

Min: 1000, Max: unlimited

minimum investment

Capacity

Liquidity

Need 

quick 

access, 

Some

Matches 

products 

by

Radio/Select

Preference

flexibility, Can lock funds

liquidity

Wealth building, Retirement, 

Select/Multi-

Influences 

category

Investment Goal

Emergency 

fund, 

Specific

select

recommendations

purchase

**Profile Page Additional Requirements:**

Form Validation: All fields required, with appropriate validation messages Profile Summary: Display current profile settings if already saved Recommendation Preview: Show how many products match the current profile Edit Capability: Users must be able to update their profile Persistent Storage: Profile should persist during session \(localStorage bonus\) 12

4. Mandatory FinTech Logic Layer **4. Mandatory FinTech Logic Layer**

This section defines the core logic that separates a genuine FinTech application from a generic product catalog. You MUST implement all four components. 

Evaluation Critical Point

During your viva, you will be asked to modify this logic in real-time. If you cannot explain how your recommendation engine works, how portfolio risk is calculated, or how the filtering logic combines criteria, you will fail regardless of how good your UI looks. 

**4.1 User Financial Profile System**

The profile system must not be cosmetic. It must actively influence what products are shown and recommended. 

**Profile State Structure:**

const \[userProfile, setUserProfile\] = useState\(\{

riskTolerance: '', // 'conservative' | 'moderate' | 'aggressive' 

investmentHorizon: '', // 'short' | 'medium' | 'long' 

monthlyCapacity: 0, // number in PKR

liquidityPreference: '', // 'easy' | 'moderate' | 'locked' 

investmentGoal: '' // string or array

\}\); 

13

4. Mandatory FinTech Logic Layer **Profile-to-Product Mapping Logic:**

Table 3 Risk Tolerance to Product Risk Mapping

User Risk

Allowed Product

Logic Explanation

Tolerance

Risk Levels

Conservative investors should not see medium or high risk Conservative

Low only

products

Moderate investors can handle some risk but avoid high Moderate

Low, Medium

volatility

Low, 

Medium, 

Aggressive investors can consider all options but still need Aggressive

High

to see low-risk for diversification

**4.2 Recommendation Engine Logic**

You must implement a recommendation function that takes the user profile and returns suitable products. This cannot be a hardcoded list. 

Recommendation Algorithm

14

4. Mandatory FinTech Logic Layer function getRecommendations\(products, userProfile\) \{

// Step 1: Filter by risk tolerance

const riskMapping = \{

'conservative': \['low'\], 

'moderate': \['low', 'medium'\], 

'aggressive': \['low', 'medium', 'high'\]

\}; 



const allowedRisk = riskMapping\[userProfile.riskTolerance\] || \['low'\]; 



// Step 2: Filter by investment horizon

const horizonMapping = \{

'short': \['short'\], 

'medium': \['short', 'medium'\], 

'long': \['short', 'medium', 'long'\]

\}; 



const allowedHorizon = horizonMapping\[userProfile.investmentHorizon\] || 

\['short'\]; 



// Step 3: Filter by liquidity preference

const liquidityMapping = \{

'easy': \['easy'\], 

'moderate': \['easy', 'moderate'\], 

'locked': \['easy', 'moderate', 'locked'\]

\}; 



const allowedLiquidity = liquidityMapping\[userProfile.liquidityPreference\] 

|| \['easy'\]; 



// Step 4: Filter by budget

const affordableProducts = products.filter\(p => p.minInvestment <= userProfile.monthlyCapacity

\); 



// Step 5: Apply all filters

const recommended = affordableProducts.filter\(p => allowedRisk.includes\(p.riskLevel\) && 

allowedHorizon.includes\(p.timeHorizon\) && allowedLiquidity.includes\(p.liquidity\)

\); 



// Step 6: Sort by relevance \(higher return first for aggressive, lower risk first for conservative\)

if \(userProfile.riskTolerance === 'conservative'\) \{

15

4. Mandatory FinTech Logic Layer

\); 

\} else \{

return recommended.sort\(\(a, b\) => b.expectedReturn - a.expectedReturn\); 

\}

\}

No Hardcoded Recommendations

You cannot have a hardcoded array of "recommended products." The recommendations must be computed dynamically based on the user's profile. If I change the profile, the recommendations must change accordingly. 

**4.3 Portfolio Management System**

Instead of a "cart," you will implement a "portfolio" system. This reframes the interaction around investment decisions rather than purchases. 

**Portfolio State Structure:**

const \[portfolio, setPortfolio\] = useState\(\{

items: \[\], // Array of product objects with added amount totalInvested: 0, // Sum of all allocated amounts weightedReturn: 0, // Portfolio-level expected return riskDistribution: \{ // Breakdown by risk level low: 0, 

medium: 0, 

high: 0

\}

\}\); 

**Required Portfolio Calculations:**

1. Total Invested: Sum of all allocated amounts across portfolio items 2. Weighted Expected Return: Calculate based on proportion of each investment 16

4. Mandatory FinTech Logic Layer weightedReturn = sum\(\(allocation / total\) \* product.expectedReturn\) for all items

3. Risk Distribution: Percentage of portfolio in each risk category lowRiskPercent = \(sum of low-risk allocations / total\) \* 100

4. Category Distribution: Breakdown by product category 5. Diversification Score: Simple metric indicating portfolio diversity \(bonus\) **Portfolio Page Requirements:**

List all added products with allocated amounts

Display portfolio summary statistics \(total, return, risk breakdown\) Allow removal of products from portfolio

Allow editing of allocated amounts

Show visual representation of risk distribution \(chart or progress bars\) Display warning if portfolio is too concentrated in high-risk products **4.4 API Integration and Data Transformation**

You must use an external API to fetch product data. However, raw API data will not have financial attributes. You must transform it systematically. 

**API Options:**

1. Fake Store API: https://fakestoreapi.com/products 2. JSONPlaceholder: https://jsonplaceholder.typicode.com/posts \(adapt structure\) 3. CoinGecko API: For crypto products \(requires attribution\) 17

4. Mandatory FinTech Logic Layer **Data Transformation Requirements:**

18

4. Mandatory FinTech Logic Layer API Data Transformation

19

4. Mandatory FinTech Logic Layer

// Example transformation from Fake Store API

function transformToFinancialProduct\(apiProduct\) \{

// Map categories to financial categories

const categoryMapping = \{

'electronics': 'investment', 

'jewelery': 'savings', 

"men's clothing": 'insurance', 

"women's clothing": 'crypto' 

\}; 



// Map price to minimum investment \(scale appropriately\) const minInvestment = Math.round\(apiProduct.price \* 1000\); 



// Assign risk based on category \(systematic, not random\) const riskMapping = \{

'investment': 'medium', 

'savings': 'low', 

'insurance': 'low', 

'crypto': 'high' 

\}; 



// Assign return based on risk \(consistent relationship\) const returnMapping = \{

'low': \(\) => 3 \+ Math.random\(\) \* 4, // 3-7%

'medium': \(\) => 7 \+ Math.random\(\) \* 5, // 7-12%

'high': \(\) => 12 \+ Math.random\(\) \* 15 // 12-27%

\}; 



const category = categoryMapping\[apiProduct.category\] || 'investment'; const riskLevel = riskMapping\[category\]; 



return \{

id: apiProduct.id, 

name: apiProduct.title, 

category: category, 

description: apiProduct.description, 

minInvestment: minInvestment, 

riskLevel: riskLevel, 

expectedReturn: parseFloat\(returnMapping\[riskLevel\]\(\).toFixed\(2\)\), liquidity: assignLiquidity\(category, riskLevel\), // Your logic here timeHorizon: assignTimeHorizon\(riskLevel\), // Your logic here image: apiProduct.image

20

5. Technical Requirements

Transformation Must Be Systematic

The transformation logic must produce consistent results. The same API product should always map to the same financial attributes. Use deterministic mappings based on product properties, not random assignment on each render. 

**5. Technical Requirements**

**5.1 React Components and Architecture**

You must demonstrate proper component design with reusable components: 21

5. Technical Requirements

**Required Components:**

Table 4 Required Component Structure

Component

Purpose

Required Props

ProductCard

Display product summary

product, onAddToPortfolio, isInPortfolio

ProductList

Render grid of products

products, filters, onFilterChange

FilterPanel

All filtering controls

filters, onFilterChange, productCount

RiskBadge

Display risk level with color

riskLevel, size

ReturnDisplay

Format return percentage

value, showTrend

PortfolioSummary

Show portfolio statistics

portfolio

PortfolioItem

Single portfolio entry

item, onRemove, onUpdateAmount

ProfileForm

User profile input

profile, onSubmit, onChange

RecommendationList

Show recommended products

recommendations, profile

Navbar

Navigation with portfolio count

portfolioCount, currentRoute

**Props Flow Requirements:**

Props must be passed down the component tree appropriately Use callback props for child-to-parent communication PropTypes or TypeScript interfaces must be defined \(bonus for TypeScript\) Default props should be provided where appropriate **5.2 State Management Requirements**

You must use both local component state and global context: 22

5. Technical Requirements

**useState Requirements:**

Form inputs must use controlled components with useState Filter states must be managed with useState

UI states \(loading, errors\) must use useState

Component-specific data should use local useState **Context API Requirements:**

You must create at least TWO context providers: 1. PortfolioContext: Manages portfolio state globally const PortfolioContext = createContext\(\); 

function PortfolioProvider\(\{ children \}\) \{

const \[portfolio, setPortfolio\] = useState\(\{ items: \[\], ... \}\); const addToPortfolio = \(product, amount\) => \{ ... \}; const removeFromPortfolio = \(productId\) => \{ ... \}; const updateAllocation = \(productId, newAmount\) => \{ ... \}; const calculatePortfolioStats = \(\) => \{ ... \}; return \(

<PortfolioContext.Provider value=\{\{ 

portfolio, addToPortfolio, removeFromPortfolio, updateAllocation, calculatePortfolioStats 

\}\}> 

\{children\}

</PortfolioContext.Provider> 

\); 

\}

2. UserProfileContext: Manages user profile globally 23

5. Technical Requirements

const UserProfileContext = createContext\(\); 

function UserProfileProvider\(\{ children \}\) \{

const \[profile, setProfile\] = useState\(null\); 



const updateProfile = \(newProfile\) => \{ ... \}; const getRecommendations = \(products\) => \{ ... \}; const isProfileComplete = \(\) => \{ ... \}; 



return \(

<UserProfileContext.Provider value=\{\{ 

profile, updateProfile, getRecommendations, isProfileComplete 

\}\}> 

\{children\}

</UserProfileContext.Provider> 

\); 

\}

**useEffect Requirements:**

Fetch data from API on component mount

Update derived state when dependencies change

Handle cleanup for any subscriptions or timers

Implement loading states during API calls

**5.3 Routing and Navigation**

Implement React Router with the following routes: 24

5. Technical Requirements

Table 5 Application Routes

Route

Component

Description

/

Home

Landing page with featured products

/products

ProductListing

All products with filters

/product/:id

ProductDetail

Dynamic route for individual product

/profile

UserProfile

Financial profile form

/portfolio

Portfolio

Portfolio management page

/recommendations

Recommendations

Personalized recommendations based on profile

\*

NotFound

404 page for invalid routes

**Routing Requirements:**

Navigation must be persistent \(Navbar on all pages\) Active route should be visually indicated

Portfolio count should display in Navbar

Dynamic routes must extract ID from URL parameters Invalid product IDs should show appropriate error/404

**5.4 Animation and Interaction Requirements**

Your application must include smooth animations and interactions: **Required Animations:**

1. Product Card Hover: On hover, reveal additional information \(risk level, expected return\) with smooth transition

25

5. Technical Requirements

/\* Minimum CSS for hover reveal \*/

.product-card .details-overlay \{

opacity: 0; 

transition: opacity 0.3s ease; 

\}

.product-card:hover .details-overlay \{

opacity: 1; 

\}

2. Add to Portfolio Feedback: Button must show state change \(e.g., "Add to Portfolio" →

"Added ✓"\) with color transition

3. Page Transitions: At least one smooth page or section transition \(fade, slide, etc.\) 4. Filter Animation: Products should animate when filter results change 5. Loading States: Show loading indicators during API calls **Animation Constraints:**

Use CSS transitions and animations \(no external animation libraries\) Animations should be purposeful, not distracting Respect prefers-reduced-motion \(bonus\)

Keep animation durations reasonable \(200-500ms\) 26

5. Technical Requirements

**5.5 Styling Constraints**

NO UI Libraries Allowed

You must write all CSS yourself. The following are PROHIBITED: Bootstrap, Material-UI, Ant Design, Chakra UI

Tailwind CSS \(unless you write the config from scratch\) Styled-components or CSS-in-JS libraries

Any pre-built component library

You MAY use:

Plain CSS files

CSS Modules

Inline styles for dynamic values

CSS variables for theming

**Styling Requirements:**

Responsive design \(mobile, tablet, desktop\)

Consistent color scheme \(define CSS variables\)

Proper spacing and typography hierarchy

Risk level color coding \(green/yellow/red\)

Accessible contrast ratios

Hover and focus states for all interactive elements 27

6. Additional Challenges and Extensions **6. Additional Challenges and Extensions**

To earn bonus marks and demonstrate advanced understanding, implement any of the following:

Table 6 Bonus Features

Bonus

Feature

Description

Points

TypeScript Migration

Convert entire project to TypeScript with proper interfaces

\+10

LocalStorage

Save portfolio and profile to localStorage

\+5

Persistence

Return Calculator

Compound interest calculator with visual chart

\+8

Product Comparison

Compare up to 3 products side by side

\+7

Search Functionality

Search products by name with debouncing

\+5

Sorting Options

Sort by return, risk, minimum investment

\+5

Diversification Score

Calculate and display portfolio diversification

\+8

Dark Mode

Toggle between light and dark themes

\+5

Unit Tests

Write tests for utility functions and components

\+10

Implement ARIA labels, keyboard navigation, screen reader Accessibility Audit

\+7

support

28

7. GitHub and Deployment Requirements **7. GitHub and Deployment Requirements**

Extra Marks Opportunity

You can earn additional marks by properly using version control and deploying your application:

**GitHub Requirements:**

Create a GitHub repository for your project

Use meaningful commit messages \(not "fix", "update", "asd"\) Minimum 15 commits showing progressive development Include a comprehensive README.md with:

Project description and features

Installation instructions

Screenshots of key pages

Component hierarchy diagram

Explanation of financial logic

**Commit History Requirements:**

You must provide screenshots of your commit history showing:

\[ \]

Initial project setup commit

\[ \]

Component creation commits

\[ \]

Feature implementation commits

\[ \]

Bug fix commits

\[ \]

Refactoring commits

\[ \]

Documentation commits

29

8. Grading Rubric

**Deployment Options \(Extra Marks\):**

Deploy your application to earn additional marks: Table 7 Deployment Platforms

Platform

URL

Difficulty

Bonus

Vercel

vercel.com

Easy

\+5

Netlify

netlify.com

Easy

\+5

GitHub Pages

pages.github.com

Medium

\+5

Firebase Hosting

firebase.google.com

Medium

\+5

Surge.sh

surge.sh

Easy

\+3

Deployment Tip

Most platforms offer direct GitHub integration. Push your code to GitHub, connect the repository to the platform, and it will automatically build and deploy on every push to main branch. 

**8. Grading Rubric**

Your assignment will be evaluated based on the following criteria. Note that UI-only solutions will receive minimal marks regardless of visual quality. 

Table 8 Grading Rubric

Criteria

Description

Points

30

8. Grading Rubric

Core Functionality \(60 points\)

Featured products, category navigation, CTA implemented Home Page

8

correctly

Product Listing

All filters working, proper filter combination logic 10

Product Detail

Dynamic routing, decision insights, return calculator 8

Form with all fields, validation, profile affects User Profile

10

recommendations

Recommendation Engine

Logic correctly maps profile to products, dynamic results 12

Add/remove, calculations \(total, weighted return, risk Portfolio System

12

distribution\)

Technical Implementation \(25 points\)

Component Architecture

Reusable components, proper props flow

7

State Management

useState, Context API implemented correctly

6

API Integration

Data fetching, transformation logic, error handling 5

Routing

All routes working, dynamic routes, navigation

4

Animations

Hover effects, transitions, feedback states

3

Code Quality \(15 points\)

Code Organization

Clear folder structure, file naming conventions 4

Comments 

and

Meaningful comments, JSDoc for functions

4

Documentation

Styling

Responsive design, consistent theme, no UI libraries 4

31

9. Viva Question Bank

Financial Logic Accuracy

Consistent data, realistic values, proper calculations 3

Bonus Points

GitHub Repository

Proper commits, README, screenshots

\+5

Deployment

Live deployed application

\+5

Up to

Bonus Features

From Table 6

\+20

TOTAL POSSIBLE

115

Penalties for UI-Only Solutions

If your submission has a beautiful interface but: No working filter logic: -15 points

Hardcoded recommendations: -12 points

No portfolio calculations: -12 points

Random financial attributes: -10 points

Cannot explain the code: Automatic fail

**9. Viva Question Bank**

During evaluation, you will be asked questions from the following categories. You must be able to answer these based on YOUR implementation, not generic React knowledge. 

**Category A: Component Architecture**

1. Walk me through your component hierarchy. Why did you structure it this way? 

32

9. Viva Question Bank

2. How does data flow from your ProductList to individual ProductCards? 

3. Why did you choose to use Context API for portfolio instead of prop drilling? 

4. Explain how your FilterPanel communicates filter changes to ProductList. 

5. What happens when a user clicks "Add to Portfolio"? Trace the flow. 

**Category B: State Management**

6. Why did you choose local state vs Context for specific pieces of data? 

7. How does your portfolio state update when a product is removed? 

8. What triggers a recalculation of portfolio statistics? 

9. How do you handle form state in the UserProfile component? 

10. What happens to your state when the page refreshes? 

**Category C: Financial Logic**

11. Explain your risk-to-return mapping. Why did you choose these ranges? 

12. How does changing the user's risk tolerance affect recommendations? 

13. Walk me through your weighted return calculation. What does it represent? 

33

9. Viva Question Bank

14. How do you ensure data consistency \(e.g., low risk products don't have 50% returns\)? 

15. Explain the decision insight generation. How is it dynamic? 

16. What happens if a user with conservative profile tries to add a high-risk product? 

**Category D: Filtering and Recommendations**

17. How do your filters combine? AND or OR logic? 

18. What happens when no products match the selected filters? 

19. How does the monthly capacity filter work with minimum investment? 

20. Explain the sorting logic for recommendations. Why this order? 

**Category E: API and Data Transformation**

21. Which API did you use? Why? 

22. Explain your data transformation function line by line. 

23. How do you ensure the same API product always gets the same financial attributes? 

24. What happens if the API fails or returns no data? 

25. How would you modify your transformation if the API structure changed? 

34

9. Viva Question Bank

**Category F: Routing and Navigation**

26. How do you extract the product ID from the URL in ProductDetail? 

27. What happens if a user visits /product/99999 \(non-existent ID\)? 

28. How do you highlight the active route in the Navbar? 

29. Can a user directly access /recommendations without a profile? 

**Category G: Live Modifications \(Be Prepared\)** 30. Change the risk mapping so aggressive users see ONLY high-risk products. 

31. Add a new filter for products with minimum investment below 50,000. 

32. Modify the recommendation to sort by lowest risk first for all users. 

33. Change the liquidity mapping so 'moderate' preference excludes 'locked' products. 

34. Add a warning when portfolio has more than 70% high-risk products. 

35





10. Hidden Twists and Live Modifications

**10. Hidden Twists and Live Modifications**

**Hidden Twist \#1: API Structure Change**

During evaluation, I may tell you that the API has changed its response structure. For example:

// OLD structure

\{

id: 1, 

title: "Product Name", 

price: 100

\}

// NEW structure

\{

productId: "PROD-001", 

productName: "Product Name", 

pricing: \{ amount: 100, currency: "USD" \}

\}

You must be able to update your transformation logic quickly. 

36





10. Hidden Twists and Live Modifications

**Hidden Twist \#2: New Product Category**

I may ask you to add a new category "bonds" with specific rules: Bonds are always low to medium risk

Returns range from 5-9%

Liquidity is always moderate

Time horizon is medium to long

You must update your data model, transformation, and filters. 

**Hidden Twist \#3: Modified Recommendation Logic** I may change the recommendation rules:

Conservative users: Only low risk, sorted by highest liquidity first Moderate users: Low and medium, sorted by best risk-return ratio Aggressive users: All risks, sorted by highest return **Hidden Twist \#4: Portfolio Constraint**

Add a constraint: Users cannot allocate more than 50% of their monthly capacity to a single product. Implement validation and error messaging. 

37

11. Submission Requirements

**11. Submission Requirements**

You must submit the following items. Missing any item will result in penalties. 

**Required Submissions:**

1. Source Code: Complete React application code Organized folder structure

All components, contexts, and utilities

CSS files

package.json with all dependencies

2. Explanation Document \(PDF\): Must include:

Component hierarchy diagram \(hand-drawn or digital\) State flow explanation with diagrams

Context usage justification

Financial logic explanation \(critical section\)

API transformation approach

Challenges faced and solutions

Screenshots of all pages

3. GitHub Repository Link: With commit history

4. Deployed Application Link: \(optional but recommended for bonus\) 5. Commit History Screenshots: Showing at least 15 meaningful commits 38

11. Submission Requirements

**Explanation Document Structure:**

1. Introduction

- Project overview

- Features implemented

2. Component Architecture

- Hierarchy diagram

- Component descriptions

- Props flow explanation

3. State Management

- Local state usage

- Context API implementation

- State flow diagrams

4. Financial Logic

- Data model explanation

- Risk-return mapping

- Recommendation algorithm

- Portfolio calculations

5. API Integration

- API choice and why

- Transformation logic

- Error handling

6. Challenges and Solutions

- Technical challenges

- Logic challenges

- How you solved them

7. Screenshots

- All pages with annotations

8. Conclusion

- What you learned

- Future improvements

39

12. Academic Integrity and AI Policy Mismatch Penalty

If there is a significant mismatch between your explanation document and your actual code, you will receive a 20-point penalty. Your document must accurately reflect what your code does. 

**12. Academic Integrity and AI Policy**

AI-Assisted Coding Policy

You MAY use AI tools \(ChatGPT, Copilot, etc.\) for: Understanding React concepts

Debugging specific errors

Learning CSS techniques

Getting unstuck on syntax

You MAY NOT use AI tools for:

Generating your entire application

Writing your financial logic without understanding it Creating your explanation document

Copy-pasting code you cannot explain

**Academic Integrity Requirements:**

All code must be written or adapted by you

You must understand every line of code in your submission Copying code from classmates is plagiarism and will result in zero marks 40

13. Appendix: Sample Data Structure Using AI-generated code without understanding it is academic dishonesty **How I Detect AI-Only Submissions:**

1. Generic Structure: AI often generates similar component structures 2. Missing Domain Logic: AI struggles with financial reasoning 3. Inconsistent Data: Random attributes without logical relationships 4. Viva Performance: Cannot answer questions about "their" code 5. Explanation Quality: Document doesn't match code complexity Consequences of Academic Dishonesty

Any submission found to be plagiarized or AI-generated without understanding will receive:

Zero marks on the assignment

Report to academic integrity committee

Potential course failure

**13. Appendix: Sample Data Structure**

Here is a sample of what your transformed data should look like: 41

13. Appendix: Sample Data Structure const sampleProducts = \[

\{

id: 1, 

name: "Premium Savings Account", 

category: "savings", 

description: "High-yield savings with competitive interest rates...", expectedReturn: 5.5, 

riskLevel: "low", 

liquidity: "easy", 

timeHorizon: "short", 

minInvestment: 10000, 

image: "https://example.com/savings.jpg" 

\}, 

\{

id: 2, 

name: "Equity Growth Fund", 

category: "investment", 

description: "Diversified equity fund for long-term growth...", expectedReturn: 12.8, 

riskLevel: "medium", 

liquidity: "moderate", 

timeHorizon: "long", 

minInvestment: 50000, 

image: "https://example.com/fund.jpg" 

\}, 

\{

id: 3, 

name: "Bitcoin Investment", 

category: "crypto", 

description: "Direct cryptocurrency investment...", expectedReturn: 25.0, 

riskLevel: "high", 

liquidity: "easy", 

timeHorizon: "long", 

minInvestment: 5000, 

image: "https://example.com/crypto.jpg" 

\}, 

\{

id: 4, 

name: "Term Life Insurance", 

category: "insurance", 

description: "Comprehensive life coverage with investment component...", expectedReturn: 6.5, 

riskLevel: "low", 

liquidity: "locked", 

timeHorizon: "long", 

42

13. Appendix: Sample Data Structure Final Words

This assignment is designed to push you beyond copy-paste development. The financial domain adds complexity that requires genuine understanding. Embrace the challenge, build something you're proud of, and most importantly — understand every line of code you write. 

Good luck\! 

— Arsalan Khan

43



