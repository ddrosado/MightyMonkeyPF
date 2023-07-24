// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'http://localhost:3000';


// export const getUsers = createAsyncThunk(
//     'sports/getSports',
//     async () => {
//       try {
//         const response = await axios.get(`${url}/api/users`);
//         return response.data;
//       } catch (error) {
//         throw error.response.data.msg;
//       }
//     }
//   );