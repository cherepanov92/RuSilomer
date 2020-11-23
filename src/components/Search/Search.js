import cl from 'classnames'

const Search = () => {
  return (
    <>
      <div className={cl('search')}>
        <label className={cl('search__label')} htmlFor="searchRegion">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.16669 0.666748C12.3088 0.666748 15.6667 4.02461 15.6667 8.16675C15.6667 9.9374 15.0531 11.5647 14.0269 12.8477L17.0893 15.9108C17.4147 16.2363 17.4147 16.7639 17.0893 17.0893C16.7889 17.3897 16.3162 17.4128 15.9893 17.1587L15.9108 17.0893L12.8477 14.027C11.5647 15.0532 9.93734 15.6667 8.16669 15.6667C4.02455 15.6667 0.666687 12.3089 0.666687 8.16675C0.666687 4.02461 4.02455 0.666748 8.16669 0.666748ZM8.16669 2.33341C4.94503 2.33341 2.33335 4.94509 2.33335 8.16675C2.33335 11.3884 4.94503 14.0001 8.16669 14.0001C11.3883 14.0001 14 11.3884 14 8.16675C14 4.94509 11.3883 2.33341 8.16669 2.33341Z"
            />
          </svg>
        </label>
        <input
          id="searchRegion"
          type="search"
          name="searchRegion"
          placeholder="введите регион"
          className={cl('search__input')}
        />
      </div>
    </>
  )
}

export default Search
