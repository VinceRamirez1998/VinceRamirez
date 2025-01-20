"use client";
import React, { useState } from "react";
import Header from "../../../components/header";
import Preloader from "../../../components/preloader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObj = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      message: formData.message,
      date: new Date().toISOString().split("T")[0], // Current date
    };

    const query = `
      mutation {
        create_item(
          board_id: 1933350367,
          item_name: "${formDataObj.name}",
          column_values: "{
            \\"text\\": \\"${formDataObj.name}\\",
            \\"text2\\": \\"${formDataObj.email}\\",
            \\"dup__of_email_address\\": \\"${formDataObj.phone}\\",
            \\"long_text\\": \\"${formDataObj.address}\\",
            \\"date4\\": \\"${formDataObj.date}\\",
            \\"long_text6\\": \\"${formDataObj.message}\\"
          }"
        ) {
          id
        }
      }`;

    try {
      const response = await fetch("/api/send-to-monday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success modal or alert
        alert("Form submitted successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        alert("There was an error. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your data. Please try again later.");
    }
  };

  return (
    <div className="xs:bg-white xs:dark:bg-darkbg">
      <Header />
      <Preloader className="font-serif" />
      <div className="p-4 sm:p-8 max-w-full sm:max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-8 dark:text-white pt-10">
          Get in Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mx-auto w-full"
        >
          {/* Full Name */}
          <div className="form-group mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Email Address */}
          <div className="form-group mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Message */}
          <div className="form-group mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  message: e.target.value,
                }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition duration-200"
              rows={6}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 flex justify-center items-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
