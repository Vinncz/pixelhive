// import { NextApiRequest, NextApiResponse } from 'next';
// import cookie from 'cookie';

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//    const cookies = cookie.parse(req.headers.cookie || '');
//    console.log("cookies: ", req);
//    const response = await fetch('http://localhost:8000/api/auth/me', {
//       method: 'POST',
//       headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json"
//       },
//       redirect: 'follow',
//       cache: 'force-cache',
//       credentials: 'include'
//    });
//    let data = await response.json();
//    console.log(data);
// }

// ....................................................................


// let res = async function () {
//    let cookie = document.cookie;
//    console.log("cookie", cookie);
//    const response = await fetch('http://localhost:8000/api/auth/me', {
//       method: 'POST',
//       headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json"
//       },
//       redirect: 'follow',
//       cache: 'force-cache',
//       credentials: 'include'
//    });
//    let data = await response.json();
//    console.log(data);
// }

export default async function fetchUserData() {
   const response = await fetch('http://localhost:8000/api/user/merchant', {
      method: 'POST',
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
      },
      redirect: 'follow',
      cache: 'force-cache',
      credentials: 'include'
   });
   let data = await response.json();
   return data;
}