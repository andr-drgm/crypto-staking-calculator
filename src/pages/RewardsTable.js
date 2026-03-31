export default function RewardsTable({ rows, compoundLabel }) {
  return (
    <section className="reward-board" aria-labelledby="reward-board-title">
      <div className="reward-board-header">
        <div>
          <p className="panel-kicker">Reward Breakdown</p>
          <h4 className="reward-board-title" id="reward-board-title">
            How the stash grows over time
          </h4>
        </div>
        <span className="reward-chip">{compoundLabel}</span>
      </div>

      <table className="reward-table">
        <caption className="sr-only">
          Estimated staking rewards for daily, weekly, monthly, and yearly
          windows
        </caption>
        <thead>
          <tr>
            <th scope="col">Window</th>
            <th scope="col">Rewards</th>
            <th scope="col">APR Slice</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.reward}</td>
              <td>{row.apr}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="reward-footnote">
        Estimates do not account for token price, validator fees, taxes,
        lock-up periods, or slashing.
      </p>
    </section>
  );
}
