"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Play, Building2, User2, Mail, Phone, Stethoscope, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Components for sections ---

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-red-50/30">
      {/* Background Wave Aesthetic from Image */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-[120%] bg-white rounded-l-[10rem] md:rounded-l-[20rem] translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="site-container relative w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-display font-bold tracking-tight text-[#1E293B] leading-[1.1] mb-4 sm:mb-6">
              Understand your prescription<br />
              in 10 seconds
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-xl leading-relaxed">
              Scan your prescription in the PILLziy app. PILLziy generates a talking 3D pill and body animation, using AI to deliver clear, personalized medication guidance across languages and literacy levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Link href="/contact-us">
                <Button className="h-12 sm:h-14 px-6 sm:px-8 rounded-full font-bold bg-[#F63049] hover:bg-[#F63049]/90 text-white transition-all text-base sm:text-lg w-full sm:w-auto">
                  Join Early Access
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 rounded-full font-bold border-[#F63049] text-[#F63049] hover:bg-[#F63049] hover:text-white transition-all text-base sm:text-lg w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center mt-4 sm:mt-6 lg:mt-0"
          >
            {/* App UI Simulation from Image */}
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[350px]">
              <div className="aspect-[3/4] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-red-200/50 border-[6px] sm:border-[8px] md:border-[12px] border-white relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8FAFC]">
                  {/* Doctor Card UI */}
                  <div className="relative w-full h-full flex flex-col">
                    <div className="flex-1 bg-white flex items-center justify-center overflow-hidden p-4 relative">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                      >
                        <source src="/video/Demo_Video.mp4" type="video/mp4" />
                      </video>
                      <button
                        onClick={toggleMute}
                        className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6 bg-white space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase">Dentist</p>
                          <h4 className="text-sm sm:text-base md:text-lg font-bold">Dr. Hrubenger</h4>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F63049] flex items-center justify-center shadow-lg shadow-red-200">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                        </div>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-900 flex items-center justify-center">
                          <User2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-[#F63049] flex items-center justify-center">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floatings cards */}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const features = [
    { title: "Smart Adherence", desc: "AI-driven reminders that patients actually listen to.", icon: CheckCircle2 },
    { title: "Clinical Workflow", desc: "Seamless integration with your existing health systems.", icon: Stethoscope },
    { title: "Patient Engagement", desc: "Personalized video content for every medication.", icon: User2 },
  ];

  return (
    <section id="mission" className="py-8 md:py-12 bg-slate-50 border-y border-slate-100">
      <div className="site-container overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-slate-600">
            We exist to simplify the complex world of medication management. By combining human empathy with scalable technology, we ensure no patient is left confused about their health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#F63049]" />
                </div>
                <CardTitle className="text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    defaultValues: {
      orgName: "",
      fullName: "",
      workEmail: "",
      role: "",
      orgType: "",
      phone: "",
    },
  });

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    form.reset();
  };

  const orgTypes = [
    "Pharmacy", "Clinic", "Health system", "Senior care", "Home health", "Insurance", "Employer", "Other"
  ];

  return (
    <section id="contact-us" className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="site-container overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Experience the platform
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              See how Talking Pills can transform your organization's patient outreach.
              Schedule a personalized demo with our product team.
            </p>

            <div className="space-y-6">
              {[
                "Full walkthrough of the provider dashboard",
                "Custom implementation strategy session",
                "Pricing and ROI analysis for your scale"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-slate-600">We'll reach out to your team shortly to schedule your demo.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8">
                  Send another request
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6">Request a Demo</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="orgName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                              <Input required className="pl-9" placeholder="Acme Health" {...field} />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input required className="pl-9" placeholder="John Doe" {...field} />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role / Title</FormLabel>
                            <FormControl>
                              <Input required placeholder="Clinical Director" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input type="email" required className="pl-9" placeholder="john@company.com" {...field} />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input required className="pl-9" placeholder="+1 (555) 000-0000" {...field} />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="orgType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} required>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {orgTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold mt-4 bg-[#F63049] hover:bg-[#F63049]/90"
                    >
                      Schedule Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}
