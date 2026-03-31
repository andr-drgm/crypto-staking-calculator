import './App.css';
import Donations from './components/Donations';
import NavigationBar from './components/NavigationBar';
import CalculatorV1 from './pages/CalculatorV1';

const highlightCards = [
  {
    title: 'APR to APY without spreadsheet pain',
    body:
      'Estimate daily, weekly, monthly, and yearly staking rewards instantly, then compare the effect of different compounding cadences.',
  },
  {
    title: 'Made for proof-of-stake coins',
    body:
      'Use the calculator for Ethereum, Solana, Cardano, Cosmos, Polkadot, MultiversX, and other validator-based crypto assets.',
  },
  {
    title: 'Arcade energy, useful numbers',
    body:
      'Pixel-art visuals, retro motion, and crypto side quests make the tool more memorable without getting in the way of the math.',
  },
];

const playbookCards = [
  {
    title: 'Check reward timing',
    body:
      'Daily and weekly estimates help you understand whether a staking position is producing enough yield to matter for your strategy.',
  },
  {
    title: 'Compare compounding modes',
    body:
      'A crypto staking APR can feel very different once rewards are restaked. This page shows the jump from simple APR to an effective yearly rate.',
  },
  {
    title: 'Plan before you delegate',
    body:
      'The calculator is best used as a fast planning tool before moving funds into a validator, pool, or native staking dashboard.',
  },
];

const faqItems = [
  {
    question: 'What does this crypto staking calculator do?',
    answer:
      'It estimates staking rewards from a starting balance, an APR, and an optional compounding schedule so you can compare daily, weekly, monthly, and yearly outcomes.',
  },
  {
    question: 'What is the difference between APR and APY here?',
    answer:
      'APR is the base annual rate. If you restake rewards during the year, the effective return rises and behaves more like APY. This calculator shows that difference when compounding is enabled.',
  },
  {
    question: 'Can I use this for any proof-of-stake coin?',
    answer:
      'Yes. The math works for any staking setup where you know the token amount and the annual reward rate. Token price swings, validator fees, and slashing risks are not included.',
  },
  {
    question: 'Does this tool predict future crypto prices?',
    answer:
      'No. It only models token-denominated staking rewards. Market price, validator uptime, taxes, lockups, and protocol changes can alter real results.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <div className="scanlines" aria-hidden="true" />
      <NavigationBar />

      <main>
        <section className="section hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Retro Staking Arcade</p>
            <h1>Crypto Staking Calculator with more personality.</h1>
            <p className="hero-text">
              Estimate crypto staking rewards, preview compounding, and turn a
              plain yield tool into a small retro dashboard built for HODLers.
            </p>

            <div className="hero-actions">
              <a className="pixel-button" href="#calculator">
                Launch Calculator
              </a>
              <a
                className="pixel-button pixel-button-secondary"
                href="#faq"
              >
                Learn the Basics
              </a>
            </div>

            <div className="hero-stat-list" aria-label="Feature highlights">
              <span className="hero-stat">Daily reward estimates</span>
              <span className="hero-stat">APR plus compounding preview</span>
              <span className="hero-stat">Crypto meme side quests</span>
            </div>

            <div className="hero-ticker" aria-hidden="true">
              <div className="hero-ticker-track">
                gm . stake . compound . wagmi . validator vibes . not financial
                advice . touch grass after checking APR . gm . stake . compound
                . wagmi . validator vibes . not financial advice . touch grass
                after checking APR .
              </div>
            </div>
          </div>

          <div className="hero-scene" aria-hidden="true">
            <div className="pixel-sun" />
            <div className="pixel-cloud pixel-cloud-left" />
            <div className="pixel-cloud pixel-cloud-right" />
            <div className="pixel-mountain pixel-mountain-back" />
            <div className="pixel-mountain pixel-mountain-front" />

            <div className="pixel-chain">
              <span>APY</span>
              <span>NODE</span>
              <span>HODL</span>
              <span>GM</span>
            </div>

            <div className="pixel-coin-stack">
              <span className="coin coin-one" />
              <span className="coin coin-two" />
              <span className="coin coin-three" />
            </div>

            <div className="pixel-cityline">
              <span className="tower tower-one" />
              <span className="tower tower-two" />
              <span className="tower tower-three" />
              <span className="tower tower-four" />
              <span className="tower tower-five" />
            </div>
          </div>
        </section>

        <section className="section feature-section" aria-label="Highlights">
          {highlightCards.map((card) => (
            <article className="pixel-panel feature-card" key={card.title}>
              <p className="panel-kicker">Feature</p>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </section>

        <section className="section calculator-section" id="calculator">
          <div className="section-heading">
            <p className="eyebrow">Yield Console</p>
            <h2>Run the staking math, then play the crypto side quests.</h2>
            <p>
              Enter your staked balance, staking APR, and compounding schedule
              to see how your crypto rewards stack up over time.
            </p>
          </div>

          <CalculatorV1 />
        </section>

        <section className="section playbook-section" id="guide">
          <div className="section-heading">
            <p className="eyebrow">Why It Helps</p>
            <h2>Simple enough for quick checks, detailed enough for better planning.</h2>
            <p>
              This staking calculator focuses on the core numbers most users
              want before they delegate funds: reward speed, yearly growth, and
              the real impact of restaking.
            </p>
          </div>

          <div className="playbook-grid">
            {playbookCards.map((card) => (
              <article className="pixel-panel playbook-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about staking rewards.</h2>
          </div>

          <div className="faq-grid">
            {faqItems.map((item) => (
              <details className="pixel-panel faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <Donations />
      </main>

      <footer className="site-footer">
        Crypto Staking Calculator is a lightweight reward planner for
        proof-of-stake investors. Use it for estimates only.
      </footer>
    </div>
  );
}

export default App;
