"use client";
import React, { useState, useEffect } from "react";

export default function MainHeroSection() {
  return (
    <div className="bg-gray-600 p-9 max-w-lg rounded-lg shadow-2xl">
      <div className="text-white">
        <h2 className="text-[30px] font-semibold mb-6 font-['Geist_Mono']">
          Kepler22bee Studios
        </h2>

        <p className="text-[16px] leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          labore accusantium incidunt recusandae, eligendi enim nam
          necessitatibus hic nisi pariatur reprehenderit. Voluptatibus voluptas
          iusto delectus dolores eaque quos, velit numquam. Tempore debitis
          deleni s similique quas saepe sint repellat consectetur, fugit
          voluptatibus.
        </p>

        <p className="text-[16px] leading-relaxed text-gray-200 mt-4">
          Animi repellendus autem tenetur, aut rem quia, magni voluptate dolorum
          fugit quam pariatur mollitia cum
        </p>
      </div>
    </div>
  );
};
