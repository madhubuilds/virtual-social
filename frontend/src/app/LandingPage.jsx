import { Gltf, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

export default function LandingPage() {
  const features = [
    {
      title: "Talk naturally",
      desc: "Real-time voice chat that feels like you're actually together",
      img: "/images/landing/feature-1.png",
    },
    {
      title: "Be yourself",
      desc: "Express your identity with simple avatars and reactions",
      img: "/images/landing/feature-2.png",
    },
    {
      title: "Make it yours",
      desc: "Customize your space so it feels personal and alive",
      img: "/images/landing/feature-3.png",
    },
    {
      title: "Just hang out",
      desc: "No pressure to talk — just spend time together naturally",
      img: "/images/landing/feature-4.png",
    },
  ];
  const steps = [
    {
      title: "Create a room",
      desc: "Start your own private space instantly",
    },
    {
      title: "Invite your friends",
      desc: "Share a link and bring people in",
    },
    {
      title: "Hang out together",
      desc: "Talk, move around, and just spend time",
    },
  ];
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);

    // TODO: send to backend
    setEmail("");
    alert("You're on the list 🚀");
  };

  return (
    <>
      <section className="min-h-screen bg-[#0f0f0f] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Hang out in your own 3D room
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Create a private space, invite friends, and spend time together
              with voice chat, avatars, and interactive decor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium w-full sm:w-auto">
                Join Early Access
              </button>

              <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl font-medium w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="w-full h-[220px] sm:h-[280px] md:h-[380px] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-blue-500/20">
            {/* Replace this with video later */}
            <span className="text-gray-500 text-sm">
              Demo video will be here
            </span>
          </div>
        </div>
      </section>
      {/* WhySection */}
      <section className="bg-[#0f0f0f] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Stop scrolling. Start spending time together.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We spend hours scrolling and messaging, but it rarely feels like
              real time together.
              <br />
              <br />
              This gives you a space to hang out and just be present with people
              who matter.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full">
            <img
              src="/images/landing/why-section.png"
              alt="From scrolling alone to hanging out together"
              className="w-full h-auto rounded-2xl object-cover vignette"
            />
          </div>
        </div>
      </section>

      {/* FeaturesSection */}
      <section className="bg-[#0f0f0f] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
            More than just talking
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-2xl text-left">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HowItWorks */}
      <section className="bg-[#0f0f0f] text-white py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
            Get started in seconds
          </h2>

          <img
            src="/images/landing/new-3-step.png"
            alt="Create room invite friends hang out"
            className="w-full max-w-3xl mx-auto rounded-2xl"
          />
        </div>
      </section>

      {/* WhyDifferent */}
      <section className="bg-[#0f0f0f] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* HEADLINE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
            Not just another app to talk
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT (OLD WAY) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                What exists today
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Messaging, calls, endless scrolling — everything happens on a
                flat screen.
              </p>

              <img
                src="/images/landing/why-different.png"
                alt="Scrolling and chatting on phone"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* RIGHT (YOUR PRODUCT) */}
            <div className="bg-white/5 border border-purple-500/40 rounded-2xl p-6 text-left">
              <h3 className="text-lg font-semibold mb-3">
                What this does differently
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A shared space where you can hang out, move around, and actually
                feel present with others.
              </p>

              <img
                src="/images/landing/new-why-different.png"
                alt="Friends hanging out in 3D room"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CLOSING LINE */}
          <p className="text-gray-400 mt-10 text-base sm:text-lg max-w-2xl mx-auto">
            It’s not about talking more — it’s about feeling like you’re
            actually there.
          </p>
        </div>
      </section>

      {/* CTASection */}
      <section className="bg-gradient-to-b from-[#0f0f0f] to-black text-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADLINE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Be one of the first to experience it
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 text-base sm:text-lg mb-8">
          Join early access and be part of the first version.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 w-full sm:flex-1"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium"
          >
            Join Early Access
          </button>
        </form>

        {/* TRUST LINE */}
        <p className="text-gray-500 text-sm mt-4">
          No spam. Just updates.
        </p>

      </div>
    </section>
    </>
  );
}
