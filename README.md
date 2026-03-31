# Crypto Staking Calculator

<div align="center">
  <img src="public/icons8-coins-96.png" alt="Crypto Staking Calculator logo" width="88" height="88" />

  <h3>🕹️ Retro-styled staking math for proof-of-stake investors.</h3>

  <p>
    Estimate daily, weekly, monthly, and yearly staking rewards, compare APR against compounding scenarios,
    and explore a calculator that feels more like a small arcade dashboard than a finance form.
  </p>

  <p>
    <a href="https://andr-drgm.github.io/crypto-staking-calculator"><strong>🚀 Live Demo</strong></a>
    ·
    <a href="#quick-start"><strong>⚡ Quick Start</strong></a>
    ·
    <a href="#features"><strong>✨ Features</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18-111827?style=for-the-badge&logo=react&logoColor=61dafb" alt="React 18" />
    <img src="https://img.shields.io/badge/MUI-5-111827?style=for-the-badge&logo=mui&logoColor=007fff" alt="MUI 5" />
    <img src="https://img.shields.io/badge/CRA-5-111827?style=for-the-badge&logo=createreactapp&logoColor=09d3ac" alt="Create React App 5" />
    <img src="https://img.shields.io/badge/GitHub%20Pages-Deployed-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  </p>
</div>

---

## 🖼️ Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/andr-drgm/assets/main/StakingCalculator.jpg" alt="Crypto Staking Calculator preview" />
</p>

## 🎯 Why This Project Exists

Most staking calculators are functional but forgettable. This one keeps the math practical while giving the interface a stronger personality:

- 💰 Fast reward estimates for token-based staking positions
- 📈 Clear APR vs effective return comparison with compounding
- 🕹️ A retro arcade presentation instead of a plain spreadsheet look
- 🌐 Lightweight React app with simple local development and GitHub Pages deployment

## ✨ Features

| Feature | What it does |
| --- | --- |
| 🧮 Reward calculator | Computes daily, weekly, monthly, and yearly staking rewards from your token amount and APR |
| 🔁 Compounding modes | Switch between no compounding, daily, weekly, monthly, or yearly restaking |
| 📊 Effective APR preview | Shows how compounding changes the effective yearly return |
| 🗂️ Reward table | Breaks down returns across multiple time windows for quick comparison |
| 🐂 Market mood side quests | Adds playful UI states for bull, crab, and bear market vibes |
| 👑 Hold rank system | Turns projected balances and activity into a gamified rank indicator |
| ❤️ Donation section | Lets users support the project with BTC, ETH, or EGLD |

## 🛠️ Built With

- React 18
- Material UI
- Create React App
- GitHub Pages

## ⚡ Quick Start

```bash
npm install
npm start
```

The app will be available at `http://localhost:3000`.

## 📜 Available Scripts

```bash
npm start
npm test
npm run build
npm run deploy
```

## 🗃️ Project Structure

```text
src/
  components/
    Donations.js
    NavigationBar.js
  pages/
    CalculatorV1.js
    RewardsTable.js
  App.js
  App.css
  index.js
public/
  icons8-coins-*.png
  favicon.ico
  manifest.json
```

## ✅ What The Calculator Covers

- 🪙 Starting token balance
- 📉 Nominal staking APR
- 🔁 Compounding cadence
- 💸 Estimated token-denominated rewards
- 🧾 Ending balance after one year

## 🚫 What It Does Not Cover

- 📉 Token price movement
- 🧾 Validator fees
- ⚠️ Slashing risk
- 🏛️ Tax treatment
- 🔒 Lock-up periods
- 🧬 Protocol reward changes

## 🚀 Deployment

This project is configured for GitHub Pages.

```bash
npm run deploy
```

The production build is generated with `npm run build`, then published from the `build/` directory via `gh-pages`.

## 📝 Notes

This tool is intended for rough planning and quick comparison, not financial advice. Real staking results can differ based on validator performance, protocol mechanics, fees, taxes, and market conditions.
