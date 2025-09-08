// Replace with your Google Apps Script deployment URL
const API_URL = "YOUR_SCRIPT_URL";

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
