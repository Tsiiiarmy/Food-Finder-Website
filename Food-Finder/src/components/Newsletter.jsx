import { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mblkzkzr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl py-12 text-center">
      <h2
        className="text-2xl sm:text-3xl font-volkhov font-bold text-gray-800 mb-4"
        style={{ fontFamily: "Volkhov" }}
      >
        Join Our Foodie Community
      </h2>
      <p
        className="text-gray-600 mb-6"
        style={{ fontFamily: "Poppins" }}
      >
        Subscribe to our newsletter and get the latest recipes, cooking tips, and updates straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button
          type="submit"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition" style={{ fontFamily: "Poppins" }}
        >
          Subscribe
        </button>
      </form>

      {status === "loading" && (
        <p className="text-gray-600 mt-4">Submitting...</p>
      )}
      {status === "success" && (
        <p className="text-green-600 mt-4">Thank you for subscribing! 🎉</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
