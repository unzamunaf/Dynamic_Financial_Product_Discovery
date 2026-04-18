import React from 'react';

function RiskBadge({ riskLevel, size }) {
  return (
    <span className={`risk-badge risk-${riskLevel} risk-size-${size}`}>{riskLevel}</span>
  );
}

export default RiskBadge;
