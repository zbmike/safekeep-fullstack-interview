export async function getParticipants() {
  try {
    const res = await fetch("http://localhost:8000/api/participants");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createParticipant(participantObj) {
  try {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(participantObj),
      };
      const res = await fetch('http://localhost:8000/api/participants', requestOptions);
      const { data } = await res.json();
      return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteParticipant(id) {
  try {
    const requestOptions = {
        method: "DELETE"
      };
      const res = await fetch(`http://localhost:8000/api/participants/${id}`, requestOptions);
      const data = await res.json();
      return data;
  } catch (error) {
    console.log(error);
  }
}

