import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Footer } from "./components";
import React from "react";
// import TopMembers from "./components/TopMembers";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import { SignUp, LogIn, FPassword } from "./components/Login";

import Home from "./containers/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fpassword" element={<FPassword />} />
          <Route path="*/" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};
// <TopMembers />
// <SignUp />
//

export default App;
// <Works />

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes >
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/tech" element={<Tech />} />
//         <Route path="/works" element={<Works />} />
//         <Route path="/feedbacks" element={<Feedbacks />} />
//         <Route path="/contact" element={<Contact />} />

//       </Routes>
//       <StarsCanvas className="relative z-0" />
//     </BrowserRouter>
//   );
// };

// export default App;
