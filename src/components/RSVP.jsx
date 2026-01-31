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
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif mb-6"
        >
          RSVP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-white/80"
        >
          Please let us know if you’ll be able to join us
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2"
          >
            <p className="text-lg font-medium">
              Thank you for your response 💛
            </p>
            <p className="text-sm text-white/70">
              We can’t wait to celebrate together
            </p>
          </motion.div>
        ) : (
          <>
            {/* Hidden iframe prevents redirect */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              title="hidden_iframe"
            />

            <motion.form
              action={FORM_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-5"
            >
              <input
                type="text"
                name="entry.1882600194"
                placeholder="Your Name"
                required
                className="
      w-full px-4 py-3 rounded-xl
      bg-white/90 text-gray-800
      focus:outline-none focus:ring-2 focus:ring-primary/40
      transition
    "
              />

              <input
                type="tel"
                name="entry.1890372257"
                placeholder="Phone Number"
                required
                className="
      w-full px-4 py-3 rounded-xl
      bg-white/90 text-gray-800
      focus:outline-none focus:ring-2 focus:ring-primary/40
      transition
    "
              />

              <select
                name="entry.1439665661"
                required
                className="
      w-full px-4 py-3 rounded-xl
      bg-white/90 text-gray-800
      focus:outline-none focus:ring-2 focus:ring-primary/40
      transition
    "
              >
                <option value="">Will you attend?</option>
                <option value="Yes, happily!">Yes, happily!</option>
                <option value="Sorry, can’t make it">
                  Sorry, can’t make it
                </option>
              </select>

              <button
                type="submit"
                className="
      w-full py-3 rounded-xl
      bg-primary text-white font-medium
      shadow-md
      transition-all duration-300
      hover:shadow-lg hover:scale-[1.01]
      active:scale-[0.98]
    "
              >
                Submit RSVP
              </button>
            </motion.form>
          </>
        )}
      </div>
    </section>
  );
}
