import React from 'react';
import { Layout } from "@/components/Layout";

export default function Mission() {
  return (
    <Layout>
      <section className="py-6 md:py-8 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Our Mission
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 font-medium">
                To eliminate medication confusion on a global scale.
              </p>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We transform complex prescriptions into AI-powered, 3D visual experiences that patients actually understand. By removing language and literacy barriers, we ensure no one has to guess how to take their medicine safely. We are building the universal "understanding layer" for healthcare restoring dignity to patients and peace of mind to caregivers.
              </p>
            </div>

            {/* Right iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[220px]">
                <img
                  src="/mission-image/capsule.png"
                  alt="Medication reminder app interface showing Tylenol 500 with take dose and skip dose options"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}