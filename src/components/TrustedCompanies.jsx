"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
const COMPANIES = [
  "/assets/twitter.png",
  "/assets/spotify.png",
  "/assets/pinterest.png",
  "/assets/google.png",
  "/assets/social.png",
  "/assets/netflix.png",
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            AWESOME COMMUNITY
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12">
            Trusted by over 200+ Companies
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            <Image
              width={768}
              height={768}
              key={key}
              src={logo}
              alt={logo}
              className="w-16 opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
