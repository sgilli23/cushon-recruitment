async function getData() {
  const response = fetch("../../../isa.json")
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return response;
}

export default async function getIsas() {
  const data = await getData();
  return data;
}

export { getIsas };
