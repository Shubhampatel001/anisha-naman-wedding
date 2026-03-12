import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeeoQ0N6efNoR8SDW5V5ic1NwikF15XF8Mxa5Ihst1XDZdu0w/formResponse";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState("");

  const handleSubmit = () => {
    setSubmitted(true);
    toast.custom((t) => (
      <div
        className={`
      px-6 py-4 rounded-xl shadow-lg
      bg-[#FFF9F5] border border-[#F0D9C8]
      text-gray-700
      font-medium
      ${t.visible ? "animate-enter" : "animate-leave"}
    `}
      >
        ✨ RSVP received — see you at the wedding!
      </div>
    ));
  };

  return (
    <section
      id="rsvp"
      className="relative py-28 -mt-px bg-gradient-to-b from-[#FFF8F3] via-[#F8EFE9] to-[#F5F0EA] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFF8F3] to-transparent pointer-events-none" />
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-gray-800 mb-2"
        >
          RSVP
        </motion.h2>

        <p className="text-gray-600 mb-10">
          Please let us know if you'll be joining us
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-6 space-y-4"
          >
            <p className="text-lg font-medium text-gray-800">
              Thank you for your response 💛
            </p>

            <p className="text-sm text-gray-600">
              We can’t wait to celebrate together
            </p>

            {/* divider */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className="w-10 h-px bg-amber-300/40" />
              <span className="text-amber-500 text-sm">❤️</span>
              <span className="w-10 h-px bg-amber-300/40" />
            </div>
          </motion.div>
        ) : (
          <>
            <iframe name="hidden_iframe" style={{ display: "none" }} />

            <motion.form
              noValidate
              action={FORM_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target;
                const name = form["entry.1882600194"].value.trim();

                if (!name) {
                  toast.error("Please enter your name", {
                    icon: "✏️",
                    style: {
                      background: "#FFF5F3",
                      border: "1px solid #F6C7C3",
                      color: "#7A2E2A",
                    },
                  });
                  return;
                }

                if (!attendance) {
                  toast.error("Please select your response", {
                    icon: "⚠️",
                    style: {
                      background: "#FFF5F3",
                      border: "1px solid #F6C7C3",
                      color: "#7A2E2A",
                    },
                  });
                  return;
                }

                form.submit();
                setTimeout(handleSubmit, 300);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              {/* NAME */}
              <input
                type="text"
                name="entry.1882600194"
                placeholder="Your Name *"
                className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border border-[#F0D9C8] text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* PHONE */}
              <input
                type="tel"
                name="entry.1890372257"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border border-[#F0D9C8] text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* NUMBER OF PEOPLE */}
              <input
                type="number"
                name="entry.1307500945"
                placeholder="No. of People from your family"
                min="1"
                className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border border-[#F0D9C8] text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* RESPONSE */}
              <p className="text-sm text-gray-700 font-medium mt-2">
                Your Response *
              </p>

              <input type="hidden" name="entry.1439665661" value={attendance} />

              <div className="flex gap-3 justify-center">
                {["Yes", "Maybe", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAttendance(option)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition
                    ${
                      option === "Yes"
                        ? "bg-green-100 text-green-700"
                        : option === "Maybe"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }
                    ${
                      attendance === option
                        ? "ring-2 ring-black/20 scale-[1.03]"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* MESSAGE */}
              <textarea
                name="entry.27778586"
                placeholder="Leave a note for us..."
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border border-[#F0D9C8] text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 text-white font-medium shadow-md hover:bg-amber-600 transition-all duration-300"
              >
                Submit RSVP
              </button>
            </motion.form>
          </>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F5F0EA] pointer-events-none" />
    </section>
  );
}
