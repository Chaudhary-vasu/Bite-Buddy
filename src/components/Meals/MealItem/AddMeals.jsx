import React, { useState } from 'react';
import classes from './AddMeals.module.css';
import BASE_URL from '../../../api/api';

const AddMeals = () => {
  document.title = "Bite-Buddy | Add Meals";

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    fetch(`${BASE_URL}/meals-item/`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Meal added successfully.');
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
      })
      .catch((error) => {
        alert('Some error occurred.');
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
      });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add New Meals</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={classes.textarea}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.button}>Submit</button>
      </form>
    </div>
  );
};

export default AddMeals;
