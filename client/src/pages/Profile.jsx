import {useSelector} from 'react-redux'

function Profile() {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='h-24 w-24 rounded-full object-cover cursor-pointer self-center my-4' src={currentUser.avatar} alt="profile"/>
        <input id='username' className='border rounded-lg p-3' type='text' placeholder='username' />
        <input id='email' className='border rounded-lg p-3' type='email' placeholder='email' />
        <input id='password' className='border rounded-lg p-3' type='text' placeholder='password' />
        <button className='p-3  text-white rounded-lg uppercase hover:opacity-85 disabled:opacity-50' style={{backgroundColor:'#120B0C'}}>Update</button>
        <div className='flex justify-between'>
          <span className='text-red-700 cursor-pointer'>Delete Account</span>
          <span className='text-red-700 cursor-pointer'>Sign out</span>
        </div>
      </form>
    </div>
  )
}

export default Profile
