import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const handleSubmit = (e: React.FormEvent): void => {
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Category Name:
          <input
            className={styles.input}
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Created Greater Than:
          <input
            className={styles.input}
            type="text"
            value={createdGt}
            onChange={(e) => {
              setCreatedGt(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Created Less Than:
          <input
            className={styles.input}
            type="text"
            value={createdLt}
            onChange={(e) => {
              setCreatedLt(e.target.value)
            }}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Ordering:
          <input
            className={styles.input}
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
            type="number"
            value={priceLt}
            onChange={(e) => {
              setPriceLt(e.target.value)
            }}
          />
        </label>
      </div>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  )
}

export default FilterForm
