import './index.css'

import {BiSearch} from 'react-icons/bi'

const FiltersGroup = props => {
  const {initialState} = props

  const onChangeSearch = event => {
    const {changeSearch} = props
    changeSearch(event.target.value)
  }

  const enter = event => {
    const {enterSearch} = props
    if (event.key === 'Enter') {
      enterSearch()
    }
  }

  const renderSearch = () => {
    const {activeSearch} = props
    return (
      <div className="search-container">
        <input
          type="search"
          value={activeSearch}
          className="search"
          onChange={onChangeSearch}
          onKeyDown={enter}
          placeholder="Search"
        />
        <BiSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryList = () => {
    const {activeCategoryId, categoryOptions, changeCategory} = props

    return categoryOptions.map(category => {
      const isActive = category.categoryId === activeCategoryId
      const activeClass = isActive ? 'active-class' : 'normal-class'
      const onChangeCategoryId = () => {
        changeCategory(category.categoryId)
      }

      return (
        <li onClick={onChangeCategoryId}>
          <p className={activeClass}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategory = () => (
    <div>
      <h1>Category</h1>
      <ul className="category-list">{renderCategoryList()}</ul>
    </div>
  )

  const renderRatingList = () => {
    const {activeRatingId, changeRating, ratingsList} = props

    return ratingsList.map(rating => {
      const isActive = rating.ratingId === activeRatingId
      const activeClass = isActive ? 'active-class' : 'normal-class'
      const changeRatingIdValue = () => {
        changeRating(rating.ratingId)
      }
      return (
        <li
          className={`rating-item ${activeClass}`}
          onClick={changeRatingIdValue}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className="up"> & up</p>
        </li>
      )
    })
  }

  const renderRating = () => (
    <div>
      <h1>Rating</h1>
      <ul className="category-list">{renderRatingList()}</ul>
    </div>
  )

  const filterButton = () => {
    initialState()
  }

  return (
    <div className="filters-group-container">
      {renderSearch()}
      {renderCategory()}
      {renderRating()}
      <button type="button" className="filter-button" onClick={filterButton}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
