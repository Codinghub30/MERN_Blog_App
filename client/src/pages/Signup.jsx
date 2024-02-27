import { Alert, Button, Label, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";
import { useState } from "react";


export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const  [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const change = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});

  };
  const handleSubmit = async (e) => {
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all feilds.');
    }
    e.preventDefault();
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
    }
    catch(error) {
        setErrorMessage(error.message);
        setLoading(false);
    }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto  flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link
            to="/"
            className=" font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Anup
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
          {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-6 ml-20" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your UserName" />
              <TextInput type="text" placeholder='username' id='username' onChange={change} />
            </div>

            <div>
              <Label value="your Email" />
              <TextInput type="email" placeholder='Email' id='email'  onChange={change}/>
            </div>


            <div>
              <Label value="your Password" />
              <TextInput type="password" placeholder='password' id='password' onChange={change} />
            </div>

          <Button gradientDuoTone='purpleToPink'  type="submit" disabled={loading}>
            {
              loading ? (
                <>
                <Spinner size='sm' />
                <span className="pl-3">Loading...</span>
                </>
              ) : 'Sign Up'
            }

          </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 ml-20">
            <span>Have an account</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

