import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  const venueName = "Vanya Luxury Boutique Resort";

  const mapsLink = "https://maps.app.goo.gl/aLFJ157zeoRfjkxA9";

  const calendarLink =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    "&text=Anisha+%26+Naman+Wedding" +
    "&dates=20260420T170000/20260421T010000" +
    "&details=Wedding+Celebration+at+Vanya+Resort" +
    "&location=Vanya+Luxury+Boutique+Resort";

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <img
            src="/diya.gif"
            alt="diya"
            className="
              w-full
              max-w-[120px]
              sm:max-w-[150px]
              md:max-w-[180px]
              lg:max-w-[200px]
              h-auto
              mx-auto
              opacity-90
              drop-shadow-[0_6px_16px_rgba(0,0,0,0.10)]
              select-none
              pointer-events-none
            "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center"
            >
              <MapPin className="text-sage" />
            </motion.div>

            <h3 className="text-lg font-serif text-primary mb-1">Location</h3>

            <p className="text-sm text-gray-600 mb-1">{venueName}</p>

            <p className="text-xs text-gray-400">
              🕔 From 18 April to 21 April
            </p>
          </div>

          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="px-6"
          >
            <img
              src="/venue.webp"
              alt={venueName}
              className="w-full h-52 md:h-60 object-cover rounded-xl"
            />
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-6 mt-4"
          >
            <div className="h-48 rounded-xl overflow-hidden">
              <iframe
                title="Venue location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3263766213413!2d77.5838816!3d13.1418012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000bf4e111%3A0x3cfd58a3e012abc!2sVanya%20Luxury%20Boutique%20Resort!5e0!3m2!1sen!2sin!4v1769782677579!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Actions */}
          <div className="p-6 space-y-4">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
      group
      flex items-center justify-center gap-3
      w-full py-3 rounded-xl
      bg-sage/10 text-sage
      border border-sage/30
      backdrop-blur-sm
      shadow-sm
      transition-all duration-300
      hover:bg-sage/20 hover:shadow-md
      active:scale-[0.98]
    "
            >
              <MapPin
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="text-sm font-medium tracking-wide">
                Open in Maps
              </span>
            </a>

            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
      group
      flex items-center justify-center gap-3
      w-full py-3 rounded-xl
      bg-primary/10 text-primary
      border border-primary/30
      backdrop-blur-sm
      shadow-sm
      transition-all duration-300
      hover:bg-primary/20 hover:shadow-md
      active:scale-[0.98]
    "
            >
              <Calendar
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="text-sm font-medium tracking-wide">
                Add to Calendar
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
