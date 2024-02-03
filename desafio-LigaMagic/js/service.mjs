const apiUrl = 'http://localhost:3000/cards';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export default fetchData;