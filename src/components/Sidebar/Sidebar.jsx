import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ courseId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sideNavItems = [
    { name: 'About' },
    {
      name: 'Overview',
      week: ['0', '1', '2', '3', '4'],
    },
    { name: 'Assignment' },
    { name: 'Exam' },
    { name: 'Grades' },
  ]
  return (
    <div className="py-24">
      {sideNavItems.map(({ name, week }) =>
        name === 'Overview' ? (
          <div key={name}>
            <div className="px-10 py-4 w-full text-gray-600 text-xl rounded-3xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out">
              <div>
                <button onClick={(e) => setIsVisible(!isVisible)}>
                  {name}
                </button>
              </div>
            </div>
            {week.map((no) => (
              <Link
                className={
                  isVisible
                    ? 'flex justify-start px-12 py-2 text-slate-400 transition-all duration-500 ease-in-out'
                    : 'hidden text-slate-400'
                }
                to={`/course/${courseId}/week/${Number(no) + 1}`}
                key={no}
              >
                Week {Number(no) + 1}
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex py-2" key={name}>
            <Link
              to={`/course/${courseId}`}
              className="px-10 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 rounded-3xl hover:bg-blue-100 transition-all duration-500 ease-in-out"
            >
              <div>{name}</div>
            </Link>
          </div>
        )
      )}
    </div>
  )
}

export default Sidebar