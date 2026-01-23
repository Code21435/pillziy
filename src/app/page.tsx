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

// --- Hero Section ---
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
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-rose-50 via-white to-blue-50 pt-6 sm:pt-8 md:pt-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="site-container relative w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center">
          <div className="max-w-2xl z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Understand your prescription<br />
              <span className="text-red-600">in 10 seconds</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Scan your prescription in the PILLziy app. PILLziy generates a talking 3D pill and body animation, using AI to deliver clear, personalized medication guidance across languages and literacy levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <Button className="bg-[#EF4444] hover:bg-[#DC2626] text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  Join Early Access
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button variant="outline" className="border-2 border-slate-300 hover:border-[#EF4444] hover:text-[#EF4444] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[350px]">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-full blur-3xl opacity-20 scale-110"></div>

              <div className="aspect-[3/4] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-red-200/50 border-[6px] sm:border-[8px] md:border-[12px] border-white relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8FAFC]">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Feature Section 1: Scan and Identify ---
function ScanIdentifySection() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Scan and identify<br />your meds
              </h2>
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Simply scan your prescription with your phone camera. Our AI instantly recognizes and identifies all your medications, creating a personalized digital health profile in seconds.
            </p>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-[3rem] blur-2xl opacity-10 scale-105"></div>
              <img
                src="/mission-image/Scan.png"
                alt="Medication scanning interface"
                className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[280px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Feature Section 2: Take Right Dose ---
function TakeRightDoseSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-400 rounded-[3rem] blur-2xl opacity-10 scale-105"></div>
              <img
                src="/mission-image/capsule.png"
                alt="Medication reminder interface"
                className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[280px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Take the right dose,<br />on time
              </h2>
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Never miss a dose again. Get smart reminders with your friendly pill companion guiding you through each medication. Track your adherence and build healthy habits effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Feature Section 3: See How It Helps ---
function SeeHowItHelpsSection() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                See how it helps<br />your body
              </h2>
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Visualize exactly how your medication works inside your body with interactive 3D animations. Understand the science in a way that's clear, engaging, and empowering.
            </p>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 rounded-[3rem] blur-2xl opacity-10 scale-105"></div>
              <img
                src="/mission-image/Learn.png"
                alt="Body visualization interface"
                className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[280px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA Section ---
function CTASection() {
  // return (
  //   <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
  //     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTZWMzBIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDE2em0wLTZ2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

  //     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
  //       <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
  //         Ready to transform your medication experience?
  //       </h2>
  //       <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
  //         Join thousands of patients who are taking control of their health with PILLziy.
  //       </p>
  //       <Link href="/contact-us">
  //         <Button className="bg-white text-red-600 hover:bg-red-50 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold">
  //           Get Started Today
  //           <ArrowRight className="ml-2 h-5 w-5" />
  //         </Button>
  //       </Link>
  //     </div>
  //   </section>
  // );
}

// --- Mission Section (Original) ---
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

// --- Demo Section (Original) ---
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
                      className="w-full h-12 text-base font-semibold mt-4 bg-[#EF4444] hover:bg-[#DC2626] rounded-full"
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

// --- Main Component ---
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ScanIdentifySection />
      <TakeRightDoseSection />
      <SeeHowItHelpsSection />
    </Layout>
  );
}