import React, { useState } from 'react'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { type Category } from '../interfaces/utilityInterfaces'

import styles from './Filter.module.css'

const FilterForm: React.FC = () => {
  const navigate = useNavigate()
  const startParamsInitValue = new URLSearchParams(window.location.search)
  const categoryInitValue = startParamsInitValue.get('category__name') ?? ''
  const [category, setCategory] = useState(categoryInitValue)
  const [createdGt, setCreatedGt] = useState('')
  const [createdLt, setCreatedLt] = useState('')
  const [ordering, setOrdering] = useState('')
  const [priceGt, setPriceGt] = useState('')
  const [priceLt, setPriceLt] = useState('')

  const categories = (useRouteLoaderData('root') as Category[]) ?? []

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const params = new URLSearchParams(window.location.search)

    const fields = [
      { key: 'category__name', value: category },
      { key: 'created__gt', value: createdGt },
      { key: 'created__lt', value: createdLt },
      { key: 'ordering', value: ordering },
      { key: 'price__gt', value: priceGt },
      { key: 'price__lt', value: priceLt }
    ]

    fields.forEach(({ key, value }) => {
      if (value !== '' && value !== null) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    navigate({
      pathname: '/products',
      search: params.toString()
    })
  }

  const handleReset = (): void => {
    setCategory('')
    setCreatedGt('')
    setCreatedLt('')
    setOrdering('')
    setPriceGt('')
    setPriceLt('')
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Category Name:
          <select
            className={styles.input}
            value={category}
            name="category__name"
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Created Greater Than:
          <DatePicker
            className={styles.input}
            name="date__gt"
            selected={createdGt !== '' ? new Date(createdGt) : null}
            onChange={(date: Date | null) => {
              setCreatedGt(date?.toISOString() ?? '')
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Created Less Than:
          <DatePicker
            className={styles.input}
            name="date__lt"
            selected={createdLt !== '' ? new Date(createdLt) : null}
            onChange={(date: Date | null) => {
              setCreatedLt(date?.toISOString() ?? '')
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Ordering:
          <input
            className={styles.input}
            name="ordering"
            type="text"
            value={ordering}
            onChange={(e) => {
              setOrdering(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Price Greater Than:
          <input
            className={styles.input}
            name="price__gt"
            type="number"
            value={priceGt}
            onChange={(e) => {
              setPriceGt(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Price Less Than:
          <input
            className={styles.input}
            name="price__lt"
            type="number"
            value={priceLt}
            onChange={(e) => {
              setPriceLt(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.button} type="button" onClick={handleReset}>
          Reset
        </button>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default FilterForm
