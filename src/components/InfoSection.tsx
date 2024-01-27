import React, { useState } from "react";
import TitelBox from "./TitelBox";
import { Input } from "./ui/input";

const InfoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update the form data when input values change
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address",
      }));
      isValid = false;
    }

    // Basic name and message validation (you can customize as needed)
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      isValid = false;
    }

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate form before submission
    if (validateForm()) {
      // Call your email submission function here
      sendEmail();
    }
  };

  // Simulate sending an email (replace this with your actual email submission logic)
  const sendEmail = () => {
    console.log("Sending email:", formData);

    const emailSubject = encodeURIComponent("Contact Form Submission");
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}  Message: ${formData.message}`
    );

    // Construct a mailto link with subject and body
    const mailtoLink = `mailto:monaksojitra4444@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open the link in a new tab or window
    window.open(mailtoLink, "_blank");
  };

  return (
    <div id="about">
      <TitelBox titel="Contact" css=" text-blue-600 text-lg md:text-2xl my-2" />
      <div id="contact" className="sm:flex bg-[#5E3AEE] py-2">
        <div className=" sm:w-[60%]">
          <p className="text-white font-semibold lg:text-2xl p-4">
            Want a website for your brand and business? I design what you
            desire....
          </p>

          <img
            src={
              "https://s3-alpha-sig.figma.com/img/a17a/ff14/dee26f1eed8f9b8c2e4638731916fc57?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jt0svFfh7JhmwiMNL3Pdq9aGV0UI0o7ZM5KaHN6yy7ki9vp8X8Goxo5aBDmEztx9EcOnGQWUrQmP14OuNX0DCMbscOlPOSnRsWgTMuNny37fVqdHdyB9w~xmIxkoCMh1FiGe-82cEWA3kfc0ITii5WZrNuWQX2r4k4STOjzrkSyecxDWUgeQ6BHCzgsYEC3MfajlUYkcS35Kwe67cG318gmuDQL9OzIqyS5QPVfHouuawZ3lqCKcX8VuRrE2vaIhOfY7XVpNfnbBLpX~nxtKz3M6nOi2BOYxwiqahsJDwxC~HK6oW-iELSNjaQBr9nSfbGEQH2CQ~xxuHlgMGFuLKg__"
            }
            alt=""
            className="aspect-auto"
          />
        </div>
        <div className="my-3 px-4 sm:w-[50%]">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-1 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-1 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block text-white text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
