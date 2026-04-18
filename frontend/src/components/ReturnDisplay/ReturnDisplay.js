import React from 'react';

function ReturnDisplay({ value, showTrend }) {
  return (
    <span className="return-display">{value}%</span>
  );
}

export default ReturnDisplay;
