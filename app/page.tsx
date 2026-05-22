"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email || !position) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, position }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      toast.success("Email sent successfully!");
      setEmail("");
      setPosition("");
    } catch (err: any) {
      toast.error("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-green-950 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Easy Apply
        </h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">To Email</label>
          <input
            type="email"
            placeholder="company@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        {/* Position Input */}
        <div className="mb-5">
          <label className="block mb-1 text-sm text-gray-300">Position</label>
          <input
            type="text"
            placeholder="Full Stack Software Engineer"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-200 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-green-500/20"
          }`}
        >
          {loading ? "Sending..." : "Send Application"}
        </button>
      </div>
    </main>
  );
}