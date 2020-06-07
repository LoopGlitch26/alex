import { WIT_TOKEN } from '../../config/constants';

async function message(text) {
  config = {
    headers: { 
      'Authorization': `Bearer ${WIT_TOKEN}`,
    },
  };

  const q = encodeURI(text);
  try {
    return fetch(`https://api.wit.ai/message?q=${q}`, config)
  } catch(error) {
    console.warn('api call failed with error: ', error)
  }
}

export { message };
