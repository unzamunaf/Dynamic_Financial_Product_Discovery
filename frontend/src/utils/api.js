// Utility for API calls
const API_BASE = 'http://localhost:5000/api';

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  return res.json();
}

export async function fetchProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
}

export async function updateProfile(profile) {
  const res = await fetch(`${API_BASE}/profile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  });
  return res.json();
}

export async function fetchPortfolio() {
  const res = await fetch(`${API_BASE}/portfolio`);
  return res.json();
}

export async function updatePortfolio(portfolio) {
  const res = await fetch(`${API_BASE}/portfolio`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(portfolio)
  });
  return res.json();
}
