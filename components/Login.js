// 'use client';
// import {signIn} from "next-auth/react";
// import Image from "next/image";
// import {useState} from "react";

// export default function LoginPage() {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [loginInProgress, setLoginInProgress] = useState(false);


//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = async (ev) => {
//       ev.preventDefault();
  
//       const result = await signIn('credentials', {
//         redirect: false,
//         email,
//         password,
//       });
  
//       if (result.error) {
//         console.error('Authentication failed:', result.error);
//       } else {
//         // Redirect to the desired page after successful login
//         window.location.href = '/products';
//       }
//     };

  
//   // async function handleFormSubmit(ev) {
//   //   ev.preventDefault();
//   //   setLoginInProgress(true);

//   //   await signIn('credentials', {email, password, callbackUrl: '/'});

//   //   setLoginInProgress(false);
//   // }
//   return (
//     <section className="mt-8">
//       <h1 className="text-center text-primary text-4xl mb-4">
//         Login
//       </h1>
//       <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="email" value={email}
//               //  disabled={loginInProgress}
//                onChange={ev => setEmail(ev.target.value)} />
//         <input type="password" name="password" placeholder="password" value={password}
//               //  disabled={loginInProgress}
//                onChange={ev => setPassword(ev.target.value)}/>
//         <button  type="submit">Login</button>
//         <div className="my-4 text-center text-gray-500">
//           or login with provider
//         </div>
//         <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
//                 className="flex gap-4 justify-center">
//           {/* <Image src={'/google.png'} alt={''} width={24} height={24} /> */}
//           Login with google
//         </button>
//       </form>
//     </section>
//   );
// }

// pages/login.js
// import { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await signIn('credentials', {
//         redirect: false,
//         email,
//         password,
//       });

//       if (result.error) {
//         console.error('Authentication failed:', result.error);
//       } else {
//         // Redirect to the desired page after successful login
//         router.push('/');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         {loading ? 'Logging in...' : <button type="submit">Login</button>}
//       </form>
//     </div>
//   );
// }
