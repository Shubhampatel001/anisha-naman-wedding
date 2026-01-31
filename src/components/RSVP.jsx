import { useState } from "react";
import { motion } from "framer-motion";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeeoQ0N6efNoR8SDW5V5ic1NwikF15XF8Mxa5Ihst1XDZdu0w/formResponse";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setSubmitted(true), 600);
  };

  return (
    <section id="rsvp" className="py-24 bg-sage-dark text-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif mb-6"
        >
          RSVP
        </motion.h2>

        <p className="mb-12 text-white/80">
          Please let us know if you’ll be able to join us
        </p>

        {submitted ? (
          <p className="text-lg font-medium">Thank you for your response 💛</p>
        ) : (
          <>
            {/* Hidden iframe prevents redirect */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              title="hidden_iframe"
            />

            <form
              action={FORM_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="entry.1882600194"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />

              <input
                type="tel"
                name="entry.1890372257"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />

              <select
                name="entry.1439665661"
                required
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              >
                <option value="">Will you attend?</option>
                <option value="Yes, happily!">Yes, happily!</option>
                <option value="Sorry, can’t make it">
                  Sorry, can’t make it
                </option>
              </select>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
              >
                Submit RSVP
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
