// Replace with your Google Apps Script deployment URL
const API_URL = "https://script.google.com/macros/s/AKfycbyD9IBygITQ2qqOlU3dSunPoykyM6Sb6AegO61p67_iHCmRQmeGcHb86VjNCEKjIE4/exec";

// Save household
async function saveHousehold(blockName, address, contact) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "household",
      blockName,
      address,
      mainContact: contact
    })
  });
  return response.json();
}

// Save member
async function saveMember(householdId, memberData) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "member",
      householdId,
      ...memberData
    })
  });
  return response.json();
}

// Save child
async function saveChild(householdId, childData) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "child",
      householdId,
      ...childData
    })
  });
  return response.json();
}

// Fetch all records
async function getAllRecords() {
  const response = await fetch(API_URL);
  return response.json();
}

// Edit record
async function editRecord(type, id, updatedData) {
  const response = await fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify({ type, id, ...updatedData })
  });
  return response.json();
}

// Delete record
async function removeRecord(type, id) {
  const response = await fetch(API_URL, {
    method: "DELETE",
    body: JSON.stringify({ type, id })
  });
  return response.json();
}
