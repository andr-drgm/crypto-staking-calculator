const wallets = [
  {
    name: 'Bitcoin',
    address: '3E1kx7M9gXa8aKFp8MsvRrzJvDJvUhKz3g',
  },
  {
    name: 'Ethereum',
    address: '0xd3205c2804ab9CAAF18e792505BB52457ba0A2BA',
  },
  {
    name: 'EGLD',
    address: 'erd1n042lh7fwzl6uqljrytkwmke04tufk68hewcwp8qac5uy3p3ralst435x7',
  },
];

export default function Donations() {
  return (
    <section className="section donation-section" id="support">
      <div className="pixel-panel donation-panel">
        <div className="section-heading compact">
          <p className="eyebrow">Support the Arcade</p>
          <h2>If this tool saves you time, tip the project.</h2>
          <p>
            Donations help keep the calculator online and give the site room to
            grow beyond a basic staking spreadsheet.
          </p>
        </div>

        <div className="wallet-grid">
          {wallets.map((wallet) => (
            <article className="wallet-card" key={wallet.name}>
              <span className="wallet-name">{wallet.name}</span>
              <code>{wallet.address}</code>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
