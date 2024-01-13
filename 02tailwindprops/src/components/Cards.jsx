import React from 'react'


// we can directly use destructring so instead of Cards(props) and then using props.username to get it we can directly use Cards({username}) in the function which uses destructuring

//if the props is not passed in the <Cards /> in the App.jsx we have to provide the default value
function Cards({username="userName", btnText="button"}) {
    console.log("props", username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-xl">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {btnText} →
      </button>
    </div>
  </div>
  )
}

export default Cards
