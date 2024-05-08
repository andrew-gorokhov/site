import React, { useState } from "react";
import axios from 'axios';

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    icon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7001/api/course', formData);
      window.location = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Добавить новый курс</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Название курса:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Описание курса:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="icon" className="block mb-1">Иконка курса (URL):</label>
          <input type="text" id="icon" name="icon" value={formData.icon} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Добавить курс</button>
      </form>
    </div>
  );
};

export default AddCourseForm;
