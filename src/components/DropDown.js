import {useState} from 'react'

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow focus:outline-none"
          >
            English
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Option 1
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Option 2
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Option 3
                </li>
              </ul>
            </div>
          )}
        </div>
  )
}

export default DropDown
