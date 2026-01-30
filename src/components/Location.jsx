import { MapPin, Calendar } from "lucide-react";

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
        <div className="flex justify-center mb-10 md:mb-14">
          <img
            src="/wine.webp"
            alt="Wine"
            className="
      w-20
      sm:w-48
      md:w-56
      lg:w-64
      opacity-90
      select-none
      pointer-events-none
    "
          />
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
              <MapPin className="text-sage" />
            </div>

            <h3 className="text-lg font-serif text-primary mb-1">Location</h3>

            <p className="text-sm text-gray-600 mb-1">{venueName}</p>

            <p className="text-xs text-gray-400">
              🕔 From 18 April to 21 April
            </p>
          </div>

          {/* Venue Image */}
          <div className="px-6">
            <img
              src="/venue.webp"
              alt={venueName}
              className="w-full h-52 md:h-60 object-cover rounded-xl"
            />
          </div>

          {/* Map */}
          <div className="px-6 mt-4">
            <div className="h-48 rounded-xl overflow-hidden">
              <iframe
                title="Venue location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3263766213413!2d77.5838816!3d13.1418012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000bf4e111%3A0x3cfd58a3e012abc!2sVanya%20Luxury%20Boutique%20Resort!5e0!3m2!1sen!2sin!4v1769782677579!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 space-y-3">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-50 text-sm hover:bg-gray-100 transition"
            >
              <MapPin size={16} /> Open in Maps
            </a>

            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-50 text-sm hover:bg-gray-100 transition"
            >
              <Calendar size={16} /> Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
