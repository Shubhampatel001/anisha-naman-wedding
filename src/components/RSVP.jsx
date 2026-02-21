import { useState } from "react";
import { motion } from "framer-motion";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeeoQ0N6efNoR8SDW5V5ic1NwikF15XF8Mxa5Ihst1XDZdu0w/formResponse";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [open, setOpen] = useState(false);

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
              onSubmit={(e) => {
                if (!attendance) {
                  e.preventDefault();
                  return;
                }
                handleSubmit();
              }}
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

              {/* Hidden input for Google Forms */}
              <input type="hidden" name="entry.1439665661" value={attendance} />

              {/* Custom dropdown */}
              <div className="relative text-left">
                <button
                  type="button"
                  onClick={() => setOpen((o) => !o)}
                  className="
      w-full px-4 py-3 rounded-xl
      bg-white/95 text-gray-800
      border border-white/40 shadow-sm
      flex items-center justify-between
      focus:outline-none focus:ring-2 focus:ring-primary/40
      transition-all duration-200
    "
                >
                  <span
                    className={attendance ? "font-medium" : "text-gray-400"}
                  >
                    {attendance || "Will you attend?"}
                  </span>

                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown panel */}
                {open && (
                  <div
                    className="
        absolute z-20 mt-2 w-full
        rounded-xl bg-white
        shadow-lg ring-1 ring-black/5
        overflow-hidden
      "
                  >
                    {["Yes, happily!", "Sorry, can’t make it"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setAttendance(option);
                          setOpen(false);
                        }}
                        className="
            w-full text-left px-4 py-3
            text-gray-700
            hover:bg-sage/10
            transition-colors
          "
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
