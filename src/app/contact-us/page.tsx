"use client";

import { useState, FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Building2, User, Mail, Phone } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    fullName: "",
    workEmail: "",
    role: "",
    orgType: "",
    phone: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        orgName: "",
        fullName: "",
        workEmail: "",
        role: "",
        orgType: "",
        phone: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const orgTypes = [
    "Pharmacy",
    "Clinic",
    "Health system",
    "Senior care",
    "Home health",
    "Insurance"
  ];

  return (
    <Layout>
      {/* Main Content */}
      <section className="py-4 md:py-6">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left Side */}
            <div className="lg:sticky lg:top-24">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Experience PILLziy
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                See how AI powered Talking Pills can upgrade your patient education and reduce follow up confusion. Schedule a personalized demo with the PILLziy team.
              </p>

              <div className="space-y-4">
                {[
                  "Full walkthrough of the pharmacy and provider dashboard",
                  "Custom rollout and implementation plan for your workflow",
                  "Pricing, ROI, and outcomes review for your scale"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-600">We'll reach out to your team shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Organization Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Organization Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          required
                          className="pl-10 h-10 bg-[#FAFAFA] border-gray-200"
                          placeholder="Acme Health"
                          value={formData.orgName}
                          onChange={(e) => handleChange('orgName', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Full Name and Role */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <Input
                            required
                            className="pl-10 h-10 bg-[#FAFAFA] border-gray-200"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => handleChange('fullName', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Role / Title
                        </label>
                        <Input
                          required
                          className="h-10 bg-[#FAFAFA] border-gray-200"
                          placeholder="Clinical Director"
                          value={formData.role}
                          onChange={(e) => handleChange('role', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Work Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Work Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <Input
                            type="email"
                            required
                            className="pl-10 h-10 bg-[#FAFAFA] border-gray-200"
                            placeholder="john@company.com"
                            value={formData.workEmail}
                            onChange={(e) => handleChange('workEmail', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          {/* <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" /> */}
                          <PhoneInput
                            required
                            placeholder="(000) 000-0000"
                            value={formData.phone}
                            onChange={(value) => handleChange('phone', value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organization Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Organization Type
                      </label>
                      <Select
                        value={formData.orgType}
                        onValueChange={(value) => handleChange('orgType', value)}
                      >
                        <SelectTrigger className="h-10 bg-[#FAFAFA] border-gray-200">
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          {orgTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-10 text-base font-semibold bg-[#EF4444] hover:bg-[#DC2626] rounded-full"
                    >
                      Submit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}