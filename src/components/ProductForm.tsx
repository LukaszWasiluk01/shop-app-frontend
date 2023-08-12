import React, { useState, type ChangeEvent } from 'react'
import { Form, useActionData } from 'react-router-dom'

import { type ProductFormProps } from '../interfaces/utilityInterfaces'
import provinces from '../data/provincesData'
import { type NewProductErrorResponseData } from '../interfaces/productsInterfaces'

import styles from './ProductForm.module.css'

const ProductForm: React.FC<ProductFormProps> = ({ categories, product }) => {
  const data = useActionData() as NewProductErrorResponseData
  const [formData, setFormData] = useState({
    name: product?.name ?? '',
    price: product?.price ?? '',
    description: product?.description ?? '',
    province: product?.province ?? '',
    phone_number: product?.phone_number ?? '',
    category: product?.category ?? ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Form method="POST" className={styles.form} encType="multipart/form-data">
      <h2>Add Product</h2>
      {data?.detail !== undefined && (
        <ul className={styles.errorList}>
          <li>{data.detail}</li>
        </ul>
      )}
      <div className={styles.inputContainer}>
        {data?.name !== undefined && (
          <ul className={styles.errorList}>
            {data.name.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Name:</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        {data?.category !== undefined && (
          <ul className={styles.errorList}>
            {data.category.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Category:</label>
        <select
          className={styles.input}
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputContainer}>
        {data?.price !== undefined && (
          <ul className={styles.errorList}>
            {data.price.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Price:</label>
        <input
          className={styles.input}
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        {data?.description !== undefined && (
          <ul className={styles.errorList}>
            {data.description.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Description:</label>
        <textarea
          className={styles.textArea}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        {data?.province !== undefined && (
          <ul className={styles.errorList}>
            {data.province.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Province:</label>
        <select
          className={styles.select}
          name="province"
          value={formData.province}
          onChange={handleChange}
          required
        >
          <option value="">Select Province</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputContainer}>
        {data?.phone_number !== undefined && (
          <ul className={styles.errorList}>
            {data.phone_number.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Phone Number:</label>
        <input
          className={styles.input}
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        {data?.image !== undefined && (
          <ul className={styles.errorList}>
            {data.image.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <label className={styles.label}>Image:</label>
        <input
          className={styles.fileInput}
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          required={product === null}
        />
      </div>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </Form>
  )
}

export default ProductForm
