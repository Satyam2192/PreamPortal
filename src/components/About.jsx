import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// <header>
// <nav>
//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/about">About Us</Link></li>
//     <li><Link to="/contact">Contact Us</Link></li>
//   </ul>
// </nav>
// </header>

const HomePage = () => {
  return (
    <div className="homepage">



    <main class="bg-gray-100">
    <section class="hero bg-white text-center p-10">
      <h1 class="text-4xl font-bold mb-4">Welcome to Matrimony Website</h1>
      <p class="text-xl mb-4">Find your perfect match here</p>
      <a href="/register" class="btn btn-primary">Register Now</a>
    </section>
    <section class="features flex justify-around p-10">
      <div class="feature text-center">
        <h2 class="text-2xl font-bold mb-4">Search Profiles</h2>
        <p class="text-lg">Search for your ideal partner based on your preferences</p>
      </div>
      <div class="feature text-center">
        <h2 class="text-2xl font-bold mb-4">Connect with Matches</h2>
        <p class="text-lg">Connect with your matches and start your journey together</p>
      </div>
      <div class="feature text-center">
        <h2 class="text-2xl font-bold mb-4">Verified Profiles</h2>
        <p class="text-lg">All profiles are verified to ensure authenticity</p>
      </div>
    </section>
  </main>
  
      <Footer />
    </div>
    
  );
};

export default HomePage;