import { useState } from 'react';
import RewardsTable from './RewardsTable';

const compoundOptions = [
  { value: '0', label: 'No compounding' },
  { value: '365', label: 'Compound daily' },
  { value: '52', label: 'Compound weekly' },
  { value: '12', label: 'Compound monthly' },
  { value: '1', label: 'Compound yearly' },
];

const moodOptions = {
  bull: {
    label: 'Bull',
    quest:
      'Green candle mode. Restake aggressively, protect your sleep, and avoid buying tops because of pure vibes.',
    perk: 'Side quest buff: +12 conviction, -4 panic refreshes.',
  },
  crab: {
    label: 'Crab',
    quest:
      'Sideways market mode. Farm the yield, stack steady rewards, and let patience do the heavy lifting.',
    perk: 'Side quest buff: +10 discipline, +8 range-trader calm.',
  },
  bear: {
    label: 'Bear',
    quest:
      'Red chart mode. Focus on token accumulation, validator quality, and surviving the timeline without doomscrolling.',
    perk: 'Side quest buff: +15 resilience, +5 dry powder.',
  },
};

const holdRanks = [
  {
    min: 0,
    title: 'Pocket Shrimp',
    summary: 'Tiny bag, clean interface, zero shame.',
  },
  {
    min: 500,
    title: 'Moon Scout',
    summary: 'You are staking with intent now.',
  },
  {
    min: 2500,
    title: 'Node Knight',
    summary: 'This wallet has started taking yield seriously.',
  },
  {
    min: 10000,
    title: 'Validator Wizard',
    summary: 'Compound energy is getting hard to ignore.',
  },
  {
    min: 25000,
    title: 'Mega Whale',
    summary: 'Large bags, calm pulse, powerful delegation aura.',
  },
];

const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const integerFormatter = new Intl.NumberFormat('en-US');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function calculateRewards(principalInput, aprInput, compoundInput) {
  const principal = Math.max(Number(principalInput) || 0, 0);
  const apr = Math.max(Number(aprInput) || 0, 0);
  const compoundTimes = Math.max(Number(compoundInput) || 0, 0);

  const effectiveApr =
    compoundTimes > 0
      ? ((1 + apr / 100 / compoundTimes) ** compoundTimes - 1) * 100
      : apr;

  const yearlyReward = (principal * effectiveApr) / 100;
  const dailyReward = yearlyReward / 365;
  const weeklyReward = dailyReward * 7;
  const monthlyReward = yearlyReward / 12;
  const endingBalance = principal + yearlyReward;

  return {
    principal,
    apr,
    compoundTimes,
    effectiveApr,
    dailyApr: effectiveApr / 365,
    weeklyApr: (effectiveApr / 365) * 7,
    monthlyApr: effectiveApr / 12,
    yearlyReward,
    dailyReward,
    weeklyReward,
    monthlyReward,
    endingBalance,
  };
}

function getHoldRank(score) {
  let currentRank = holdRanks[0];

  holdRanks.forEach((rank) => {
    if (score >= rank.min) {
      currentRank = rank;
    }
  });

  return currentRank;
}

function getMiningMessage(blocksMined) {
  if (blocksMined === 0) {
    return 'Tap the BTC chip to mine pretend blocks and wake up the validator.';
  }

  if (blocksMined < 8) {
    return 'Hash rate warming up. The mempool has noticed you.';
  }

  if (blocksMined < 24) {
    return 'Block flow stable. This arcade rig is actually humming.';
  }

  if (blocksMined < 48) {
    return 'Validators approve. The chain is moving fast today.';
  }

  return 'Legendary uptime. Touch grass after this session.';
}

function getCompoundLabel(value) {
  const activeOption = compoundOptions.find((option) => option.value === value);
  return activeOption ? activeOption.label : 'No compounding';
}

export default function CalculatorV1() {
  const [stakedValue, setStakedValue] = useState('1000');
  const [apr, setApr] = useState('12');
  const [compoundTimes, setCompoundTimes] = useState('0');
  const [marketMood, setMarketMood] = useState('bull');
  const [blocksMined, setBlocksMined] = useState(0);

  const rewards = calculateRewards(stakedValue, apr, compoundTimes);
  const compoundLabel = getCompoundLabel(compoundTimes);
  const holdScore =
    rewards.endingBalance + rewards.yearlyReward * 8 + blocksMined * 25;
  const holdRank = getHoldRank(holdScore);
  const holdMeter = clamp((holdScore / 35000) * 100, 0, 100);
  const miningProgress = clamp((blocksMined / 64) * 100, 0, 100);
  const activeMood = moodOptions[marketMood];

  const rewardRows = [
    {
      label: 'Daily',
      reward: numberFormatter.format(rewards.dailyReward),
      apr: numberFormatter.format(rewards.dailyApr),
    },
    {
      label: 'Weekly',
      reward: numberFormatter.format(rewards.weeklyReward),
      apr: numberFormatter.format(rewards.weeklyApr),
    },
    {
      label: 'Monthly',
      reward: numberFormatter.format(rewards.monthlyReward),
      apr: numberFormatter.format(rewards.monthlyApr),
    },
    {
      label: 'Yearly',
      reward: numberFormatter.format(rewards.yearlyReward),
      apr: numberFormatter.format(rewards.effectiveApr),
    },
  ];

  return (
    <div className="calculator-layout">
      <section className="pixel-panel calculator-panel" aria-labelledby="calculator-title">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Staking Inputs</p>
            <h3 className="panel-title" id="calculator-title">
              Stake your coins. Watch the numbers move.
            </h3>
          </div>
          <span className="panel-badge">Live Sim</span>
        </div>

        <div className="form-grid">
          <label className="field" htmlFor="staked-value">
            <span className="field-label">Staked coins</span>
            <input
              className="pixel-input"
              id="staked-value"
              inputMode="decimal"
              min="0"
              step="any"
              type="number"
              value={stakedValue}
              onChange={(event) => setStakedValue(event.target.value)}
            />
            <span className="field-help">
              Enter the amount of tokens delegated or locked for staking.
            </span>
          </label>

          <label className="field" htmlFor="apr">
            <span className="field-label">APR</span>
            <input
              className="pixel-input"
              id="apr"
              inputMode="decimal"
              min="0"
              step="any"
              type="number"
              value={apr}
              onChange={(event) => setApr(event.target.value)}
            />
            <span className="field-help">
              Use the nominal annual reward rate published by the protocol or
              validator.
            </span>
          </label>

          <label className="field" htmlFor="compound-times">
            <span className="field-label">Compounding cadence</span>
            <select
              className="pixel-select"
              id="compound-times"
              value={compoundTimes}
              onChange={(event) => setCompoundTimes(event.target.value)}
            >
              {compoundOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="field-help">
              Restaking frequency can lift an APR into a higher effective yearly
              return.
            </span>
          </label>
        </div>

        <div className="stat-grid" aria-label="Reward summary">
          <article className="stat-card">
            <span className="stat-label">Effective APR</span>
            <strong>{numberFormatter.format(rewards.effectiveApr)}%</strong>
            <p>{compoundLabel} applied to the base rate.</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">Yearly reward</span>
            <strong>{numberFormatter.format(rewards.yearlyReward)}</strong>
            <p>Estimated token-denominated rewards after one year.</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">Ending balance</span>
            <strong>{numberFormatter.format(rewards.endingBalance)}</strong>
            <p>Starting stake plus modeled yearly rewards.</p>
          </article>
        </div>

        <RewardsTable rows={rewardRows} compoundLabel={compoundLabel} />
      </section>

      <aside className="side-column" id="arcade">
        <section className="pixel-panel mini-panel">
          <div className="panel-header compact">
            <div>
              <p className="panel-kicker">Mini Game 01</p>
              <h3 className="panel-title">Diamond hands meter</h3>
            </div>
          </div>

          <div className="rank-box">
            <span className="rank-label">Wallet rank</span>
            <strong>{holdRank.title}</strong>
            <p>{holdRank.summary}</p>
          </div>

          <div
            className="meter-track"
            aria-label="Diamond hands meter"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(holdMeter)}
          >
            <div className="meter-fill" style={{ width: `${holdMeter}%` }} />
          </div>

          <p className="meter-note">
            Your score reacts to stake size, effective APR, and the blocks you
            mine in the arcade panel below.
          </p>
        </section>

        <section className="pixel-panel mini-panel">
          <div className="panel-header compact">
            <div>
              <p className="panel-kicker">Mini Game 02</p>
              <h3 className="panel-title">Market mood quest</h3>
            </div>
          </div>

          <div className="mood-grid" role="group" aria-label="Choose market mood">
            {Object.entries(moodOptions).map(([key, option]) => (
              <button
                className={`mood-button${marketMood === key ? ' is-active' : ''}`}
                key={key}
                onClick={() => setMarketMood(key)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="quest-box">
            <p>{activeMood.quest}</p>
            <span>{activeMood.perk}</span>
          </div>
        </section>

        <section className="pixel-panel mini-panel">
          <div className="panel-header compact">
            <div>
              <p className="panel-kicker">Mini Game 03</p>
              <h3 className="panel-title">Tap to mine</h3>
            </div>
          </div>

          <button
            className="mine-button"
            onClick={() => setBlocksMined((current) => current + 1)}
            type="button"
          >
            <span className="mine-chip">BTC</span>
            <span className="mine-copy">Mine Block</span>
          </button>

          <p className="mine-score">
            {integerFormatter.format(blocksMined)} blocks mined
          </p>

          <div
            className="meter-track mine-track"
            aria-label="Mining progress"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(miningProgress)}
          >
            <div className="meter-fill mine-fill" style={{ width: `${miningProgress}%` }} />
          </div>

          <p className="meter-note">{getMiningMessage(blocksMined)}</p>

          <button
            className="pixel-button pixel-button-secondary reset-button"
            onClick={() => setBlocksMined(0)}
            type="button"
          >
            Reboot Chain
          </button>
        </section>
      </aside>
    </div>
  );
}
