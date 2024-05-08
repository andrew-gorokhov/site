import React, { useState } from "react";
import axios from 'axios';

const AddNewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    icon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7001/api/news', formData);
      // После успешной отправки данных, перенаправляем пользователя на страницу со списком новостей
      window.location = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Добавить новость</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Заголовок новости:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="block mb-1">Текст новости:</label>
          <textarea id="text" name="text" value={formData.text} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="icon" className="block mb-1">Иконка новости (URL):</label>
          <input type="text" id="icon" name="icon" value={formData.icon} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Добавить новость</button>
      </form>
    </div>
  );
};

export default AddNewsForm;
