import Link from 'next/link'
import cl from 'classnames'

const GoBackIcon = ({cssClass, color, title, link}) => {
  return (
    <Link href={link}>
      <a title="Вернуться" className={cl(cssClass, 'go-back')}>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.00025 18.0002C8.74425 18.0002 8.48825 17.9023 8.29325 17.7073L0.29325 9.70725C-0.09775 9.31625 -0.09775 8.68425 0.29325 8.29325L8.29325 0.29325C8.68425 -0.09775 9.31625 -0.09775 9.70725 0.29325C10.0982 0.68425 10.0982 1.31625 9.70725 1.70725L2.41425 9.00025L9.70725 16.2932C10.0982 16.6842 10.0982 17.3162 9.70725 17.7073C9.51225 17.9023 9.25625 18.0002 9.00025 18.0002Z"
            fill={color}
          />
        </svg>
        {title && <p>{title}</p>}
      </a>
    </Link>
  )
}

export default GoBackIcon
