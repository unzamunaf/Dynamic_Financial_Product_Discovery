import React from 'react';

function ProfileForm({ profile, onSubmit, onChange, validation }) {
  return (
    <form className="profile-form" onSubmit={onSubmit} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1em', margin: '1em 0', maxWidth: 400 }}>
      <h3>Edit Profile</h3>
      <div>
        <label>Risk Tolerance:</label><br />
        <select name="riskTolerance" value={profile.riskTolerance} onChange={onChange}>
          <option value="">Select</option>
          <option value="conservative">Conservative</option>
          <option value="moderate">Moderate</option>
          <option value="aggressive">Aggressive</option>
        </select>
        {validation?.riskTolerance && <span style={{ color: 'red' }}>{validation.riskTolerance}</span>}
      </div>
      <div>
        <label>Investment Horizon:</label><br />
        <select name="investmentHorizon" value={profile.investmentHorizon} onChange={onChange}>
          <option value="">Select</option>
          <option value="short">Short (1-2 years)</option>
          <option value="medium">Medium (3-5 years)</option>
          <option value="long">Long (5+ years)</option>
        </select>
        {validation?.investmentHorizon && <span style={{ color: 'red' }}>{validation.investmentHorizon}</span>}
      </div>
      <div>
        <label>Monthly Capacity (PKR):</label><br />
        <input type="number" name="monthlyCapacity" min="1000" value={profile.monthlyCapacity} onChange={onChange} />
        {validation?.monthlyCapacity && <span style={{ color: 'red' }}>{validation.monthlyCapacity}</span>}
      </div>
      <div>
        <label>Liquidity Preference:</label><br />
        <select name="liquidityPreference" value={profile.liquidityPreference} onChange={onChange}>
          <option value="">Select</option>
          <option value="easy">Need quick access</option>
          <option value="moderate">Some flexibility</option>
          <option value="locked">Can lock funds</option>
        </select>
        {validation?.liquidityPreference && <span style={{ color: 'red' }}>{validation.liquidityPreference}</span>}
      </div>
      <div>
        <label>Investment Goal:</label><br />
        <input type="text" name="investmentGoal" value={profile.investmentGoal} onChange={onChange} />
        {validation?.investmentGoal && <span style={{ color: 'red' }}>{validation.investmentGoal}</span>}
      </div>
      <button type="submit" style={{ marginTop: '1em' }}>Save Profile</button>
    </form>
  );
}

export default ProfileForm;
