"use client";

import { Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <div className=" p-10 m-10 bg-slate-100 flex flex-col gap-6 justify-center items-center ">
        <p>
          Click on button to check different variantion of respective component
        </p>
        <div className="flex flex-row gap-5 justify-center items-center text-white ">
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
