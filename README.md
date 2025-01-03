# Header Bidding Implementation with Prebid.js

This project implements a header bidding solution using Prebid.js to optimize ad revenue for publishers. The setup integrates multiple SSPs (Supply-Side Platforms) and supports real-time bidding (RTB) with OpenRTB protocol compliance.

## Features
- **Prebid.js Integration**: Implements header bidding with customizable ad units.
- **Multiple SSP Support**: Includes configuration for at least two SSPs to increase competition.
- **Responsive Design**: Ad units adapt to different device types (mobile and desktop).
- **Error Handling**: Logs errors for bid timeouts, invalid responses, or SSP failures.
- **Fallback Ads**: Displays fallback ads if no bids are received.
- **Lazy Loading**: Optimizes performance by loading ads only when they are in the viewport.

---

## Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/) for dependency management.
- **Prebid.js**: Download or build a custom Prebid.js file with required adapters.
- **Google Ad Manager (Optional)**: Use GAM for ad slot management and serving.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/toyness/header-bidding-project
   cd header-bidding-project
