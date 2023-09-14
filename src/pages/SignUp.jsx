import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    country: "",
    photo: "",
    mail: "",
    password: "",
  });
  const [countries, setCountries] = useState([]);
  const sortedCountries = countries.slice().sort();

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    const requiredFields = {
      name: "Name",
      lastName: "Last Name",
      country: "Country",
      photo: "Photo",
      mail: "Mail",
      password: "Password",
    };

    const errorMessages = [];

    for (const field in requiredFields) {
      if (!formData[field]) {
        errorMessages.push(`${requiredFields[field]} is required.`);
      }
    }

    if (errorMessages.length > 0) {
      Swal.fire({
        title: "Validation Error",
        icon: "error",
        html: errorMessages.map((message) => `<p>${message}</p>`).join(""),
      });
      return;
    }

    try {
      const response = await axios.post(apiUrl + "auth/signup", formData);
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "User registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/signin");
      } else if (response.data?.payload?.messages) {
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
          html: response.data.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join(""),
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        title: "Ooops!",
        text: "An error occurred. Check that your password has between 8 and 40 😋",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="flex flex-grow justify-center items-center bg-signup">
      <form className="w-full text-center max-w-md p-4 my-16 bg-transparent backdrop-blur-sm rounded-lg shadow-md">
        <h1 className="text-4xl text-white font-extrabold text-center mb-4">
          Sign Up!
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-white font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="input-field mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-white font-bold mb-2">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleInputChange}
            className="input-field text-center bg-white mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
          >
            <option value="">-- Select a country --</option>
            {sortedCountries.length > 0 &&
              sortedCountries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-white font-bold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            value={formData.photo}
            onChange={handleInputChange}
            className="input-field mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
            placeholder="Photo URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mail" className="block text-white font-bold mb-2">
            Mail
          </label>
          <input
            type="text"
            name="mail"
            id="mail"
            value={formData.mail}
            onChange={handleInputChange}
            className="input-field mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
            placeholder="Mail"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field mb-2 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="mb-2 px-4 py-2 w-full bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:ring focus:ring-blue-400"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="mt-2 text-white text-center">
          Already have an account?{" "}
          <Anchor
            className="text-white font-bold border p-1 rounded hover:bg-blue-600 focus:ring focus:ring-blue-400 cursor-pointer"
            to="/signin"
          >
            Sign in
          </Anchor>
        </p>
      </form>
    </div>
  );
}
