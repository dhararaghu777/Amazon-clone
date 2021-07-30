import axios from 'axios';

const instance=axios.create({
  baseURL:'https://us-central1-clone-2534d.cloudfunctions.net/api'
})

export default instance;

// http://localhost:5001/clone-2534d/us-central1/api